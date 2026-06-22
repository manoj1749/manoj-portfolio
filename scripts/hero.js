(function () {
  const overlay = document.querySelector('.gif-overlay');
  const frameA  = document.getElementById('gif-frame-a');
  const frameB  = document.getElementById('gif-frame-b');
  if (!overlay) return;

  let gifFrame = 0;
  setInterval(() => {
    gifFrame ^= 1;
    if (frameA) frameA.style.opacity = gifFrame === 0 ? '1' : '0';
    if (frameB) frameB.style.opacity = gifFrame === 1 ? '1' : '0';
  }, 500);

  const ANIM_START    = 0.05;
  const FADE_AT       = 0.80;
  const MOBILE_FADE   = 0.55;

  const ease = (t) => 1 - Math.pow(1 - t, 3);

  let target     = null;
  let crossFired = false;
  let hideTimer  = null;

  const resetFrames = () => {
    if (frameA) frameA.style.transform = '';
    if (frameB) frameB.style.transform = '';
  };

  const measure = () => {
    const photo = document.querySelector('.about-photo-wrap');
    if (!photo) return;
    const r     = photo.getBoundingClientRect();
    const heroH = window.innerHeight;
    target = {
      toCX:  r.left + window.scrollX + r.width  / 2,
      toCY:  (r.top + window.scrollY - heroH) + r.height / 2,
      scale: r.height / heroH,
    };
  };

  setTimeout(measure, 200);
  window.addEventListener('resize', measure);

  const triggerCrossFade = () => {
    if (crossFired) return;
    crossFired = true;
    resetFrames();
    overlay.style.transition = 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
    overlay.style.opacity    = '0';
    document.body.classList.add('hero-done');
    hideTimer = setTimeout(() => { overlay.style.display = 'none'; }, 600);
  };

  const txt = document.querySelector('.hero-text');
  let scheduled = false;
  let lastSy    = 0;

  const tick = () => {
    scheduled = false;
    const sy       = lastSy;
    const heroH    = window.innerHeight;
    const mobile   = window.innerWidth <= 720;
    const fadePt   = mobile ? MOBILE_FADE : FADE_AT;
    const fadeSy   = heroH * (ANIM_START + (1 - ANIM_START) * fadePt);

    if (crossFired && sy < fadeSy) {
      clearTimeout(hideTimer);
      crossFired = false;
      overlay.style.display    = '';
      overlay.style.transition = '';
      overlay.style.opacity    = '1';
      document.body.classList.remove('hero-done');
    }

    if (crossFired) return;

    if (txt) {
      const tp = Math.min(1, Math.max(0, (sy - heroH * 0.1) / (heroH * 0.4)));
      txt.style.opacity = (1 - tp).toFixed(3);
    }

    if (sy <= heroH * ANIM_START) {
      overlay.style.transition = '';
      overlay.style.transform  = '';
      overlay.style.opacity    = '1';
      resetFrames();
      return;
    }

    const raw = (sy - heroH * ANIM_START) / (heroH * (1 - ANIM_START));
    const p   = Math.min(1, raw);
    const ep  = ease(p);

    if (!target) { measure(); if (!target) return; }

    const vw = window.innerWidth, vh = window.innerHeight;
    const tx = (target.toCX - vw / 2) * ep;
    const ty = (target.toCY - vh / 2) * ep;

    if (mobile) {
      // On mobile: overlay translates without shrinking so landscape stays full quality.
      // Counter-translate the images so the landscape pans (revealing different parts)
      // as the overlay slides toward the about-photo.
      overlay.style.transform = `translate(${tx.toFixed(1)}px,${ty.toFixed(1)}px)`;
      if (frameA) frameA.style.transform = `translate(${(-tx).toFixed(1)}px,${(-ty).toFixed(1)}px)`;
      if (frameB) frameB.style.transform = `translate(${(-tx).toFixed(1)}px,${(-ty).toFixed(1)}px)`;
    } else {
      const sc = 1 + (target.scale - 1) * ep;
      overlay.style.transform = `translate(${tx.toFixed(1)}px,${ty.toFixed(1)}px) scale(${sc.toFixed(4)})`;
      resetFrames();
    }

    overlay.style.transition = '';
    overlay.style.opacity    = '1';

    if (p >= fadePt) triggerCrossFade();
  };

  window.addEventListener('scroll', () => {
    lastSy = window.scrollY;
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(tick);
    }
  }, { passive: true });
})();
