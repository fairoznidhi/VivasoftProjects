import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useFlow } from "@/context/FlowContext";
import JobCard from "@/features/jobs/JobCard";
import { useGetJobsQuery } from "@/redux/api/jobApi";
import MultiStepLoader from "@features/jobs/MultiStepLoader.tsx";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const ExploreCuratedJobs = () => {
  const location = useLocation();
  console.log(location);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = 2,
    offset = 0;
  const { data, error, isLoading } = useGetJobsQuery({
    limit: limit,
    offset: offset + (page - 1) * limit,
  });
  console.log("data", data?.data?.jobs, "error", error, "isLoading", isLoading);
  const totalPages = Math.ceil(
    (data?.data?.page_info?.total_count ?? 0) / limit
  );
  const { updateActiveButtons } = useFlow();
  useEffect(() => {
    updateActiveButtons({ UploadResume: true, ExploreCuratedJobs: true });
  }, []);
  const [isFetchingJobs, setIsFetchingJobs] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFetchingJobs(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);
  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams({ page: newPage.toString() });
    }
  };
  const getVisiblePages = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (page === 1) return [1, 2, 3];
    if (page === totalPages)
      return [totalPages - 2, totalPages - 1, totalPages];
    return [page - 1, page, page + 1];
  };

  const visiblePages = getVisiblePages();

  return (
    <section>
      {isFetchingJobs ? (
        <MultiStepLoader />
      ) : (
        <>
          <div className="flex items-center justify-between mb-6">
            <p className="font-tiktok text-base font-medium leading-[160%] text-neutral-700">{`We have found ${data?.data?.page_info?.total_count} jobs based on your resume`}</p>
            {/* <Button variant="lightGray" className="text-navyBlue py">
          <img src="/images/icons/funnel.svg" />
          Filter
        </Button> */}
          </div>
          <div className="flex flex-col gap-y-6  mb-6">
            {data?.data?.jobs?.map((job) => (
              <JobCard key={job.id} data={job} />
            ))}
          </div>
          {Number(data?.data?.page_info?.total_count ?? 0) > 1 ? (
            <div className="bg-white w-full shadow-custom rounded-[8px] py-2 mb-6">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={(e) => {
                        e.preventDefault();
                        changePage(page - 1);
                      }}
                      className={
                        page === 1 ? "pointer-events-none opacity-50" : ""
                      }
                    />
                  </PaginationItem>
                  {visiblePages[0] > 1 && (
                    <>
                      <PaginationItem>
                        <PaginationLink
                          onClick={(e) => {
                            e.preventDefault();
                            changePage(1);
                          }}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      {visiblePages[0] > 2 && (
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                      )}
                    </>
                  )}
                  {visiblePages.map((pageNum) => (
                    <PaginationItem key={pageNum}>
                      <PaginationLink
                        isActive={page === pageNum}
                        onClick={(e) => {
                          e.preventDefault();
                          changePage(pageNum);
                        }}
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  {visiblePages[visiblePages.length - 1] < totalPages && (
                    <>
                      {visiblePages[visiblePages.length - 1] <
                        totalPages - 1 && (
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                      )}
                      <PaginationItem>
                        <PaginationLink
                          onClick={(e) => {
                            e.preventDefault();
                            changePage(totalPages);
                          }}
                        >
                          {totalPages}
                        </PaginationLink>
                      </PaginationItem>
                    </>
                  )}

                  <PaginationItem>
                    <PaginationNext
                      onClick={(e) => {
                        e.preventDefault();
                        changePage(page + 1);
                      }}
                      className={
                        page === totalPages
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </section>
  );
};

export default ExploreCuratedJobs;
