import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="border-b-4 border-indigo-500 bg-indigo-500">
            <ul className="list-none">
                <li>
                    <Link reloadDocument to="/">
                        <p className="text-white">Home</p>
                    </Link>
                    <Link reloadDocument to="/login">
                        <p className="text-white">Login</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
