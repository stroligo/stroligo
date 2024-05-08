import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'stroligo.dev',
  description: 'Personal website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt_br">
      <SpeedInsights />

      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
