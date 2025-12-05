export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "taskflow-manager",
    title: "TaskFlow Manager",
    description:
      "A productivity web app for managing daily tasks, deadlines, and team collaboration.",
    tech: ["React", "Next.js", "Supabase", "TailwindCSS"],
    github: "https://github.com/huwancarlows/taskflow-manager",
    demo: "https://taskflow-manager-three.vercel.app/",
    image: "/window.svg",
  },
  {
    slug: "fittrack-mobile",
    title: "FitTrack Mobile",
    description:
      "A React Native app to track workouts, nutrition, and progress with real-time analytics.",
    tech: ["React Native", "Expo", "Firebase"],
    github: "https://github.com/yourusername/fittrack-mobile",
    demo: "https://expo.dev/@yourusername/fittrack",
    image: "/globe.svg",
  },
  {
    slug: "devblog-platform",
    title: "DevBlog Platform",
    description:
      "A blogging platform for developers with markdown support, comments, and social sharing.",
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    github: "https://github.com/yourusername/devblog-platform",
    demo: "https://devblog-demo.vercel.app/",
    image: "/vercel.svg",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
