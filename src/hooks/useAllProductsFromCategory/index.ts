import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import { LOCAL_API_URL } from "@/shared/const";
import { ProductType } from "@/shared/types";

/**
 * Calls the /category/{category} api. Returns all available
 * products for the specific category requested.
 * @param category string
 * @returns {ProductType[]} ProductType[]
 */
export const useAllProductsFromCategories = (category: string) => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [token, _] = useCookies(["jwtToken"]);

    useEffect(() => {
        let isStale = false;
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
            fetch(`${LOCAL_API_URL}/category/${category}`, options)
                .then((res) => res.json())
                .then((json) => {
                    if (!isStale) setProducts(json);
                });
        }
        return () => {
            isStale = true;
        };
    }, [token, category]);
    return products;
};

export default useAllProductsFromCategories;
