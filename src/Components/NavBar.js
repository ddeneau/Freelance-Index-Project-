import { Link } from 'react-router-dom';

// Extracted constants for repeated classes
const navClass = "justify-items-center";
const ulClass = "pt-6 lg:px-10 sm:px-5 flex";
const liClass = "flex-1 mr-2";
const linkClass = "text-center block border border-black rounded hover:border-gray-200 text-black-500 font-semibold text-xl hover:bg-black hover:text-white py-2 px-4 transition-all duration-200";

const NavBar = () => {
    return (
        <nav class={navClass}>
            <ul class={ulClass}>
                <li class={liClass}>
                    <Link class={linkClass} to="/">Home</Link>
                </li>
                <li class={liClass}>
                    <Link class={linkClass} to="/board">Board</Link>
                </li>
                <li class={liClass}>
                    <Link class={linkClass} to="/social">Social</Link>
                </li>
                <li class={liClass}>
                    <Link class={linkClass} to="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;