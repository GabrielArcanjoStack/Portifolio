import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gabriel Arcanjo | Portfolio',
  description: 'Portfolio do desenvolvedor full stack Gabriel Arcanjo Garrido',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className + ' bg-gray-50 text-gray-900'}>{children}</body>
    </html>
  );
}
