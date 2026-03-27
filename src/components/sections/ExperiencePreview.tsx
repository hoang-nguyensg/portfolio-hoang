import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function ExperiencePreview() {
    const exp = experiences.length > 0 ? experiences[0] : null;

    if (!exp) return null;

    return (
        <section id="experience" className="py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateIn>
                    <SectionHeading subtitle="My professional experience building real CV and ML systems.">
                        Work Experience
                    </SectionHeading>
                </AnimateIn>

                <AnimateIn delay={0.1}>
                    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Badge variant="primary">{exp.type}</Badge>
                                </div>
                                <h3 className="font-display font-bold text-xl text-[var(--color-text)]">{exp.role}</h3>
                                <p className="text-[var(--color-primary)] font-semibold text-base mt-0.5">{exp.company}</p>
                                <p className="text-sm text-[var(--color-text-muted)] mt-1">
                                    {exp.location} &middot; {exp.period}
                                </p>
                            </div>

                            <div className="flex-none px-4 py-2 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] text-center">
                                <p className="text-xs text-[var(--color-text-muted)] mb-0.5">Duration</p>
                                <p className="font-semibold text-sm text-[var(--color-text)]">3 months</p>
                            </div>
                        </div>

                        <ul className="space-y-3 mb-6">
                            {exp.bullets.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span
                                        className="flex-none mt-1.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                                        style={{ background: "var(--color-primary)" }}
                                    >
                                        {i + 1}
                                    </span>
                                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{bullet}</p>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-1.5 mb-6">
                            {exp.tech.map((t) => (
                                <Badge key={t} variant="default">{t}</Badge>
                            ))}
                        </div>

                        <Button href="/experience" variant="secondary" size="sm">
                            View Full Experience &rarr;
                        </Button>
                    </div>
                </AnimateIn>
            </div>
        </section>
    );
}
