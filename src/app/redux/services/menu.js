// eslint-disable-next-line import/no-unresolved
import { apiUrl } from "../../utils/api";
import { apiBasePath } from "../baseUrl";

const SallerData = apiBasePath.injectEndpoints({
    endpoints: (build) => ({
        getSallerApi: build.mutation({
            query: (data) => ({
                url: `${apiUrl.seller}`,
                method: "POST",
                body: data,

            }),
        }),
        getfoodMenuApi: build.mutation({
            query: () => ({
                url: `${apiUrl.foodMenu}`,
                method: "GET",
                // body: data,

            }),
        }),
        getfoodSearchApi: build.mutation({
            query: (data) => ({
                url: `${apiUrl.foodSearch}`,
                method: "POST",
                body: data,

            }),
        }),
        getfoodDetailsApi: build.query({
            query: ({ id }) => ({
                url: `${apiUrl.foodDetails}${id}`,
                method: "GET",

            }),
        }),
        getCategoryProductApi: build.mutation({
            query: (id) => ({
                url: `${apiUrl.categoryProduct}${id}`,
                method: "POST",

            }),
        }),

        getCategoryApi: build.query({
            query: () => ({
                url: `${apiUrl.category}`,
                method: "GET",
                // body: data,

            }),
        }),

    }),
    overrideExisting: false,
});
export const { useGetSallerApiMutation, useGetfoodMenuApiMutation, useGetfoodSearchApiMutation, useGetfoodDetailsApiQuery, useGetCategoryApiQuery, useGetCategoryProductApiMutation } = SallerData;
