// import { tagTypes } from "../tag-types";
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
    //   invalidatesTags: [tagTypes.specialties],
    }),

    getAllPets: build.query({
      query: () => ({
        url: "/pets",
        method: "GET",
      }),
    //   providesTags: [tagTypes.specialties],
    }),

    deletePet: build.mutation({
      query: (id) => ({
        url: `/pets/${id}`,
        method: "DELETE",
      }),
    //   invalidatesTags: [tagTypes.specialties],
    }),
  }),
});

export const {
   useCreatePetMutation, useDeletePetMutation, useGetAllPetsQuery
} = petApi;