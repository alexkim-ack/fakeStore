import { Link } from "react-router-dom";

/**
 * Navigation bar that sits at the top of the browser. User is able to
 * choose either home or to login or logout.
 * @returns React Component
 */
export const NavBar = () => {
    return (
        <nav id="navbar">
            <ul className="list-none fixed top-[0px] left-[0px] w-full flex flex-row justify-between bg-indigo-500">
                <li className="p-[16px] rounded-md hover:bg-indigo-700">
                    <Link reloadDocument to="/">
                        <p className="text-white">Home</p>
                    </Link>
                </li>
                <li className="p-[16px] rounded-md hover:bg-indigo-700">
                    <Link reloadDocument to="/login">
                        <p className="text-white">Login</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
