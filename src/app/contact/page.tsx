import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, Linkedin, Github, FileText, MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Nguyen Huy Hoang — open to AI/ML engineering roles.",
};

const contactMethods = [
    {
        icon: <Mail size={20} strokeWidth={1.5} />,
        label: "Email",
        value: "rayng.dev11@gmail.com",
        href: "mailto:rayng.dev11@gmail.com",
    },
    {
        icon: <Phone size={20} strokeWidth={1.5} />,
        label: "Phone",
        value: "(+84) 397.645.149",
        href: "tel:+84397645149",
    },
    {
        icon: <Linkedin size={20} strokeWidth={1.5} />,
        label: "LinkedIn",
        value: "linkedin.com/in/rayngdev11",
        href: "https://www.linkedin.com/in/rayngdev11/",
        external: true,
    },
    {
        icon: <Github size={20} strokeWidth={1.5} />,
        label: "GitHub",
        value: "github.com/hoang-nguyensg",
        href: "https://github.com/hoang-nguyensg",
        external: true,
    },
];

export default function ContactPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
            <div className="max-w-xl mb-10">
                <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2">
                    Get In Touch
                </p>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--color-text)] mb-4">
                    Contact Me
                </h1>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                    I&apos;m actively looking for AI/ML engineering roles — remote or in Ho Chi Minh City. Have an opportunity or want to chat? Reach out below.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Form */}
                <div className="lg:col-span-3">
                    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 sm:p-8">
                        <h2 className="font-display font-bold text-lg text-[var(--color-text)] mb-6">Send a Message</h2>
                        <ContactForm />
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6">
                        <h2 className="font-display font-bold text-base text-[var(--color-text)] mb-4">Direct Contact</h2>
                        <ul className="space-y-3">
                            {contactMethods.map((m) => (
                                <li key={m.label}>
                                    <a
                                        href={m.href}
                                        target={m.external ? "_blank" : undefined}
                                        rel={m.external ? "noopener noreferrer" : undefined}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--color-surface-2)] transition-colors group"
                                    >
                                        <span className="flex-none text-[var(--color-primary)]">{m.icon}</span>
                                        <div>
                                            <p className="text-xs text-[var(--color-text-muted)] mb-0.5">{m.label}</p>
                                            <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                                                {m.value}
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        className="rounded-xl p-5 text-white"
                        style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-hover))" }}
                    >
                        <p className="font-semibold text-sm mb-1 flex items-center gap-2">
                            <FileText size={16} strokeWidth={2} /> Resume Available
                        </p>
                        <p className="text-white/70 text-xs mb-3 leading-relaxed">
                            Download my up-to-date resume for a full overview of skills, experience, and education.
                        </p>
                        <Button
                            href="/Nguyen-Huy-Hoang-AI-Engineer.pdf"
                            download="Nguyen-Huy-Hoang-AI-Engineer.pdf"
                            variant="gold"
                            size="sm"
                        >
                            Download CV
                        </Button>
                    </div>

                    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-5">
                        <p className="text-sm font-semibold text-[var(--color-text)] mb-1 flex items-center gap-2">
                            <MapPin size={16} strokeWidth={2} /> Location
                        </p>
                        <p className="text-sm text-[var(--color-text-muted)]">Ho Chi Minh City, Vietnam</p>
                        <p className="text-xs text-[var(--color-text-muted)] mt-1">Open to remote & on-site opportunities</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
