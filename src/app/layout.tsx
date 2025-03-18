import type { Metadata } from 'next';

import { Roboto } from 'next/font/google';

import './globals.css';

const roboto = Roboto({
  variable: '--font-geist-sans',
  weight: ['100', '300', '400', '500', '700', '900']
});

export const metadata: Metadata = {
  title: 'Roberto Aleydon',
  description: 'Roberto Aleydon Portfolio'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}  antialiased`}>{children}</body>
    </html>
  );
}
