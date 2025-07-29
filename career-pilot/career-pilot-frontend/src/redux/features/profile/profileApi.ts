import baseApi from "../../api/baseApi";

const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userProfile: builder.query({
      query: () => ({
        url: "/users/profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useUserProfileQuery } = profileApi;
