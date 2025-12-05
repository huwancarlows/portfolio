import React from "react";
import Link from "next/link";
import { projects } from "../data/projects";
import Image from "next/image";

export const metadata = {
  title: "Projects | Juan Carlos Murillo",
};

export default function ProjectsIndexPage() {
  return (
    <main className="container section">
      <h1 className="section-title">Projects</h1>
      <p className="section-subtitle mb-6">A selection of things I've built and explored.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="card card-hover p-5 rounded-xl transition-transform duration-200 hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-3">
              {p.image ? (
                <Image src={p.image} alt={`${p.title} logo`} width={32} height={32} className="w-8 h-8" />
              ) : null}
              <h2 className="text-lg font-semibold">{p.title}</h2>
            </div>
            <p className="text-muted text-sm">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {p.tech.map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/" className="pill">← Back to Home</Link>
      </div>
    </main>
  );
}
