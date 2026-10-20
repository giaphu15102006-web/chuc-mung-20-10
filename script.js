/**
 * ============================================================================
 * CHÚC MỪNG NGÀY PHỤ NỮ VIỆT NAM 20/10 - RECIPIENT PUBLIC SITE
 * Pure Vanilla JavaScript (ES6+) - Tối ưu 100% trải nghiệm nhận thiệp
 * ============================================================================
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. KHO LỜI CHÚC GEN Z DỰ PHÒNG (Khi link không truyền lời chúc riêng)
     ========================================================================== */
  const GEN_Z_WISHES = [
    "Chúc bạn 20/10 luôn xinh đẹp rạng ngời, visual đỉnh chóp, tiền đầy túi, tình đầy tim và deadline tự động biến mất! 💖🌷",
    "20/10 chúc nàng nhan sắc thăng hạng, thần thái ngút ngàn, ăn không béo, thức không mụn, lúc nào cũng slay hết nấc! ✨💅",
    "Chúc bạn iu ngày 20/10 luôn là đóa hoa tulip rực rỡ nhất, được cưng chiều như công chúa và tài khoản lúc nào cũng 'ting ting'! 🎀💸",
    "Mừng 20/10! Chúc bạn visual luôn 10 điểm không có nhưng, tâm trạng luôn chill và mọi điều ước đều thành hiện thực! 🌟🌼",
    "Chúc người đẹp 20/10 bớt suy - thêm vui, công việc êm ru, may mắn gõ cửa và sớm có người đón đưa chiều chuộng nhé! 🌸🧸",
    "20/10 chúc cậu son môi không trôi, eyeliner không lệch, kẻ mày một phát ăn ngay và lúc nào cũng là hoa khôi trong lòng mọi người! 💄✨",
    "Chúc bạn ngày 20/10 nhận được cơn mưa quà tặng, biển hoa tươi thắm và tình yêu thương siêu to khổng lồ từ cả thế giới! 🎁💐",
    "Mừng ngày Phụ nữ Việt Nam! Chúc bạn mãi là phiên bản độc nhất vô nhị, tự tin tỏa sáng rực rỡ và luôn mỉm cười thật tươi! 🎀💫",
    "Gửi ngàn đóa hoa tulip và cúc họa mi đến bạn! Chúc bạn 20/10 luôn ngọt ngào, yêu thương bản thân thật nhiều và hạnh phúc từng giây! 🌷🍰",
    "Chúc bạn iu 20/10: Sáng thức dậy thấy xinh, trưa ăn ngon miệng, chiều nhận quà to, tối ngủ mộng đẹp, đời an yên vô lo! 🌼🕊️",
    "20/10 chúc bạn cười nhiều hơn khóc, ví dày hơn bụng, tài khoản nhảy số vèo vèo và luôn được bao bọc bởi những điều ngọt ngào nhất! 🍬💖",
    "Chúc nàng thơ 20/10 rạng rỡ như ánh ban mai, dịu dàng như hoa cúc và kiêu hãnh như một nữ hoàng! Luôn là số 1 nha! 👑🌻",
    "Mừng 20/10 siêu cấp đáng yêu! Chúc bạn luôn tìm thấy niềm vui trong từng điều nhỏ xíu và mãi là 'công chúa nhỏ' được cưng chiều! 🧸🌷",
    "Chúc chị đẹp/bạn iu 20/10 visual chuẩn nàng thơ, sự nghiệp phất như diều gặp gió, tiền tài rủng rỉnh và tình duyên đỏ rực rỡ! 💸🎀",
    "20/10 chúc bạn thân mến: Xinh đẹp miễn bàn, giỏi giang miễn chê, may mắn tràn trề, ai nhìn cũng u mê! 💖✨",
    "Chúc bạn 20/10 áp lực tan biến, thành công dẫn lối, được ăn thỏa thích mọi món ngon mà dáng vẫn chuẩn eo thon! 🍰🍓",
    "Ngày 20/10 chúc bạn iu luôn là nguồn năng lượng tích cực, tỏa sáng lấp lánh như những vì sao trên bầu trời đêm! 🌟🌸",
    "Mừng 20/10! Chúc bạn có một ngày ngập tràn hoa, đầy ắp quà và nhận được thật nhiều những lời tỏ tình ngọt ngào nhé! 💌💐",
    "Chúc bạn 20/10 luôn tràn đầy nhiệt huyết, tự do làm điều mình thích và mãi giữ nụ cười tỏa nắng trên môi! ☀️🌷",
    "Gửi trọn tình cảm và sự chân thành: Chúc bạn một ngày 20/10 thật trọn vẹn, ấm áp và luôn được trân quý mỗi ngày! 🎀💖"
  ];

  /* ==========================================================================
     2. SOUND SYNTHESIZER (Web Audio API - Tự tạo giai điệu du dương)
     ========================================================================== */
  let audioCtx = null;
  let isSoundEnabled = true;

  function initAudio() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Phát hợp âm chuông ngân vang thần tiên khi mở hộp quà (C5 - E5 - G5 - C6 - E6 - G6)
  function playGiftOpenChime() {
    if (!isSoundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;

      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
      const now = audioCtx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.2, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.9);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.95);
      });
    } catch (e) {
      // Bỏ qua nếu trình duyệt chặn tự phát âm thanh
    }
  }

  // Tiếng pop nhỏ vui tai
  function playPopSound() {
    if (!isSoundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.12);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.13);
    } catch (e) {
      // Ignored
    }
  }

  /* ==========================================================================
     3. CONFETTI & FLOWERS ENGINE (Pure HTML5 Canvas)
     ========================================================================== */
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationFrameId = null;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Tạo một hạt particle (cánh hoa tulip, hoa cúc, trái tim, ribbon, sparkle)
  function createParticle(x, y, isExplosion = true) {
    const types = ['tulip', 'daisy', 'heart', 'ribbon', 'sparkle'];
    const type = types[Math.floor(Math.random() * types.length)];
    const colors = ['#ff758f', '#ff4d6d', '#ffb3c6', '#ffd166', '#ffffff', '#e9d5ff', '#bbf7d0'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    let vx, vy;
    if (isExplosion) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 4;
      vx = Math.cos(angle) * speed;
      vy = Math.sin(angle) * speed - 6;
    } else {
      vx = (Math.random() - 0.5) * 3;
      vy = Math.random() * 2 + 1.5;
    }

    return {
      x: x !== undefined ? x : Math.random() * canvas.width,
      y: y !== undefined ? y : -20,
      size: Math.random() * 12 + 10,
      color: color,
      type: type,
      vx: vx,
      vy: vy,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 8,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.1 + 0.05,
      gravity: 0.18,
      drag: 0.985,
      alpha: 1,
      decay: Math.random() * 0.003 + 0.002
    };
  }

  // Vẽ hình trái tim
  function drawHeart(c, x, y, size, color) {
    c.save();
    c.translate(x, y);
    c.fillStyle = color;
    c.beginPath();
    const d = size * 0.6;
    c.moveTo(0, 0);
    c.bezierCurveTo(-d, -d * 0.8, -d * 1.6, d * 0.3, 0, d * 1.5);
    c.bezierCurveTo(d * 1.6, d * 0.3, d, -d * 0.8, 0, 0);
    c.fill();
    c.restore();
  }

  // Vẽ hoa cúc họa mi
  function drawDaisy(c, x, y, size) {
    c.save();
    c.translate(x, y);
    c.fillStyle = '#ffffff';
    const petals = 6;
    for (let i = 0; i < petals; i++) {
      c.rotate((Math.PI * 2) / petals);
      c.beginPath();
      c.ellipse(0, size * 0.6, size * 0.3, size * 0.5, 0, 0, Math.PI * 2);
      c.fill();
    }
    c.beginPath();
    c.arc(0, 0, size * 0.38, 0, Math.PI * 2);
    c.fillStyle = '#ffd166';
    c.fill();
    c.restore();
  }

  // Vẽ đóa hoa Tulip
  function drawTulip(c, x, y, size, color) {
    c.save();
    c.translate(x, y);
    c.fillStyle = color;
    c.beginPath();
    c.moveTo(0, size);
    c.bezierCurveTo(-size * 0.8, size * 0.4, -size * 0.8, -size * 0.6, 0, -size);
    c.bezierCurveTo(size * 0.8, -size * 0.6, size * 0.8, size * 0.4, 0, size);
    c.fill();
    c.restore();
  }

  // Vẽ ngôi sao 4 cánh
  function drawSparkle(c, x, y, size, color) {
    c.save();
    c.translate(x, y);
    c.fillStyle = color;
    c.beginPath();
    for (let i = 0; i < 4; i++) {
      c.lineTo(0, size);
      c.quadraticCurveTo(0, 0, size, 0);
      c.rotate(Math.PI / 2);
    }
    c.fill();
    c.restore();
  }

  // Vòng lặp render hạt
  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];

      p.vx *= p.drag;
      p.vy += p.gravity;
      p.vy *= p.drag;

      p.x += p.vx + Math.sin(p.wobble) * 1.5;
      p.y += p.vy;
      p.wobble += p.wobbleSpeed;
      p.rotation += p.rotSpeed;
      p.alpha -= p.decay;

      if (p.alpha <= 0 || p.y > canvas.height + 60) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);

      switch (p.type) {
        case 'heart':
          drawHeart(ctx, 0, 0, p.size, p.color);
          break;
        case 'daisy':
          drawDaisy(ctx, 0, 0, p.size);
          break;
        case 'tulip':
          drawTulip(ctx, 0, 0, p.size, p.color);
          break;
        case 'sparkle':
          drawSparkle(ctx, 0, 0, p.size, p.color);
          break;
        default:
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.6);
          break;
      }

      ctx.restore();
    }

    if (particles.length > 0) {
      animationFrameId = requestAnimationFrame(animateParticles);
    } else {
      animationFrameId = null;
    }
  }

  // Bùng nổ hoa & trái tim
  function triggerCelebrationBurst(originX, originY, count = 130) {
    const x = originX !== undefined ? originX : canvas.width / 2;
    const y = originY !== undefined ? originY : canvas.height / 2;

    for (let i = 0; i < count; i++) {
      particles.push(createParticle(x, y, true));
    }

    if (!animationFrameId) {
      animationFrameId = requestAnimationFrame(animateParticles);
    }
  }

  // Mưa hoa rơi lãng mạn
  function startGentleFlowerRain(count = 35) {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        particles.push(createParticle(Math.random() * canvas.width, -20, false));
        if (!animationFrameId) {
          animationFrameId = requestAnimationFrame(animateParticles);
        }
      }, i * 120);
    }
  }

  /* ==========================================================================
     4. BACKGROUND FLOATING DECORATIONS
     ========================================================================== */
  function initBackgroundDecorations() {
    const container = document.getElementById('bg-decorations');
    if (!container) return;
    const icons = ['🌷', '🌼', '💖', '🎀', '✨', '🌸', '💐'];
    const totalIcons = 16;

    for (let i = 0; i < totalIcons; i++) {
      const el = document.createElement('span');
      el.className = 'bg-bubble';
      el.textContent = icons[i % icons.length];
      el.style.left = `${Math.random() * 92 + 4}%`;
      el.style.animationDuration = `${Math.random() * 8 + 12}s`;
      el.style.animationDelay = `${Math.random() * 10}s`;
      el.style.fontSize = `${Math.random() * 1.2 + 1.2}rem`;
      container.appendChild(el);
    }
  }

  /* ==========================================================================
     5. TOAST NOTIFICATION
     ========================================================================== */
  let toastTimer = null;
  function showToast(message, icon = '✨') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    const toastIcon = toast.querySelector('.toast-icon');

    if (toastIcon) toastIcon.textContent = icon;
    if (toastMsg) toastMsg.textContent = message;

    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  /* ==========================================================================
     6. DOM ELEMENTS & CONTROLLER
     ========================================================================== */
  const giftScreen = document.getElementById('gift-screen');
  const cardScreen = document.getElementById('card-screen');

  const giftReceiverName = document.getElementById('gift-receiver-name');
  const tagName = document.getElementById('tag-name');
  const giftBoxInteractive = document.getElementById('gift-box-interactive');
  const giftBoxElement = document.getElementById('gift-box-element');

  const cardReceiverName = document.getElementById('card-receiver-name');
  const cardWishText = document.getElementById('card-wish-text');
  const cardSenderBox = document.getElementById('card-sender-box');
  const cardSenderName = document.getElementById('card-sender-name');
  const btnBurstMore = document.getElementById('btn-burst-more');

  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  const soundIcon = document.getElementById('sound-icon');

  function getRandomWish() {
    const idx = Math.floor(Math.random() * GEN_Z_WISHES.length);
    return GEN_Z_WISHES[idx];
  }

  // Đổi màn hình từ Hộp Quà sang Thiệp Chúc Mừng
  function showCardScreen() {
    giftScreen.classList.remove('active');
    cardScreen.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ==========================================================================
     7. OPEN GIFT BOX EVENT
     ========================================================================== */
  let isBoxOpening = false;

  function openGiftBox() {
    if (isBoxOpening) return;
    isBoxOpening = true;

    // Phát âm thanh thần tiên
    playGiftOpenChime();

    // Mở nắp hộp quà
    giftBoxElement.classList.add('box-opening');

    // Xác định tọa độ hộp quà
    const rect = giftBoxElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 3;

    // Bùng nổ hoa, tim, sao
    triggerCelebrationBurst(centerX, centerY, 150);

    // Sau 700ms, hiển thị tấm thiệp
    setTimeout(() => {
      showCardScreen();
      startGentleFlowerRain(40);
      isBoxOpening = false;
      giftBoxElement.classList.remove('box-opening');
    }, 700);
  }

  /* ==========================================================================
     8. ĐỌC THAM SỐ TỪ URL (URLSearchParams)
     ========================================================================== */
  function loadCardFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const recipient = params.get('to') || params.get('name') || 'Bạn Yêu';
    const wish = params.get('wish') || params.get('msg') || getRandomWish();
    const sender = params.get('from') || params.get('sender') || '';

    // Gắn thông tin vào màn hình Hộp Quà
    giftReceiverName.textContent = recipient;
    tagName.textContent = recipient;

    // Gắn thông tin vào màn hình Thiệp Chúc Mừng
    cardReceiverName.textContent = recipient;
    cardWishText.textContent = wish;

    if (sender && sender.trim()) {
      cardSenderName.textContent = sender.trim();
      cardSenderBox.style.display = 'flex';
    } else {
      cardSenderBox.style.display = 'none';
    }
  }

  /* ==========================================================================
     9. EVENT LISTENERS
     ========================================================================== */

  // Chạm/Click vào hộp quà để mở
  if (giftBoxInteractive) {
    giftBoxInteractive.addEventListener('click', openGiftBox);
    giftBoxInteractive.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openGiftBox();
      }
    });
  }

  // Nút duy nhất của người nhận: "💐 Tung thêm hoa & tim!"
  if (btnBurstMore) {
    btnBurstMore.addEventListener('click', (e) => {
      initAudio();
      playPopSound();
      triggerCelebrationBurst(e.clientX, e.clientY, 90);
      startGentleFlowerRain(25);
    });
  }

  // Nút bật/tắt âm thanh
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      isSoundEnabled = !isSoundEnabled;
      soundIcon.textContent = isSoundEnabled ? '🔊' : '🔇';
      showToast(isSoundEnabled ? 'Đã bật âm thanh 🔔' : 'Đã tắt âm thanh 🔕', '🎵');
      if (isSoundEnabled) {
        initAudio();
        playPopSound();
      }
    });
  }

  /* ==========================================================================
     10. KHỞI CHẠY TRANG
     ========================================================================== */
  function initApp() {
    initBackgroundDecorations();
    loadCardFromUrl();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();
