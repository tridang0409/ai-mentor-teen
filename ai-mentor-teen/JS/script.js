// ============================================
// AI MENTOR TEEN – script.js (Nâng cấp)
// Bao gồm: particles, counter, progress bar,
//          navbar, fade-in, smooth scroll,
//          nav highlight, hamburger
// ============================================


// ---- 1. PARTICLE CANVAS (background sao) ----
(function initParticles() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    const ctx    = canvas.getContext('2d');
  
    // Mảng hạt và cài đặt
    let W, H, dots = [];
    const COUNT  = window.innerWidth <= 768 ? 40 : 80;
    const COLORS = ['rgba(167,139,250,', 'rgba(6,182,212,', 'rgba(255,255,255,'];
  
    // Tạo kích thước canvas = cửa sổ trình duyệt
    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
  
    // Tạo một hạt ngẫu nhiên
    function createDot() {
      return {
        x:    Math.random() * W,
        y:    Math.random() * H,
        r:    Math.random() * 1.5 + 0.3,         // bán kính
        vx:   (Math.random() - 0.5) * 0.3,       // vận tốc ngang
        vy:   (Math.random() - 0.5) * 0.3,       // vận tốc dọc
        a:    Math.random() * 0.6 + 0.1,         // độ mờ
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      };
    }
  
    // Tạo tất cả hạt ban đầu
    function init() {
      resize();
      dots = [];
      for (let i = 0; i < COUNT; i++) dots.push(createDot());
    }
  
    // Vẽ và cập nhật từng frame
    function draw() {
      ctx.clearRect(0, 0, W, H);
  
      dots.forEach(d => {
        // Di chuyển hạt
        d.x += d.vx;
        d.y += d.vy;
  
        // Nếu ra ngoài màn hình → quay lại phía đối diện
        if (d.x < 0) d.x = W;
        if (d.x > W) d.x = 0;
        if (d.y < 0) d.y = H;
        if (d.y > H) d.y = 0;
  
        // Vẽ chấm sáng
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = d.color + d.a + ')';
        ctx.fill();
      });
  
      requestAnimationFrame(draw);
    }
  
    window.addEventListener('resize', init);
    init();
    draw();
  })();
  
  
// ---- 2. NAVBAR: scroll + active link ----
const navbar   = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  // Thêm class scrolled khi cuộn xuống
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  
    // Highlight nav link theo vị trí cuộn
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) {
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
  
  
  // ---- 3. HAMBURGER MENU (mobile) ----
  const navToggle  = document.getElementById('navToggle');
  const navLinksEl = document.getElementById('navLinks');
  
  navToggle.addEventListener('click', () => {
    navLinksEl.classList.toggle('open');
    navToggle.classList.toggle('open');
  });
  
  // Đóng khi click link
  navLinksEl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinksEl.classList.remove('open');
      navToggle.classList.remove('open');
    });
  });
  
  
  // ---- 4. SMOOTH SCROLL cho link #hash ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.scrollY - 74;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
  
  
  // ---- 5. FADE-IN SCROLL ANIMATION ----
  const fadeEls = document.querySelectorAll('.fade-in');
  
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el    = entry.target;
      const delay = parseInt(el.dataset.delay || 0);
      setTimeout(() => el.classList.add('visible'), delay);
      fadeObserver.unobserve(el);
    });
  }, { threshold: 0.12 });
  
  fadeEls.forEach(el => fadeObserver.observe(el));
  
  
  // ---- 6. COUNTER ANIMATION (stats trong hero) ----
  function animateCounter(el, target, duration = 1500) {
    let start     = 0;
    const step    = 16; // ~60fps
    const total   = Math.ceil(duration / step);
    let  frame    = 0;
  
    const timer = setInterval(() => {
      frame++;
      // Dùng easing để cuối chậm lại
      const progress = frame / total;
      const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value    = Math.round(eased * target);
      el.textContent = value;
  
      if (frame >= total) {
        el.textContent = target;
        clearInterval(timer);
      }
    }, step);
  }
  
  // Quan sát hero stats để kích hoạt counter khi vào viewport
  const statsEl = document.querySelector('.hero-stats');
  if (statsEl) {
    const counterObs = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      document.querySelectorAll('.stat-num').forEach(el => {
        const target = parseInt(el.dataset.target || 0);
        animateCounter(el, target);
      });
      counterObs.disconnect();
    }, { threshold: 0.5 });
    counterObs.observe(statsEl);
  }
  
  
  // ---- 7. PROGRESS BAR ANIMATION (core values) ----
  const progressObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.progress-bar').forEach(bar => {
        const w = bar.dataset.width || 0;
        // Delay nhỏ để animation dễ thấy hơn
        setTimeout(() => { bar.style.width = w + '%'; }, 300);
      });
      progressObserver.unobserve(entry.target);
    });
  }, { threshold: 0.3 });
  
  document.querySelectorAll('.value-card').forEach(card => {
    progressObserver.observe(card);
  });
  
  
  // ---- 8. HIỆU ỨNG HOVER trên feature cards ----
  // Theo dõi chuột để tạo hiệu ứng glow di chuyển theo chuột
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
      const y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
      // Cập nhật vị trí glow theo chuột
      const glow = card.querySelector('.card-glow');
      if (glow) {
        glow.style.left   = (parseFloat(x) - 50) + '%';
        glow.style.bottom = 'auto';
        glow.style.top    = (parseFloat(y) - 50) + '%';
      }

      if (window.innerWidth > 920) {
        const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 4;
        const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -4;
        card.style.transform = `translateY(-6px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
      }
    });
    card.addEventListener('mouseleave', e => {
      // Reset vị trí glow về mặc định
      const glow = card.querySelector('.card-glow');
      if (glow) {
        glow.style.left   = '';
        glow.style.top    = '';
        glow.style.bottom = '-60px';
      }
      card.style.transform = '';
    });
  });
