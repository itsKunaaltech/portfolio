/* ═══════════════════════════════════════════════
   script.js  —  portfolio interactive features
═══════════════════════════════════════════════ */

// ── 1. LIVE PUNE CLOCK ────────────────────────────────────────
function updateClock() {
  const el = document.getElementById('liveClock');
  if (!el) return;
  const now = new Date();
  // IST = UTC+5:30
  const ist = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + (5.5 * 3600000));
  const hh = String(ist.getHours()).padStart(2, '0');
  const mm = String(ist.getMinutes()).padStart(2, '0');
  const ss = String(ist.getSeconds()).padStart(2, '0');
  el.textContent = `${hh}:${mm}:${ss}`;
}
updateClock();
setInterval(updateClock, 1000);

// ── 2. PULL TOGGLE (THEME SWITCH) ────────────────────────────
const html = document.documentElement;
const pullToggle = document.getElementById('pullToggle');
const pullThumb  = document.getElementById('pullThumb');

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

pullToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);

  // pull animation
  pullThumb.classList.remove('pulling');
  void pullThumb.offsetWidth; // reflow
  pullThumb.classList.add('pulling');
  pullThumb.addEventListener('animationend', () => pullThumb.classList.remove('pulling'), { once: true });
});

// ── 3. COPY EMAIL ─────────────────────────────────────────────
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

// ── 4. MINIMAL PARTICLE SYSTEM ───────────────────────────────
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
    // fade in for first 40 frames, fade out near end
    const progress = this.life / this.maxLife;
    if (progress < 0.1) this.alpha = (progress / 0.1) * 0.4;
    else if (progress > 0.75) this.alpha = ((1 - progress) / 0.25) * 0.4;
    if (this.life > this.maxLife) this.reset();
  }
  draw() {
    // get accent colour based on theme
    const isDark = html.getAttribute('data-theme') === 'dark';
    const color = isDark ? `rgba(212,200,154,${this.alpha})` : `rgba(120,100,40,${this.alpha})`;
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
  // draw faint connecting lines for nearby particles
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
          ? `rgba(212,200,154,${opacity})`
          : `rgba(100,80,20,${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ── 5. AMBIENT SOUND (Web Audio API — no file needed) ─────────
let audioCtx = null;
let noiseNode = null;
let gainNode  = null;
let soundOn   = false;

const soundBtn  = document.getElementById('soundBtn');
const soundLabel = document.getElementById('soundLabel');

function createAmbientSound() {
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  // White noise buffer
  const bufferSize = audioCtx.sampleRate * 3; // 3s loop
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * 0.05;
  }

  noiseNode = audioCtx.createBufferSource();
  noiseNode.buffer = buffer;
  noiseNode.loop = true;

  // Low-pass filter → makes it sound like soft rain / wind
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 400;
  filter.Q.value = 0.7;

  // Gain (volume)
  gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.18, audioCtx.currentTime + 1.5);

  noiseNode.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  noiseNode.start();
}

soundBtn.addEventListener('click', () => {
  if (!soundOn) {
    // Start
    if (!audioCtx) createAmbientSound();
    else {
      gainNode.gain.cancelScheduledValues(audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.18, audioCtx.currentTime + 1.5);
    }
    soundOn = true;
    soundBtn.classList.add('playing');
    soundLabel.textContent = 'on';
  } else {
    // Fade out
    gainNode.gain.cancelScheduledValues(audioCtx.currentTime);
    gainNode.gain.linearRampToValueTime?.(0, audioCtx.currentTime + 1);
    gainNode.gain.setTargetAtTime(0, audioCtx.currentTime, 0.5);
    soundOn = false;
    soundBtn.classList.remove('playing');
    soundLabel.textContent = 'sound';
  }
});

// ── 6. NAVBAR HIDE ON SCROLL ──────────────────────────────────
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
navbar.style.transition = 'transform 0.3s ease, background 0.3s';

window.addEventListener('scroll', () => {
  const cur = window.scrollY;
  navbar.style.transform = (cur > lastScroll && cur > 80)
    ? 'translateY(-100%)' : 'translateY(0)';
  lastScroll = cur;
}, { passive: true });

// ── 7. SCROLL FADE-IN ANIMATIONS ─────────────────────────────
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
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