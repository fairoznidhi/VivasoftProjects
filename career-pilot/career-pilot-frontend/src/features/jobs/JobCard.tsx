import type { Job } from "@/types/jobs/matchedJobs";
import { Button } from "@/components/ui/button";

const JobCard = ({ data }: { data: Job }) => {
  return (
    <div className="bg-white border rounded-[16px] p-6 flex flex-col gap-y-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2">
          <h1 className="text-navyBlue font-tiktok text-lg font-semibold leading-[1.6]">
            {data?.role}
          </h1>
          <div className="bg-navyBlue py-[2px] px-3 flex gap-x-1 whitespace-nowrap rounded-[50px] text-white font-tiktok text-sm font-medium leading-[160%] justify-center items-center">
            <img src="/images/icons/sparkle.svg" className="w-5 h-5"/>
            {`${data?.match} match`}
          </div>
        </div>
        <Button variant={`lightGray`} size={"icon"}>
          <img src="/images/icons/heart.svg" className="w-6 h-6" />
        </Button>
      </div>
      <div className="flex gap-x-4">
        <div>
          <p className="flex gap-x-2 text-neutral-700 font-tiktok text-sm font-medium leading-[1.6]">
            <img src={`/images/icons/building-icon.svg`} />
            {data?.company}
          </p>
        </div>
        <div>
          <p className="flex gap-x-2 text-neutral-700 font-tiktok text-sm font-medium leading-[1.6]">
            <img src={`/images/icons/map-icon.svg`} />
            {data?.location}
          </p>
        </div>
        <div>
          <p className="flex gap-x-2 text-neutral-700 font-tiktok text-sm font-medium leading-[1.6]">
            <img src={`/images/icons/clock-icon.svg`} />
            {`Posted ${data?.posted}`}
          </p>
        </div>
      </div>
      <div className="flex gap-x-4">
        <Button variant="lightGray" size="xs">
          {data?.type}
        </Button>
        <Button variant="lightGray" size="xs">
          {data?.salary}
        </Button>
      </div>
      <div className="line-clamp-2 text-neutral-700 font-tiktok text-base font-normal leading-[160%]">
        {data?.description}
      </div>
      <div className="flex gap-x-4">
        <Button variant="blue">Start mock interview</Button>
        <Button variant="gray">View job details</Button>
      </div>
    </div>
  );
};

export default JobCard;
