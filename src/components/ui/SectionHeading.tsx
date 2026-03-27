import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
    children: ReactNode;
    subtitle?: string;
    className?: string;
    centered?: boolean;
}

export function SectionHeading({ children, subtitle, className, centered = false }: SectionHeadingProps) {
    return (
        <div className={cn("mb-10", centered && "text-center", className)}>
            <h2
                className={cn(
                    "font-display font-bold text-3xl sm:text-4xl text-[var(--color-text)] mb-3 relative inline-block"
                )}
            >
                {children}
                <span
                    className="absolute -bottom-1 left-0 h-0.5 w-12 bg-[var(--color-accent)] rounded-full"
                    aria-hidden="true"
                />
            </h2>
            {subtitle && (
                <p className="mt-4 text-[var(--color-text-muted)] text-base sm:text-lg max-w-2xl">
                    {subtitle}
                </p>
            )}
        </div>
    );
}

