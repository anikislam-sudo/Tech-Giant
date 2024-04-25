import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://tech-server-4ma6.vercel.app" }),
  tagTypes: ["reviews"],
  endpoints: () => ({}),
});
