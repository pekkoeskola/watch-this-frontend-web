import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginDetails } from "../types.ts";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: [],
  endpoints: (build) => ({
    login: build.mutation({
      query: (loginDetails: LoginDetails) => ({
        url: `/login`,
        method: "POST",
        body: loginDetails,
      }),
    }),
  }),
});

export const { useLoginMutation } = baseApi;
