import { LOCAL_API_URL } from "@/shared/const";
import { useState } from "react";
import { useCookies } from "react-cookie";

export const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [cookies, setCookie] = useCookies(["jwtToken"]);

    const handleLogin = (username: string, password: string) => {
        const params = new URLSearchParams();
        params.append("grant_type", "password");
        params.append("username", username);
        params.append("password", password);

        if (!cookies?.jwtToken) {
            fetch(`${LOCAL_API_URL}/token`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: params,
            })
                .then((res) => {
                    if (!res.ok) {
                        alert(`HTTP error! status: ${res.status}`);
                        throw new Error(`HTTP error! status: ${res.status}`);
                    }
                    return res.json();
                })
                .then((json) => {
                    setCookie("jwtToken", json, {
                        path: "/",
                        sameSite: "strict",
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        handleLogin(username, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default LoginPage;
