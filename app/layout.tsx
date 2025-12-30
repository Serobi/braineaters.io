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
    default: "Brain Eaters - Cooperative Survival Strategy Game",
    template: "%s | Brain Eaters" // For page-specific titles
  },
  description: "Brain Eaters is a cooperative survival strategy game set in a post-apocalyptic world. Build your city, defend against zombie attacks, explore dangerous wastelands, and cooperate with other survivors to stay alive.",
  
  // Keywords for search engines
  keywords: [
    "cooperative survival game",
    "post-apocalyptic strategy game",
    "zombie survival game",
    "city building survival",
    "multiplayer strategy game",
    "Brain Eaters",
    "mobile survival game",
    "PC survival game"
  ],
  // Author information
  authors: [{ name: "Serobi" }],
  creator: "Serobi",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://braineatersgame.com",
    siteName: "Brain Eaters",
    title: "Brain Eaters - Cooperative Survival Strategy Game on Mobile and PC",
    description: "A new genre of survival game. Build, defend, explore, and cooperate in a post-apocalyptic world where every decision matters.",
    images: [
      {
        url: "https://braineatersgame.com/images/Logo_B.png",
        width: 1024,
        height: 1024,
        alt: "Brain Eaters - Cooperative Survival Strategy Game",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Brain Eaters - Cooperative Survival Strategy Game on Mobile and PC",
    description: "Build, defend, explore, and cooperate in a post-apocalyptic survival strategy game.",
    images: ["/images/Logo_B.png"],
    creator: "@mrserobi",
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