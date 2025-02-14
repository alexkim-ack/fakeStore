import { useCookies } from "react-cookie";
import { useQuery } from "react-query";

import { LOCAL_API_URL } from "@/shared/const";

/**
 * Calls the /categories api. Returns all available categories.
 * @returns {string[]} string[]
 */
export const useAllCategories = () => {
    const [token, _] = useCookies(["jwtToken"]);

    const fetchData = () => {
        const access_token = token?.jwtToken?.access_token;

        // Add JWT to header if present
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        if (access_token)
            headers.append("Authorization", `Bearer ${access_token}`);

        const options = {
            headers: headers,
        };

        return fetch(`${LOCAL_API_URL}/categories`, options).then((res) =>
            res.json()
        );
    };

    // useQuery calls fetchData
    const {
        data: allCategories,
        isLoading: allCategoriesIsLoading,
        error: allCategoriesError,
    } = useQuery({
        queryKey: ["categories"],
        queryFn: fetchData,
    });

    return { allCategories, allCategoriesIsLoading, allCategoriesError };
};

export default useAllCategories;
