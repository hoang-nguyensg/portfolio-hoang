import { educationEntries } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Trophy } from "lucide-react";

export function Education() {
    const edu = educationEntries[0];

    return (
        <section id="education" className="pt-10 pb-24 bg-[var(--color-surface-2)]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateIn>
                    <SectionHeading subtitle="Academic foundation in AI and Data Science.">
                        Education
                    </SectionHeading>
                </AnimateIn>

                <AnimateIn delay={0.1}>
                    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-hidden">
                        <div
                            className="h-1.5"
                            style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-accent))" }}
                        />

                        <div className="p-6 sm:p-8">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="font-display font-bold text-xl text-[var(--color-text)]">{edu.institution}</h3>
                                    <p className="text-[var(--color-primary)] font-semibold mt-0.5">
                                        {edu.degree} in {edu.field}
                                    </p>
                                    <p className="text-sm text-[var(--color-text-muted)] mt-1">
                                        {edu.location} &middot; {edu.period}
                                    </p>
                                </div>

                                <div
                                    className="flex-none px-5 py-3 rounded-xl text-center"
                                    style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-hover))" }}
                                >
                                    <p className="text-white/70 text-xs mb-0.5 font-medium">GPA</p>
                                    <p className="font-display font-extrabold text-2xl text-white">{edu.gpa}</p>
                                    <p className="text-white/70 text-xs">/ {edu.gpaScale}</p>
                                </div>
                            </div>

                            {edu.capstoneProject && (
                                <div
                                    className="rounded-lg p-4 mb-6 border-l-4"
                                    style={{
                                        background: "var(--color-surface-2)",
                                        borderColor: "var(--color-accent)",
                                    }}
                                >
                                    <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-1">
                                        Graduation Project
                                    </p>
                                    <p className="text-sm font-medium text-[var(--color-text)]">{edu.capstoneProject}</p>
                                </div>
                            )}

                            {edu.awards && edu.awards.length > 0 && (
                                <div className="mb-6">
                                    <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
                                        Honors & Awards
                                    </p>
                                    <ul className="space-y-2">
                                        {edu.awards.map((award, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <Trophy size={16} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                                                <p className="text-sm text-[var(--color-text)] font-medium">
                                                    {award.link ? (
                                                        <a href={award.link} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors underline underline-offset-4 decoration-[var(--color-border)] hover:decoration-transparent">
                                                            {award.title} ↗
                                                        </a>
                                                    ) : (
                                                        award.title
                                                    )}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div>
                                <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
                                    Relevant Coursework
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {edu.courses.map((course) => (
                                        <Badge key={course} variant="subtle">{course}</Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimateIn>
            </div>
        </section>
    );
}
