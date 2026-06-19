import { useState, useEffect, useRef } from 'react';

export default function GifScrollOverlay() {
  const [frame, setFrame] = useState(0);
  const elRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setFrame(f => f ^ 1), 500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    let target     = null;
    let crossFired = false;   // cross-fade triggered?
    let hideTimer  = null;

    const measure = () => {
      const photo = document.querySelector('.about__photo-wrap');
      if (!photo) return;
      const r     = photo.getBoundingClientRect();
      const docTop  = r.top  + window.scrollY;
      const docLeft = r.left + window.scrollX;
      const heroH   = window.innerHeight;

      target = {
        toCX:  docLeft + r.width  / 2,
        // where the photo's center sits in the viewport when scrollY === heroH
        toCY:  (docTop - heroH)   + r.height / 2,
        // uniform scale: shrink GIF so its HEIGHT matches the photo's height
        scale: r.height / heroH,
      };
    };

    const resetOverlay = () => {
      clearTimeout(hideTimer);
      crossFired = false;
      el.style.display    = '';
      el.style.transition = '';
      el.style.opacity    = '1';
      el.style.transform  = '';
      document.body.classList.remove('hero-anim-done');
    };

    const triggerCrossFade = () => {
      if (crossFired) return;
      crossFired = true;

      el.style.transition = 'opacity 0.5s ease';
      el.style.opacity    = '0';
      document.body.classList.add('hero-anim-done');

      hideTimer = setTimeout(() => { el.style.display = 'none'; }, 600);
    };

    const t = setTimeout(measure, 200);
    window.addEventListener('resize', measure);

    const onScroll = () => {
      const sy    = window.scrollY;
      const heroH = window.innerHeight;

      // User scrolled BACK UP into the hero — restore the overlay
      if (crossFired && sy < heroH) {
        resetOverlay();
      }

      // Scrolled past the hero — trigger cross-fade
      if (!crossFired && sy >= heroH) {
        triggerCrossFade();
        return;
      }

      if (crossFired) return;

      // First 20% of hero: stay full-screen, opaque
      if (sy <= heroH * 0.2) {
        el.style.transition = '';
        el.style.transform  = '';
        el.style.opacity    = '1';
        return;
      }

      // Shrink phase: 20% → 100% of heroH
      const p  = (sy - heroH * 0.2) / (heroH * 0.8);   // 0 → 1

      if (!target) { measure(); if (!target) return; }

      const vw  = window.innerWidth;
      const vh  = window.innerHeight;

      const curScale = 1 + (target.scale - 1) * p;
      const curTX    = (target.toCX - vw / 2) * p;
      const curTY    = (target.toCY - vh / 2) * p;

      // Stays fully opaque — cross-fade only fires when scroll passes heroH
      el.style.transition = '';
      el.style.transform  = `translate(${curTX.toFixed(1)}px,${curTY.toFixed(1)}px) scale(${curScale.toFixed(4)})`;
      el.style.opacity    = '1';
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      clearTimeout(hideTimer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <div
      ref={elRef}
      aria-hidden="true"
      style={{
        position:      'fixed',
        inset:         0,
        zIndex:        20,
        pointerEvents: 'none',
        willChange:    'transform, opacity',
      }}
    >
      <img
        src="/img/images_manoj/manoj-2.jpg"
        alt=""
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 30%',
          opacity: frame === 0 ? 1 : 0,
          filter: 'brightness(0.78) saturate(0.85)',
        }}
      />
      <img
        src="/img/images_manoj/manoj-3.jpg"
        alt=""
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 30%',
          opacity: frame === 1 ? 1 : 0,
          filter: 'brightness(0.78) saturate(0.85)',
        }}
      />
    </div>
  );
}
