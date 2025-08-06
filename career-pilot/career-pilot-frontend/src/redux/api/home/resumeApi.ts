import baseApi from "@/redux/api/baseApi";

const resumeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    resumeUpload: builder.mutation({
      query: (formData) => ({
        url: "/ai-gateway/resume-builder/upload",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useResumeUploadMutation } = resumeApi;