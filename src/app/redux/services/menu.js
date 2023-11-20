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
            query: (data) => ({
                url: `${apiUrl.foodMenu}`,
                method: "POST",
                body: data,

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
            query: (id) => ({
                url: `${apiUrl.foodDetails}?food=${id}`,
                method: "GET",

            }),
        }),


    }),
    overrideExisting: false,
});
export const { useGetSallerApiMutation, useGetfoodMenuApiMutation, useGetfoodSearchApiMutation, useGetfoodDetailsApiQuery } = SallerData;
