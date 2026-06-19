import { useEffect, useRef } from 'react';

const PROJECTS = [
  {
    name: 'ClaimCrane',
    badge: '1st Place',
    year: 'Mar 2026',
    stack: 'Python · FastAPI · React',
    desc: 'AI insurance fraud detection pipeline. Stage 1: computer vision forensics (Error Level Analysis, noise pattern analysis, FFT, JPEG grid, EXIF). Stage 2: dynamically constructed prompts into a Gemma 3 27B vision-language model with per-vertical validation logic.',
    url: 'https://github.com/manoj1749/ClaimCrane',
  },
  {
    name: 'PolicyDiff',
    badge: '1st Place',
    year: 'May 2026',
    stack: 'Python · ClickHouse',
    desc: 'Agentic policy document comparison — won the ClickHouse Track at the Agentic Engineering Hackathon by Tokens.',
    url: null,
  },
  {
    name: 'Tayba Manzil',
    badge: '10K+ Downloads',
    year: '2024',
    stack: 'Flutter · Firebase · GitHub Actions',
    desc: 'Prayer app: GPS-based prayer times, Qibla compass, push notifications, Quran PDF viewer, Arabic/English localization. 10,000+ downloads, 1,000+ monthly active users.',
    url: null,
  },
  {
    name: 'Wearable IMU Gait System',
    badge: 'Research',
    year: '2025',
    stack: 'Python · TensorFlow · C/C++ · ESP32',
    desc: 'Parkinson\'s gait analysis using ESP32 + MPU6050/BNO055 with Kalman filtering. LSTM and ensemble classifiers — 99% accuracy, 87% Macro-F1. Prototype ~99% cheaper than commercial gait devices. Paper under review.',
    url: 'https://github.com/manoj1749/gait-research',
  },
  {
    name: 'LoRaSense',
    badge: 'Research',
    year: '2024',
    stack: 'Python · PyTorch · CUDA',
    desc: 'CNN-based LoRa signal classifier using ResNet on spectrogram images. Custom 4-device dataset with synthetic urban noise. 89.47% real-time accuracy.',
    url: 'https://github.com/manoj1749/LoRa-ResNET',
  },
  {
    name: 'Lotus Aura Boutique',
    badge: 'Freelance',
    year: 'Apr 2026',
    stack: 'Next.js · Drizzle ORM · Turso · Tailwind v4',
    desc: 'Full e-commerce storefront for a fashion client. 45+ production deployments. App Router, Drizzle + LibSQL, Vercel Blob.',
    url: 'https://github.com/manoj1749/lotusaura-boutique',
  },
];

export default function Work() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add('is-visible'); },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="work">
      <div className="container">
        <div ref={sectionRef} className="fade-up">
          <div className="section__header">
            <span className="section__num">02</span>
            <h2 className="section__title">Work</h2>
          </div>

          <ul className="work__list">
            {PROJECTS.map((p, i) => (
              <li key={p.name} className="work__item">
                <span className="work__idx">{String(i + 1).padStart(2, '0')}</span>

                <div className="work__body">
                  <div className="work__name">{p.name}</div>
                  <div className="work__expand">
                    {p.desc}
                    {p.stack && <span className="work__stack">{p.stack}</span>}
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="work__gh"
                        onClick={e => e.stopPropagation()}
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>

                <div className="work__meta">
                  <span className="work__badge">{p.badge}</span>
                  <span className="work__year">{p.year}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
