import { useEffect, useRef } from 'react';

export default function Hero() {
  const txtRef = useRef(null);

  /* Fade text out as the user scrolls down through the hero */
  useEffect(() => {
    const txt = txtRef.current;
    if (!txt) return;
    const onScroll = () => {
      const p = Math.min(1, window.scrollY / window.innerHeight);
      txt.style.opacity = Math.max(0, 1 - p * 2.5).toFixed(3);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero" id="top" aria-label="Hero">
      {/* Dark background shows behind/under the fixed GIF overlay */}
      <div className="hero__overlay" aria-hidden="true" />

      <div ref={txtRef} className="hero__content">
        <span className="hero__eyebrow">manoj parasuram sadanala</span>
        <h1 className="hero__name">
          <span className="hero__name-line">MANOJ</span>
          <span className="hero__name-line">SADANALA</span>
        </h1>
        <div className="hero__meta">
          <span className="hero__tagline">Embedded · ML · Mobile</span>
          <div className="hero__sep" aria-hidden="true" />
          <span className="hero__tagline">Stevens Institute of Technology</span>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
