import { api } from "@/Redux/api/apiSlice";

const productsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        productReview: builder.mutation({
            query: ({ id, data }) => ({
              url: `/review/${id}`,
              method: "POST",
              body: data,
            }),
            invalidatesTags: ["productReview"],
          }),
          productDetails: builder.query({
            query: (id) => `/products/${id}`,
            providesTags: ["productDetails", "productReview"],
          }),

    }),
})
export const {
useProductReviewMutation,
useProductDetailsQuery
   
  } = productsApi;
  