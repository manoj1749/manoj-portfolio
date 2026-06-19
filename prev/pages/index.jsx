import Head from 'next/head';

import Navbar           from '../components/Navbar';
import GifScrollOverlay from '../components/GifScrollOverlay';
import Hero             from '../components/sections/Hero';
import About            from '../components/sections/About';
import Work        from '../components/sections/Work';
import Experience  from '../components/sections/Experience';
import Recognition from '../components/sections/Recognition';
import Contact     from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Manoj Sadanala</title>
        <meta name="description" content="CS graduate student at Stevens. Embedded systems, machine learning, mobile development." />
        <meta property="og:title"       content="Manoj Sadanala" />
        <meta property="og:description" content="CS graduate student at Stevens. Embedded systems, machine learning, mobile development." />
        <meta property="og:type"        content="website" />
        <meta name="viewport"           content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <GifScrollOverlay />
      <Hero />

      <main className="site-main">
        <About />
        <div className="section__divider" />
        <Work />
        <div className="section__divider" />
        <Experience />
        <div className="section__divider" />
        <Recognition />
        <div className="section__divider" />
        <Contact />

        <footer className="footer">
          <div className="container">
            <div className="footer__inner">
              <span className="footer__copy">© 2026 Manoj Parasuram Sadanala</span>
              <span className="footer__loc">Jersey City, NJ</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
