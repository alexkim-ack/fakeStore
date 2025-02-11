import { useEffect, useState } from "react";

export const useAllCategories = (category: string) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/category/${category}`)
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, [category]);
    return products;
};

export default useAllCategories;
