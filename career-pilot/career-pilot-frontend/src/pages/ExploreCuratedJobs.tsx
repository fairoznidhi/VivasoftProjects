import { jobs } from "@/constants/jobListTest";
import { useFlow } from "@/context/FlowContext";
import JobCard from "@/features/jobs/JobCard";
import { useEffect } from "react";

const ExploreCuratedJobs = () => {
  const { updateActiveButtons } = useFlow();
  useEffect(() => {
    updateActiveButtons({ UploadResume: true, ExploreCuratedJobs: true });
  }, []);
  return (
    <div className="flex flex-col gap-y-6">
      {jobs.map((job, index) => (
        <JobCard key={`${job.role}-${index}`} data={job} />
      ))}
    </div>
  );
};

export default ExploreCuratedJobs;
