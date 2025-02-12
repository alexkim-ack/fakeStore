import { useEffect, useState } from "react";

import { LOCAL_API_URL } from "@/shared/const";

export const useAllProductsFromCategories = (category: string) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let isStale = false;
        if (category) {
            fetch(`${LOCAL_API_URL}/category/${category}`)
                .then((res) => res.json())
                .then((json) => {
                    if (!isStale) setProducts(json);
                });
            return () => {
                isStale = true;
            };
        }
    }, [category]);
    return products;
};

export default useAllProductsFromCategories;
