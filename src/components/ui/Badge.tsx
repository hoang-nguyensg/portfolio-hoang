import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BadgeVariant = "default" | "primary" | "gold" | "subtle";

interface BadgeProps {
    children: ReactNode;
    variant?: BadgeVariant;
    className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
    default:
        "bg-[var(--color-surface-2)] text-[var(--color-text-muted)] border border-[var(--color-border)]",
    primary:
        "bg-[var(--color-burgundy-50)] text-[var(--color-primary)] border border-[var(--color-burgundy-200)] dark:bg-[var(--color-surface-2)] dark:border-[var(--color-border)]",
    gold:
        "bg-[var(--color-gold-100)] text-[var(--color-gold-700)] border border-[var(--color-gold-300)] dark:bg-[var(--color-surface-2)] dark:text-[var(--color-gold-400)] dark:border-[var(--color-border)]",
    subtle:
        "bg-transparent text-[var(--color-text-muted)] border border-[var(--color-border)]",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                variantStyles[variant],
                className
            )}
        >
            {children}
        </span>
    );
}

