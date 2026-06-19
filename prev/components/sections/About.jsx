import { useEffect, useRef } from 'react';

const SKILLS = [
  'Python', 'C / C++', 'Dart · Flutter', 'TypeScript', 'React · Next.js',
  'Node.js', 'Swift', 'Java', 'TensorFlow', 'PyTorch', 'OpenCV',
  'Firebase', 'AWS', 'Docker', 'SQL', 'Linux', 'ESP32 · Firmware',
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add('is-visible'); },
      { threshold: 0.04 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="about">
      <div className="container">
        <div ref={sectionRef} className="fade-up">
          <div className="section__header">
            <span className="section__num">01</span>
            <h2 className="section__title">About</h2>
          </div>

          <div className="about__layout">
            <div>
              <div className="about__prose">
                <p>
                  CS graduate student at <strong>Stevens Institute of Technology</strong>,
                  working across embedded systems, applied machine learning, and mobile
                  development. At the WRS Lab I write firmware for wearable sensing hardware
                  on ESP32 and XIAO MG24 platforms in C/C++ — the kind of low-level work
                  that sits a layer below the model.
                </p>
                <p>
                  Before Stevens I was at <strong>Amrita Vishwa Vidyapeetham</strong> (ECE),
                  where I spent three years in amFOSS — an open-source collective — mentoring
                  contributors and shipping Flutter projects to real users. That overlap of
                  research, product, and community is still how I think about work.
                </p>
                <p>
                  I've shipped across the stack: Flutter apps with 10K+ downloads, an
                  AI fraud detection pipeline that won a hackathon, gait analysis firmware
                  with 99% classification accuracy, and a full-stack e-commerce platform
                  with 45+ production deployments.
                </p>
              </div>

              <div className="about__skills">
                <p className="about__skills-label">Tools</p>
                <div className="about__tags">
                  {SKILLS.map(s => (
                    <span key={s} className="about__tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo — hidden until hero GIF animation lands here */}
            <div className="about__photo-wrap">
              <img
                src="/img/images_manoj/manoj-1.jpg"
                alt="Manoj Sadanala"
                className="about__photo-still"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
