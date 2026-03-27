import { cn } from "@/lib/utils";
import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "gold";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    children: ReactNode;
}

type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
};
type AnchorButtonProps = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
};

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-sm hover:shadow-md",
    secondary:
        "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
    ghost:
        "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)]",
    gold:
        "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] shadow-sm hover:shadow-md",
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2",
};

const base =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

export function Button(props: ButtonProps | AnchorButtonProps) {
    const { variant = "primary", size = "md", className, children, href, ...rest } = props as AnchorButtonProps;
    const classes = cn(base, variantStyles[variant], sizeStyles[size], className);

    if (href) {
        return (
            <a href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
                {children}
            </a>
        );
    }
    return (
        <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
            {children}
        </button>
    );
}

