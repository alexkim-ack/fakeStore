import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import { LOCAL_API_URL } from "@/shared/const";
import { ProductType } from "@/shared/types";

/**
 * Calls /products api. Returns all available products.
 * @returns {ProductType[]} ProductType[]
 */
export const useAllProducts = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [token, _] = useCookies(["jwtToken"]);

    useEffect(() => {
        let isStale = false;
        const access_token = token?.jwtToken?.access_token;

        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        if (access_token)
            headers.append("Authorization", `Bearer ${access_token}`);

        const options = {
            headers: headers,
        };

        fetch(`${LOCAL_API_URL}/products`, options)
            .then((res) => res.json())
            .then((json) => {
                if (!isStale) setProducts(json);
            });
        return () => {
            isStale = true;
        };
    }, [token]);
    return products;
};

export default useAllProducts;
