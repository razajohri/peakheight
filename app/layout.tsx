import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://usepeakheight.com";

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
  metadataBase: new URL(siteUrl),
  title: "PeakHeight - Grow Taller Naturally with Science-Backed Height Growth App",
  description:
    "Unlock your height potential with PeakHeight. Science-backed daily routines, expert exercises, nutrition tracking, and community support to help you grow taller naturally. Join 10,000+ users maximizing their height.",
  keywords:
    "height growth app, grow taller naturally, height increase exercises, grow taller app, height maximizer, increase height, grow taller fast, height growth exercises",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "PeakHeight - Grow Taller Naturally with Science-Backed Height Growth App",
    description:
      "Science-backed daily routines, exercises, nutrition tracking, and community support to help you grow taller naturally.",
    url: "/",
    images: [
      {
        url: "/assets/peakheight-logo.png",
        width: 512,
        height: 512,
        alt: "PeakHeight logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PeakHeight - Grow Taller Naturally",
    description:
      "Science-backed routines, exercises, nutrition, and sleep tracking to maximize your height potential.",
    images: ["/assets/peakheight-logo.png"],
  },
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

