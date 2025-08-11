import { Button } from "@/components/ui/button";
import type { Job } from "@/types/jobs/matchedJobs";

const JobInfo = ({
  data,
  hideSaveButton = false,
}: {
  data: Job;
  hideSaveButton?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2">
          <h1 className="text-navyBlue font-tiktok text-lg font-semibold leading-[1.6]">
            {data?.title}
          </h1>
          <div className="bg-navyBlue py-[2px] px-3 flex gap-x-1 whitespace-nowrap rounded-[50px] text-white font-tiktok text-sm font-medium leading-[160%] justify-center items-center">
            <img src="/images/icons/sparkle.svg" className="w-5 h-5" />
            {`100% match`}
          </div>
        </div>
        {hideSaveButton ? (
          <></>
        ) : (
          <Button variant={`lightGray`} size={"icon"}>
            <img src="/images/icons/heart.svg" className="w-6 h-6" />
          </Button>
        )}
      </div>
      <div className="flex gap-x-4">
        <div>
          <p className="flex gap-x-2 text-neutral-700 font-tiktok text-sm font-medium leading-[1.6]">
            <img src={`/images/icons/building-icon.svg`} />
            {`xyz`}
          </p>
        </div>
        <div>
          <p className="flex gap-x-2 text-neutral-700 font-tiktok text-sm font-medium leading-[1.6]">
            <img src={`/images/icons/map-icon.svg`} />
            {`${data?.location?.city}, ${data?.location?.country}`}
          </p>
        </div>
        <div>
          <p className="flex gap-x-2 text-neutral-700 font-tiktok text-sm font-medium leading-[1.6]">
            <img src={`/images/icons/clock-icon.svg`} />
            {`Posted `}
          </p>
        </div>
      </div>
      <div className="flex gap-x-4">
        <Button variant="lightGray" size="xs">
          {data?.employment_type}
        </Button>
        {data.salary_currency ? (
          <Button variant="lightGray" size="xs">
            {data?.salary_currency}
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default JobInfo;
