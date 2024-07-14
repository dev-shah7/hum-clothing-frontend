import type { Metadata } from 'next';
import { NextUIProvider } from '@nextui-org/react';
import { Inter } from 'next/font/google';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
const inter = Inter({ subsets: ['latin'] });

import './globals.scss';

export const metadata: Metadata = {
  title: 'HUM Clothing',
  description: 'Best clothing store in the world',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextUIProvider>
          <header>
            <Header />
          </header>
          <main>{children}</main>
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
