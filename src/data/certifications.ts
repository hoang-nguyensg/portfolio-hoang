export interface Certification {
    id: string;
    title: string;
    issuer: string;
    link: string;
}

export const certifications: Certification[] = [
    {
        id: "nvidia-video-ai",
        title: "Building Real-Time Video AI Applications",
        issuer: "NVIDIA Deep Learning Institute",
        link: "https://learn.nvidia.com/certificates?id=0MDZ8D6ATkuFBKl6DMOaUQ"
    },
    {
        id: "nvidia-data-science",
        title: "Accelerating End-to-End Data Science Workflows",
        issuer: "NVIDIA Deep Learning Institute",
        link: "https://learn.nvidia.com/certificates?id=VLNEEd3-QZGO3pELd5tm9g"
    },
    {
        id: "coursera-ibm-ai-workflow",
        title: "IBM AI Enterprise Workflow Specialization",
        issuer: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/specialization/FPUM79IAN4XO"
    },
    {
        id: "udemy-ml-dl-python-r",
        title: "Machine Learning & Deep Learning in Python & R",
        issuer: "Udemy",
        link: "https://www.udemy.com/certificate/UC-1be6907f-5dc3-43aa-8d91-cca49e89997a/"
    },
    {
        id: "udemy-python-ai-smart-assistants",
        title: "Python AI: Build Smart Assistants & Computer Vision Projects",
        issuer: "Udemy",
        link: "https://www.udemy.com/certificate/UC-f374a291-ffdc-41d7-b525-9cecae1d2151/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com"
    },
    {
        id: "udemy-git-github",
        title: "Làm Chủ Git và GitHub Từ A đến Z",
        issuer: "Udemy",
        link: "https://www.udemy.com/certificate/UC-2ce546a1-30e0-4ab3-8763-b1416af6d9fa/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com"
    }
];
