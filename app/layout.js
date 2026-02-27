import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://hemax.vercel.app"),
  title: {
    default: "Hemax Patel | Space Theme Developer Portfolio",
    template: "%s | Hemax Patel",
  },
  description:
    "Immersive space-themed portfolio of Full Stack Developer Hemax Patel. Featuring React, Next.js, Node.js, .NET Core with cosmic animations, particle effects, and interactive 3D elements. Explore projects in a stunning universe-inspired design.",
  keywords: [
    "Hemax Patel",
    "Space Theme Portfolio",
    "Space Themed Website",
    "Cosmic Portfolio",
    "Interactive Portfolio",
    "3D Portfolio Design",
    "Particle Effects Portfolio",
    "Animated Portfolio",
    "Creative Developer Portfolio",
    "Full Stack Developer",
    ".NET Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Software Engineer",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Google Cloud",
    "Framer Motion",
    "Three.js Portfolio",
  ],
  authors: [{ name: "Hemax Patel" }],
  creator: "Hemax Patel",
  publisher: "Hemax Patel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hemax.vercel.app",
    siteName: "Hemax Patel Portfolio",
    title:
      "Hemax Patel | Space Theme Developer Portfolio with Cosmic Animations",
    description:
      "Experience an immersive space-themed developer portfolio featuring particle effects, cosmic animations, and 3D elements. Full Stack Developer specializing in React, Next.js, Node.js with stunning visual design.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hemax Patel - Space Theme Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemax Patel | Space Theme Developer Portfolio",
    description:
      "Immersive space-themed portfolio with cosmic animations & particle effects. Full Stack Developer specializing in React, Next.js, Node.js.",
    creator: "@hemaxpatel",
    images: ["/og-image.png"],
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
    google: "your-google-verification-code",
    // Add after verifying in Google Search Console
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hemax Patel",
    url: "https://hemax.vercel.app",
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer with a space-themed interactive portfolio featuring cosmic animations, particle effects, and 3D elements. Specializing in React, Next.js, Node.js, .NET Core and cloud technologies",
    sameAs: [
      "https://github.com/hemaxpatel",
      "https://linkedin.com/in/hemaxpatel",
      "https://leetcode.com/u/hemaxpatel/",
      "https://www.hackerrank.com/profile/hemaxpatel",
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Google Cloud",
      "Full Stack Development",
      "Framer Motion",
      "Three.js",
      "3D Animations",
      "Particle Effects",
      "Interactive UI Design",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
