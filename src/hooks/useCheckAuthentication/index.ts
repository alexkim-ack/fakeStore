import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

/**
 * Routes to location if there is a JWT when isTrue is true or
 * routes to location if there is no JWT when isTrue is false.
 * @param isTrue boolean
 * @param location string
 */
export const useCheckAuthentication = (isTrue: boolean, location: string) => {
    const [token, _] = useCookies(["jwtToken"]);
    const navigate = useNavigate();
    useEffect(() => {
        if (!!token?.jwtToken === isTrue) {
            navigate(location, { replace: true });
        }
    }, [token, navigate]);
};

export default useCheckAuthentication;
