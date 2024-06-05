// import { tagTypes } from "../tag-types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const petApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPet: build.mutation({
      query: (data) => ({
        url: "/pets",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.pets],
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

    updatePet: build.mutation({
      query: ({ id, data }) => ({
        url: `/pets/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.pets],
    }),
  }),
});

export const {
  useCreatePetMutation,
  useDeletePetMutation,
  useGetAllPetsQuery,
  useUpdatePetMutation,
} = petApi;
