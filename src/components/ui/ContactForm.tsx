"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./Button";
import { Mail } from "lucide-react";

interface FormState {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const INITIAL: FormState = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
    const [form, setForm] = useState<FormState>(INITIAL);
    const [errors, setErrors] = useState<Partial<FormState>>({});
    const [submitted, setSubmitted] = useState(false);

    function validate(): boolean {
        const e: Partial<FormState> = {};
        if (!form.name.trim()) e.name = "Name is required.";
        if (!form.email.trim()) e.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
        if (!form.message.trim()) e.message = "Message is required.";
        setErrors(e);
        return Object.keys(e).length === 0;
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!validate()) return;
        const subject = encodeURIComponent(form.subject || "Portfolio Contact");
        const body = encodeURIComponent(
            `Hi Huy Hoang,\n\nMy name is ${form.name}.\n\n${form.message}\n\n- ${form.name} (${form.email})`
        );
        window.location.href = `mailto:rayng.dev11@gmail.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
        setForm(INITIAL);
    }

    if (submitted) {
        return (
            <div className="bg-[var(--color-surface-2)] rounded-xl p-8 text-center flex flex-col items-center">
                <div className="mb-4 text-[var(--color-primary)]">
                    <Mail size={48} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-xl text-[var(--color-text)] mb-2">Opening your email client...</h3>
                <p className="text-[var(--color-text-muted)] text-sm">
                    If nothing opened, email me directly at{" "}
                    <a href="mailto:rayng.dev11@gmail.com" className="text-[var(--color-primary)] underline">
                        rayng.dev11@gmail.com
                    </a>
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="cf-name" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                        Name <span className="text-[var(--color-primary)]">*</span>
                    </label>
                    <input
                        id="cf-name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] text-sm transition-colors focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                        placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="cf-email" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                        Email <span className="text-[var(--color-primary)]">*</span>
                    </label>
                    <input
                        id="cf-email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] text-sm transition-colors focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                        placeholder="your@email.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
            </div>
            <div>
                <label htmlFor="cf-subject" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                    Subject
                </label>
                <input
                    id="cf-subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] text-sm transition-colors focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                    placeholder="Hi, I'd like to discuss..."
                />
            </div>
            <div>
                <label htmlFor="cf-message" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                    Message <span className="text-[var(--color-primary)]">*</span>
                </label>
                <textarea
                    id="cf-message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] text-sm transition-colors focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] resize-none"
                    placeholder="Tell me about the role or opportunity..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>
            <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                Send Message &rarr;
            </Button>
        </form>
    );
}
