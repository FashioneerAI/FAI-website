import type { Metadata } from "next";
import { Inter, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fashioneer.ai - Pioneering the Future of Personal Style",
  description: "AI-powered fashion assistant platform with 3D try-on, virtual styling, and voice-cloned fashion storytelling. Discover, preview, and perfect your outfits with cutting-edge technology.",
  keywords: ["AI fashion", "virtual try-on", "3D styling", "fashion technology", "personal style", "AI stylist"],
  authors: [{ name: "Fashioneer.ai" }],
  creator: "Fashioneer.ai",
  publisher: "Fashioneer.ai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Fashioneer.ai - Pioneering the Future of Personal Style",
    description: "AI-powered fashion assistant platform with 3D try-on, virtual styling, and voice-cloned fashion storytelling.",
    url: "https://fashioneer.ai",
    siteName: "Fashioneer.ai",
    images: [
      {
        url: "https://fashioneer.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fashioneer.ai - AI Fashion Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashioneer.ai - Pioneering the Future of Personal Style",
    description: "AI-powered fashion assistant platform with 3D try-on, virtual styling, and voice-cloned fashion storytelling.",
    images: ["https://fashioneer.ai/twitter-image.jpg"],
    creator: "@fashioneer_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${bodoniModa.variable} font-ui antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
