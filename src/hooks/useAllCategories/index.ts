import { useEffect, useState } from "react";

export const useAllCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/categories")
            .then((res) => res.json())
            .then((json) => setCategories(json));
    }, []);
    return categories;
};

export default useAllCategories;
