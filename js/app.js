// FutureYou - Controller chính điều phối ứng dụng
import { QUESTIONS, STAGES } from "./data/questions.js";
import { calculateFutureProfile } from "./modules/scoring.js";
import { RadarChart } from "./modules/chart.js";
import { downloadIdentityCard, printRoadmap, saveProfileToStorage, loadProfileFromStorage } from "./modules/export.js";

class App {
  constructor() {
    this.userData = {
      name: "",
      ageGroup: "",
      currentRole: "",
      horizon: "5 - 7 năm tới"
    };

    this.currentQuestionIndex = 0;
    this.userAnswers = new Array(QUESTIONS.length).fill(null);
    this.calculatedProfile = null;
    this.radarChart = null;
    this.checkedTasks = new Set();

    this.initElements();
    this.bindEvents();
    this.checkExistingSave();
    this.refreshIcons();
  }

  initElements() {
    // Views
    this.viewHero = document.getElementById("app-hero");
    this.viewIdentity = document.getElementById("app-identity");
    this.viewQuiz = document.getElementById("app-quiz");
    this.viewSimulation = document.getElementById("app-simulation");
    this.viewResults = document.getElementById("app-results");

    // Hero buttons
    this.btnStart = document.getElementById("btn-start-journey");
    this.btnNavBrand = document.getElementById("nav-brand");
    this.btnLoadSaved = document.getElementById("btn-load-saved");

    // Identity form
    this.formIdentity = document.getElementById("form-identity");
    this.inputName = document.getElementById("input-name");
    this.selectAge = document.getElementById("select-age");
    this.selectRole = document.getElementById("select-role");
    this.btnBackHero = document.getElementById("btn-back-hero");

    // Quiz elements
    this.quizStageBadge = document.getElementById("quiz-stage-badge");
    this.quizCounter = document.getElementById("quiz-counter");
    this.quizProgressBar = document.getElementById("quiz-progress-bar");
    this.quizStageDesc = document.getElementById("quiz-stage-desc");
    this.quizTitle = document.getElementById("quiz-question-title");
    this.quizSub = document.getElementById("quiz-question-sub");
    this.quizOptionsContainer = document.getElementById("quiz-options-container");
    this.btnQuizPrev = document.getElementById("btn-quiz-prev");
    this.btnQuizNext = document.getElementById("btn-quiz-next");

    // Simulation elements
    this.simulationPct = document.getElementById("simulation-percentage");
    this.simulationStatusText = document.getElementById("simulation-status-text");

    // Action buttons in results
    this.btnDownloadCard = document.getElementById("btn-download-card");
    this.btnPrintRoadmap = document.getElementById("btn-print-roadmap");
    this.btnRetake = document.getElementById("btn-retake");
    this.btnFooterDownload = document.getElementById("btn-footer-download");
    this.btnFooterPrint = document.getElementById("btn-footer-print");
  }

  bindEvents() {
    // Navigation Hero -> Identity
    this.btnStart.addEventListener("click", () => this.showView("identity"));
    this.btnNavBrand.addEventListener("click", () => this.showView("hero"));
    this.btnBackHero.addEventListener("click", () => this.showView("hero"));

    // Check saved
    this.btnLoadSaved.addEventListener("click", () => {
      const saved = loadProfileFromStorage();
      if (saved) {
        this.calculatedProfile = saved;
        this.renderResults();
        this.showView("results");
      }
    });

    // Identity form submit -> Quiz
    this.formIdentity.addEventListener("submit", (e) => {
      e.preventDefault();
      this.userData.name = this.inputName.value.trim() || "Nhà Khai Phá";
      this.userData.ageGroup = this.selectAge.value;
      this.userData.currentRole = this.selectRole.value;

      const checkedHorizon = document.querySelector('input[name="horizon"]:checked');
      if (checkedHorizon) {
        this.userData.horizon = checkedHorizon.value;
      }

      this.currentQuestionIndex = 0;
      this.userAnswers = new Array(QUESTIONS.length).fill(null);
      this.showView("quiz");
      this.renderQuestion();
    });

    // Quiz controls
    this.btnQuizPrev.addEventListener("click", () => {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
        this.renderQuestion();
      }
    });

    this.btnQuizNext.addEventListener("click", () => {
      if (this.currentQuestionIndex < QUESTIONS.length - 1) {
        this.currentQuestionIndex++;
        this.renderQuestion();
      } else {
        // Hoàn thành toàn bộ câu hỏi -> Chạy simulation
        this.startSimulation();
      }
    });

    // Results Actions
    this.btnDownloadCard.addEventListener("click", () => {
      if (this.calculatedProfile) downloadIdentityCard(this.calculatedProfile);
    });
    this.btnFooterDownload.addEventListener("click", () => {
      if (this.calculatedProfile) downloadIdentityCard(this.calculatedProfile);
    });

    this.btnPrintRoadmap.addEventListener("click", () => printRoadmap());
    this.btnFooterPrint.addEventListener("click", () => printRoadmap());

    this.btnRetake.addEventListener("click", () => {
      if (confirm("Bạn có muốn làm lại bài trắc nghiệm từ đầu?")) {
        this.showView("hero");
      }
    });
  }

  showView(viewName) {
    const views = [this.viewHero, this.viewIdentity, this.viewQuiz, this.viewSimulation, this.viewResults];
    views.forEach((v) => v.classList.add("hidden"));

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (viewName === "hero") this.viewHero.classList.remove("hidden");
    else if (viewName === "identity") this.viewIdentity.classList.remove("hidden");
    else if (viewName === "quiz") this.viewQuiz.classList.remove("hidden");
    else if (viewName === "simulation") this.viewSimulation.classList.remove("hidden");
    else if (viewName === "results") this.viewResults.classList.remove("hidden");

    this.refreshIcons();
  }

  checkExistingSave() {
    const saved = loadProfileFromStorage();
    if (saved && saved.primary) {
      this.btnLoadSaved.classList.remove("hidden");
    }
  }

  renderQuestion() {
    const q = QUESTIONS[this.currentQuestionIndex];
    const stage = STAGES.find((s) => s.id === q.stage);

    // Header info
    this.quizStageBadge.innerText = `${stage.title}`;
    this.quizCounter.innerText = `Câu ${this.currentQuestionIndex + 1} / ${QUESTIONS.length}`;
    
    // Progress bar
    const pct = Math.round(((this.currentQuestionIndex + 1) / QUESTIONS.length) * 100);
    this.quizProgressBar.style.width = `${pct}%`;

    this.quizStageDesc.innerText = stage.description;
    this.quizTitle.innerText = q.title;
    this.quizSub.innerText = q.subtitle;

    // Prev button state
    this.btnQuizPrev.disabled = this.currentQuestionIndex === 0;

    // Selected state
    const savedAnswer = this.userAnswers[this.currentQuestionIndex];
    this.btnQuizNext.disabled = savedAnswer === null;
    this.btnQuizNext.innerHTML = this.currentQuestionIndex === QUESTIONS.length - 1
      ? `<span>Khám Phá Tương Lai</span><i data-lucide="sparkles" class="w-3.5 h-3.5"></i>`
      : `<span>Tiếp theo</span><i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>`;

    // Render options
    this.quizOptionsContainer.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    q.options.forEach((opt, idx) => {
      const isSelected = savedAnswer && savedAnswer.optionIndex === idx;
      const optEl = document.createElement("div");
      optEl.className = `quiz-option ${isSelected ? "selected" : ""}`;
      optEl.innerHTML = `
        <div class="flex items-start gap-3.5">
          <div class="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center font-mono font-bold text-xs ${
            isSelected ? "bg-purple-500 text-white" : "bg-slate-800 text-slate-400"
          }">
            ${letters[idx]}
          </div>
          <div class="space-y-1">
            <p class="text-sm font-semibold text-white leading-snug">${opt.text}</p>
            <p class="text-xs text-slate-400 font-light leading-normal">${opt.desc}</p>
          </div>
        </div>
      `;

      optEl.addEventListener("click", () => {
        // Lưu câu trả lời
        this.userAnswers[this.currentQuestionIndex] = {
          questionId: q.id,
          optionIndex: idx,
          scores: opt.scores
        };

        // Cập nhật giao diện lựa chọn
        const allOpts = this.quizOptionsContainer.querySelectorAll(".quiz-option");
        allOpts.forEach((o) => o.classList.remove("selected"));
        optEl.classList.add("selected");

        this.btnQuizNext.disabled = false;

        // Tự động chuyển câu sau 350ms nếu không phải câu cuối để tạo trải nghiệm mượt mà
        if (this.currentQuestionIndex < QUESTIONS.length - 1) {
          setTimeout(() => {
            this.currentQuestionIndex++;
            this.renderQuestion();
          }, 320);
        }
      });

      this.quizOptionsContainer.appendChild(optEl);
    });

    this.refreshIcons();
  }

  startSimulation() {
    this.showView("simulation");

    const statuses = [
      "Giải mã vector tính cách & phong cách tư duy...",
      "Phân tích phản ứng trước áp lực và biến số cuộc đời...",
      "Định lượng 6 trục năng lực: Tầm nhìn, Thực thi, Sáng tạo, Tài chính...",
      "Khớp nối cơ sở dữ liệu 8 mô hình Bản Thể Tương Lai...",
      "Kiến tạo lộ trình 3 giai đoạn và bộ 5 thói quen vi mô...",
      "Mô phỏng hoàn tất! Sẵn sàng thấu thị tương lai..."
    ];

    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      if (progress > 100) progress = 100;

      this.simulationPct.innerText = `${progress}%`;

      const statusIdx = Math.min(statuses.length - 1, Math.floor((progress / 100) * statuses.length));
      this.simulationStatusText.innerText = statuses[statusIdx];

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          this.calculateAndShowResults();
        }, 500);
      }
    }, 45); // ~ 2.3 giây
  }

  calculateAndShowResults() {
    // Tính toán kết quả
    this.calculatedProfile = calculateFutureProfile(this.userData, this.userAnswers);
    saveProfileToStorage(this.calculatedProfile);
    this.checkExistingSave();

    // Hiển thị kết quả
    this.renderResults();
    this.showView("results");

    // Bắn hiệu ứng pháo hoa Confetti
    if (typeof confetti === "function") {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }

  renderResults() {
    const p = this.calculatedProfile;
    if (!p) return;

    // 1. Thông tin thẻ chính
    document.getElementById("res-user-name").innerText = p.userData.name.toUpperCase();
    document.getElementById("res-badge").innerText = p.primary.badge;
    document.getElementById("res-match-pct").innerText = `${p.primaryMatchPercent}%`;
    document.getElementById("res-arch-name").innerText = p.primary.name;
    document.getElementById("res-arch-subtitle").innerText = p.primary.subtitle;
    document.getElementById("res-slogan").innerText = `"${p.primary.slogan}"`;
    document.getElementById("res-summary").innerText = p.primary.summary;

    // Secondary Archetype
    document.getElementById("res-secondary-name").innerText = p.secondary.name;
    document.getElementById("res-secondary-pct").innerText = `${p.secondaryMatchPercent}%`;

    // 4 Metrics
    document.getElementById("metric-wealth").innerText = `${p.metrics.financialFreedom}%`;
    document.getElementById("metric-influence").innerText = `${p.metrics.socialInfluence}%`;
    document.getElementById("metric-fulfillment").innerText = `${p.metrics.fulfillment}%`;
    document.getElementById("metric-mastery").innerText = `${p.metrics.mastery}%`;

    // 3 Scenarios
    document.getElementById("res-scenario-optimal").innerText = p.primary.scenarios.optimal;
    document.getElementById("res-scenario-default").innerText = p.primary.scenarios.default;
    document.getElementById("res-scenario-pitfall").innerText = p.primary.scenarios.pitfall;

    // 2. Vẽ biểu đồ Radar
    setTimeout(() => {
      if (!this.radarChart) {
        this.radarChart = new RadarChart("radarChartCanvas");
      }
      this.radarChart.render(p.percentages, p.primary.color);
    }, 100);

    // 3. Render Lộ trình 3 Giai đoạn (Roadmap)
    const roadmapContainer = document.getElementById("roadmap-phases-container");
    roadmapContainer.innerHTML = "";

    const phaseColors = [
      { border: "border-purple-500/40", badge: "bg-purple-900/40 text-purple-300", glow: "hover:border-purple-500/60" },
      { border: "border-cyan-500/40", badge: "bg-cyan-900/40 text-cyan-300", glow: "hover:border-cyan-500/60" },
      { border: "border-emerald-500/40", badge: "bg-emerald-900/40 text-emerald-300", glow: "hover:border-emerald-500/60" }
    ];

    p.primary.roadmap.forEach((phase, idx) => {
      const colorScheme = phaseColors[idx % phaseColors.length];
      const card = document.createElement("div");
      card.className = `glass-panel p-6 rounded-3xl border ${colorScheme.border} ${colorScheme.glow} space-y-4 flex flex-col justify-between transition-all duration-300`;

      let tasksHtml = "";
      phase.tasks.forEach((task, tIdx) => {
        const taskId = `task_${idx}_${tIdx}`;
        const isChecked = this.checkedTasks.has(taskId);
        tasksHtml += `
          <label class="flex items-start gap-2.5 cursor-pointer text-xs text-slate-300 hover:text-white transition group select-none">
            <input type="checkbox" class="custom-checkbox mt-0.5" id="${taskId}" ${isChecked ? "checked" : ""}>
            <span class="leading-relaxed ${isChecked ? "line-through text-slate-500" : ""}">${task}</span>
          </label>
        `;
      });

      card.innerHTML = `
        <div class="space-y-3">
          <span class="text-[11px] font-bold px-2.5 py-1 rounded-md ${colorScheme.badge} border border-white/10 uppercase tracking-wide inline-block">
            Giai Đoạn ${idx + 1}
          </span>
          <h4 class="font-bold text-white text-base leading-snug">${phase.title}</h4>
          
          <div class="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300">
            <strong class="text-cyan-400 block mb-1">🎯 Cột Mốc Then Chốt (Milestone):</strong>
            ${phase.milestone}
          </div>

          <div class="space-y-2.5 pt-2">
            <p class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Hành Động Cụ Thể (Interactive Checklist):</p>
            ${tasksHtml}
          </div>
        </div>

        <div class="pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
          <span>${phase.phase.split(":")[0]}</span>
          <i data-lucide="check-circle" class="w-3.5 h-3.5 text-slate-600"></i>
        </div>
      `;

      // Lắng nghe sự kiện tick checkbox
      card.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
        cb.addEventListener("change", (e) => {
          const span = e.target.nextElementSibling;
          if (e.target.checked) {
            this.checkedTasks.add(e.target.id);
            span.classList.add("line-through", "text-slate-500");
          } else {
            this.checkedTasks.delete(e.target.id);
            span.classList.remove("line-through", "text-slate-500");
          }
        });
      });

      roadmapContainer.appendChild(card);
    });

    // 4. Render 5 Thói quen vi mô hàng ngày (Daily Habits)
    const habitsContainer = document.getElementById("habits-list-container");
    habitsContainer.innerHTML = "";
    p.primary.actionToolkit.habits.forEach((habit, hIdx) => {
      const item = document.createElement("div");
      item.className = "flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition";
      item.innerHTML = `
        <div class="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold font-mono flex-shrink-0 mt-0.5">
          ${hIdx + 1}
        </div>
        <p class="text-xs md:text-sm text-slate-200 leading-relaxed font-light">${habit}</p>
      `;
      habitsContainer.appendChild(item);
    });

    // 5. Render Skill Stack
    const skillContainer = document.getElementById("skill-stack-container");
    skillContainer.innerHTML = "";
    p.primary.actionToolkit.skillStack.forEach((skill) => {
      const item = document.createElement("div");
      item.className = "flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200";
      item.innerHTML = `
        <i data-lucide="check" class="w-3.5 h-3.5 text-cyan-400 flex-shrink-0"></i>
        <span>${skill}</span>
      `;
      skillContainer.appendChild(item);
    });

    // 6. Render Books
    const booksContainer = document.getElementById("books-list-container");
    booksContainer.innerHTML = "";
    p.primary.actionToolkit.books.forEach((book) => {
      const item = document.createElement("div");
      item.className = "flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200";
      item.innerHTML = `
        <i data-lucide="bookmark" class="w-3.5 h-3.5 text-amber-400 flex-shrink-0"></i>
        <span>${book}</span>
      `;
      booksContainer.appendChild(item);
    });

    this.refreshIcons();
  }

  refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }
}

// Khởi chạy khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
  window.futureApp = new App();
});
