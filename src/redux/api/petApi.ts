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
      query: (arg: Record<string, any>) => ({
        url: "/pets",
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.pets],
    }),

    getSinglePet: build.query({
      query: (petId) => (
        console.log("singleId", petId),
        {
          url: `/pets/${petId}`,
          method: "GET",
        }
      ),
    }),

    updatePet: build.mutation({
      query: ({ id, data }) => ({
        url: `/pets/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.pets],
    }),

    deletePet: build.mutation({
      query: (id) => ({
        url: `/pets/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.pets],
    }),
  }),
});

export const {
  useCreatePetMutation,
  useDeletePetMutation,
  useGetAllPetsQuery,
  useGetSinglePetQuery,
  useUpdatePetMutation,
} = petApi;
