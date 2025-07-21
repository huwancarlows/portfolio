// src/app/page.tsx
"use client"
import React from "react";
import AboutSection from "./components/AboutSection";
import TechStackSection from "./components/TechStackSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Toggle dark mode by toggling a class on the html element
  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <main className="min-h-screen text-gray-800 dark:text-white px-2 sm:px-6 py-6 sm:py-12 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* NAVIGATION BAR */}
        <nav className="sticky top-0 z-20 border-b border-gray-200 dark:border-gray-800 backdrop-blur rounded shadow flex items-center justify-between px-4 py-3 mb-8 transition-colors">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">JCM</span>
            <button
              className="ml-2 p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 sm:hidden"
              onClick={() => setNavOpen(!navOpen)}
              aria-label="Toggle navigation"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
          <div className={`flex-col sm:flex-row sm:flex gap-8 font-medium ${navOpen ? 'flex' : 'hidden'} sm:flex`}>
            <a href="#about" className="hover:underline block py-2 sm:py-0">About</a>
            <a href="#tech" className="hover:underline block py-2 sm:py-0">Tech Stack</a>
            <a href="#projects" className="hover:underline block py-2 sm:py-0">Projects</a>
            <a href="#contact" className="hover:underline block py-2 sm:py-0">Contact</a>
          </div>
          <button
            className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <svg width="20" height="20" fill="currentColor" className="text-yellow-400"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" /></svg>
            ) : (
              <svg width="20" height="20" fill="currentColor" className="text-gray-700 dark:text-gray-200"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
            )}
          </button>
        </nav>

        {/* HEADER */}
        <header className="text-center flex flex-col items-center gap-4 border border-gray-200 dark:border-gray-800 rounded-xl shadow p-6 transition-colors">
          <Image src="/murillo picture.jpg" alt="Profile" width={96} height={96} className="w-24 h-24 rounded-full border-4 border-blue-400 dark:border-blue-600 shadow-lg bg-white dark:bg-gray-800 object-cover" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">Juan Carlos Murillo</h1>
          <p className="text-lg text-gray-500 dark:text-gray-300 max-w-xl">
            Full Stack Developer – PHP, Laravel, React Native, MySQL, Next.js
          </p>
        </header>

        <section id="about" className="rounded-xl p-6 sm:p-10 shadow">
          <AboutSection />
        </section>
        <section id="tech" className="rounded-xl p-6 sm:p-10 shadow">
          <TechStackSection />
        </section>
        <section id="projects" className="rounded-xl p-6 sm:p-10 shadow">
          <ProjectsSection />
        </section>
        <section id="contact" className="rounded-xl p-6 sm:p-10 shadow">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}
