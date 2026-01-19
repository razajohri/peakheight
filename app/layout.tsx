import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "PeakHeight - Grow Taller Naturally with Science-Backed Height Growth App",
  description: "Unlock your height potential with PeakHeight. Science-backed daily routines, expert exercises, nutrition tracking, and community support to help you grow taller naturally. Join 10,000+ users maximizing their height.",
  keywords: "height growth app, grow taller naturally, height increase exercises, grow taller app, height maximizer, increase height, grow taller fast, height growth exercises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

