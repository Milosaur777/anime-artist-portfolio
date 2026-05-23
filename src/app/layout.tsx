import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "StarryArts ✨ Galaxy Mana Edition",
  description: "Magical art, stickers, and prints by StarryArts. Channeling galaxy mana into every piece!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable} antialiased dark`}>
      <body className="min-h-full bg-[#0D0612] text-[#F0E6FF]" style={{ fontFamily: 'var(--font-nunito), sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
