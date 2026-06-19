import { useEffect, useRef } from 'react';

const ROLES = [
  {
    date: 'Feb 2026 – Present',
    role: 'Hardware / Firmware Engineer',
    org: 'WRS Lab · Stevens Institute of Technology',
    detail: 'Firmware for wearable sensing on ESP32 and XIAO MG24 in C/C++. Cut SD write latency 2000ms → 535ms; reduced WiFi radio draw 40–50% on ESP32-S3 while maintaining real-time UDP. Lab contact for the Simbex partnership.',
  },
  {
    date: 'Nov 2024 – Jul 2025',
    role: 'iOS App Developer (Flutter)',
    org: 'Go Eleventh Mile · Hyderabad',
    detail: 'Flutter iOS: real-time ride tracking, odometer verification, Live Activities. BLoC/Cubit + Clean Architecture, GetIt DI. Integrations: Google Maps, Razorpay, FCM, Crashlytics. Full App Store pipeline via TestFlight. 1,000+ users.',
  },
  {
    date: 'Apr – Aug 2025',
    role: 'Freelance Software Developer',
    org: 'Magnet Power Tech Solutions · Coimbatore',
    detail: 'Solo-built a 9-module IMS (Accounts, HR, Sales, Production, QC, and more) for a manufacturing client. Flutter + Firebase, offline-first with Hive + Firestore sync. 358 commits.',
  },
  {
    date: 'Jun 2024 – May 2025',
    role: 'Research Assistant',
    org: 'Amrita Mind Brain Center · Amrita Vishwa Vidyapeetham',
    detail: 'Wearable IMU gait system for Parkinson\'s research. ESP32 + IMU sensors, Kalman filtering. LSTM and ensemble ML — 99% accuracy, 87% Macro-F1. Paper under review.',
  },
  {
    date: 'Jun – Sep 2023',
    role: 'Flutter Developer',
    org: 'Ostello AI · New Delhi',
    detail: 'Core mobile features: auth, psychometric assessments, chatbot. Node.js + SQL backend, Firebase auth. Led iOS and Android deployment.',
  },
  {
    date: 'Jul – Oct 2023',
    role: 'Hardware Security Researcher',
    org: 'Redantio Solutions · Kollam',
    detail: 'AI-based LoRa signal detection and frequency extraction via feed-forward neural network (~93% accuracy). Python SDR integration and web GUI for live identification.',
  },
];

export default function Experience() {
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
    <section className="section" id="experience">
      <div className="container">
        <div ref={sectionRef} className="fade-up">
          <div className="section__header">
            <span className="section__num">03</span>
            <h2 className="section__title">Experience</h2>
          </div>

          <ul className="exp__list">
            {ROLES.map(r => (
              <li key={r.role + r.org} className="exp__item">
                <span className="exp__date">{r.date}</span>
                <div>
                  <p className="exp__role">{r.role}</p>
                  <p className="exp__org">{r.org}</p>
                  <p className="exp__detail">{r.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
