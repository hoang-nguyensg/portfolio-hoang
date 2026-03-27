import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Mail } from "lucide-react";

export function ContactCTA() {
    return (
        <section id="contact-cta" className="py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateIn>
                    <div
                        className="relative rounded-2xl overflow-hidden text-center px-6 py-16"
                        style={{
                            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 60%, #4a1520 100%)",
                        }}
                    >
                        {/* Decorative blobs */}
                        <div
                            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
                            style={{
                                background: "var(--color-accent)",
                                translate: "30% -30%",
                                filter: "blur(40px)",
                            }}
                        />
                        <div
                            className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 pointer-events-none"
                            style={{
                                background: "var(--color-accent)",
                                translate: "-30% 30%",
                                filter: "blur(40px)",
                            }}
                        />

                        <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">
                            Open to Opportunities
                        </p>
                        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
                            Let&apos;s Work Together
                        </h2>
                        <p className="text-white/75 text-base mb-8 max-w-xl mx-auto leading-relaxed">
                            I&apos;m actively looking for AI/ML roles. If you have an opportunity or just want to connect, feel free to reach out.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3">
                            <Button
                                href="mailto:huyhoang.nguyensg11@gmail.com"
                                variant="gold"
                                size="lg"
                            >
                                <Mail size={20} className="mr-2 inline" /> Email Me
                            </Button>
                            <Button
                                href="https://www.linkedin.com/in/rayngdev11/"
                                variant="ghost"
                                size="lg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 text-white hover:bg-white/20 border border-white/20"
                            >
                                LinkedIn ↗
                            </Button>
                            <Button
                                href="/contact"
                                variant="ghost"
                                size="lg"
                                className="bg-white/10 text-white hover:bg-white/20 border border-white/20"
                            >
                                Send a Message
                            </Button>
                        </div>
                    </div>
                </AnimateIn>
            </div>
        </section>
    );
}
