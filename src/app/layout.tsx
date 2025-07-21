import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Carlos Murillo | Full Stack Developer Portfolio",
  description: "Portfolio of Juan Carlos Murillo, Full Stack Developer specializing in PHP, Laravel, React Native, MySQL, and Next.js.",
  keywords: [
    "Juan Carlos Murillo",
    "Full Stack Developer",
    "Portfolio",
    "PHP",
    "Laravel",
    "React Native",
    "Next.js",
    "MySQL",
    "Web Developer",
    "Software Engineer"
  ],
  openGraph: {
    title: "Juan Carlos Murillo | Full Stack Developer Portfolio",
    description: "Portfolio of Juan Carlos Murillo, Full Stack Developer specializing in PHP, Laravel, React Native, MySQL, and Next.js.",
    url: "https://your-portfolio-url.com/",
    siteName: "Juan Carlos Murillo Portfolio",
    images: [
      {
        url: "/vercel.svg",
        width: 1200,
        height: 630,
        alt: "Juan Carlos Murillo Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
