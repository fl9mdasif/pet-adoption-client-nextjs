import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const AdoptionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAdoption: build.mutation({
      query: (data) => ({
        url: "/adoption-request",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.adoptions],
    }),

    getAllAdoptions: build.query({
      query: () => ({
        url: "/adoption-request",
        method: "GET",
      }),
      providesTags: [tagTypes.adoptions],
    }),

    updateAdoptionStatus: build.mutation({
      query: ({ id, petId, data }) => ({
        url: `/adoption-request/${id}/${petId}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.adoptions],
    }),

    deleteAdoption: build.mutation({
      query: ({ id, petId }) => ({
        url: `/adoption-request/${id}/${petId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.adoptions],
    }),
  }),
});

export const {
  useCreateAdoptionMutation,
  useDeleteAdoptionMutation,
  useGetAllAdoptionsQuery,
  useUpdateAdoptionStatusMutation,
} = AdoptionApi;
