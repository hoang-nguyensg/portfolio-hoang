import type { Metadata } from "next";
import Link from "next/link";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
    title: "Experience",
    description:
        "Professional experience of Nguyen Huy Hoang — AI Intern at CEH IT Services building computer vision systems.",
};

export default function ExperiencePage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
            <SectionHeading subtitle="My journey building real ML systems in production environments.">
                Experience
            </SectionHeading>

            <div className="relative">
                <div
                    className="absolute left-4 sm:left-6 top-0 bottom-0 w-px"
                    style={{ background: "var(--color-border)" }}
                    aria-hidden="true"
                />

                {experiences.map((exp, i) => (
                    <div
                        key={exp.id}
                        className="relative pl-14 sm:pl-16 mb-12 last:mb-0 animate-fade-in-up"
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        <div
                            className="absolute left-2 sm:left-4 top-1 w-5 h-5 rounded-full border-2 border-white dark:border-[var(--color-background)]"
                            style={{ background: "var(--color-primary)" }}
                            aria-hidden="true"
                        />

                        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 sm:p-8">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                                <div>
                                    <Badge variant="primary" className="mb-2">{exp.type}</Badge>
                                    <h2 className="font-display font-bold text-xl text-[var(--color-text)]">{exp.role}</h2>
                                    <p className="text-[var(--color-primary)] font-semibold mt-0.5">{exp.company}</p>
                                    <p className="text-sm text-[var(--color-text-muted)] mt-1">{exp.location}</p>
                                </div>
                                <div
                                    className="flex-none px-4 py-2 rounded-lg text-center border border-[var(--color-border)]"
                                    style={{ background: "var(--color-surface-2)" }}
                                >
                                    <p className="text-xs text-[var(--color-text-muted)] mb-0.5">Period</p>
                                    <p className="font-semibold text-sm text-[var(--color-text)] whitespace-nowrap">{exp.period}</p>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {exp.bullets.map((bullet, j) => (
                                    <li key={j} className="flex items-start gap-3">
                                        <span
                                            className="flex-none mt-1.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                                            style={{ background: "var(--color-primary)" }}
                                        >
                                            {j + 1}
                                        </span>
                                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{bullet}</p>
                                    </li>
                                ))}
                            </ul>

                            <div>
                                <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                                    Technologies Used
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {exp.tech.map((t) => (
                                        <Badge key={t} variant="default">{t}</Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div
                className="mt-12 rounded-xl p-6 border-l-4 text-sm text-[var(--color-text-muted)] leading-relaxed"
                style={{ background: "var(--color-surface-2)", borderColor: "var(--color-accent)" }}
            >
                <strong className="text-[var(--color-text)]">Academic Projects &amp; Research:</strong>{" "}
                In addition to my professional experience, I completed a graduation research project on Vision-Language AI for chest X-ray report automation during my BSc at FPT University (2021-2025).{" "}
                <Link href="/projects" className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-hover)]">
                    See Projects &rarr;
                </Link>
            </div>
        </div>
    );
}
