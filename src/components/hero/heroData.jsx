import { IoBookOutline } from "react-icons/io5";
import { MdShowChart } from "react-icons/md";
import { GiSportMedal } from "react-icons/gi";


export const about = [
    {
        icon: <IoBookOutline style={{"color": "#42b883", "fontWeight": "bolder"}} />,
        title: "Beginner",
        headerText: "Start with the fundamentals of AWS.",
        content: "Covers: EC2, S3, IAM, pricing, shared responsibility model"
    },
    {
        icon: <MdShowChart style={{"color": "orange", "fontWeight": "bolder"}} />,
        title: "Intermediate",
        headerText: "Tackle questions designed to help you pass the Cloud Practitioner exam.",
        content: "Covers: architectural principles, billing, pricing, security, troubleshooting"
    },
    {
        icon: <GiSportMedal style={{"color": "red", "fontWeight": "bolder"}} />,
        title: "Professional",
        headerText: "Take on advanced scenarios to prepare for the Solutions Architect – Associate certification..",
        content: "Covers: high availability, system design, performance optimization, fault tolerance"
    },
];



export const levels = [
    {
        title: "Beginner Level",
        content: "Focus: Core Concepts & Fundamentals. \nIdeal for those just starting out with AWS. These quizzes cover essential topics like cloud basics, core AWS services (like EC2, S3, and IAM), pricing models, and the shared responsibility model. It’s all about building a solid understanding of how AWS works."
    },
    {
        title: "Intermediate Level",
        content: "Focus: Practitioner Certification Readiness. \nThis level takes a deeper dive into AWS services and use cases. Questions are aligned with the topics found in the AWS Certified Cloud Practitioner exam — such as architectural principles, billing and pricing, security best practices, and basic troubleshooting. It’s perfect for learners preparing to earn their first AWS certification."
    },
    {
        title: "Pro Level",
        content: "Focus: Solutions Architect – Associate Preparation. \nDesigned for users aiming to earn the AWS Certified Solutions Architect – Associate certification. These quizzes challenge users with scenario-based questions on system design, high availability, fault tolerance, performance optimization, and cost-efficiency using real AWS services."
    }
];

export const unSelectedTab = {
    "color": "#716C6C"
}

export const selectedTab = {
    "color": "black"
}