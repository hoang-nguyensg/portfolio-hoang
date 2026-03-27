"use client";

import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ExternalLink, Award } from "lucide-react";

export function Certifications() {
    return (
        <section id="certifications" className="py-24 bg-[var(--color-surface-1)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading subtitle="Continuous learning and specialized training in AI, Machine Learning, and Data Science workflows.">
                    Certifications
                </SectionHeading>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <AnimateIn key={cert.id} delay={index * 0.1}>
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block h-full bg-[var(--color-surface-2)] border border-[var(--color-border)] hover:border-[var(--color-primary)] rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Award size={18} className="text-[var(--color-primary)] shrink-0" />
                                            <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider">
                                                {cert.issuer}
                                            </span>
                                        </div>
                                        <h3 className="font-display font-bold text-[var(--color-text)] text-base leading-snug mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                                            {cert.title}
                                        </h3>
                                    </div>
                                    <ExternalLink size={20} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors shrink-0" />
                                </div>
                            </a>
                        </AnimateIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
