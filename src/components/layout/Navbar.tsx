"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
];

function SunIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    );
}

function MenuIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}

export function Navbar() {
    const pathname = usePathname();
    const { resolvedTheme, setTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");


    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-[var(--color-surface)]/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-sm"
                    : "bg-transparent"
            )}
        >
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16" aria-label="Main navigation">
                {/* Logo */}
                <Link
                    href="/"
                    className="font-display font-bold text-lg text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
                    onClick={() => setMenuOpen(false)}
                >
                    NHH<span className="text-[var(--color-accent)]">.</span>
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                    isActive
                                        ? "text-[var(--color-primary)] bg-[var(--color-burgundy-50)] dark:bg-[var(--color-surface-2)]"
                                        : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)]"
                                )}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-2">
                    {/* Dark mode toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)] transition-all"
                        aria-label="Toggle dark mode"
                    >
                        {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
                    </button>

                    {/* Download Resume */}
                    <a
                        href="/CV_NguyenHuyHoang.pdf"
                        download="CV_NguyenHuyHoang.pdf"
                        className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all duration-200 shadow-sm"
                    >
                        Download CV
                    </a>

                    {/* Mobile menu toggle */}
                    <button
                        className="md:hidden p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)] transition-all"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-[var(--color-surface)] border-t border-[var(--color-border)] px-4 py-4 flex flex-col gap-1 animate-fade-in">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={cn(
                                    "px-4 py-3 rounded-lg text-sm font-medium transition-all",
                                    isActive
                                        ? "text-[var(--color-primary)] bg-[var(--color-surface-2)]"
                                        : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)]"
                                )}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <a
                        href="/CV_NguyenHuyHoang.pdf"
                        download="CV_NguyenHuyHoang.pdf"
                        onClick={() => setMenuOpen(false)}
                        className="mt-2 inline-flex items-center justify-center px-4 py-3 rounded-lg text-sm font-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all"
                    >
                        Download CV
                    </a>
                </div>
            )}
        </header>
    );
}

