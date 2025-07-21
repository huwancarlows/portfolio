import React, { useState } from "react";

const techs = [
    {
        name: "PHP",
        icon: (
            <svg viewBox="0 0 48 48" width="24" height="24" className="inline"><ellipse cx="24" cy="24" rx="22" ry="12" fill="#8993be" /><text x="24" y="29" textAnchor="middle" fontSize="16" fill="#232531" fontWeight="bold">PHP</text></svg>
        ),
        url: "https://www.php.net/",
        description: "A popular general-purpose scripting language especially suited to web development."
    },
    {
        name: "Laravel",
        icon: (
            <svg viewBox="0 0 48 48" width="24" height="24" className="inline"><path fill="#f55247" d="M8 8h8l8 8v8l-8 8H8l-8-8V16z" /><text x="24" y="44" textAnchor="middle" fontSize="10" fill="#f55247">Laravel</text></svg>
        ),
        url: "https://laravel.com/",
        description: "A web application framework with expressive, elegant syntax for PHP."
    },
    {
        name: "React Native",
        icon: (
            <svg viewBox="0 0 48 48" width="24" height="24" className="inline"><circle cx="24" cy="24" r="10" fill="#61dafb" /><text x="24" y="29" textAnchor="middle" fontSize="8" fill="#232531">RN</text></svg>
        ),
        url: "https://reactnative.dev/",
        description: "A framework for building native apps using React."
    },
    {
        name: "Next.js",
        icon: (
            <svg viewBox="0 0 48 48" width="24" height="24" className="inline"><circle cx="24" cy="24" r="22" fill="#000" /><text x="24" y="29" textAnchor="middle" fontSize="12" fill="#fff">Next</text></svg>
        ),
        url: "https://nextjs.org/",
        description: "A React framework for production, with hybrid static & server rendering."
    },
    {
        name: "JavaScript",
        icon: (
            <svg viewBox="0 0 48 48" width="24" height="24" className="inline"><rect x="4" y="4" width="40" height="40" rx="8" fill="#f7df1e" /><text x="24" y="29" textAnchor="middle" fontSize="14" fill="#232531">JS</text></svg>
        ),
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        description: "A high-level, versatile programming language of the web."
    },
    {
        name: "HTML",
        icon: (
            <svg viewBox="0 0 48 48" width="24" height="24" className="inline"><rect x="4" y="4" width="40" height="40" rx="8" fill="#e44d26" /><text x="24" y="29" textAnchor="middle" fontSize="14" fill="#fff">HTML</text></svg>
        ),
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        description: "The standard markup language for creating web pages."
    },
    {
        name: "MySQL",
        icon: (
            <svg viewBox="0 0 48 48" width="24" height="24" className="inline"><ellipse cx="24" cy="24" rx="20" ry="10" fill="#00758f" /><text x="24" y="29" textAnchor="middle" fontSize="10" fill="#fff">MySQL</text></svg>
        ),
        url: "https://www.mysql.com/",
        description: "An open-source relational database management system."
    },
    {
        name: "Supabase",
        icon: (
            <svg viewBox="0 0 48 48" width="24" height="24" className="inline"><polygon points="24,8 40,40 8,40" fill="#3ecf8e" /><text x="24" y="44" textAnchor="middle" fontSize="8" fill="#232531">Supabase</text></svg>
        ),
        url: "https://supabase.com/",
        description: "An open source Firebase alternative."
    },
    {
        name: "Vercel",
        icon: (
            <svg viewBox="0 0 48 48" width="24" height="24" className="inline"><polygon points="24,8 40,40 8,40" fill="#000" /></svg>
        ),
        url: "https://vercel.com/",
        description: "A platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database."
    }
];

export default function TechStackSection() {
    const [active, setActive] = useState<number | null>(null);

    return (
        <>
            <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {techs.map((tech, idx) => (
                    <li key={tech.name} className="relative">
                        <a
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded p-2 text-center shadow-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition cursor-pointer"
                            onClick={e => { e.preventDefault(); setActive(active === idx ? null : idx); }}
                            tabIndex={0}
                            aria-label={tech.name}
                            onBlur={() => setTimeout(() => setActive(null), 200)}
                        >
                            {tech.icon}
                            <span className="mt-1 font-medium text-sm">{tech.name}</span>
                        </a>
                        {/* Tooltip/Popover */}
                        {active === idx && (
                            <div className="absolute left-1/2 -translate-x-1/2 top-16 z-20 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded shadow-lg p-3 text-xs text-gray-800 dark:text-gray-100 animate-fade-in">
                                <div className="font-bold mb-1">{tech.name}</div>
                                <div>{tech.description}</div>
                                <div className="mt-2 text-blue-500 underline"><a href={tech.url} target="_blank" rel="noopener noreferrer">Learn more</a></div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
} 