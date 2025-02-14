import { useEffect, useState } from "react";

import { LOCAL_API_URL } from "@/shared/const";
import { useCookies } from "react-cookie";

/**
 * Calls the /categories api. Returns all available categories.
 * @returns {string[]} string[]
 */
export const useAllCategories = () => {
    const [categories, setCategories] = useState([]);
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

        fetch(`${LOCAL_API_URL}/categories`, options)
            .then((res) => res.json())
            .then((json) => {
                if (!isStale) setCategories(json);
            });
        return () => {
            isStale = true;
        };
    }, [token]);
    return categories;
};

export default useAllCategories;
