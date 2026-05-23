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
  title: "StarryArts ✨ Kawaii Artist Shop",
  description: "Magical art, stickers, and prints by StarryArts. Catch me at anime conventions!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable} antialiased`}>
      <body className="min-h-full bg-[#FFF8FB] text-[#4A2B4D]" style={{ fontFamily: 'var(--font-nunito), sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
