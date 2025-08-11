import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Job } from "@/types/jobs/matchedJobs";
import { useNavigate } from "react-router-dom";
import JobInfo from "./JobInfo";

const JobDescriptionModal = ({ data }: { data: Job }) => {
  const navigate = useNavigate();
  return (
    <DialogContent className="sm:max-w-[700px]">
      <DialogHeader>
        <JobInfo data={data} hideSaveButton={true}/>
      </DialogHeader>
      <Tabs defaultValue="interview-details">
        <TabsList>
          <TabsTrigger value="interview-details">Interview Details</TabsTrigger>
          <TabsTrigger value="job-description">Job Descripton</TabsTrigger>
        </TabsList>
      </Tabs>
      <DialogFooter className="mr-auto">
        <Button
          variant={"blue"}
          onClick={() => navigate("/practice-interview")}
        >
          Next
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default JobDescriptionModal;
