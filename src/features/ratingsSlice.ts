import { AddRatingParams, Rating } from "../../types";
import { apiSlice } from "./apiSlice";
import { createEntityAdapter, createSelector, EntityState } from "@reduxjs/toolkit";

const ratingsAdapter = createEntityAdapter<Rating>();
const initialState = ratingsAdapter.getInitialState();

export const apiSliceWithRatings = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getRatings: build.query<EntityState<Rating, string>, number>({
      query: (groupID: number) => ({
        url: `/ratings/groups/${groupID}`,
        method: "GET",
      }),
      transformResponse(res: Rating[]) {
        return ratingsAdapter.setAll(initialState, res)
      }
    }),
    //FIXME: return type should be new rating so it can be manually updated to cache instead of refetching all movies
    addMovieRating: build.mutation<void, AddRatingParams>({
      query: (params: AddRatingParams) => ({
        url: `/ratings/movies/${params.movieID}/users/${params.userID}`,
        method: "POST",
        body: {
          rating: params.rating,
        },
      }),
      invalidatesTags: ["Movie"],
    }),
  }),
});

export const { useGetRatingsQuery, useAddMovieRatingMutation } = apiSliceWithRatings

export const selectRatingsResult = (groupID: number) => apiSliceWithRatings.endpoints.getRatings.select(groupID)

const ratingsSelector = createSelector(
  selectRatingsResult,
  result => result
)