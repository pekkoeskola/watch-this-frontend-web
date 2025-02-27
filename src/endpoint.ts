import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthState, Group, LoginDetails, Movie } from "../types.ts";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: ["Movie"],
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
        method: "GET",
      }),
      providesTags: ["Movie"]
    }),
    search: build.query<Movie[], string>({
      query: (keyword: string) => ({
        url: `/movies?keyword=${keyword}`,
        method: "GET"
      })
    }),
    //FIXME: return type should be movie so it can be manually updated to cache instead of refetching all movies
    addMovieToGroup: build.mutation<void, {tmdbID: number, groupID: number}>({
      query: (params: {tmdbID: number, groupID: number}) => ({
        url: `/groups/${params.groupID}/movies/${params.tmdbID}`,
        method: "POST"
      }),
      invalidatesTags: ["Movie"]
    }),
    //FIXME: return type should be new rating so it can be manually updated to cache instead of refetching all movies
    addMovieRating: build.mutation<void, {movieID: number, userID: number, rating: number}>({
      query: (params: {movieID: number, userID: number, rating: number}) => ({
        url: `/movies/${params.movieID}/user/${params.userID}/rating/${params.rating}`,
        method: "POST"
      })
    })
  }),
});

export const { useLoginMutation, useGetGroupsQuery, useCheckExistingLoginQuery, useGetMoviesQuery, useLazySearchQuery, useAddMovieToGroupMutation } = baseApi;
