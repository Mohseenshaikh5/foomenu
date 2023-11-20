
import { apiUrl } from "@/app/utils/api";
import { apiBasePath } from "../baseUrl";

const singInApi = apiBasePath.injectEndpoints({
    endpoints: (build) => ({
        addLogin: build.mutation({
            query: (data) => ({
                url: `${apiUrl.signIn}`,
                method: "POST",
                body: data
            })
        }),
    }),
    overrideExisting: false
});

export const { useAddLoginMutation } = singInApi