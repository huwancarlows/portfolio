import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "TaskFlow Manager",
        description: "A productivity web app for managing daily tasks, deadlines, and team collaboration.",
        tech: ["React", "Next.js", "Supabase", "TailwindCSS"],
        github: "https://github.com/huwancarlows/taskflow-manager",
        demo: "https://taskflow-manager-three.vercel.app/",
        image: "/window.svg" // Placeholder image
    },
    {
        title: "FitTrack Mobile",
        description: "A React Native app to track workouts, nutrition, and progress with real-time analytics.",
        tech: ["React Native", "Expo", "Firebase"],
        github: "https://github.com/yourusername/fittrack-mobile",
        demo: "https://expo.dev/@yourusername/fittrack",
        image: "/globe.svg" // Placeholder image
    },
    {
        title: "DevBlog Platform",
        description: "A blogging platform for developers with markdown support, comments, and social sharing.",
        tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
        github: "https://github.com/yourusername/devblog-platform",
        demo: "https://devblog-demo.vercel.app/",
        image: "/vercel.svg" // Placeholder image
    }
];

export default function ProjectsSection() {
    return (
        <>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle mb-6">Selected work highlighting my interests.</p>
            <div className="space-y-6">
                {projects.map((project) => (
                    <Link href={`/projects/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`} key={project.title} className="card card-hover p-6 rounded-xl flex flex-col sm:flex-row gap-4 transition-transform duration-200 hover:scale-[1.01]">
                        <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded">
                            <Image src={project.image} alt={project.title + ' logo'} width={64} height={64} className="w-16 h-16 object-contain" />
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold mb-2 sm:mb-0">{project.title}</h3>
                                <div className="flex gap-3">
                                    {project.github && (
                                        <button
                                            onClick={(e) => { e.stopPropagation(); window.open(project.github!, '_blank', 'noopener'); }}
                                            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                                            type="button"
                                        >
                                            GitHub
                                        </button>
                                    )}
                                    {project.demo && (
                                        <button
                                            onClick={(e) => { e.stopPropagation(); window.open(project.demo!, '_blank', 'noopener'); }}
                                            className="text-green-600 hover:underline text-sm"
                                            type="button"
                                        >
                                            Live Demo
                                        </button>
                                    )}
                                </div>
                            </div>
                            <p className="text-muted mb-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="pill">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="mt-6 text-right">
                <Link href="/projects" className="pill">View all projects</Link>
            </div>
        </>
    );
} 