import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { HOME, LOGIN, LOGOUT } from "./const";

/**
 * Navigation bar that sits at the top of the browser. User is able to
 * choose either home or to login or logout.
 * @returns React Component
 */
export const NavBar = () => {
    const [token, _, removeCookie] = useCookies(["jwtToken"]);
    const navigate = useNavigate();

    // Removes JWT cookie and navigates to login page
    const handleLogout = () => {
        removeCookie("jwtToken", { path: "/" });
        navigate("/login");
    };

    return (
        <nav id="navbar">
            <ul
                className="list-none fixed top-[0px] left-[0px]
                    w-full flex flex-row justify-between
                    items-center bg-indigo-500"
            >
                <li className="m-[16px] p-[16px] rounded-md hover:bg-indigo-700">
                    <Link reloadDocument to="/">
                        <p className="text-white">{HOME}</p>
                    </Link>
                </li>
                {/* Renders Logout Button if there is a JWT, otherwise Login button */}
                {token?.jwtToken ? (
                    <li className="p-[16px] rounded-md hover:bg-indigo-700">
                        <button onClick={handleLogout}>
                            <p className="text-black">{LOGOUT}</p>
                        </button>
                    </li>
                ) : (
                    <li className="m-[16px] p-[16px] rounded-md hover:bg-indigo-700">
                        <Link reloadDocument to="/login">
                            <p className="text-white">{LOGIN}</p>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;
