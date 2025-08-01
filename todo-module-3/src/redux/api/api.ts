import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  // tagTypes: ["todo"],
  endpoints: () => ({
    // getTodos: builder.query({
    //   query: (priority) => {
    //     const params = new URLSearchParams();
    //     if(priority){
    //       params.append('priority',priority)
    //     }
    //     return {
    //       url: `/tasks`,
    //       method: "GET",
    //       params: /*{priority:priority}*/ /*{ priority }*/params,
    //     };
    //   },
    //   providesTags: ["todo"],
    // }),
    // addTodo: builder.mutation({
    //   query: (data) => {
    //     return {
    //       url: "/task",
    //       method: "POST",
    //       body: data,
    //     };
    //   },
    //   invalidatesTags: ["todo"],
    // }),
    // updateTodo: builder.mutation({
    //   query: (options) => {
    //     console.log("Inside update api =>",options)
    //     return {
    //       url: `/task/${options.id}`,
    //       method: "PUT",
    //       body: options.data,
    //     };
    //   },
    //   invalidatesTags: ["todo"],
    // }),
  }),
});

// export const { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation } = baseApi;
