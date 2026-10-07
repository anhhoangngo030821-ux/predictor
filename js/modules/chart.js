// Module vẽ biểu đồ Radar đa chiều tương tác trên HTML5 Canvas
// Không phụ thuộc thư viện nặng, hỗ trợ Retina screen và animation mượt mà

export class RadarChart {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.animationProgress = 0;
    this.animationId = null;
  }

  render(percentages, colorTheme = "#8b5cf6") {
    if (!this.canvas || !this.ctx) return;

    // Đảm bảo Canvas nét trên màn hình Retina / High DPI
    const dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();
    const displayWidth = rect.width || 420;
    const displayHeight = rect.height || 360;

    this.canvas.width = displayWidth * dpr;
    this.canvas.height = displayHeight * dpr;
    this.ctx.scale(dpr, dpr);

    const axes = [
      { key: "vision", label: "Tầm Nhìn", icon: "👁️" },
      { key: "execution", label: "Thực Thi", icon: "⚡" },
      { key: "innovation", label: "Sáng Tạo", icon: "💡" },
      { key: "influence", label: "Ảnh Hưởng", icon: "🌟" },
      { key: "wealth", label: "Tài Chính", icon: "💎" },
      { key: "wellBeing", label: "Cân Bằng", icon: "🌿" }
    ];

    const values = axes.map((a) => (percentages[a.key] || 50) / 100);

    // Bắt đầu Animation
    cancelAnimationFrame(this.animationId);
    let start = null;
    const duration = 1200; // 1.2s

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(1, elapsed / duration);
      // Easing cubic out
      const easeOut = 1 - Math.pow(1 - progress, 3);

      this.draw(displayWidth, displayHeight, axes, values, easeOut, colorTheme);

      if (progress < 1) {
        this.animationId = requestAnimationFrame(animate);
      }
    };

    this.animationId = requestAnimationFrame(animate);
  }

  draw(w, h, axes, values, progress, themeColor) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, w, h);

    const centerX = w / 2;
    const centerY = h / 2 + 10;
    const maxRadius = Math.min(w, h) * 0.36;
    const numAxes = axes.length;
    const angleStep = (Math.PI * 2) / numAxes;

    // 1. Vẽ các đường đa giác đồng tâm nền (Mạng nhện)
    const levels = 5;
    for (let lvl = 1; lvl <= levels; lvl++) {
      const r = (maxRadius / levels) * lvl;
      ctx.beginPath();
      for (let i = 0; i < numAxes; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = lvl === levels ? "rgba(255, 255, 255, 0.22)" : "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Tô nền nhẹ các vòng
      if (lvl % 2 === 0) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.015)";
        ctx.fill();
      }
    }

    // 2. Vẽ các trục nối từ tâm ra đỉnh
    for (let i = 0; i < numAxes; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + Math.cos(angle) * maxRadius;
      const y = centerY + Math.sin(angle) * maxRadius;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Vẽ nhãn (Labels & Icons)
      const labelDistance = maxRadius + 26;
      const lx = centerX + Math.cos(angle) * labelDistance;
      const ly = centerY + Math.sin(angle) * labelDistance;

      ctx.font = "600 12px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#e2e8f0";

      const valPct = Math.round(values[i] * 100);
      ctx.fillText(`${axes[i].icon} ${axes[i].label}`, lx, ly - 7);

      ctx.font = "700 11px Outfit, monospace";
      ctx.fillStyle = themeColor;
      ctx.fillText(`${valPct}%`, lx, ly + 9);
    }

    // 3. Vẽ vùng đa giác dữ liệu của người dùng
    ctx.save();
    ctx.beginPath();
    const points = [];

    for (let i = 0; i < numAxes; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const curValue = values[i] * progress;
      const r = curValue * maxRadius;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      points.push({ x, y });

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();

    // Tô Gradient cho vùng phủ
    const gradient = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, maxRadius);
    gradient.addColorStop(0, "rgba(139, 92, 246, 0.45)");
    gradient.addColorStop(1, "rgba(59, 130, 246, 0.15)");
    ctx.fillStyle = gradient;
    ctx.fill();

    // Viền phát sáng Neon
    ctx.strokeStyle = themeColor || "#8b5cf6";
    ctx.lineWidth = 2.5;
    ctx.shadowColor = themeColor || "#8b5cf6";
    ctx.shadowBlur = 12;
    ctx.stroke();
    ctx.restore();

    // 4. Vẽ các chấm điểm tại từng đỉnh
    points.forEach((pt) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.strokeStyle = themeColor || "#8b5cf6";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    });
  }
}
