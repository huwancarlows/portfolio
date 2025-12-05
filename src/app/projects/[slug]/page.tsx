import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/app/data/projects";

interface Params {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return (
      <main className="container section">
        <h1 className="section-title">Project Not Found</h1>
        <p className="section-subtitle mb-6">The project you're looking for doesn't exist.</p>
        <Link href="/projects" className="pill">Back to Projects</Link>
      </main>
    );
  }

  return (
    <main className="container section">
      <div className="flex items-center gap-3 mb-4">
        {project.image ? (
          <Image src={project.image} alt={`${project.title} logo`} width={40} height={40} className="w-10 h-10" />
        ) : null}
        <h1 className="section-title m-0">{project.title}</h1>
      </div>
      <p className="section-subtitle max-w-2xl">{project.description}</p>

      <div className="mt-4">
        <Link href="/projects" className="pill">← Back to Projects</Link>
      </div>

      {/* Live preview frame */}
      {project.demo && (
        <div className="card rounded-xl mt-6">
          <h2 className="text-lg font-semibold mb-3">Preview</h2>
          <div className="relative w-full overflow-hidden rounded-lg border border-border bg-muted">
            <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-card">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#ef4444" }} />
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#f59e0b" }} />
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#22c55e" }} />
              <span className="ml-3 text-xs text-muted truncate">{project.demo}</span>
            </div>
            <div className="aspect-video">
              <iframe
                src={project.demo}
                title={`${project.title} live preview`}
                className="w-full h-full"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="card rounded-xl lg:col-span-2">
          <h2 className="text-lg font-semibold mb-3">Overview</h2>
          <p className="text-muted">{project.description}</p>
        </div>
        <div className="card rounded-xl">
          <h2 className="text-lg font-semibold mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="pill">GitHub</a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="pill">Live Demo</a>
        )}
        <Link href="/projects" className="pill">Back to Projects</Link>
      </div>
    </main>
  );
}
