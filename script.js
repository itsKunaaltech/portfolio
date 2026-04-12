/* ═══════════════════════════════════════════════
   script.js  —  portfolio interactive features
═══════════════════════════════════════════════ */

// ── 1. LIVE PUNE CLOCK ────────────────────────────────────────
function updateClock() {
  const el = document.getElementById('liveClock');
  if (!el) return;
  const now = new Date();
  const ist = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + (5.5 * 3600000));
  const hh = String(ist.getHours()).padStart(2, '0');
  const mm = String(ist.getMinutes()).padStart(2, '0');
  const ss = String(ist.getSeconds()).padStart(2, '0');
  el.textContent = `${hh}:${mm}:${ss}`;
}
updateClock();
setInterval(updateClock, 1000);

// ── 2. PULL CORD THEME SWITCH ────────────────────────────────
const html = document.documentElement;
const pullSwitch  = document.getElementById('pullSwitch');
const psCordWrap  = document.getElementById('psCordWrap');

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

function triggerPull() {
  psCordWrap.classList.remove('pulling');
  void psCordWrap.offsetWidth;
  psCordWrap.classList.add('pulling');
  psCordWrap.addEventListener('animationend', () => psCordWrap.classList.remove('pulling'), { once: true });
}

pullSwitch.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  triggerPull();
});

pullSwitch.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pullSwitch.click(); }
});

// ── 3. BLEND-MODE CURSOR ─────────────────────────────────────
const cursorBlend = document.getElementById('cursorBlend');

document.addEventListener('mousemove', (e) => {
  if (!cursorBlend) return;
  cursorBlend.style.left = e.clientX + 'px';
  cursorBlend.style.top  = e.clientY + 'px';
});

document.addEventListener('mouseleave', () => {
  if (cursorBlend) cursorBlend.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
  if (cursorBlend) cursorBlend.style.opacity = '1';
});

// Grow on hover, shrink on click/drag
document.querySelectorAll('a, button, .skill-icon, .exp-card, .project-card, .pull-switch, .copy-btn, .cta-btn, .send-btn, .tag').forEach(el => {
  el.addEventListener('mouseenter', () => cursorBlend && cursorBlend.classList.add('big'));
  el.addEventListener('mouseleave', () => cursorBlend && cursorBlend.classList.remove('big'));
});

document.addEventListener('mousedown', () => cursorBlend && cursorBlend.classList.add('small'));
document.addEventListener('mouseup',   () => cursorBlend && cursorBlend.classList.remove('small'));

// ── 3b. 3D CARD TILT EFFECT ──────────────────────────────────
function addTilt(selector, maxTilt = 9, zDepth = 12) {
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top  + rect.height / 2;
      const rx = ((e.clientY - cy) / (rect.height / 2)) * -maxTilt;
      const ry = ((e.clientX - cx) / (rect.width  / 2)) *  maxTilt;
      card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(${zDepth}px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.55s cubic-bezier(0.23,1,0.32,1)';
      setTimeout(() => card.style.transition = '', 600);
    });
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.15s ease, border-color 0.3s, box-shadow 0.35s';
    });
  });
}

addTilt('.project-card', 10, 14);
addTilt('.exp-card',     6,  8);
addTilt('.skill-group',  7,  10);

// ── 4. COPY EMAIL ─────────────────────────────────────────────
function copyEmail() {
  navigator.clipboard.writeText('dev.itskunal@gmail.com').then(() => {
    const btn = document.getElementById('copyBtn');
    btn.textContent = 'Copied!';
    btn.style.color = '#5cb87a';
    btn.style.borderColor = 'rgba(92,184,122,0.4)';
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.style.color = '';
      btn.style.borderColor = '';
    }, 2200);
  });
}

// ── 5. MINIMAL PARTICLE SYSTEM ───────────────────────────────
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let W, H, particles = [];
const PARTICLE_COUNT = 55;

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

class Particle {
  constructor() { this.reset(true); }
  reset(randomY = false) {
    this.x  = Math.random() * W;
    this.y  = randomY ? Math.random() * H : H + 10;
    this.vx = (Math.random() - 0.5) * 0.25;
    this.vy = -(Math.random() * 0.35 + 0.1);
    this.r  = Math.random() * 1.6 + 0.4;
    this.alpha = Math.random() * 0.35 + 0.08;
    this.life = 0;
    this.maxLife = Math.random() * 400 + 200;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life++;
    const progress = this.life / this.maxLife;
    if (progress < 0.1) this.alpha = (progress / 0.1) * 0.4;
    else if (progress > 0.75) this.alpha = ((1 - progress) / 0.25) * 0.4;
    if (this.life > this.maxLife) this.reset();
  }
  draw() {
    const isDark = html.getAttribute('data-theme') === 'dark';
    const color = isDark
      ? `rgba(255,255,255,${this.alpha})`
      : `rgba(0,0,0,${this.alpha})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
}

for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

function animateParticles() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => { p.update(); p.draw(); });
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 90) {
        const isDark = html.getAttribute('data-theme') === 'dark';
        const opacity = (1 - dist / 90) * 0.06;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = isDark
          ? `rgba(255,255,255,${opacity})`
          : `rgba(0,0,0,${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ── 6. AMBIENT SOUND ─────────────────────────────────────────
const soundBtn   = document.getElementById('soundBtn');
const soundLabel = document.getElementById('soundLabel');
const bgMusic    = document.getElementById('bgMusic');

let soundOn = false;

soundBtn.addEventListener('click', () => {
  if (!soundOn) {
    bgMusic.volume = 0.4;
    bgMusic.play();
    soundOn = true;
    soundBtn.classList.add('playing');
    soundLabel.textContent = 'on';
  } else {
    bgMusic.pause();
    soundOn = false;
    soundBtn.classList.remove('playing');
    soundLabel.textContent = 'sound';
  }
});

// ── 7. NAVBAR HIDE ON SCROLL ──────────────────────────────────
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
navbar.style.transition = 'transform 0.3s ease, background 0.4s';

window.addEventListener('scroll', () => {
  const cur = window.scrollY;
  navbar.style.transform = (cur > lastScroll && cur > 80)
    ? 'translateY(-100%)' : 'translateY(0)';
  lastScroll = cur;
}, { passive: true });

// ── 8. SCROLL FADE-IN ANIMATIONS ─────────────────────────────
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.1 }
);

['.hero-tag', '.hero-main', '.hero-desc', '.hero-meta',
 '.section-title', '.section-desc', '.exp-card',
 '.project-card', '.skill-group',
 '.contact-tagline', '.email-display', '.contact-note', '.cta-btn',
 '.footer-left', '.footer-right', '.thankyou-bar'
].forEach(sel => {
  document.querySelectorAll(sel).forEach((el, i) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${i * 0.055}s`;
    observer.observe(el);
  });
});

// ── 9. CONTACT FORM (Web3Forms) ──────────────────────────────
const contactForm = document.getElementById('contactForm');
const submitBtn   = document.getElementById('submitBtn');
const formMsg     = document.getElementById('formMsg');
const msgTextarea = document.getElementById('msgTextarea');
const charCount   = document.getElementById('charCount');

msgTextarea?.addEventListener('input', () => {
  const len = msgTextarea.value.length;
  charCount.textContent = `${len} / 500`;
  charCount.classList.toggle('warn', len > 450);
  if (len > 500) msgTextarea.value = msgTextarea.value.slice(0, 500);
});

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();

  submitBtn.textContent = 'Sending…';
  submitBtn.disabled = true;
  formMsg.className = 'form-msg-box';

  const formData = new FormData(contactForm);
  const object   = Object.fromEntries(formData);

  try {
    const res  = await fetch('https://api.web3forms.com/submit', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body:    JSON.stringify(object)
    });
    const data = await res.json();

    if (data.success) {
      formMsg.className = 'form-msg-box success';
      formMsg.textContent = '✓ Message sent! I\'ll get back to you soon.';
      contactForm.reset();
      charCount.textContent = '0 / 500';
    } else {
      formMsg.className = 'form-msg-box error';
      formMsg.textContent = '✗ Something went wrong. Try emailing me directly.';
    }
  } catch {
    formMsg.className = 'form-msg-box error';
    formMsg.textContent = '✗ Network error. Try emailing me directly.';
  }

  submitBtn.textContent = 'Send message →';
  submitBtn.disabled = false;
});

// ── 10. PIXEL LUFFY WALKING ANIMATION ────────────────────────
(function() {
  const lc = document.getElementById('luffyCanvas');
  if (!lc) return;
  const lx = lc.getContext('2d');
  lc.width  = 120;
  lc.height = 120;

  const S = 4;

  const palette = {
    0: null,
    1: '#F4C17A',  // skin
    2: '#1a1a1a',  // black outline
    3: '#CC2222',  // red vest / hat
    4: '#1a3a6e',  // blue pants
    5: '#E8C840',  // straw hat yellow
    6: '#CC2222',  // hat band
    7: '#ffffff',  // white eyes
  };

  // Frame A — left foot forward
  const frameA = [
    [0,0,0,0,5,5,5,5,5,5,5,5,0,0,0,0],
    [0,0,0,5,5,5,5,5,5,5,5,5,5,0,0,0],
    [0,0,5,5,5,5,5,5,5,5,5,5,5,5,0,0],
    [0,0,0,0,6,6,6,6,6,6,6,6,0,0,0,0],
    [0,0,0,2,1,1,1,1,1,1,1,1,2,0,0,0],
    [0,0,2,1,1,7,2,1,1,7,2,1,1,2,0,0],
    [0,0,2,1,1,1,1,1,1,1,1,1,1,2,0,0],
    [0,0,0,2,1,2,2,2,2,2,2,1,2,0,0,0],
    [0,0,0,0,3,3,3,3,3,3,3,3,0,0,0,0],
    [0,0,2,3,3,3,3,3,3,3,3,3,3,2,0,0],
    [0,0,2,3,3,3,3,3,3,3,3,3,3,2,0,0],
    [0,0,0,2,4,4,4,4,4,4,4,4,2,0,0,0],
    [0,0,0,2,4,4,2,0,0,2,4,4,2,0,0,0],
    [0,0,0,2,4,2,0,0,0,0,2,4,2,0,0,0],
    [0,0,0,2,2,0,0,0,0,0,0,2,2,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ];

  // Frame B — right foot forward (legs swapped)
  const frameB = [
    [0,0,0,0,5,5,5,5,5,5,5,5,0,0,0,0],
    [0,0,0,5,5,5,5,5,5,5,5,5,5,0,0,0],
    [0,0,5,5,5,5,5,5,5,5,5,5,5,5,0,0],
    [0,0,0,0,6,6,6,6,6,6,6,6,0,0,0,0],
    [0,0,0,2,1,1,1,1,1,1,1,1,2,0,0,0],
    [0,0,2,1,1,7,2,1,1,7,2,1,1,2,0,0],
    [0,0,2,1,1,1,1,1,1,1,1,1,1,2,0,0],
    [0,0,0,2,1,2,2,2,2,2,2,1,2,0,0,0],
    [0,0,0,0,3,3,3,3,3,3,3,3,0,0,0,0],
    [0,0,2,3,3,3,3,3,3,3,3,3,3,2,0,0],
    [0,0,2,3,3,3,3,3,3,3,3,3,3,2,0,0],
    [0,0,0,2,4,4,4,4,4,4,4,4,2,0,0,0],
    [0,0,0,2,4,4,2,0,0,2,4,4,2,0,0,0],
    [0,0,0,0,2,4,2,0,0,2,4,2,0,0,0,0],
    [0,0,0,0,0,2,2,0,0,2,2,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ];

  const frames = [frameA, frameB];
  let frameIdx = 0;
  let posX = window.innerWidth + 10;
  const SPEED = 1.2;
  const FRAME_INTERVAL = 180;
  let lastFrameSwitch = 0;
  let direction = -1;
  let flipped = false;

  function drawFrame(frame, flip) {
    lx.clearRect(0, 0, lc.width, lc.height);
    lx.save();
    if (flip) {
      lx.scale(-1, 1);
      lx.translate(-lc.width, 0);
    }
    for (let row = 0; row < 16; row++) {
      for (let col = 0; col < 16; col++) {
        const p = frame[row][col];
        if (p === 0) continue;
        const color = palette[p];
        if (!color) continue;
        lx.fillStyle = color;
        lx.fillRect(col * S + 8, row * S + 8, S, S);
      }
    }
    lx.restore();
  }

  function luffyLoop(ts) {
    if (ts - lastFrameSwitch > FRAME_INTERVAL) {
      frameIdx = (frameIdx + 1) % frames.length;
      lastFrameSwitch = ts;
    }
    posX += SPEED * direction;

    if (posX < -lc.width - 20) { direction = 1; flipped = true; }
    if (posX > window.innerWidth + 20) { direction = -1; flipped = false; }

    lc.style.left   = posX + 'px';
    lc.style.bottom = '8px';
    lc.style.top    = 'auto';

    drawFrame(frames[frameIdx], flipped);
    requestAnimationFrame(luffyLoop);
  }

  lc.style.position       = 'fixed';
  lc.style.bottom         = '8px';
  lc.style.left           = window.innerWidth + 'px';
  lc.style.zIndex         = '50';
  lc.style.imageRendering = 'pixelated';
  lc.style.pointerEvents  = 'none';

  requestAnimationFrame(luffyLoop);
})();
