import { LOCAL_API_URL } from "@/shared/const";
import { useCookies } from "react-cookie";
import {
    ERROR_MESSAGE,
    Inputs,
    MAX_AGE,
    PASSWORD,
    SUBMIT,
    USERNAME,
} from "./const";
import { useNavigate } from "react-router-dom";
import { useCheckAuthentication } from "@/hooks/useCheckAuthentication";
import { SubmitHandler, useForm } from "react-hook-form";

export const LoginPage = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const [_, setCookie] = useCookies(["jwtToken"]);

    // Check if not authenticated or reroute to home page
    useCheckAuthentication(true, "/");

    const handleLogin = (username: string, password: string) => {
        // Creating body for POST
        const params = new URLSearchParams();
        params.append("grant_type", "password");
        params.append("username", username);
        params.append("password", password);

        // Call /token api to get JWT token
        fetch(`${LOCAL_API_URL}/token`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params,
        })
            .then((res) => {
                // Check if invalid and throw error if invalid
                if (!res.ok) {
                    alert(`Invalid Username or Password!`);
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((json) => {
                // Set JWT cookie and navigate to home
                setCookie("jwtToken", json, {
                    path: "/",
                    sameSite: "strict",
                    maxAge: MAX_AGE,
                });
                navigate("/", { replace: true });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const onSubmit: SubmitHandler<Inputs> = ({ username, password }) => {
        handleLogin(username, password);
    };

    console.log(watch("username"), watch("password"));
    return (
        <div id="loginpage" className="grid h-screen place-content-center">
            <form
                className="bg-white m-[16px] p-[6px] rounded-md"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label>
                    {USERNAME}
                    <input
                        className="m-[2px] p-[2px] rounded-md border-2 border-gray-400"
                        type="text"
                        {...register("username", { required: true })}
                    />
                </label>
                {errors.username && (
                    <span className="absolute ml-[12px] text-red-500">
                        {ERROR_MESSAGE}
                    </span>
                )}
                <br />
                <label>
                    {PASSWORD}
                    <input
                        className="m-[2px] ml-[7px] mb-[6px] p-[2px] rounded-md border-2 border-gray-400"
                        type="password"
                        {...register("password", { required: true })}
                    />
                </label>
                {errors.password && (
                    <span className="absolute ml-[12px] text-red-500">
                        {ERROR_MESSAGE}
                    </span>
                )}
                <br />
                <button type="submit">{SUBMIT}</button>
            </form>
        </div>
    );
};

export default LoginPage;
