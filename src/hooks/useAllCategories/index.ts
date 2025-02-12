import { useEffect, useState } from "react";

import { LOCAL_API_URL } from "@/shared/const";

export const useAllCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        let isStale = false;
        fetch(`${LOCAL_API_URL}/categories`)
            .then((res) => res.json())
            .then((json) => {
                if (!isStale) setCategories(json);
            });
        return () => {
            isStale = true;
        };
    }, []);
    return categories;
};

export default useAllCategories;
