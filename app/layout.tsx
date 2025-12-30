import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Enhanced metadata for SEO and social sharing
export const metadata: Metadata = {
  // Basic SEO
  title: {
    default: "Brain Eaters - Post-Apocalyptic Survival Strategy Game",
    template: "%s | Brain Eaters" // For page-specific titles
  },
  description: "Brain Eaters is a cooperative survival strategy game set in a post-apocalyptic world. Build your city, defend against zombie attacks, explore dangerous wastelands, and cooperate with other survivors to stay alive.",
  
  // Keywords for search engines
  keywords: [
    "survival game",
    "strategy game",
    "cooperative game",
    "multiplayer survival",
    "zombie survival",
    "post-apocalyptic game",
    "city building game",
    "Brain Eaters",
    "Mobile Game"
  ],
  
  // Author information
  authors: [{ name: "Brain Eaters Team" }],
  creator: "Brain Eaters Team",
  
  // Robots - control search engine crawling
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  
  // Open Graph - For social media sharing (Facebook, LinkedIn, Discord)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com", // TODO: Replace with your actual domain
    siteName: "Brain Eaters",
    title: "Brain Eaters - Survive Together or Die Alone",
    description: "A new genre of survival game. Build, defend, explore, and cooperate in a post-apocalyptic world where every decision matters.",
    images: [
      {
        url: "/images/og-image.jpg", // TODO: Create this image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Brain Eaters Game - Post-Apocalyptic Survival",
      },
    ],
  },
  
  // Twitter Card - For Twitter sharing
  twitter: {
    card: "summary_large_image",
    title: "Brain Eaters - Survive Together or Die Alone",
    description: "Build, defend, explore, and cooperate in a post-apocalyptic survival strategy game.",
    images: ["/images/twitter-card.jpg"], // TODO: Create this image (1200x600px recommended)
    creator: "@yourtwitterhandle", // TODO: Add your Twitter handle if you have one
  },
  
  // Additional metadata
  category: "Gaming",
  
  // Verification (add when you set these up)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bodyLayout`}
      >
        <header className={"navbar"}>
          <nav className={"navLeft"}>
            <a href="/" className={"navLink"}>Home</a>
            <a href="/game" className={"navLink"}>Game</a>
            <a href="#roadmap" className={"navLink"}>Roadmap</a>
            <a href="/team" className={"navLink"}>Team</a>
          </nav>

          <nav className={"navRight"}>
            <a href="#login" className={"navLink"}>Login</a>
            <a href="#signup" className={"navLink"}>Create Account</a>
          </nav>
        </header>
        
        <main className="page">
          {children}
        </main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Brain Eaters - All rights reserved.</p>
          <a href="#contact" className="footerLink">Contact Us</a>
        </footer>
      </body>
    </html>
  );
}