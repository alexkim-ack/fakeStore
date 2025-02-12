import { useEffect, useState } from "react";
import { LOCAL_API_URL } from "@/shared/const";
export const useAllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let isStale = false;
        fetch(`${LOCAL_API_URL}/products`)
            .then((res) => res.json())
            .then((json) => {
                if (!isStale) setProducts(json);
            });
        return () => {
            isStale = true;
        };
    }, []);
    return products;
};

export default useAllProducts;
