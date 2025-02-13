import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import { LOCAL_API_URL } from "@/shared/const";

export const useAllProductsFromCategories = (category: string) => {
    const [products, setProducts] = useState([]);
    const [token, _] = useCookies(["jwtToken"]);

    useEffect(() => {
        let isStale = false;
        const access_token = token?.jwtToken?.access_token;
        const options = {
            headers: {
                Authorization: `Bearer ${access_token}`,
                "Content-Type": "application/json",
            },
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
    }, [category]);
    return products;
};

export default useAllProductsFromCategories;
