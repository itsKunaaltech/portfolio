/* ═══════════════════════════════════════════════
   RESET & VARIABLES
═══════════════════════════════════════════════ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #080810;
  --bg2: #0f0f1a;
  --bg3: #16162a;
  --text: #e8e8f0;
  --text-muted: #7a7a96;
  --text-faint: #32323d;
  --accent: #ffffff;
  --accent2: #c0c0d0;
  --border: rgba(255,255,255,0.06);
  --border-hover: rgba(255,255,255,0.16);
  --tag-bg: rgba(255,255,255,0.04);
  --tag-text: #b0b0c8;
  --green: #4ecb71;
  --radius: 14px;
  --max-width: 1100px;
  --font-display: 'Fraunces', 'DM Serif Display', serif;
  --font-body: 'Syne', sans-serif;
  --font-mono: 'DM Mono', monospace;
  --font-cursive: 'Cormorant Garamond', serif;
  --grid-color: rgba(100, 100, 255, 0.055);
  --ps-cord: rgba(255,255,255,0.12);
  --ps-handle: rgba(255,255,255,0.2);
  --ps-label: rgba(255,255,255,0.12);
  --ps-icon: rgba(255,255,255,0.3);
}

[data-theme="light"] {
  --bg: #f5f5f0;
  --bg2: #eaeae4;
  --bg3: #e0e0d8;
  --text: #111118;
  --text-muted: #55555f;
  --text-faint: #aaaaaa;
  --accent: #111118;
  --accent2: #333340;
  --border: rgba(0,0,0,0.07);
  --border-hover: rgba(0,0,0,0.16);
  --tag-bg: rgba(0,0,0,0.04);
  --tag-text: #444;
  --grid-color: rgba(0, 0, 80, 0.04);
  --ps-cord: rgba(0,0,0,0.14);
  --ps-handle: rgba(0,0,0,0.22);
  --ps-label: rgba(0,0,0,0.2);
  --ps-icon: rgba(0,0,0,0.4);
}

html { scroll-behavior: smooth; }

body {
  background-color: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
  transition: background 0.55s, color 0.55s;
  overflow-x: hidden;
  cursor: none;
}

@media (hover: none) {
  body { cursor: auto; }
  .cursor-blend { display: none !important; }
}

a { color: inherit; text-decoration: none; }

/* ═══════════════════════════════════════════════
   SUBTLE DOT-GRID BACKGROUND
═══════════════════════════════════════════════ */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: radial-gradient(circle, var(--grid-color) 1px, transparent 1px);
  background-size: 36px 36px;
  pointer-events: none;
  z-index: 0;
  animation: grid-breathe 7s ease-in-out infinite;
}

@keyframes grid-breathe {
  0%, 100% { opacity: 0.45; }
  50%       { opacity: 1.0; }
}

/* ═══════════════════════════════════════════════
   FUTURISTIC FLOOR GRID
═══════════════════════════════════════════════ */
.floor-grid {
  position: fixed;
  bottom: 0;
  left: -30%;
  right: -30%;
  height: 48vh;
  pointer-events: none;
  z-index: 0;
  transform: perspective(280px) rotateX(62deg);
  transform-origin: bottom center;
  opacity: 0;
  transition: opacity 0.6s;
  mask-image: linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%);
  -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%);
}

[data-theme="dark"] .floor-grid { opacity: 1; }

.floor-grid::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(80, 72, 255, 0.13) 1px, transparent 1px),
    linear-gradient(90deg, rgba(80, 72, 255, 0.09) 1px, transparent 1px);
  background-size: 68px 68px;
  animation: floor-scroll 4.5s linear infinite;
}

@keyframes floor-scroll {
  from { background-position: 0 0; }
  to   { background-position: 0 68px; }
}

/* ═══════════════════════════════════════════════
   BLEND-MODE CURSOR
═══════════════════════════════════════════════ */
.cursor-blend {
  position: fixed;
  width: 22px;
  height: 22px;
  background: white;
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  transition: width 0.32s cubic-bezier(.34,1.56,.64,1),
              height 0.32s cubic-bezier(.34,1.56,.64,1),
              opacity 0.2s;
  will-change: left, top;
}

.cursor-blend.big   { width: 54px; height: 54px; }
.cursor-blend.small { width: 8px;  height: 8px;  }

/* ═══════════════════════════════════════════════
   NOISE GRAIN OVERLAY
═══════════════════════════════════════════════ */
.grain-overlay {
  position: fixed;
  inset: -50%;
  width: 200%;
  height: 200%;
  pointer-events: none;
  z-index: 9997;
  opacity: 0.018;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-size: 256px 256px;
  animation: grain-drift 9s steps(10) infinite;
}

@keyframes grain-drift {
  0%,100% { transform: translate(0,0); }
  20% { transform: translate(-2%,-2%); }
  40% { transform: translate(2%,1%); }
  60% { transform: translate(-1%,2%); }
  80% { transform: translate(1%,-1%); }
}

/* ═══════════════════════════════════════════════
   AURORA BLOBS
═══════════════════════════════════════════════ */
.aurora-wrap { position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }

.aurora { position: absolute; border-radius: 50%; filter: blur(90px); opacity: 0; transition: opacity 0.6s; }
[data-theme="dark"] .aurora { opacity: 1; }

.aurora.a1 {
  width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(88,80,255,0.07) 0%, transparent 70%);
  top: -250px; left: -200px;
  animation: af1 20s ease-in-out infinite alternate;
}
.aurora.a2 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(0,200,160,0.04) 0%, transparent 70%);
  top: 30%; right: -150px;
  animation: af2 24s ease-in-out infinite alternate;
}
.aurora.a3 {
  width: 600px; height: 400px;
  background: radial-gradient(circle, rgba(200,60,180,0.04) 0%, transparent 70%);
  bottom: 0; left: 25%;
  animation: af3 28s ease-in-out infinite alternate;
}

@keyframes af1 { from { transform: translate(0,0) scale(1); } to { transform: translate(90px,70px) scale(1.2); } }
@keyframes af2 { from { transform: translate(0,0); } to { transform: translate(-70px,90px) scale(0.85); } }
@keyframes af3 { from { transform: translate(0,0); } to { transform: translate(60px,-80px) scale(1.15); } }

/* ═══════════════════════════════════════════════
   PARTICLES CANVAS
═══════════════════════════════════════════════ */
#particleCanvas {
  position: fixed; inset: 0; width: 100%; height: 100%;
  pointer-events: none; z-index: 1; opacity: 0.35;
}

nav, section, footer, .thankyou-bar, .sound-btn { position: relative; z-index: 2; }

#luffyCanvas {
  position: fixed; bottom: 0; right: 0;
  z-index: 50; pointer-events: none; image-rendering: pixelated;
}

/* ═══════════════════════════════════════════════
   SOUND BUTTON
═══════════════════════════════════════════════ */
.sound-btn {
  position: fixed; bottom: 28px; left: 28px; z-index: 200;
  display: flex; align-items: center; gap: 8px;
  background: var(--bg2); border: 1px solid var(--border);
  border-radius: 40px; padding: 9px 16px 9px 12px;
  cursor: none; color: var(--text-muted);
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.08em;
  transition: all 0.25s; backdrop-filter: blur(12px);
}

.sound-btn:hover { border-color: var(--border-hover); color: var(--text); }
.sound-btn.playing { border-color: rgba(78,203,113,0.35); color: var(--green); }
.sound-waves { display: flex; align-items: flex-end; gap: 2px; height: 14px; }
.sound-waves span { display: block; width: 3px; background: currentColor; border-radius: 2px; }
.sound-waves span:nth-child(1) { height: 6px; }
.sound-waves span:nth-child(2) { height: 10px; }
.sound-waves span:nth-child(3) { height: 5px; }
.sound-btn.playing .sound-waves span:nth-child(1) { animation: wave1 0.8s ease-in-out infinite alternate; }
.sound-btn.playing .sound-waves span:nth-child(2) { animation: wave2 0.65s ease-in-out infinite alternate; }
.sound-btn.playing .sound-waves span:nth-child(3) { animation: wave3 0.9s ease-in-out infinite alternate; }
@keyframes wave1 { from { height: 4px; } to { height: 12px; } }
@keyframes wave2 { from { height: 10px; } to { height: 4px; } }
@keyframes wave3 { from { height: 3px; } to { height: 10px; } }

/* ═══════════════════════════════════════════════
   PULL CORD SWITCH  (fixed right side)
═══════════════════════════════════════════════ */
.pull-switch {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: none;
  user-select: none;
}

/* Icon above the cord */
.ps-icon-wrap {
  position: relative;
  width: 22px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ps-icon-moon,
.ps-icon-sun {
  position: absolute;
  font-size: 12px;
  line-height: 1;
  color: var(--ps-icon);
  transition: opacity 0.4s, transform 0.4s;
}

[data-theme="dark"]  .ps-icon-sun  { opacity: 0; transform: scale(0.5) rotate(-40deg); }
[data-theme="dark"]  .ps-icon-moon { opacity: 1; transform: scale(1) rotate(0deg); }
[data-theme="light"] .ps-icon-moon { opacity: 0; transform: scale(0.5) rotate(40deg); }
[data-theme="light"] .ps-icon-sun  { opacity: 1; transform: scale(1) rotate(0deg); }

/* Cord + handle — this whole wrap gets the pull animation */
.ps-cord-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-origin: top center;
}

.ps-cord-line {
  width: 1.5px;
  height: 60px;
  background: linear-gradient(to bottom, transparent 0%, var(--ps-cord) 100%);
  transition: background 0.5s;
}

/* Teardrop/oval handle */
.ps-handle {
  width: 16px;
  height: 22px;
  border: 1.5px solid var(--ps-handle);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.02);
  transition: border-color 0.3s, background 0.3s, box-shadow 0.3s;
  margin-top: -1px;
}

[data-theme="light"] .ps-handle { background: rgba(0,0,0,0.02); }

.ps-handle-knot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--ps-handle);
  transition: background 0.3s;
}

.pull-switch:hover .ps-handle {
  border-color: var(--border-hover);
  background: rgba(255,255,255,0.07);
  box-shadow: 0 0 14px rgba(255,255,255,0.05);
}

[data-theme="light"] .pull-switch:hover .ps-handle {
  background: rgba(0,0,0,0.06);
  box-shadow: 0 0 14px rgba(0,0,0,0.05);
}

.ps-hint {
  font-family: var(--font-mono);
  font-size: 7.5px;
  letter-spacing: 0.22em;
  text-transform: lowercase;
  color: var(--ps-label);
  transition: color 0.3s;
  margin-top: 3px;
}

.pull-switch:hover .ps-hint { color: var(--text-muted); }

/* Pull-down spring animation */
@keyframes ps-pull {
  0%   { transform: translateY(0px);  }
  28%  { transform: translateY(24px); }
  52%  { transform: translateY(-7px); }
  70%  { transform: translateY(11px); }
  84%  { transform: translateY(-3px); }
  94%  { transform: translateY(4px);  }
  100% { transform: translateY(0px);  }
}

.ps-cord-wrap.pulling { animation: ps-pull 0.68s cubic-bezier(0.36,0.07,0.19,0.97) both; }

/* ═══════════════════════════════════════════════
   FIXED SPINNING TEXT BADGE (bottom right)
═══════════════════════════════════════════════ */
.spin-badge-fixed {
  position: fixed;
  bottom: 20px;
  right: 150px;  /* leaves room for Luffy on desktop */
  width: 106px;
  height: 106px;
  z-index: 49;
  pointer-events: none;
  animation: spbr 20s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spin-text-fixed {
  font-family: var(--font-mono);
  font-size: 11px;
  fill: var(--text-faint);
  letter-spacing: 3px;
  text-transform: uppercase;
  transition: fill 0.4s;
}

.spin-badge-center-fixed {
  position: absolute;
  width: 32px;
  height: 32px;
  border: 1px solid var(--border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: var(--text-faint);
  background: var(--bg2);
  animation: spbc 20s linear infinite;
  backdrop-filter: blur(4px);
}

@keyframes spbr { to { transform: rotate(360deg);  } }
@keyframes spbc { to { transform: rotate(-360deg); } }

/* ═══════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════ */
.navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 40px; height: 62px;
  background: rgba(8,8,16,0.85);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(22px) saturate(200%);
  -webkit-backdrop-filter: blur(22px) saturate(200%);
  transition: transform 0.3s ease, background 0.45s;
}

[data-theme="light"] .navbar { background: rgba(245,245,240,0.88); }

.nav-logo {
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.15em;
  color: var(--text-muted); text-transform: uppercase; flex-shrink: 0;
}

.live-clock { display: flex; align-items: center; gap: 10px; flex: 1; justify-content: center; }
.clock-city { font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.2em; color: var(--text-faint); text-transform: uppercase; }
.clock-time { font-family: var(--font-mono); font-size: 15px; font-weight: 500; color: var(--accent); letter-spacing: 0.08em; min-width: 80px; text-align: center; }
.clock-desc { font-family: var(--font-mono); font-size: 10px; color: var(--text-faint); letter-spacing: 0.04em; }

.nav-right { display: flex; align-items: center; gap: 18px; flex-shrink: 0; }

.nav-email-letters {
  display: flex; align-items: center;
  font-family: var(--font-mono); font-size: 12px;
  color: var(--text-muted); letter-spacing: 0.01em; transition: color 0.2s;
}
.nav-email-letters span { display: inline-block; transition: transform 0.15s, color 0.15s; }
.nav-email-letters:hover span { color: var(--accent); }
.nav-email-letters:hover span:nth-child(odd)  { transform: translateY(-1px); }
.nav-email-letters:hover span:nth-child(even) { transform: translateY(1px); }

/* ═══════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════ */
.hero {
  max-width: var(--max-width); margin: 0 auto;
  padding: 140px 48px 80px;
  display: flex; flex-direction: column; gap: 32px;
  position: relative;
}

.hero-tag {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-mono); font-size: 11px;
  letter-spacing: 0.12em; color: var(--green); text-transform: uppercase;
}

.dot {
  width: 7px; height: 7px;
  background: var(--green); border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(78,203,113,0.55); }
  50%       { box-shadow: 0 0 0 7px rgba(78,203,113,0); }
}

.hero-sub { font-size: 18px; font-weight: 500; color: var(--text-muted); }

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(58px, 9.5vw, 115px);
  line-height: 0.95;
  letter-spacing: -0.035em;
  font-weight: 900;
  /* 3D layered text-shadow for depth */
  text-shadow:
    1px 1px 0 rgba(255,255,255,0.04),
    2px 2px 0 rgba(255,255,255,0.03),
    4px 4px 0 rgba(255,255,255,0.015),
    6px 6px 20px rgba(88,80,255,0.08);
  background: linear-gradient(155deg, #ffffff 0%, #9898b8 55%, #5850c8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="light"] .hero-name {
  background: linear-gradient(155deg, #0a0a14 0%, #44445a 60%, #222240 100%);
  -webkit-background-clip: text; background-clip: text;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.04), 2px 2px 0 rgba(0,0,0,0.03), 4px 4px 0 rgba(0,0,0,0.015);
}

.hero-desc { font-size: 16px; color: var(--text-muted); line-height: 1.88; max-width: 480px; }

.hero-meta {
  display: grid; grid-template-columns: 1fr 1fr; gap: 40px;
  padding-top: 20px; border-top: 1px solid var(--border);
}

.meta-left { display: flex; flex-direction: column; gap: 10px; }
.meta-item { display: flex; gap: 16px; font-family: var(--font-mono); font-size: 13px; }

.meta-label {
  color: var(--text-faint); min-width: 70px;
  text-transform: uppercase; font-size: 10px; letter-spacing: 0.1em; padding-top: 2px;
}

.meta-right { display: flex; flex-direction: column; gap: 24px; }

.currently-label, .focus-label {
  font-family: var(--font-mono); font-size: 10px;
  letter-spacing: 0.15em; color: var(--text-faint);
  text-transform: uppercase; display: block; margin-bottom: 6px;
}

.currently-role { font-weight: 600; font-size: 15px; }
.currently-place { color: var(--accent); font-size: 14px; }
.currently-date { font-family: var(--font-mono); font-size: 12px; color: var(--text-muted); margin-top: 4px; }

/* ═══════════════════════════════════════════════
   SHARED
═══════════════════════════════════════════════ */
.divider {
  width: 100%; max-width: var(--max-width);
  margin: 0 auto; height: 1px; background: var(--border);
}

.section { max-width: var(--max-width); margin: 0 auto; padding: 80px 48px; }

.section-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 4.5vw, 52px);
  font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px;
  text-shadow: 2px 2px 0 rgba(255,255,255,0.025), 4px 4px 0 rgba(255,255,255,0.012);
}

[data-theme="light"] .section-title {
  text-shadow: 2px 2px 0 rgba(0,0,0,0.03), 4px 4px 0 rgba(0,0,0,0.015);
}

.section-desc { color: var(--text-muted); font-size: 15px; margin-bottom: 48px; }

.tag-row { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px; }

.tag {
  background: var(--tag-bg); color: var(--tag-text);
  font-family: var(--font-mono); font-size: 11px;
  padding: 4px 10px; border-radius: 4px;
  border: 1px solid var(--border); white-space: nowrap;
  transition: border-color 0.2s, color 0.2s, transform 0.2s, background 0.2s;
}

.tag:hover { border-color: var(--border-hover); color: var(--accent); transform: translateY(-1px); }

/* ═══════════════════════════════════════════════
   EXP / EDU CARDS  (3D tilt via JS)
═══════════════════════════════════════════════ */
.exp-list { display: flex; flex-direction: column; gap: 3px; }

.exp-card {
  border: 1px solid var(--border); border-radius: var(--radius);
  overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.35s, transform 0.18s;
  transform-style: preserve-3d;
  will-change: transform;
}

.exp-card:hover {
  border-color: var(--border-hover);
  box-shadow: 0 20px 60px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05);
}

.exp-header {
  padding: 28px 32px 20px; border-bottom: 1px solid var(--border);
  background: var(--bg2);
}

.exp-company {
  font-size: 17px; font-weight: 700;
  display: flex; align-items: center; gap: 10px; margin-bottom: 4px;
}

.exp-type {
  font-family: var(--font-mono); font-size: 10px; font-weight: 400;
  color: var(--accent); background: rgba(255,255,255,0.06);
  padding: 2px 8px; border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.1); letter-spacing: 0.05em;
}

[data-theme="light"] .exp-type {
  color: var(--accent2); background: rgba(0,0,0,0.05); border-color: rgba(0,0,0,0.1);
}

.exp-role { font-size: 14px; color: var(--text-muted); font-weight: 500; }
.exp-meta { font-family: var(--font-mono); font-size: 11px; color: var(--text-faint); margin-top: 4px; }
.exp-body { padding: 24px 32px 28px; background: var(--bg); }
.exp-body h4 { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-faint); font-weight: 600; margin-bottom: 12px; }
.exp-body ul { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.exp-body ul li { font-size: 14px; color: var(--text-muted); padding-left: 20px; position: relative; line-height: 1.65; }
.exp-body ul li::before { content: '→'; position: absolute; left: 0; color: var(--text-faint); font-size: 12px; }

/* ═══════════════════════════════════════════════
   PROJECTS  (3D tilt via JS)
═══════════════════════════════════════════════ */
.projects-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 22px; perspective: 900px;
}

.project-card {
  border: 1px solid var(--border); border-radius: var(--radius);
  overflow: hidden; background: var(--bg2);
  transition: border-color 0.3s, box-shadow 0.35s, transform 0.15s;
  transform-style: preserve-3d; will-change: transform;
}

.project-card:hover {
  border-color: var(--border-hover);
  box-shadow: 0 28px 70px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06);
}

.project-img-wrap { position: relative; overflow: hidden; height: 200px; }

.project-img-placeholder {
  width: 100%; height: 100%;
  background: linear-gradient(135deg, var(--bg3) 0%, var(--bg2) 100%);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.18em; color: var(--text-faint);
  transition: background 0.4s;
}

.project-card:hover .project-img-placeholder { background: linear-gradient(135deg, #0e0e22 0%, #14142c 100%); }
.project-img-placeholder.p2 { background: linear-gradient(135deg, #0e120e 0%, #141a14 100%); }
.project-img-placeholder.p3 { background: linear-gradient(135deg, #180e0e 0%, #201212 100%); }

.project-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
.project-card:hover img { transform: scale(1.05); }

.project-overlay {
  position: absolute; inset: 0;
  background: rgba(0,0,0,0.78); backdrop-filter: blur(6px);
  display: flex; align-items: center; justify-content: center; gap: 12px;
  opacity: 0; transition: opacity 0.28s;
}
.project-card:hover .project-overlay { opacity: 1; }

.project-link-btn {
  font-family: var(--font-mono); font-size: 12px;
  padding: 9px 18px; border-radius: 8px;
  background: var(--accent); color: #080810;
  font-weight: 600; letter-spacing: 0.05em; transition: transform 0.2s;
}
.project-link-btn.outline { background: transparent; border: 1px solid var(--accent); color: var(--accent); }
.project-link-btn:hover { transform: scale(1.06) translateY(-2px); }
.project-link-btn.outline:hover { background: rgba(255,255,255,0.1); }

.project-info { padding: 20px 22px 24px; }
.project-status { font-family: var(--font-mono); font-size: 11px; margin-bottom: 8px; letter-spacing: 0.05em; }
.project-status.live { color: var(--green); }
.project-status.ended { color: var(--text-faint); }
.project-name { font-size: 18px; font-weight: 700; margin-bottom: 8px; letter-spacing: -0.01em; }
.project-desc-text { font-size: 13px; color: var(--text-muted); line-height: 1.65; margin-bottom: 10px; }
.project-meta-row { display: flex; gap: 16px; font-family: var(--font-mono); font-size: 11px; color: var(--text-faint); }

/* ═══════════════════════════════════════════════
   SKILLS
═══════════════════════════════════════════════ */
.skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }

.skill-group {
  border: 1px solid var(--border); border-radius: var(--radius);
  padding: 30px; background: var(--bg2);
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.15s;
  transform-style: preserve-3d; will-change: transform;
}

.skill-group:hover {
  border-color: var(--border-hover);
  box-shadow: 0 16px 44px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.04);
}

.skill-group-title {
  font-size: 13px; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; margin-bottom: 6px;
}

.skill-group-desc { font-size: 13px; color: var(--text-muted); margin-bottom: 18px; line-height: 1.5; }
.skill-icons { display: flex; flex-wrap: wrap; gap: 8px; }

.skill-icon {
  background: var(--tag-bg); border: 1px solid var(--border);
  border-radius: 8px; padding: 8px 14px;
  font-family: var(--font-mono); font-size: 12px; color: var(--text-muted);
  transition: all 0.22s cubic-bezier(.34,1.56,.64,1); cursor: default;
}

.skill-icon:hover {
  background: rgba(255,255,255,0.06); border-color: var(--border-hover);
  color: var(--accent); transform: translateY(-3px) scale(1.05);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}

/* ═══════════════════════════════════════════════
   CONTACT
═══════════════════════════════════════════════ */
.contact-section { text-align: center; padding: 80px 48px 100px; }

.contact-tagline {
  color: var(--text-muted); font-size: 17px;
  margin: 16px auto 40px; max-width: 480px; line-height: 1.85;
}

.contact-form-wrap { max-width: 620px; margin: 0 auto 48px; text-align: left; }

.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

.contact-field { display: flex; flex-direction: column; gap: 8px; }
.contact-field.full { grid-column: 1 / -1; }

.field-label {
  font-family: var(--font-mono); font-size: 10px;
  letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-faint);
}

.contact-input, .contact-textarea {
  width: 100%; background: var(--bg2); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 14px 16px; color: var(--text);
  font-family: var(--font-body); font-size: 14px; outline: none;
  transition: border-color 0.25s, background 0.25s, box-shadow 0.25s; resize: none;
}

.contact-input::placeholder, .contact-textarea::placeholder { color: var(--text-faint); }

.contact-input:focus, .contact-textarea:focus {
  border-color: var(--border-hover); background: var(--bg3);
  box-shadow: 0 0 0 3px rgba(88,80,255,0.09);
}

.contact-textarea { height: 120px; line-height: 1.6; }

.form-footer-row {
  grid-column: 1 / -1; display: flex; align-items: center;
  justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-top: 4px;
}

.char-count { font-family: var(--font-mono); font-size: 11px; color: var(--text-faint); letter-spacing: 0.05em; }
.char-count.warn { color: #e07070; }

.send-btn {
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--accent); color: #080810;
  font-family: var(--font-mono); font-size: 12px; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  padding: 13px 28px; border-radius: 10px; border: none;
  cursor: none; transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
}

.send-btn:hover { opacity: 0.88; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(0,0,0,0.25); }
.send-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
[data-theme="light"] .send-btn { color: #f5f5f0; }

.form-msg-box {
  grid-column: 1 / -1; font-family: var(--font-mono); font-size: 12px;
  letter-spacing: 0.04em; padding: 12px 16px; border-radius: 8px; display: none; margin-top: 4px;
}

.form-msg-box.success { display: block; background: rgba(78,203,113,0.08); border: 1px solid rgba(78,203,113,0.2); color: var(--green); }
.form-msg-box.error   { display: block; background: rgba(224,112,112,0.08); border: 1px solid rgba(224,112,112,0.2); color: #e07070; }

.or-divider {
  display: flex; align-items: center; gap: 16px;
  max-width: 620px; margin: 0 auto 40px;
  color: var(--text-faint); font-family: var(--font-mono);
  font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
}
.or-divider::before, .or-divider::after { content: ''; flex: 1; height: 1px; background: var(--border); }

.email-display {
  display: inline-flex; align-items: center; gap: 16px;
  border: 1px solid var(--border); border-radius: var(--radius);
  padding: 18px 32px; background: var(--bg2); margin-bottom: 28px;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.email-display:hover { border-color: var(--border-hover); box-shadow: 0 6px 28px rgba(0,0,0,0.12); }

.email-letters { display: flex; flex-wrap: wrap; justify-content: center; }

.email-letters span {
  font-family: var(--font-mono); font-size: 20px; font-weight: 400;
  letter-spacing: 0.01em; color: var(--text); display: inline-block;
  transition: transform 0.12s, color 0.12s;
}

.email-display:hover .email-letters span { color: var(--accent); }
.email-display:hover .email-letters span:nth-child(odd)  { transform: translateY(-2px); }
.email-display:hover .email-letters span:nth-child(even) { transform: translateY(2px); }

.copy-btn {
  background: var(--tag-bg); border: 1px solid var(--border);
  color: var(--text-muted); font-family: var(--font-mono);
  font-size: 11px; padding: 6px 14px; border-radius: 6px;
  cursor: none; transition: all 0.2s; letter-spacing: 0.05em; white-space: nowrap;
}
.copy-btn:hover { background: rgba(255,255,255,0.07); border-color: var(--border-hover); color: var(--accent); }

.contact-note { color: var(--text-muted); font-size: 14px; margin-bottom: 28px; max-width: 400px; margin-left: auto; margin-right: auto; }

.cta-btn {
  display: inline-block; background: var(--accent); color: #080810;
  font-family: var(--font-mono); font-size: 13px;
  font-weight: 700; letter-spacing: 0.08em;
  padding: 15px 34px; border-radius: 10px;
  transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
}
.cta-btn:hover { opacity: 0.88; transform: translateY(-2px); box-shadow: 0 12px 32px rgba(0,0,0,0.22); }
[data-theme="light"] .cta-btn { color: #f5f5f0; }

/* ═══════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════ */
.footer {
  max-width: var(--max-width); margin: 0 auto;
  padding: 60px 48px 40px;
  display: grid; grid-template-columns: 1.5fr 1fr; gap: 40px;
}

.footer-name { font-family: var(--font-display); font-size: 22px; margin-bottom: 2px; font-weight: 700; }
.footer-role { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 12px; }
.footer-bio { font-size: 13px; color: var(--text-muted); max-width: 380px; line-height: 1.75; margin-bottom: 16px; }
.footer-links { display: flex; gap: 18px; }
.footer-links a { font-family: var(--font-mono); font-size: 12px; color: var(--text-muted); transition: color 0.2s; }
.footer-links a:hover { color: var(--accent); }
.footer-nav-label { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-faint); margin-bottom: 14px; }
.footer-nav { display: flex; flex-direction: column; gap: 8px; }
.footer-nav a { font-size: 14px; color: var(--text-muted); transition: color 0.2s, transform 0.2s; display: inline-block; }
.footer-nav a:hover { color: var(--text); transform: translateX(4px); }

.footer-copy {
  grid-column: 1 / -1;
  font-family: var(--font-mono); font-size: 11px; color: var(--text-faint);
  padding-top: 28px; border-top: 1px solid var(--border);
  text-align: center; letter-spacing: 0.05em;
}

/* ═══════════════════════════════════════════════
   THANK YOU BAR
═══════════════════════════════════════════════ */
.thankyou-bar {
  width: 100%; padding: 36px 48px 44px;
  text-align: center; border-top: 1px solid var(--border);
  background: var(--bg); position: relative; overflow: hidden;
}

.thankyou-bar::before {
  content: ''; position: absolute;
  top: 0; left: 50%; transform: translateX(-50%);
  width: 280px; height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent2), transparent);
  opacity: 0.28;
}

.thankyou-text {
  font-family: var(--font-cursive); font-style: italic;
  font-weight: 300; font-size: clamp(30px, 5vw, 58px);
  color: var(--text-muted); letter-spacing: 0.04em;
  opacity: 0.6; transition: opacity 0.4s, color 0.4s, letter-spacing 0.5s;
}

.thankyou-bar:hover .thankyou-text { opacity: 1; color: var(--accent); letter-spacing: 0.08em; }

/* ═══════════════════════════════════════════════
   SCROLL FADE-IN
═══════════════════════════════════════════════ */
.fade-in {
  opacity: 0; transform: translateY(28px);
  transition: opacity 0.75s cubic-bezier(0.25,0.46,0.45,0.94),
              transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94);
}
.fade-in.visible { opacity: 1; transform: translateY(0); }

/* ═══════════════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════════════ */
@media (max-width: 900px) {
  .live-clock .clock-desc { display: none; }
  .clock-city { display: none; }
}

@media (max-width: 768px) {
  .navbar { padding: 0 20px; }
  .nav-email-letters { display: none; }
  .hero { padding: 120px 24px 60px; gap: 24px; }
  .hero-meta { grid-template-columns: 1fr; gap: 28px; }
  .section { padding: 60px 24px; }
  .skills-grid { grid-template-columns: 1fr; }
  .projects-grid { grid-template-columns: 1fr; }
  .footer { grid-template-columns: 1fr; padding: 48px 24px 32px; gap: 28px; }
  .email-display { flex-direction: column; padding: 16px 20px; }
  .email-letters span { font-size: 15px; }
  .contact-section { padding: 60px 24px 80px; }
  .thankyou-bar { padding: 28px 24px 36px; }
  .contact-grid { grid-template-columns: 1fr; }
  .contact-field.full { grid-column: 1; }
  .form-footer-row { flex-direction: column; align-items: stretch; }
  .send-btn { justify-content: center; }
  #luffyCanvas { display: none; }

  /* Spin badge — no Luffy on mobile, so move it to bottom right */
  .spin-badge-fixed { right: 10px; bottom: 14px; width: 86px; height: 86px; }

  /* Pull switch — slightly closer to edge */
  .pull-switch { right: 12px; }
  .ps-cord-line { height: 46px; }
}

@media (max-width: 480px) {
  .hero-name { font-size: 46px; }
  .exp-header, .exp-body { padding: 18px 20px; }
  .sound-btn { bottom: 14px; left: 14px; }
  .spin-badge-fixed { width: 74px; height: 74px; }
  .spin-text-fixed { font-size: 9px; letter-spacing: 2px; }
}
