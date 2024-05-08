import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'stroligo.dev',
  description: 'Personal website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt_br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}