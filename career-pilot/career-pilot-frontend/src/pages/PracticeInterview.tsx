import { useFlow } from "@/context/FlowContext";
import { useEffect } from "react";

const PracticeInterview = () => {
  const { updateActiveButtons } = useFlow();
  useEffect(() => {
    updateActiveButtons({ UploadResume: true, ExploreCuratedJobs: true,PracticeInterview:true });
  }, []);
  return (
    <div className="flex justify-center text-4xl mt-16">Coming soon...</div>
  );
};

export default PracticeInterview;
