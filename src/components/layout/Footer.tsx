import Link from "next/link";
import { MapPin } from "lucide-react";

const footerLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
];

export function Footer() {
    return (
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <p className="font-display font-bold text-xl text-[var(--color-primary)] mb-2">
                            NHH<span className="text-[var(--color-accent)]">.</span>
                        </p>
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                            AI Engineer specializing in Computer Vision, Vision-Language Models, and Applied ML Systems.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-sm font-semibold text-[var(--color-text)] mb-3 uppercase tracking-wider">Navigation</h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-[var(--color-text)] mb-3 uppercase tracking-wider">Contact</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="mailto:rayng.dev11@gmail.com"
                                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                                >
                                    rayng.dev11@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+84397645149"
                                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                                >
                                    (+84) 397.645.149
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/rayngdev11/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                                >
                                    LinkedIn ↗
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/hoang-nguyensg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                                >
                                    GitHub ↗
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="section-divider my-8" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[var(--color-text-muted)]">
                        © {new Date().getFullYear()} Nguyen Huy Hoang. Built with Next.js &amp; Tailwind CSS.
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)] flex items-center justify-center gap-1.5 mt-2 sm:mt-0">
                        <MapPin size={12} /> Ho Chi Minh City, Vietnam
                    </p>
                </div>
            </div>
        </footer>
    );
}
