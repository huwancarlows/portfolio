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


  return (
    <main className="min-h-screen font-sans bg-background text-foreground bg-grid">
      <div className="container space-y-12">

        {/* NAVIGATION BAR */}
        <nav className="sticky top-3 z-20 border border-border rounded-xl shadow flex items-center justify-between px-4 py-3 mb-8 bg-card backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">JCM</span>
            <button
              className="ml-2 p-2 rounded bg-muted hover:opacity-90 sm:hidden"
              onClick={() => setNavOpen(!navOpen)}
              aria-label="Toggle navigation"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
          <div className={`flex-col sm:flex-row sm:flex gap-6 sm:gap-8 font-medium ${navOpen ? 'flex' : 'hidden'} sm:flex`}>
            <a href="#about" className="link-underline flex items-center gap-2 py-2 sm:py-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>About</span>
            </a>
            <a href="#tech" className="link-underline flex items-center gap-2 py-2 sm:py-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="7" height="7" rx="1"/><rect x="14" y="4" width="7" height="7" rx="1"/><rect x="14" y="13" width="7" height="7" rx="1"/><rect x="3" y="13" width="7" height="7" rx="1"/></svg>
              <span>Tech Stack</span>
            </a>
            <a href="#projects" className="link-underline flex items-center gap-2 py-2 sm:py-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 7h5l2 2h11v8a2 2 0 0 1-2 2H3z"/><path d="M3 7V5a2 2 0 0 1 2-2h4l2 2h6"/></svg>
              <span>Projects</span>
            </a>
            <a href="#contact" className="link-underline flex items-center gap-2 py-2 sm:py-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>
              <span>Contact</span>
            </a>
          </div>
          <button
            className="ml-4 p-2 rounded bg-muted hover:opacity-90"
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
        <header className="text-center flex flex-col items-center gap-4 border border-border rounded-2xl shadow p-6 sm:p-8 bg-card card-hover">
          <Image src="/murillo picture.jpg" alt="Profile" width={96} height={96} className="w-24 h-24 rounded-full border-4 border-blue-400 dark:border-blue-600 shadow-lg bg-card object-cover" />
          <h1 className="section-title">Juan Carlos Murillo</h1>
          <p className="section-subtitle max-w-xl">
            Full Stack Developer crafting clean, performant web and mobile experiences.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#projects" className="pill">View Projects</a>
            <a href="#contact" className="pill">Contact Me</a>
          </div>
        </header>

        <section id="about" className="section card card-hover">
          <AboutSection />
        </section>
        <section id="tech" className="section card card-hover">
          <TechStackSection />
        </section>
        <section id="projects" className="section card card-hover">
          <ProjectsSection />
        </section>
        <section id="contact" className="section card card-hover">
          <ContactSection />
        </section>
      </div>
      <footer className="container py-10 text-center">
        <div className="flex justify-center gap-4">
          <a href="https://github.com/huwancarlows" target="_blank" rel="noopener noreferrer" className="link-underline">GitHub</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="link-underline">LinkedIn</a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="link-underline">X</a>
        </div>
        <p className="text-muted text-sm mt-3">© {new Date().getFullYear()} Juan Carlos Murillo</p>
      </footer>
    </main>
  );
}
