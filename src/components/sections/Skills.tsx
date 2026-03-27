"use client";

import React from "react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, Eye, Rocket, Network, Languages, GitBranch } from "lucide-react";

const iconMap: Record<string, React.JSX.Element> = {
    code: <Code2 size={24} className="text-[var(--color-primary)]" />,
    brain: <BrainCircuit size={24} className="text-[var(--color-primary)]" />,
    eye: <Eye size={24} className="text-[var(--color-primary)]" />,
    rocket: <Rocket size={24} className="text-[var(--color-primary)]" />,
    workflow: <Network size={24} className="text-[var(--color-primary)]" />,
    languages: <Languages size={24} className="text-[var(--color-primary)]" />,
    git: <GitBranch size={24} className="text-[var(--color-primary)]" />,
};

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-[var(--color-surface-2)]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateIn>
                    <SectionHeading subtitle="A curated stack of tools and frameworks I use to build intelligent systems.">
                        Technical Skills
                    </SectionHeading>
                </AnimateIn>

                <div className="mt-12 space-y-12">
                    {skillCategories.map((cat, i) => (
                        <AnimateIn key={cat.title} delay={i * 0.1}>
                            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                                {/* Category Header */}
                                <div className="w-full md:w-1/3 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-surface-1)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-primary)] shadow-sm">
                                        {iconMap[cat.icon]}
                                    </div>
                                    <h3 className="font-display font-semibold text-[var(--color-text)] text-lg">
                                        {cat.title}
                                    </h3>
                                </div>

                                {/* Skills Badges Container */}
                                <div className="w-full md:w-2/3 flex flex-wrap gap-3">
                                    {cat.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-lg text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-primary)] hover:shadow-md transition-all cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </AnimateIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

