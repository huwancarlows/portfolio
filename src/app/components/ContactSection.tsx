import React from "react";

export default function ContactSection() {
    return (
        <div className="text-center space-y-4">
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">Let’s connect! You can reach me at:</p>
            <div className="flex flex-col items-center gap-3">
                <a
                    href="mailto:murillojuancarlos499@gmail.com"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-lg"
                    aria-label="Email"
                >
                    {/* Email Icon */}
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline"><rect x="2" y="4" width="16" height="12" rx="2" /><path d="M22 6L12 13 2 6" /></svg>
                    murillojuancarlos499@gmail.com
                </a>
                <a
                    href="tel:+639550470385"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-lg"
                    aria-label="Phone"
                >
                    {/* Phone Icon */}
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z" /></svg>
                    +63 955 047 0385
                </a>
                <a
                    href="https://www.facebook.com/juancarlos.murillo.9638"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    {/* Facebook Icon */}
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="inline"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
                    Facebook
                </a>
            </div>
        </div>
    );
} 