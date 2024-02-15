import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://chikitsha-hub-server.vercel.app",
  }),
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: (arg) => ({
        url: "/doctors/search",
        params: {
          page: arg.page || 1,
          limit: arg.limit || 10,
          sortBy: arg.sortBy || "name",
          sortOrder: arg.sortOrder || 1,
          searchTerm: arg.searchTerm,
          location: arg.location,
        },
      }),
    }),
  }),
});

export const { useGetDoctorsQuery } = apiSlice;
