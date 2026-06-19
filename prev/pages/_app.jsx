import { Syne, Space_Mono, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import '../styles/main.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--syne',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--space-mono',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--inter',
  display: 'swap',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div
      className={`${syne.variable} ${spaceMono.variable} ${inter.variable}`}
      style={{ display: 'contents' }}
    >
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
