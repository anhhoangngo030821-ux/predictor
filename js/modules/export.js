// Module xử lý xuất ảnh Thẻ Tương Lai, In lộ trình PDF và lưu trữ LocalStorage

/**
 * Tạo và tải về thẻ danh tính tương lai dạng ảnh PNG độ phân giải cao
 * @param {Object} profile - Dữ liệu hồ sơ tương lai
 */
export function downloadIdentityCard(profile) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const width = 1200;
  const height = 675;

  canvas.width = width;
  canvas.height = height;

  // 1. Nền không gian Futuristic sâu thẳm
  const bgGrad = ctx.createLinearGradient(0, 0, width, height);
  bgGrad.addColorStop(0, "#0b0f19");
  bgGrad.addColorStop(0.5, "#111827");
  bgGrad.addColorStop(1, "#1e1b4b");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Hiệu ứng ánh sáng hào quang (Neon Glow Orb)
  const orbGrad = ctx.createRadialGradient(250, 200, 50, 250, 200, 450);
  orbGrad.addColorStop(0, "rgba(139, 92, 246, 0.25)");
  orbGrad.addColorStop(1, "rgba(139, 92, 246, 0)");
  ctx.fillStyle = orbGrad;
  ctx.beginPath();
  ctx.arc(250, 200, 450, 0, Math.PI * 2);
  ctx.fill();

  // Khung viền Thẻ Kính Mờ (Glass Card)
  const pad = 40;
  ctx.save();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
  ctx.lineWidth = 2;
  ctx.strokeRect(pad, pad, width - pad * 2, height - pad * 2);

  // Điểm nhấn 4 góc phong cách Cyberpunk HUD
  const cornerLen = 30;
  ctx.strokeStyle = "#8b5cf6";
  ctx.lineWidth = 4;
  // Góc trên trái
  ctx.beginPath();
  ctx.moveTo(pad, pad + cornerLen);
  ctx.lineTo(pad, pad);
  ctx.lineTo(pad + cornerLen, pad);
  ctx.stroke();
  // Góc trên phải
  ctx.beginPath();
  ctx.moveTo(width - pad - cornerLen, pad);
  ctx.lineTo(width - pad, pad);
  ctx.lineTo(width - pad, pad + cornerLen);
  ctx.stroke();
  // Góc dưới trái
  ctx.beginPath();
  ctx.moveTo(pad, height - pad - cornerLen);
  ctx.lineTo(pad, height - pad);
  ctx.lineTo(pad + cornerLen, height - pad);
  ctx.stroke();
  // Góc dưới phải
  ctx.beginPath();
  ctx.moveTo(width - pad - cornerLen, height - pad);
  ctx.lineTo(width - pad, height - pad);
  ctx.lineTo(width - pad, height - pad - cornerLen);
  ctx.stroke();
  ctx.restore();

  // 2. Tiêu đề thương hiệu
  ctx.font = "700 16px Inter, sans-serif";
  ctx.fillStyle = "#818cf8";
  ctx.fillText("FUTURE-YOU SIMULATION // HỒ SƠ BẢN THỂ TƯƠNG LAI", pad + 30, pad + 50);

  ctx.font = "400 13px Inter, sans-serif";
  ctx.fillStyle = "#94a3b8";
  ctx.fillText(`MÃ ĐỊNH DANH: #FT-${Math.floor(100000 + Math.random() * 900000)} | NGÀY MÔ PHỎNG: ${profile.userData.createdAt}`, pad + 30, pad + 75);

  // 3. Tên người dùng & Danh xưng
  ctx.font = "800 44px 'Space Grotesk', Inter, sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(profile.userData.name.toUpperCase(), pad + 30, pad + 150);

  // Huy hiệu Archetype
  ctx.font = "700 24px Inter, sans-serif";
  ctx.fillStyle = "#38bdf8";
  ctx.fillText(profile.primary.name, pad + 30, pad + 195);

  ctx.font = "500 16px Inter, sans-serif";
  ctx.fillStyle = "#cbd5e1";
  ctx.fillText(profile.primary.subtitle, pad + 30, pad + 225);

  // Khẩu hiệu sống (Slogan)
  ctx.font = "italic 400 18px Inter, sans-serif";
  ctx.fillStyle = "#e2e8f0";
  const sloganText = `"${profile.primary.slogan}"`;
  ctx.fillText(sloganText, pad + 30, pad + 275);

  // 4. Bảng chỉ số năng lực tương lai (4 cột Metric Box)
  const metrics = [
    { label: "TỰ DO TÀI CHÍNH", val: `${profile.metrics.financialFreedom}%`, icon: "💎" },
    { label: "ẢNH HƯỞNG XÃ HỘI", val: `${profile.metrics.socialInfluence}%`, icon: "🌟" },
    { label: "VIÊN MÃN & AN LẠC", val: `${profile.metrics.fulfillment}%`, icon: "🌿" },
    { label: "ĐỘ TƯƠNG THÍCH", val: `${profile.primaryMatchPercent}%`, icon: "🎯" }
  ];

  const boxW = 250;
  const boxH = 95;
  const startY = 320;

  metrics.forEach((m, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const bx = pad + 30 + col * (boxW + 25);
    const by = startY + row * (boxH + 20);

    // Box nền
    ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
    ctx.fillRect(bx, by, boxW, boxH);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.strokeRect(bx, by, boxW, boxH);

    ctx.font = "600 12px Inter, sans-serif";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText(`${m.icon} ${m.label}`, bx + 16, by + 32);

    ctx.font = "800 28px Outfit, monospace";
    ctx.fillStyle = "#38bdf8";
    ctx.fillText(m.val, bx + 16, by + 72);
  });

  // 5. Cột bên phải: Chân dung tóm lược & Lời dặn dò
  const rx = 650;
  const ry = 140;
  const rw = width - rx - pad - 30;

  ctx.fillStyle = "rgba(139, 92, 246, 0.08)";
  ctx.fillRect(rx, ry, rw, 420);
  ctx.strokeStyle = "rgba(139, 92, 246, 0.3)";
  ctx.strokeRect(rx, ry, rw, 420);

  ctx.font = "700 18px Inter, sans-serif";
  ctx.fillStyle = "#a855f7";
  ctx.fillText("TẦM NHÌN PHÓNG CHIẾU (5 - 10 NĂM)", rx + 24, ry + 40);

  // Wrap text cho summary
  ctx.font = "400 15px Inter, sans-serif";
  ctx.fillStyle = "#e2e8f0";
  wrapText(ctx, profile.primary.summary, rx + 24, ry + 80, rw - 48, 24);

  // Kịch bản lý tưởng
  ctx.font = "700 15px Inter, sans-serif";
  ctx.fillStyle = "#10b981";
  ctx.fillText("🌟 Kịch Bản Cực Thịnh:", rx + 24, ry + 220);

  ctx.font = "400 14px Inter, sans-serif";
  ctx.fillStyle = "#cbd5e1";
  wrapText(ctx, profile.primary.scenarios.optimal, rx + 24, ry + 250, rw - 48, 22);

  // Footer Thẻ
  ctx.font = "500 13px Inter, sans-serif";
  ctx.fillStyle = "#64748b";
  ctx.fillText("FutureYou Platform // Kiến tạo vận mệnh bằng hành động mỗi ngày.", pad + 30, height - pad - 20);

  // Tạo liên kết tải ảnh
  const dataURL = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  const safeName = (profile.userData.name || "future_self").toLowerCase().replace(/\s+/g, "_");
  link.download = `FutureYou_${safeName}_card.png`;
  link.href = dataURL;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}

/**
 * In kế hoạch hành động hoặc lưu thành file PDF
 */
export function printRoadmap() {
  window.print();
}

/**
 * Lưu kết quả vào LocalStorage
 */
export function saveProfileToStorage(profile) {
  try {
    localStorage.setItem("future_self_profile", JSON.stringify(profile));
  } catch (e) {
    console.warn("Không thể lưu profile vào localStorage", e);
  }
}

/**
 * Lấy kết quả từ LocalStorage
 */
export function loadProfileFromStorage() {
  try {
    const raw = localStorage.getItem("future_self_profile");
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.warn("Không thể đọc profile từ localStorage", e);
    return null;
  }
}
