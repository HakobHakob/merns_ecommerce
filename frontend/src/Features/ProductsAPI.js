import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"



export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (id) => "products",
    }),
  }),
})

//custom hook for call our products in our components
export const {useGetAllProductsQuery} = productsAPI

