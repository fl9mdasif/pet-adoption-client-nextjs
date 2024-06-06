// import { tagTypes } from "../tag-types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const UserApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPet: build.mutation({
      query: (data) => ({
        url: "/pets",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    getAllPets: build.query({
      query: () => ({
        url: "/pets",
        method: "GET",
      }),
      providesTags: [tagTypes.pets],
    }),

    deletePet: build.mutation({
      query: (id) => ({
        url: `/pets/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.pets],
    }),

    updateUser: build.mutation({
      query: ({ id, data }) => ({
        url: `/profile`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useUpdateUserMutation } = UserApi;
