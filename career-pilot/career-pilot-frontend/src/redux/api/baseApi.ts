import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost/api/identity",
    // credentials: "include",
  }),
  endpoints: () => ({}),
});

export default baseApi;
