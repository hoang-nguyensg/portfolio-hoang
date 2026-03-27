import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "AI and ML projects by Nguyen Huy Hoang — Computer Vision, Vision-Language Models, and Applied ML Systems.",
};

export default function ProjectsPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
            <SectionHeading subtitle="End-to-end ML projects — from data, training, and evaluation to deployment considerations.">
                Projects
            </SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                    <article
                        key={project.slug}
                        className="group flex flex-col bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-hidden card-hover animate-fade-in-up"
                        style={{ animationDelay: `${i * 0.08}s` }}
                    >
                        <div
                            className="h-1 w-full"
                            style={{
                                background:
                                    i % 2 === 0
                                        ? "linear-gradient(90deg, var(--color-primary), var(--color-accent))"
                                        : "linear-gradient(90deg, var(--color-accent), var(--color-primary))",
                            }}
                        />
                        <div className="p-6 flex flex-col flex-1">
                            {project.subtitle && (
                                <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2">
                                    {project.subtitle}
                                </p>
                            )}
                            <h2 className="font-display font-bold text-[var(--color-text)] text-base leading-snug mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                                {project.title}
                            </h2>
                            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4 flex-1">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mb-5">
                                {project.tech.slice(0, 5).map((t) => (
                                    <Badge key={t} variant="default">{t}</Badge>
                                ))}
                                {project.tech.length > 5 && (
                                    <Badge variant="subtle">+{project.tech.length - 5}</Badge>
                                )}
                            </div>
                            <Link
                                href={`/projects/${project.slug}`}
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all self-start"
                            >
                                View Case Study &rarr;
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
