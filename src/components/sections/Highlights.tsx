import { AnimateIn } from "@/components/ui/AnimateIn";
import { Card } from "@/components/ui/Card";
import { Eye, BarChart2, PlayCircle, Brain } from "lucide-react";

const highlights = [
    {
        icon: <Eye size={36} strokeWidth={1.5} />,
        label: "Computer Vision",
        detail: "Hazard & Safety Sign Detection",
    },
    {
        icon: <BarChart2 size={36} strokeWidth={1.5} />,
        label: "Evaluation",
        detail: "mAP, F1, BLEU",
    },
    {
        icon: <PlayCircle size={36} strokeWidth={1.5} />,
        label: "Deployment",
        detail: "FastAPI + Docker",
    },
    {
        icon: <Brain size={36} strokeWidth={1.5} />,
        label: "VLM Fine-tuning",
        detail: "Qwen2-VL, InternVL, MiniCPM",
    },
];

export function Highlights() {
    return (
        <section id="highlights" className="py-16 bg-[var(--color-surface-2)]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {highlights.map((h, i) => (
                        <AnimateIn key={h.label} delay={i * 0.08}>
                            <Card hover className="text-center h-full">
                                <div className="flex justify-center mb-4 text-[var(--color-primary)]">{h.icon}</div>
                                <p className="font-display font-semibold text-[var(--color-text)] text-sm mb-1">
                                    {h.label}
                                </p>
                                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                                    {h.detail}
                                </p>
                            </Card>
                        </AnimateIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
