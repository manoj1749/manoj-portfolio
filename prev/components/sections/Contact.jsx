import { useEffect, useRef } from 'react';

const LINKS = [
  { label: 'Email',    name: 'manoj.sadanala149@gmail.com',  href: 'mailto:manoj.sadanala149@gmail.com' },
  { label: 'LinkedIn', name: 'linkedin.com/in/manojsadanala', href: 'https://www.linkedin.com/in/manojsadanala/' },
  { label: 'GitHub',   name: 'github.com/manoj1749',          href: 'https://github.com/manoj1749' },
];

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add('is-visible'); },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="contact">
      <div className="container">
        <div ref={sectionRef} className="fade-up">
          <div className="section__header">
            <span className="section__num">05</span>
            <h2 className="section__title">Contact</h2>
          </div>

          <p className="contact__intro">
            Open to research collaborations, internships, and full-time roles.
            If you're working on something interesting at the intersection of
            hardware, ML, or mobile — I'd like to hear about it.
          </p>

          <ul className="contact__links">
            {LINKS.map(l => (
              <li key={l.label} className="contact__link-item">
                <a
                  href={l.href}
                  className="contact__link"
                  target={l.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={l.href.startsWith('mailto') ? undefined : 'noreferrer'}
                >
                  <span className="contact__link-label">{l.label}</span>
                  <span className="contact__link-name">{l.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
