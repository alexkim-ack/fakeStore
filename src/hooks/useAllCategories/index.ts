import { useEffect, useState } from "react";

import { LOCAL_API_URL } from "@/shared/const";
import { useCookies } from "react-cookie";

export const useAllCategories = () => {
    const [categories, setCategories] = useState([]);
    const [token, _] = useCookies(["jwtToken"]);

    console.log(token);
    useEffect(() => {
        let isStale = false;
        const access_token = token?.jwtToken?.access_token;
        const options = {
            headers: {
                Authorization: `Bearer ${access_token}`,
                "Content-Type": "application/json",
            },
        };
        fetch(`${LOCAL_API_URL}/categories`, options)
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
