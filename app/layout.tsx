import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import type React from 'react';
// Next.js processes this global stylesheet at runtime; TypeScript may not have a CSS module declaration.
// @ts-ignore
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
});

export const metadata: Metadata = {
  title: 'Shubham Kumar - Full Stack Developer',
  description: 'Full Stack mobile app developer with 4 years of experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
