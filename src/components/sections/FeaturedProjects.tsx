import Link from "next/link";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Hammer } from "lucide-react";

export function FeaturedProjects() {
    const featured = projects.filter((p) => p.featured);

    return (
        <section id="projects" className="py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateIn>
                    <SectionHeading
                        subtitle="Selected work from my graduation and personal learning projects — tackling real computer vision and vision-language challenges."
                    >
                        Projects
                    </SectionHeading>
                </AnimateIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featured.map((project, i) => (
                        <AnimateIn key={project.slug} delay={i * 0.1}>
                            <article
                                className="group relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-hidden flex flex-col h-full card-hover"
                            >
                                <div
                                    className="h-1 w-full"
                                    style={{
                                        background: i === 0
                                            ? "linear-gradient(90deg, var(--color-primary), var(--color-accent))"
                                            : i === 1
                                                ? "linear-gradient(90deg, var(--color-accent), var(--color-primary))"
                                                : "linear-gradient(90deg, var(--color-primary), var(--color-primary-hover))",
                                    }}
                                />

                                <div className="p-6 flex flex-col flex-1">
                                    {project.subtitle && (
                                        <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2">
                                            {project.subtitle}
                                        </p>
                                    )}

                                    <h3 className="font-display font-bold text-[var(--color-text)] text-base leading-snug mb-3 group-hover:text-[var(--color-primary)] transition-colors flex items-center gap-2 flex-wrap">
                                        {project.title}
                                        {project.status && (
                                            <Badge variant={project.status === "Coming Soon" ? "gold" : "subtle"}>
                                                {project.status === "Coming Soon" ? "🚧 Coming Soon" : "⏳ Work in Progress"}
                                            </Badge>
                                        )}
                                    </h3>

                                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4 flex-1">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.tech.slice(0, 4).map((t) => (
                                            <Badge key={t} variant="default">{t}</Badge>
                                        ))}
                                        {project.tech.length > 4 && (
                                            <Badge variant="subtle">+{project.tech.length - 4}</Badge>
                                        )}
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all"
                                        >
                                            Case Study &rarr;
                                        </Link>
                                        {project.links
                                            .filter((l) => l.label !== "Case Study")
                                            .map((link) =>
                                                link.placeholder ? (
                                                    <span
                                                        key={link.label}
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-[var(--color-border)] text-[var(--color-text-muted)] cursor-not-allowed opacity-60"
                                                        title="Placeholder — link coming soon"
                                                    >
                                                        {link.label} [placeholder]
                                                    </span>
                                                ) : (
                                                    <a
                                                        key={link.label}
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-surface-2)] transition-colors"
                                                    >
                                                        {link.label}
                                                    </a>
                                                )
                                            )}
                                    </div>
                                </div>
                            </article>
                        </AnimateIn>
                    ))}

                    {/* Generic Coming Soon Card */}
                    <AnimateIn delay={featured.length * 0.1}>
                        <div className="bg-[var(--color-surface-2)] border-2 border-dashed border-[var(--color-border)] rounded-xl flex flex-col items-center justify-center p-8 text-center h-full min-h-[300px] opacity-80 hover:opacity-100 transition-opacity">
                            <div className="mb-4 text-[var(--color-text-muted)]">
                                <Hammer size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-display font-medium text-[var(--color-text)] mb-2">More Projects Coming Soon</h3>
                            <p className="text-sm text-[var(--color-text-muted)] max-w-xs">I am actively building and experimenting with new ML systems. Check back later!</p>
                        </div>
                    </AnimateIn>
                </div>

                <AnimateIn delay={0.3}>
                    <div className="text-center mt-10">
                        <Button href="/projects" variant="secondary" size="md">
                            View All Projects
                        </Button>
                    </div>
                </AnimateIn>
            </div>
        </section>
    );
}
