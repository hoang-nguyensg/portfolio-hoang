import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return {};
    return {
        title: project.title,
        description: project.description,
    };
}

function ArchDiagram({ label }: { label: string }) {
    if (label === "CLARA - VLM Fine-tuning Pipeline") {
        return (
            <svg
                viewBox="0 0 800 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm"
                aria-label={`${label} diagram`}
            >
                <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                        <path d="M0,0 L10,5 L0,10 Z" fill="var(--color-primary)" />
                    </marker>
                    <marker id="arrow-muted" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                        <path d="M0,0 L10,5 L0,10 Z" fill="var(--color-border)" />
                    </marker>
                    <linearGradient id="grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.1" />
                    </linearGradient>
                </defs>

                {/* Background container for the main model */}
                <rect x="250" y="40" width="300" height="240" rx="16" fill="url(#grad-primary)" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="4 4" />
                <text x="400" y="65" textAnchor="middle" fontSize="14" fontWeight="bold" fill="var(--color-primary)" fontFamily="Inter, sans-serif">
                    Qwen2-VL-7B (Fine-tuned)
                </text>

                {/* Inputs - Left Side */}
                <g transform="translate(40, 100)">
                    <rect x="0" y="0" width="140" height="40" rx="8" fill="var(--color-surface-2)" stroke="var(--color-border)" strokeWidth="1.5" />
                    <text x="70" y="25" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--color-text)" fontFamily="Inter, sans-serif">Chest X-ray Image</text>

                    <rect x="0" y="80" width="140" height="40" rx="8" fill="var(--color-surface-2)" stroke="var(--color-border)" strokeWidth="1.5" />
                    <text x="70" y="105" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--color-text)" fontFamily="Inter, sans-serif">Clinical Prompt</text>
                </g>

                {/* Connections from Inputs to Model */}
                <path d="M180 120 C 215 120, 215 120, 250 120" stroke="var(--color-primary)" strokeWidth="2" markerEnd="url(#arrow)" />
                <path d="M180 200 C 215 200, 215 200, 250 200" stroke="var(--color-primary)" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* The 3 Stages inside the Model */}
                <g transform="translate(280, 80)">
                    {/* Stage 1 */}
                    <rect x="0" y="0" width="240" height="45" rx="8" fill="var(--color-surface)" stroke="var(--color-accent)" strokeWidth="1.5" />
                    <text x="120" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="var(--color-text)" fontFamily="Inter, sans-serif">Stage 1: Findings</text>
                    <text x="120" y="36" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)" fontFamily="Inter, sans-serif">Objective visual extraction</text>

                    {/* Stage 2 */}
                    <rect x="0" y="65" width="240" height="45" rx="8" fill="var(--color-surface)" stroke="var(--color-accent)" strokeWidth="1.5" />
                    <text x="120" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="var(--color-text)" fontFamily="Inter, sans-serif">Stage 2: Impressions</text>
                    <text x="120" y="101" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)" fontFamily="Inter, sans-serif">Diagnostic reasoning from Findings</text>

                    {/* Stage 3 */}
                    <rect x="0" y="130" width="240" height="45" rx="8" fill="var(--color-primary)" fillOpacity="0.1" stroke="var(--color-primary)" strokeWidth="2" />
                    <text x="120" y="150" textAnchor="middle" fontSize="12" fontWeight="bold" fill="var(--color-primary)" fontFamily="Inter, sans-serif">Stage 3: Multi-turn</text>
                    <text x="120" y="166" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)" fontFamily="Inter, sans-serif">Conversational Q&amp;A integration</text>

                    {/* Internal connections */}
                    <path d="M120 45 L120 65" stroke="var(--color-border)" strokeWidth="1.5" markerEnd="url(#arrow-muted)" />
                    <path d="M120 110 L120 130" stroke="var(--color-border)" strokeWidth="1.5" markerEnd="url(#arrow-muted)" />
                </g>

                {/* Outputs - Right Side */}
                <g transform="translate(610, 140)">
                    <rect x="0" y="0" width="150" height="50" rx="8" fill="var(--color-surface-2)" stroke="var(--color-border)" strokeWidth="1.5" />
                    <text x="75" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="var(--color-text)" fontFamily="Inter, sans-serif">Final Output</text>
                    <text x="75" y="38" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)" fontFamily="Inter, sans-serif">Vietnamese Medical Report</text>
                </g>

                {/* Connection from Model to Output */}
                <path d="M550 160.5 C 580 160.5, 580 165, 610 165" stroke="var(--color-primary)" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* Footer Caption */}
                <text x="400" y="300" textAnchor="middle" fontSize="11" fill="var(--color-text-muted)" fontFamily="Inter, sans-serif">
                    {label} — 3-Stage Training Pipeline Methodology
                </text>
            </svg>
        );
    }

    if (label === "CARLA Gym + SAC Architecture") {
        return <CarlaArchitectureSVG label={label} />;
    }

    return (
        <svg viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-lg" style={{ background: "var(--color-surface-2)" }}>
            <text x={300} y={100} textAnchor="middle" fill="var(--color-text-muted)" fontFamily="Inter">Architecture Diagram</text>
        </svg>
    );
}

function CarlaArchitectureSVG({ label }: { label: string }) {
    return (
        <svg
            viewBox="0 0 850 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm"
            aria-label={`${label} diagram`}
        >
            <defs>
                <marker id="arrow-obs" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                    <path d="M0,0 L10,5 L0,10 Z" fill="var(--color-primary)" />
                </marker>
                <marker id="arrow-train" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                    <path d="M0,0 L10,5 L0,10 Z" fill="var(--color-border)" />
                </marker>
                <marker id="arrow-action" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                    <path d="M0,0 L10,5 L0,10 Z" fill="var(--color-accent)" />
                </marker>
                <linearGradient id="grad-accent-carla" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient id="grad-primary-carla" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.05" />
                </linearGradient>
            </defs>

            {/* Curriculum Wrapper wrapped around Environment */}
            <g transform="translate(40, 50)">
                <rect x="0" y="0" width="220" height="240" rx="12" fill="url(#grad-accent-carla)" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="6 4" />
                <text x="110" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="var(--color-accent)" fontFamily="Inter, sans-serif">Curriculum Wrapper (Spawn Logic)</text>

                {/* 1. CARLA Simulator (Left) */}
                <rect x="10" y="35" width="200" height="195" rx="8" fill="var(--color-surface-2)" stroke="var(--color-border)" strokeWidth="1.5" />
                <text x="110" y="60" textAnchor="middle" fontSize="13" fontWeight="bold" fill="var(--color-text)" fontFamily="Inter, sans-serif">CARLA Environment (Gym)</text>

                <rect x="30" y="85" width="160" height="40" rx="6" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
                <text x="110" y="110" textAnchor="middle" fontSize="12" fill="var(--color-text)" fontFamily="Inter, sans-serif">RGB Camera (Visual)</text>

                <rect x="30" y="135" width="160" height="40" rx="6" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
                <text x="110" y="160" textAnchor="middle" fontSize="12" fill="var(--color-text)" fontFamily="Inter, sans-serif">Kinematics (Speed, Loc)</text>

                <rect x="30" y="185" width="160" height="35" rx="6" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
                <text x="110" y="207" textAnchor="middle" fontSize="11" fill="var(--color-text)" fontFamily="Inter, sans-serif">(Collision Detect)</text>
            </g>

            {/* 2. Feature Extraction & Mid-Layer */}
            <g transform="translate(300, 85)">
                {/* VAE */}
                <rect x="0" y="0" width="200" height="50" rx="8" fill="url(#grad-primary-carla)" stroke="var(--color-primary)" strokeWidth="1.5" />
                <text x="100" y="22" textAnchor="middle" fontSize="11" fontWeight="bold" fill="var(--color-primary)" fontFamily="Inter, sans-serif">Perception (FP16 VAE Encoder)</text>
                <text x="100" y="38" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)" fontFamily="Inter, sans-serif">[Latent: 95-dim]</text>

                {/* State Vector */}
                <rect x="0" y="70" width="200" height="45" rx="8" fill="var(--color-surface-2)" stroke="var(--color-primary)" strokeWidth="1.5" />
                <text x="100" y="92" textAnchor="middle" fontSize="12" fontWeight="bold" fill="var(--color-text)" fontFamily="Inter, sans-serif">State Vector</text>
                <text x="100" y="108" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)" fontFamily="Inter, sans-serif">[Obs Dict: {'{'}latent, state{'}'}]</text>

                {/* Reward & Done */}
                <rect x="0" y="135" width="200" height="35" rx="8" fill="var(--color-surface-2)" stroke="var(--color-border)" strokeWidth="1.5" />
                <text x="100" y="157" textAnchor="middle" fontSize="11" fontWeight="bold" fill="var(--color-text)" fontFamily="Inter, sans-serif">Reward &amp; Termination logic</text>
            </g>

            {/* 3. RL Policy (Right) */}
            <g transform="translate(530, 80)">
                <rect x="0" y="0" width="280" height="200" rx="12" fill="url(#grad-accent-carla)" stroke="var(--color-accent)" strokeWidth="1.5" />
                <text x="140" y="25" textAnchor="middle" fontSize="14" fontWeight="bold" fill="var(--color-accent)" fontFamily="Inter, sans-serif">SAC Agent (SB3)</text>

                {/* Replay Buffer */}
                <rect x="25" y="45" width="230" height="45" rx="6" fill="var(--color-surface-2)" stroke="var(--color-border)" strokeWidth="1.5" />
                <text x="140" y="66" textAnchor="middle" fontSize="12" fontWeight="bold" fill="var(--color-text)" fontFamily="Inter, sans-serif">Replay Buffer</text>
                <text x="140" y="82" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)" fontFamily="Inter, sans-serif">Transitions: (s, a, r, s', d)</text>

                {/* Networks */}
                <rect x="25" y="110" width="230" height="75" rx="6" fill="var(--color-surface-2)" stroke="var(--color-accent)" strokeWidth="1.5" />
                <text x="140" y="128" textAnchor="middle" fontSize="12" fontWeight="bold" fill="var(--color-text)" fontFamily="Inter, sans-serif">SAC Update Loop</text>

                <rect x="35" y="135" width="100" height="40" rx="6" fill="var(--color-surface)" stroke="var(--color-accent)" strokeWidth="1" />
                <text x="85" y="160" textAnchor="middle" fontSize="11" fontWeight="bold" fill="var(--color-text)" fontFamily="Inter, sans-serif">Actor (Policy π)</text>

                <rect x="145" y="135" width="100" height="40" rx="6" fill="var(--color-surface)" stroke="var(--color-accent)" strokeWidth="1" />
                <text x="195" y="160" textAnchor="middle" fontSize="11" fontWeight="bold" fill="var(--color-text)" fontFamily="Inter, sans-serif">Critic (Q-Values)</text>
            </g>

            {/* --- ARROWS --- */}

            {/* Observation Flow = Solid Primary */}
            {/* RGB -> VAE */}
            <path d="M250 155 C 275 155, 275 110, 300 110" stroke="var(--color-primary)" strokeWidth="2" markerEnd="url(#arrow-obs)" fill="none" />
            {/* Kinematics -> State */}
            <path d="M250 205 L 275 205 L 275 170 L 300 170" stroke="var(--color-primary)" strokeWidth="2" markerEnd="url(#arrow-obs)" fill="none" />

            {/* Mid -> Replay Buffer */}
            {/* VAE -> Replay Buffer */}
            <path d="M500 110 L 530 110" stroke="var(--color-primary)" strokeWidth="2" markerEnd="url(#arrow-obs)" fill="none" />
            {/* State Vector -> Replay Buffer */}
            <path d="M500 170 C 515 170, 515 130, 530 130" stroke="var(--color-primary)" strokeWidth="2" markerEnd="url(#arrow-obs)" fill="none" />

            {/* Reward -> Buffer (Dashed/Border Training Flow) */}
            <path d="M250 255 L 280 255 L 280 235 L 300 235" stroke="var(--color-border)" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow-train)" fill="none" />
            <path d="M500 235 L 515 235 L 515 150 L 530 150" stroke="var(--color-border)" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow-train)" fill="none" />

            {/* SAC Internal Update (Training Flow Dashed) */}
            <path d="M670 170 L 670 190" stroke="var(--color-border)" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow-train)" fill="none" />

            {/* Action Frame */}
            <rect x="300" y="320" width="260" height="40" rx="20" fill="var(--color-surface)" stroke="var(--color-accent)" strokeWidth="2" />
            <text x="430" y="345" textAnchor="middle" fontSize="14" fontWeight="bold" fill="var(--color-accent)" fontFamily="Inter, sans-serif">Action (Steer, Throttle, Brake)</text>

            {/* Action Flows = Solid Accent */}
            {/* Actor to Action Block */}
            <path d="M615 265 L 615 340 L 570 340" stroke="var(--color-accent)" strokeWidth="2" markerEnd="url(#arrow-action)" fill="none" />
            {/* Action Block to Env (Feedback) */}
            <path d="M300 340 L 150 340 L 150 290" stroke="var(--color-accent)" strokeWidth="2" markerEnd="url(#arrow-action)" fill="none" />

            {/* Footer Caption */}
            <text x="425" y="395" textAnchor="middle" fontSize="11" fill="var(--color-text-muted)" fontFamily="Inter, sans-serif">
                Technical Architecture: Decoupling the high-frequency environment loop from the off-policy SAC loop.
            </text>
        </svg>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mb-10">
            <h2 className="font-display font-bold text-xl text-[var(--color-text)] mb-3 pb-2 border-b border-[var(--color-border)]">
                {title}
            </h2>
            {children}
        </section>
    );
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) notFound();

    const { detail } = project;

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-8" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
                <span>/</span>
                <Link href="/projects" className="hover:text-[var(--color-primary)] transition-colors">Projects</Link>
                <span>/</span>
                <span className="text-[var(--color-text)] font-medium truncate">{project.title}</span>
            </nav>

            {/* Header */}
            <header className="mb-10">
                {project.subtitle && (
                    <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2">
                        {project.subtitle}
                    </p>
                )}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--color-text)] leading-tight">
                        {project.title}
                    </h1>
                    {project.status && (
                        <Badge variant={project.status === "Coming Soon" ? "gold" : "subtle"}>
                            {project.status === "Coming Soon" ? "🚧 Coming Soon" : "⏳ Work in Progress"}
                        </Badge>
                    )}
                </div>
                <p className="text-[var(--color-text-muted)] text-base leading-relaxed mb-5">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-4 items-center text-sm text-[var(--color-text-muted)] mb-5">
                    <span>
                        <strong className="text-[var(--color-text)] font-semibold">Role:</strong> {project.role}
                    </span>
                    <span>&middot;</span>
                    <span>
                        <strong className="text-[var(--color-text)] font-semibold">Period:</strong> {project.period}
                    </span>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <Badge key={t} variant="primary">{t}</Badge>
                    ))}
                </div>
            </header>

            {/* Project Image */}
            {project.image && (
                <Section title="Interface Preview">
                    <div className="w-full overflow-hidden rounded-xl border border-[var(--color-border)] shadow-sm">
                        <img src={project.image} alt={`${project.title} Demo`} className="w-full h-auto object-cover" />
                    </div>
                </Section>
            )}

            {/* Architecture diagram placeholder */}
            {detail.architecturePlaceholder && (
                <Section title="Pipeline Workflow">
                    <ArchDiagram label={detail.architecturePlaceholder} />
                </Section>
            )}

            {/* Detail sections */}
            <Section title="Problem">
                <p className="text-[var(--color-text-muted)] leading-relaxed whitespace-pre-wrap">{detail.problem}</p>
            </Section>

            <Section title="Approach">
                <p className="text-[var(--color-text-muted)] leading-relaxed whitespace-pre-wrap">{detail.approach}</p>
            </Section>

            <Section title="Dataset & Setup">
                <p className="text-[var(--color-text-muted)] leading-relaxed whitespace-pre-wrap">{detail.datasetSetup}</p>
            </Section>

            <Section title="Evaluation">
                <p className="text-[var(--color-text-muted)] leading-relaxed whitespace-pre-wrap">{detail.evaluation}</p>
            </Section>

            <Section title="Results">
                <p className="text-[var(--color-text-muted)] leading-relaxed whitespace-pre-wrap">{detail.results}</p>
            </Section>

            <Section title="What I Learned">
                <ul className="space-y-2">
                    {detail.learned.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span
                                className="flex-none mt-1 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center font-bold"
                                style={{ background: "var(--color-accent)" }}
                            >
                                {i + 1}
                            </span>
                            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item}</p>
                        </li>
                    ))}
                </ul>
            </Section>

            <Section title="Reproducibility">
                <div
                    className="rounded-lg p-4 border-l-4"
                    style={{ background: "var(--color-surface-2)", borderColor: "var(--color-primary)" }}
                >
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{detail.reproducibility}</p>
                </div>
            </Section>

            {/* Links */}
            <Section title="Links">
                <div className="flex flex-wrap gap-3">
                    {project.links.map((link) => (
                        link.placeholder ? (
                            <span
                                key={link.label}
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium border border-[var(--color-border)] text-[var(--color-text-muted)] cursor-not-allowed opacity-60"
                                title="Placeholder — link coming soon"
                            >
                                {link.label} [placeholder]
                            </span>
                        ) : (
                            <Button key={link.label} href={link.href} variant="secondary" size="sm" target="_blank" rel="noopener noreferrer">
                                {link.label} ↗
                            </Button>
                        )
                    ))}
                </div>
            </Section>

            {/* Back */}
            <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
                <Button href="/projects" variant="ghost" size="md">
                    ← Back to Projects
                </Button>
            </div>
        </div>
    );
}
