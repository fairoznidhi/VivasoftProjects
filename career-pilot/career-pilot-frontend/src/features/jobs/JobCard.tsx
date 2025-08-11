import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import type { Job } from "@/types/jobs/matchedJobs";
import JobDescriptionModal from "@features/jobs/JobDescriptionModal";
import JobInfo from "./JobInfo";

const JobCard = ({ data }: { data: Job }) => {
  return (
    <div className="bg-white border rounded-[16px] p-6 flex flex-col gap-y-4">
      <JobInfo data={data} />
      <div className="line-clamp-2 text-neutral-700 font-tiktok text-base font-normal leading-[160%]">
        {data?.description}
      </div>
      <div className="flex gap-x-4">
        {/* <Button variant="blue">Start mock interview</Button> */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="gray">View job details</Button>
          </DialogTrigger>
          <JobDescriptionModal data={data} />
        </Dialog>
      </div>
    </div>
  );
};

export default JobCard;
