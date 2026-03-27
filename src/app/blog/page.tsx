import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog",
    description: "Blog by Nguyen Huy Hoang — AI engineering insights, ML experiments, and tutorials. Coming soon.",
};

export default function BlogPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
            <div className="flex justify-center mb-6 text-[var(--color-primary)]">
                <FileText size={48} strokeWidth={1} />
            </div>
            <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">Blog</p>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--color-text)] mb-4">
                Coming Soon
            </h1>
            <p className="text-[var(--color-text-muted)] text-base leading-relaxed max-w-lg mx-auto mb-8">
                I&apos;m planning to write about ML experiment learnings, computer vision techniques, and my experiences as a new-grad AI Engineer. Stay tuned!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
                <Button href="/" variant="primary" size="md">&larr; Back to Home</Button>
                <Button href="/projects" variant="secondary" size="md">View Projects</Button>
            </div>
        </div>
    );
}
