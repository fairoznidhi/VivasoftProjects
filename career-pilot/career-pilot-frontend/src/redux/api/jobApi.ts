import baseApi from "@/redux/api/baseApi";
import type { GetJobsParams, JobApiResponse } from "@/types/jobs/matchedJobs";

const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getJobs: builder.query<JobApiResponse, GetJobsParams>({
      query: ({
        limit = 10,
        offset = 0,
        keywords,
        location_tags,
        user_id,
      } = {}) => {
        const params = new URLSearchParams();

        if (limit) params.append("limit", limit.toString());
        if (offset) params.append("offset", offset.toString());
        if (keywords) params.append("keywords", keywords);
        if (location_tags) params.append("location_tags", location_tags);
        if (user_id) params.append("user_id", user_id.toString());

        return {
          url: `/ai-gateway/job-portal/jobs?${params.toString()}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetJobsQuery } = jobApi;
