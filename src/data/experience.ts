export interface ExperienceEntry {
    id: string;
    company: string;
    role: string;
    period: string;
    location: string;
    type: string;
    bullets: string[];
    tech: string[];
}

export const experiences: ExperienceEntry[] = [
    {
        id: "ceh-it-internship",
        company: "CEH IT Services Co., Ltd.",
        role: "Computer Vision Intern",
        period: "Jun 2024 - Sep 2024",
        location: "Ho Chi Minh City, Vietnam",
        type: "Internship",
        bullets: [
            "Developed a computer vision system for hazardous traffic sign detection using deep learning based object detection models.",
            "Studied and compared deep learning-based object detection models.",
            "Analyzed research papers on computer vision and presented key insights.",
        ],
        tech: ["Python", "PyTorch", "OpenCV", "Object Detection"],
    },
];
