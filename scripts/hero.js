(function () {
  const overlay = document.querySelector('.gif-overlay');
  const frameA  = document.getElementById('gif-frame-a');
  const frameB  = document.getElementById('gif-frame-b');
  if (!overlay) return;

  /* 2-frame hard-cut GIF at 500ms */
  let frame = 0;
  setInterval(() => {
    frame ^= 1;
    if (frameA) frameA.style.opacity = frame === 0 ? '1' : '0';
    if (frameB) frameB.style.opacity = frame === 1 ? '1' : '0';
  }, 500);

  /* Ease curve: cubic ease-in-out applied to the raw scroll progress.
     Makes the shrink start gently, accelerate through the middle,
     then settle softly into the About photo position. */
  const ease = (t) => t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;

  let target     = null;
  let crossFired = false;
  let hideTimer  = null;

  const measure = () => {
    const photo = document.querySelector('.about-photo-wrap');
    if (!photo) return;
    const r      = photo.getBoundingClientRect();
    const docTop  = r.top  + window.scrollY;
    const docLeft = r.left + window.scrollX;
    const heroH   = window.innerHeight;
    target = {
      toCX:  docLeft + r.width  / 2,
      toCY:  (docTop - heroH)   + r.height / 2,
      scale: r.height / heroH,
    };
  };

  setTimeout(measure, 200);
  window.addEventListener('resize', measure);

  const resetOverlay = () => {
    clearTimeout(hideTimer);
    crossFired = false;
    overlay.style.display    = '';
    overlay.style.transition = '';
    overlay.style.opacity    = '1';
    overlay.style.transform  = '';
    document.body.classList.remove('hero-done');

    const txt = document.querySelector('.hero-text');
    if (txt) txt.style.opacity = '1';
  };

  const triggerCrossFade = () => {
    if (crossFired) return;
    crossFired = true;
    overlay.style.transition = 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
    overlay.style.opacity    = '0';
    document.body.classList.add('hero-done');
    hideTimer = setTimeout(() => { overlay.style.display = 'none'; }, 700);
  };

  window.addEventListener('scroll', () => {
    const sy    = window.scrollY;
    const heroH = window.innerHeight;

    /* Back into hero from below */
    if (crossFired && sy < heroH) { resetOverlay(); return; }

    /* Past hero → cross-fade */
    if (!crossFired && sy >= heroH) { triggerCrossFade(); return; }

    if (crossFired) return;

    /* Hero text fades out from 10%–60% scroll */
    const txt = document.querySelector('.hero-text');
    if (txt) {
      const tp = Math.min(1, Math.max(0, (sy - heroH * 0.1) / (heroH * 0.5)));
      txt.style.opacity = Math.max(0, 1 - tp).toFixed(3);
    }

    /* First 10%: full-screen, no transform */
    if (sy <= heroH * 0.1) {
      overlay.style.transition = '';
      overlay.style.transform  = '';
      overlay.style.opacity    = '1';
      return;
    }

    /* Shrink window: 10% → 100% of heroH */
    const raw = (sy - heroH * 0.1) / (heroH * 0.9);   // 0 → 1 linear
    const p   = ease(Math.min(1, raw));                  // eased

    if (!target) { measure(); if (!target) return; }

    const vw  = window.innerWidth;
    const vh  = window.innerHeight;
    const cur = 1 + (target.scale - 1) * p;
    const tx  = (target.toCX - vw / 2) * p;
    const ty  = (target.toCY - vh / 2) * p;

    overlay.style.transition = '';
    overlay.style.opacity    = '1';
    overlay.style.transform  = `translate(${tx.toFixed(1)}px,${ty.toFixed(1)}px) scale(${cur.toFixed(4)})`;
  }, { passive: true });
})();
