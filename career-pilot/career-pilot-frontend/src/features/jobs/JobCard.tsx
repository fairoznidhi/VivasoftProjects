import type { Job } from "@/types/jobs/matchedJobs";

const JobCard = ({ data }: { data: Job }) => {
  return (
    <div className="bg-white border rounded-[16px] p-6 flex flex-col gap-y-4">
      <div className="flex gap-x-2">
        <h1 className="text-navyBlue font-tiktok text-lg font-semibold leading-[1.6]">
          {data?.role}
        </h1>
        <p>{`${data?.match}`}</p>
      </div>
      <div className="flex gap-x-4">
        <div>
          <p className="flex gap-x-2 text-neutral-700 font-tiktok text-sm font-medium leading-[1.6]">
            <img src={`/images/icons/building-icon.svg`}/>{data?.company}
          </p>
        </div>
        <div>
          <p className="flex gap-x-2 text-neutral-700 font-tiktok text-sm font-medium leading-[1.6]">
            <img src={`/images/icons/map-icon.svg`}/>{data?.location}
          </p>
        </div>
        <div>
          <p className="flex gap-x-2 text-neutral-700 font-tiktok text-sm font-medium leading-[1.6]">
            <img src={`/images/icons/clock-icon.svg`}/>{`Posted ${data?.posted}`}
          </p>
        </div>
      </div>
      <div className="flex gap-x-4">
        <div className="px-4 py-1 text-neutral-700 font-tiktok text-sm font-semibold leading-[1.6] border border-neutral-200 rounded-[50px]">{data?.type}</div>
        <div className="px-4 py-1 text-neutral-700 font-tiktok text-sm font-semibold leading-[1.6] border border-neutral-200 rounded-[50px]">{data?.salary}</div>
      </div>
      <div>{data?.description}</div>
      <div></div>
    </div>
  );
};

export default JobCard;
