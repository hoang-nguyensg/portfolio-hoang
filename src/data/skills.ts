export interface SkillCategory {
    title: string;
    icon: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Programming Languages",
        icon: "code",
        skills: ["Python", "R", "SQL"],
    },
    {
        title: "Languages",
        icon: "languages",
        skills: ["Vietnamese", "English"],
    },
    {
        title: "Machine Learning & Data Science",
        icon: "brain",
        skills: [
            "TensorFlow",
            "PyTorch",
            "Scikit-learn",
            "NumPy",
            "Pandas",
            "OpenCV",
            "Stable-Baselines3",
        ],
    },
    {
        title: "AI & Development Tools",
        icon: "rocket",
        skills: ["Ollama", "Gradio", "Jupyter Notebook", "PyCharm", "Google Colab", "Docker"],
    },
    {
        title: "Version Control",
        icon: "git",
        skills: ["GitHub"],
    },
];

