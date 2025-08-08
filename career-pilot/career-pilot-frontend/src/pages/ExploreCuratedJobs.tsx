import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { jobs } from "@/constants/jobListTest";
import { useFlow } from "@/context/FlowContext";
import JobCard from "@/features/jobs/JobCard";
import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const totalPages = 20;

const ExploreCuratedJobs = () => {
  const { updateActiveButtons } = useFlow();
  useEffect(() => {
    updateActiveButtons({ UploadResume: true, ExploreCuratedJobs: true });
  }, []);
  const location = useLocation();
  console.log(location);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams({ page: newPage.toString() });
    }
  };
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <p className="font-tiktok text-base font-medium leading-[160%] text-neutral-700">{`We have found 4  jobs based on your resume`}</p>
        <Button variant="lightGray" className="text-navyBlue py">
          <img src="/images/icons/funnel.svg" />
          Filter
        </Button>
      </div>
      <div className="flex flex-col gap-y-6">
        {jobs.map((job, index) => (
          <JobCard key={`${job.role}-${index}`} data={job} />
        ))}
      </div>
      <div className="bg-white w-full shadow-custom rounded-[8px] py-2 my-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={(e) => {
                  e.preventDefault();
                  changePage(page - 1);
                }}
              />
            </PaginationItem>

            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                {totalPages > 3 ? (
                  <PaginationLink
                    isActive={page === i + 1}
                    onClick={(e) => {
                      e.preventDefault();
                      changePage(i + 1);
                    }}
                  >
                    {i + 1}
                  </PaginationLink>
                ) : page >= totalPages - 3 ? (
                  <>
                    <PaginationEllipsis />
                  </>
                ) : (
                  <></>
                )}
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={(e) => {
                  e.preventDefault();
                  changePage(page + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default ExploreCuratedJobs;
