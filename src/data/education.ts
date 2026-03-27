export interface EducationEntry {
    id: string;
    institution: string;
    degree: string;
    field: string;
    period: string;
    location: string;
    gpa: string;
    gpaScale: string;
    courses: string[];
    awards?: { title: string; link?: string }[];
    capstoneProject?: string;
}

export const educationEntries: EducationEntry[] = [
    {
        id: "fpt-university",
        institution: "FPT University",
        degree: "Bachelor of Artificial Intelligence",
        field: "",
        period: "Oct 2021 - Dec 2025",
        location: "Ho Chi Minh City, Vietnam",
        gpa: "3.48",
        gpaScale: "4.0",
        courses: [
            "Data Structures & Algorithms",
            "Machine Learning",
            "Deep Learning",
        ],
        awards: [
            { title: "Honorable & excellent student (9/9 Semester)" }
        ],
        capstoneProject: "Vision-Language AI for Chest X-ray Caption Automation",
    },
];
