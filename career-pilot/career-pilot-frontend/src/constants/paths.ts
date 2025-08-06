import ExploreCuratedJobs from "@/pages/ExploreCuratedJobs";
import PracticeInterview from "@/pages/PracticeInterview";
import UploadResume from "@/pages/UploadResume";

export const startActions = [
  {
    name: "Upload Resume",
    path: "/upload-resume",
    key: "UploadResume",
    component:UploadResume
  },
  {
    name: "Explore Curated Jobs",
    path: "/explore-curated-jobs",
    key: "ExploreCuratedJobs",
    component:ExploreCuratedJobs
  },
  {
    name: "Practice Interview",
    path: "/practice-interview",
    key: "PracticeInterview",
    component:PracticeInterview
  },
] as const;

export const navItems = [
  { name: "Home", key: "Home", path: "/", otherPaths: [] },
  {
    name: "AI Interview",
    key: "AiInterview",
    path: "/ai-interview",
    otherPaths: [],
  },
  { name: "Jobs", key: "Jobs", path: "/jobs", otherPaths: [] },
  { name: "Courses", key: "Courses", path: "/courses", otherPaths: [] },
].map((item) => ({
  ...item,
  otherPaths:
    item.name === "Home" ? startActions.map((action) => action.path) : [],
}));
