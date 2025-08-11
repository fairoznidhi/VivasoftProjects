import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
} from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost/api",
  // credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const accessToken = (getState() as RootState).auth.accessToken;
    if (accessToken) {
      headers.set("authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401 && !String(result.meta?.request.url).includes("/login")) {
    console.log("sending refresh token");
    const state = api.getState() as RootState;
    const refreshToken = state.auth.refreshToken;
    const res = await fetch("http://localhost/api/identity/token/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: refreshToken }),
    });
    const data = await res.json();
    if (data?.data?.access_token) {
      console.log(data.data.access_token);
      api.dispatch(setUser(data));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
      window.location.href = "/login";
    }
  }
  return result;
};

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

export default baseApi;
