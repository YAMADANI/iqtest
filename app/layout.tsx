import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const NotoSans = Noto_Sans_JP({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "IQ教えたるで",
  description: "あんたのIQ教えてたるで🤣🤣🤣",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body
        className={"antialiased font-noto-sans"}
      >
        {children}
      </body>
    </html>
  );
}
