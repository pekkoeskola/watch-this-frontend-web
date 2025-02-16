import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthState, Group, LoginDetails, Movie } from "../types.ts";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: [],
  endpoints: (build) => ({
    login: build.mutation<AuthState, LoginDetails>({
      query: (loginDetails: LoginDetails) => ({
        url: `/login`,
        method: "POST",
        body: loginDetails,
      }),
    }),
    checkExistingLogin: build.query<AuthState, void>({
      query: () => ({
        url: `/login`,
        method: "GET",
      }),
    }),
    getGroups: build.query<Group[], number>({
      query: (userID: number) => ({
        url: `/users/${userID}/groups`,
        method: "GET",
      }),
    }),
    getMovies: build.query<Movie[], number>({
      query: (groupID: number) => ({
        url: `/groups/${groupID}/movies`,
        method: "GET"
      })
    })
  }),
});

export const { useLoginMutation, useGetGroupsQuery, useCheckExistingLoginQuery, useGetMoviesQuery } = baseApi;
