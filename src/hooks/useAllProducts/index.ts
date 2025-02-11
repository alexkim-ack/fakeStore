import { useEffect, useState } from "react";

export const useAllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, []);
    return products;
};

export default useAllProducts;
