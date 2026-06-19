import { useEffect, useRef } from 'react';

const ITEMS = [
  { title: '1st Place — ClickHouse Track', sub: 'Agentic Engineering Hackathon by Tokens · PolicyDiff · May 2026' },
  { title: '1st Place — Chubb Track',      sub: 'Stevens QuackHacks 2026 · ClaimCrane · March 2026' },
  { title: 'Global Nominee + Galactic Impact Award', sub: 'NASA Space Apps Challenge 2023' },
  { title: 'National Finalist (Runner-up)', sub: 'Kavach Cybersecurity Hackathon · Ministry of India · 2023' },
  { title: 'Local Impact Award',            sub: 'NASA Space Apps Challenge 2022' },
  { title: 'Publication — Under Review',   sub: 'Transforming Mobility Analysis through Wearable IMU Devices and Deep Learning' },
  { title: 'Publication — IEEE ICCCNT 2024', sub: 'Detecting, Demodulating, Decoding LoRa · DOI: 10.1109/ICCCNT61001.2024.10725687' },
];

export default function Recognition() {
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
    <section className="section" id="recognition">
      <div className="container">
        <div ref={sectionRef} className="fade-up">
          <div className="section__header">
            <span className="section__num">04</span>
            <h2 className="section__title">Recognition</h2>
          </div>

          <ul className="recog__list">
            {ITEMS.map((item, i) => (
              <li key={item.title} className="recog__item">
                <span className="recog__num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="recog__text">{item.title}</p>
                  <span className="recog__sub">{item.sub}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
