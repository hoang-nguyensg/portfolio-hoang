export interface ProjectTech {
    label: string;
}

export interface ProjectLink {
    label: string;
    href: string;
    placeholder?: boolean;
}

export interface Project {
    slug: string;
    title: string;
    subtitle?: string;
    description: string;
    status?: "Coming Soon" | "Work in Progress";
    role: string;
    period: string;
    featured: boolean;
    image?: string;
    tech: string[];
    links: ProjectLink[];
    detail: {
        problem: string;
        approach: string;
        datasetSetup: string;
        evaluation: string;
        results: string;
        learned: string[];
        reproducibility: string;
        architecturePlaceholder?: string;
    };
}

export const projects: Project[] = [
    {
        slug: "chest-xray-caption-vlm",
        title: "Vision-Language AI for Chest X-ray Caption Automation",
        subtitle: "Graduation Project",
        description:
            "Processed 137K+ X-ray images and reports for training. Fine-tuned Vision-Language Model for X-ray report generation and multi-turn clinical dialogue support, achieving an 86.5% clinical accuracy score evaluated by professional radiologists. Built a Gradio-based web app for real-time X-ray upload and AI report visualization.",
        role: "Co-Researcher / Developer",
        period: "July 2024 - Dec 2025",
        featured: true,
        image: "/images/projects/clara-demo.png",
        tech: [
            "Python",
            "Hugging Face Transformers",
            "Vision-Language Models",
            "Gradio",
            "PyTorch",
        ],
        links: [
            { label: "GitHub Repo", href: "https://github.com/hoang-nguyensg/clara", placeholder: false },
            { label: "Full Report (PDF)", href: "https://drive.google.com/file/d/1FemxVNY4iL7vud2zyeOewTpqYmlfiPK0/view", placeholder: false },
        ],
        detail: {
            problem:
                "Provincial hospitals in Vietnam face a severe shortage of radiologists, leading to high workloads and inconsistent reporting. Existing VLMs are primarily English-based and trained on non-Vietnamese anatomical datasets. The goal was to build a localized, assistive tool to generate Vietnamese X-ray Findings and Impressions to support radiologists.",
            approach:
                "Implemented a three-stage fine-tuning pipeline: (1) Findings Generation, (2) Impressions Generation, and (3) Multi-turn conversational interaction. Evaluated 6 foundational VLMs (including InternVL, MiniCPM, Vintern, and LaVy), ultimately selecting Qwen2-VL-7B as the best performer. Set up deployment via FastAPI and NVIDIA Triton Inference Server.",
            datasetSetup:
                "Utilized a proprietary dataset of 137,930 chest X-ray examinations provided by Military Hospital 175, fully anonymized (PHI removed). Data included images paired with professional, multi-stage Vietnamese diagnostic reports.",
            evaluation:
                "Employed standard NLG metrics (BLEU, ROUGE) alongside clinical classification metrics (Precision, Recall). Also conducted a 'Doctor Benchmark', where licensed radiologists blindly scored generated reports.",
            results:
                "The final Qwen2-VL-7B model achieved 90.12% ROUGE-1, 89.21% BLEU, 81.22% Precision, and 80.89% Recall on the test set. The model scored 74.5% on the clinical Doctor Benchmark, demonstrating strong alignment with professional diagnostic nuances.\n*Disclaimer: Model developed for research/educational purposes; not for clinical use.*",
            learned: [
                "NLP metrics like BLEU (89%) do not perfectly correlate with clinical accuracy metrics like Precision/Recall (81%), highlighting the need for specialized medical evaluation.",
                "High-quality, institution-specific data is critical; Vietnamese anatomical and clinical nuances differ significantly from Western datasets.",
                "The system performs well on common conditions but inherently struggles with long-tail (rare) pathologies due to imbalanced clinical data distributions.",
            ],
            reproducibility:
                "All experiments were tracked with configuration YAML files specifying model name, dataset split, hyperparameters, and random seeds. Scripts were versioned in Git. Checkpoints and metric logs were stored in a structured output directory. A README in each experiment folder documents how to reproduce each run from scratch.",
            architecturePlaceholder: "CLARA - VLM Fine-tuning Pipeline",
        },
    },
    /*
    {
        slug: "hazard-safety-sign-detection",
        title: "Hazard & Safety Sign Detection",
        subtitle: "Internship — CEH IT Services",
        description:
            "Built and evaluated computer vision models for hazard and safety sign detection using PyTorch and OpenCV to improve automated safety monitoring workflows in enterprise environments.",
        role: "AI Intern",
        period: "Jun 2024 - Dec 2024",
        featured: true,
        tech: [
            "Python",
            "PyTorch",
            "OpenCV",
            "Object Detection",
            "mAP",
            "F1 Score",
            "Data Labeling",
        ],
        links: [
            { label: "Case Study", href: "#", placeholder: true },
            { label: "Demo", href: "#", placeholder: true },
        ],
        detail: {
            problem:
                "Industrial environments require automated monitoring of safety signage to comply with safety regulations. Manual inspection is error-prone and slow. The task was to build a detection model that could reliably identify hazard and safety signs across diverse real-world conditions.",
            approach:
                "Trained object detection models using PyTorch on annotated image datasets. Assisted with dataset annotation and applied data augmentation strategies to improve model generalization. Used OpenCV for preprocessing and post-processing (visualization, NMS tuning).",
            datasetSetup:
                "Collected and labeled images of hazard and safety signs from operational environments. Annotation support was provided for bounding-box labeling. Dataset was organized into train/val/test splits with a structured directory and label validation pass to catch annotation errors.",
            evaluation:
                "Reported mAP (mean Average Precision) and per-class F1 scores. Evaluated across different IoU thresholds and image conditions (lighting variation, occlusion, scale) to understand model robustness.",
            results:
                "Models achieved acceptable mAP scores for deployment consideration in controlled monitoring scenarios. Performance degraded under heavy occlusion, which was flagged as a key area for future improvement. Detailed metrics were documented in the internship evaluation report.",
            learned: [
                "Data quality and annotation consistency matter more than model architecture choices for small datasets.",
                "Evaluating at multiple IoU thresholds reveals failure modes not visible with a single metric.",
                "Working within enterprise infrastructure constraints (air-gapped environments, fixed GPU budgets) requires pragmatic engineering trade-offs.",
                "Documenting experiment configs from the start dramatically reduces debugging time.",
            ],
            reproducibility:
                "Experiment configs (model architecture, training hyperparameters, augmentation policies) were saved alongside each run. Data preprocessing scripts were version-controlled. Results were logged in structured CSV files for easy comparison across training runs.",
            architecturePlaceholder: "Object Detection Pipeline",
        },
    },
    */
    {
        slug: "carla-sac-autonomous-driving",
        title: "Autonomous Driving Agent (CARLA Simulator)",
        subtitle: "Personal Project",
        description:
            "Encoded camera images into compact representations to speed up and stabilize training. Applied curriculum learning to improve driving performance and generalization.",
        role: "Machine Learning Engineer",
        period: "Jun 2025 - Sep 2025",
        featured: true,
        tech: [
            "Python",
            "PyTorch",
            "CARLA Simulator",
            "Reinforcement Learning",
        ],
        links: [
            { label: "GitHub Repo", href: "https://github.com/hoang-nguyensg/carla-sac-autonomous-driving", placeholder: false },
        ],
        detail: {
            problem:
                "Training RL agents for autonomous end-to-end driving requires robust observation spaces and effective exploration strategies to navigate dynamic environments populated by NPCs.",
            approach:
                "Developed a custom CARLA Gym environment wrapper equipped with continuous steering, throttle, and brake action spaces. Implemented a Curriculum Learning track bridging fixed-spawn navigation to completely randomized finetuning.",
            datasetSetup:
                "Extracted high-frequency state observations using synchronous mode (50 FPS). Compressed visual observations (RGB, segmentation) through a pre-trained FP16 Variational Autoencoder mapping into a 95-dimensional continuous latent distribution.",
            evaluation:
                "Evaluated episodic rewards natively tracking collision prevention and route progression against NPCs under variable training episodes and checkpoint intervals.",
            results:
                "Achieved an 85% route completion success rate in dynamic environments with NPCs tracking collision prevention. Successfully persisted agent replay buffers and optimized entropy scaling callbacks, while automating hyperparameter tuning (learning rate, batch size, tau) using Optuna.",
            learned: [
                "Continuous RL on raw visual input is intractable without latent feature extraction such as VAEs.",
                "Using Curriculum Learning (fixed spawn points scaling to randomly selected) significantly stabilizes training curves.",
                "Direct API management of CARLA sub-processes requires precise sensor synchronization (Camera, Collision, LIDAR) to avoid system timeouts.",
            ],
            reproducibility:
                "The training pipeline uses argparse mapping parameters (e.g., target map, visualization modes, finetune stages) logged meticulously to TensorBoard and CSV. Checkpoint checkpoints allow zero-shot resume operations coupled with their replay buffers.",
            architecturePlaceholder: "CARLA Gym + SAC Architecture",
        },
    },
];
