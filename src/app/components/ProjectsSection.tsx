import React from "react";
import Image from "next/image";

const projects = [
    {
        title: "TaskFlow Manager",
        description: "A productivity web app for managing daily tasks, deadlines, and team collaboration.",
        tech: ["React", "Next.js", "Supabase", "TailwindCSS"],
        github: "https://github.com/yourusername/taskflow-manager",
        demo: "https://taskflow-demo.vercel.app/",
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
            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
            <div className="space-y-6">
                {projects.map((project) => (
                    <div key={project.title} className="border p-6 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-md flex flex-col sm:flex-row gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded">
                            <Image src={project.image} alt={project.title + ' logo'} width={64} height={64} className="w-16 h-16 object-contain" />
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold mb-2 sm:mb-0">{project.title}</h3>
                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        className="text-blue-500 hover:underline text-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="text-green-600 hover:underline text-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
} 