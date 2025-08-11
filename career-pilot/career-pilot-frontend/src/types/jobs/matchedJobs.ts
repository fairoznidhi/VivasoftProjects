export type Jobs = {
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
};

export type GetJobsParams = {
  limit?: number;
  offset?: number;
  keywords?: string;
  location_tags?: string;
  user_id?: number;
};

export type Job = {
  id?: number;
  title?: string;
  job_url?: string;
  posted_date?: string;
  deadline?: string;
  employment_type?: string;
  experience_level?: string;
  salary_min?: number;
  salary_max?: number;
  salary_currency?: string;
  salary_period?: string;
  work_type?: string;
  description?: string;
  responsibilities?: string[];
  education?: Education[] | null;
  skills?: string[];
  experience_years?: number;
  experience_description?: string;
  certifications?: string[];
  languages?: Language[] | null;
  location?: {
    country?: string;
    city?: string;
  };
  benefits?: string[];
  application_process?: {
    instructions?: string;
  };
  qualifications?: {
    must_have?: string[];
    preferred_have?: string[];
  };
  contact?: {
    email?: string;
    phone?: string;
  };
  tags?: string[];
  location_tags?: string[] | null;
  company_name?: string;
  apply_url?: string;
  company_url?: string;
  department?: string;
};

export type Education = {
  degree?: string;
  institute?: string;
  required?: boolean;
};

export type Language = {
  language?: string;
  proficiency?: string;
};

export type PageInfo = {
  total_count?: number;
  limit?: number;
  offset?: number;
};

export type JobsResponse = {
  jobs?: Job[];
  page_info?: PageInfo;
};

export type JobApiResponse = {
  message?: string;
  data?: JobsResponse;
};
