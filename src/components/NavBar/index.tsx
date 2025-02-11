import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="border-b-4 border-indigo-500 bg-indigo-500">
            <ul className="list-none">
                <li>
                    <Link to="/">
                        <p className="text-white">Home</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
