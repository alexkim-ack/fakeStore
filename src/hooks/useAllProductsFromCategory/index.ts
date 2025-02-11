import { useEffect, useState } from "react";

export const useAllProductsFromCategories = (category: string) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, [category]);
    return products;
};

export default useAllProductsFromCategories;
