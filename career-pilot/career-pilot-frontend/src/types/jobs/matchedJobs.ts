export type Job = {
  role: string;
  match: string;
  company: string;
  location: string;
  posted: string;
  type: string;
  salary: string;
  description: string;
  interviewDetails: {
    difficultyLevel: string;
    interviewStages: { stage: number; name: string; description: string }[];
  };
  jobDescription: {
    description: string;
    responsibilities: string[];
    requirements: string[];
  };
}
