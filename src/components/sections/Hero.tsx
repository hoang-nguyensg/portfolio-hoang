"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

function HeroCodeSnippet() {
    return (
        <div className="relative w-full max-w-xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#0d1117] text-left text-xs sm:text-sm font-mono leading-relaxed transform hover:-translate-y-2 transition-all duration-300 border border-white/5">
                <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-white/5">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="text-[11px] text-[#8b949e] font-sans tracking-widest font-semibold uppercase">src/models/train_vlm.py</div>
                    <div className="w-10"></div>
                </div>
                <div className="p-6 text-[#c9d1d9] overflow-hidden leading-loose">
                    <span className="text-[#ff7b72]">import</span> torch<br />
                    <span className="text-[#ff7b72]">from</span> models <span className="text-[#ff7b72]">import</span> VisionLanguageModel<br />
                    <br />
                    <span className="text-[#8b949e]"># Initialize neural architecture</span><br />
                    model = VisionLanguageModel()<br />
                    model.load_weights(<span className="text-[#a5d6ff]">"vlm-7b-ckpt"</span>)<br />
                    <br />
                    <span className="text-[#8b949e]"># Real-time inference pipeline</span><br />
                    <span className="text-[#ff7b72]">def</span> <span className="text-[#d2a8ff]">generate_report</span>(image_tensor):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ff7b72]">with</span> torch.no_grad():<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ff7b72]">return</span> model.generate(<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;img=image_tensor,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max_tokens=<span className="text-[#79c0ff]">512</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;temperature=<span className="text-[#79c0ff]">0.7</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)<br />
                </div>
            </div>
        </div>
    );
}

function AnimatedTerminal() {
    return (
        <div className="relative w-full max-w-xl mx-auto">
            {/* Ambient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2ea043] to-[#d2a8ff] rounded-2xl blur-xl opacity-10" />

            {/* Terminal Window */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#0d1117] border border-white/10 font-mono text-xs sm:text-sm">

                {/* Header */}
                <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-white/5">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="mx-auto text-[11px] text-[#8b949e] tracking-widest uppercase font-semibold">system_boot.sh</div>
                    <div className="w-10" />
                </div>

                {/* Body */}
                <div className="p-6 text-[#c9d1d9] leading-loose">
                    <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-[#2ea043] font-bold">~</span>
                        <span className="text-[#ff7b72]">$</span>
                        <span className="text-[#a5d6ff]">./initialize_ai.sh</span>
                    </div>

                    <div className="mb-4 opacity-0 animate-[terminalFadeIn_0.5s_ease-out_0.5s_forwards]">
                        <span className="text-[#8b949e]">[System]</span> Booting cognitive routines...
                    </div>

                    <div className="space-y-2 mb-4">
                        <div className="opacity-0 animate-[terminalFadeIn_0.5s_ease-out_1.5s_forwards] flex items-center gap-2">
                            <span className="text-[#2ea043]">✔</span> Loaded core module: <span className="text-[#d2a8ff]">Computer Vision</span>
                        </div>
                        <div className="opacity-0 animate-[terminalFadeIn_0.5s_ease-out_2s_forwards] flex items-center gap-2">
                            <span className="text-[#2ea043]">✔</span> Loaded core module: <span className="text-[#d2a8ff]">Vision-Language Models</span>
                        </div>
                        <div className="opacity-0 animate-[terminalFadeIn_0.5s_ease-out_2.5s_forwards] flex items-center gap-2">
                            <span className="text-[#2ea043]">✔</span> Loaded core module: <span className="text-[#d2a8ff]">Applied ML Systems</span>
                        </div>
                    </div>

                    <div className="flex items-baseline gap-2 mb-2 opacity-0 animate-[terminalFadeIn_0.5s_ease-out_4s_forwards]">
                        <span className="text-[#2ea043] font-bold">~</span>
                        <span className="text-[#ff7b72]">$</span>
                        <span className="text-[#a5d6ff]">python interact.py --mode=deploy</span>
                    </div>

                    <div className="opacity-0 animate-[terminalFadeIn_0.5s_ease-out_5s_forwards]">
                        <span className="text-[#8b949e]">[Status]</span> Ready for new opportunities. <span className="inline-block w-2 h-4 bg-[#c9d1d9] animate-pulse align-middle ml-1"></span>
                    </div>
                </div>

                {/* Embedded Keyframes for animations */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes terminalFadeIn {
                        from { opacity: 0; transform: translateY(4px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}} />
            </div>
        </div>
    );
}

export function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden"
            aria-labelledby="hero-heading"
        >
            <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(107,29,42,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 20% 80%, rgba(197,165,90,0.06) 0%, transparent 70%)",
                }}
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-medium text-[var(--color-text-muted)] mb-6 animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Open to Opportunity
                        </div>

                        <h1
                            id="hero-heading"
                            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4 animate-fade-in-up"
                            style={{
                                background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            NGUYEN HUY HOANG
                        </h1>

                        <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            <span className="text-xs sm:text-sm font-medium text-[var(--color-text)] bg-[var(--color-primary)]/10 px-3 py-1.5 rounded-full border border-[var(--color-primary)]/20 shadow-sm">Computer Vision</span>
                            <span className="text-xs sm:text-sm font-medium text-[var(--color-text)] bg-[var(--color-accent)]/10 px-3 py-1.5 rounded-full border border-[var(--color-accent)]/20 shadow-sm">Vision-Language</span>
                            <span className="text-xs sm:text-sm font-medium text-[var(--color-text)] bg-[var(--color-surface-2)] px-3 py-1.5 rounded-full border border-[var(--color-border)] shadow-sm">Applied ML Systems</span>
                        </div>

                        <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                            AI graduate with knowledge in Machine Learning and Vision Language Models. Contributed to the development of a medical AI system for chest X-ray report generation, achieving 86.5% clinical accuracy validated by professional radiologists. Passionate about continuous learning and staying up-to-date with the latest advancements in AI. Focused on growing as an AI Engineer and building impactful, real-world AI applications.
                        </p>

                        {/* Quick Stats to build immediate authority */}
                        <div className="flex gap-8 mb-10 animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
                            <div>
                                <h3 className="font-display font-bold text-2xl text-[var(--color-text)]">137K+</h3>
                                <p className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-wider mt-1">X-Rays Processed</p>
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-2xl text-[var(--color-text)]">86.5%</h3>
                                <p className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-wider mt-1">Clinical Accuracy</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                            <Button href="/CV_NguyenHuyHoang.pdf" variant="primary" download="CV_NguyenHuyHoang.pdf">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mr-2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download CV
                            </Button>
                            <Button href="/projects" variant="secondary">
                                View Projects &rarr;
                            </Button>
                            <Button href="/contact" variant="secondary">
                                Contact Me
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-2 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
                            <Badge variant="primary">Ho Chi Minh City</Badge>
                            <Badge variant="gold">Bachelor of Artificial Intelligence &mdash; FPT University</Badge>
                            <Badge variant="subtle">Internship: Jun 2024 &ndash; Sep 2024</Badge>
                        </div>
                    </div>

                    <div className="flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                        <div className="w-full pl-0 lg:pl-10">
                            <AnimatedTerminal />
                        </div>
                    </div>
                </div>
            </div>

            {/* Infinite Tech Stack Marquee */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--color-border)] bg-[var(--color-surface-2)]/30 py-4 overflow-hidden hidden sm:block">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--color-background)] to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--color-background)] to-transparent z-10" />

                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes marquee {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-33.33%); }
                    }
                    .animate-marquee {
                        display: flex;
                        width: fit-content;
                        animation: marquee 25s linear infinite;
                    }
                `}} />

                <div className="animate-marquee items-center gap-10 whitespace-nowrap">
                    {[
                        "PyTorch", "TensorFlow", "Hugging Face", "OpenCV", "Gradio",
                        "Python", "Docker", "Machine Learning", "Vision-Language Models", "Scikit-learn",
                        "PyTorch", "TensorFlow", "Hugging Face", "OpenCV", "Gradio",
                        "Python", "Docker", "Machine Learning", "Vision-Language Models", "Scikit-learn",
                        "PyTorch", "TensorFlow", "Hugging Face", "OpenCV", "Gradio",
                        "Python", "Docker", "Machine Learning", "Vision-Language Models", "Scikit-learn"
                    ].map((tech, i) => (
                        <div key={i} className="flex items-center gap-10">
                            <span className="text-sm font-bold text-[var(--color-text-muted)] opacity-70 uppercase tracking-widest pb-0.5">
                                {tech}
                            </span>
                            <span className="text-[var(--color-primary)] opacity-40 text-lg leading-none">&bull;</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
