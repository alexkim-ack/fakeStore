import { useCookies } from "react-cookie";
import { useQuery } from "react-query";

import { LOCAL_API_URL } from "@/shared/const";

/**
 * Calls the /category/{category} api. Returns all available
 * products for the specific category requested.
 * @param category string
 * @returns {ProductType[]} ProductType[]
 */
export const useAllProductsFromCategories = (category: string) => {
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

        if (category) {
            return fetch(`${LOCAL_API_URL}/category/${category}`, options).then(
                (res) => res.json()
            );
        }
    };

    // useQuery calls fetchData
    const {
        data: allProductsFromCategory,
        isLoading: allProductsFromCategoryIsLoading,
        error: allProductsFromCategoryError,
    } = useQuery({
        queryKey: ["categoryProducts", category],
        queryFn: fetchData,
    });

    return {
        allProductsFromCategory,
        allProductsFromCategoryIsLoading,
        allProductsFromCategoryError,
    };
};

export default useAllProductsFromCategories;
