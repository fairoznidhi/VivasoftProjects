import baseApi from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/identity/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/identity/users/register",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});
export const {useLoginMutation, useRegisterMutation} = authApi;
