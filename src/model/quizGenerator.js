import { GoogleGenAI } from '@google/genai';

const levels = [
    `
    🔹 Beginner Level
        Focus: Core Concepts & Fundamentals
        Ideal for those just starting out with AWS. These quizzes cover essential topics like cloud basics, core AWS services (like EC2, S3, and IAM), pricing models, and the shared responsibility model. It’s all about building a solid understanding of how AWS works.
    `,

    `
    🔸 Intermediate Level
        Focus: Practitioner Certification Readiness
        This level takes a deeper dive into AWS services and use cases. Questions are aligned with topics from the AWS Certified Cloud Practitioner exam including architectural principles, billing and pricing, security best practices, and basic troubleshooting.
    `,

    `
    🔶 Pro Level
        Focus: Solutions Architect Associate Preparation
        Designed for users preparing for the AWS Certified Solutions Architect Associate certification. These quizzes should challenge users with scenario-based questions on system design, high availability, fault tolerance, performance optimization, and cost-efficiency using real AWS services.
    `
]



const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const Gemini = new GoogleGenAI({apiKey: GEMINI_API_KEY});
export const generateQuizes = async (level)=> {
const prompt = `
Generate a multiple-choice quiz focused on AWS. Choose a random number of questions between 5 to 15.

Each question must include:
1. A question string
2. Four options labeled a, b, c, and d
3. One correct answer marked with its corresponding letter (correct)
4. A short explanation of the correct answer (why)
5. An empty value by (result)

Use this difficulty description to guide the tone and depth of the questions:

${levels[level - 1]}

⚠️ Important:
- Do NOT write code.
- Do NOT include explanations or markdown formatting.
- Only return a Javascript array of quiz question objects using the structure below.
- No variables just the plain list
- please do not specify what im returning like """javascript and at the end """
- 

'[
  {
    "quiz": "What is AWS?",
    "a": "A music streaming service",
    "b": "A cloud computing platform",
    "c": "A search engine",
    "d": "A type of operating system",
    "correct": "b",
    "why": "AWS stands for Amazon Web Services and provides cloud computing solutions.",
    "result: ""
  },
  ...
]'
`;

    try{
        const response = await Gemini.models.generateContent({
            model: 'gemini-2.0-flash-001',
            contents: prompt,
        });

        console.log(response.text);
        return JSON.parse(response.text);
    }catch (error){
        console.error("Failed to generate quiz:", error);
        return null;
    }
}