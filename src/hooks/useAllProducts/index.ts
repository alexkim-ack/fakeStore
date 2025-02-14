import { useCookies } from "react-cookie";
import { useQuery } from "react-query";

import { LOCAL_API_URL } from "@/shared/const";

/**
 * Calls /products api. Returns all available products.
 * @returns {ProductType[]} ProductType[]
 */
export const useAllProducts = () => {
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

        return fetch(`${LOCAL_API_URL}/products`, options).then((res) =>
            res.json()
        );
    };

    // useQuery calls fetchData
    const {
        data: allProducts,
        isLoading: allProductsIsLoading,
        error: allProductsError,
    } = useQuery({
        queryKey: ["products"],
        queryFn: fetchData,
    });

    return { allProducts, allProductsIsLoading, allProductsError };
};

export default useAllProducts;
