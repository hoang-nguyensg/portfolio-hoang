import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    as?: "div" | "article" | "li";
}

export function Card({ children, className, hover = false, as: Tag = "div" }: CardProps) {
    return (
        <Tag
            className={cn(
                "bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6",
                hover && "card-hover",
                className
            )}
        >
            {children}
        </Tag>
    );
}

