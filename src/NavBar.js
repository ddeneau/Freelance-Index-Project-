import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <ul class="pt-6 pr-10 pl-10 flex">
                <li class="flex-1 mr-2">
                    <Link class="text-center block border border-black rounded hover:border-gray-200 text-black-500 font-semibold text-xl hover:bg-black hover:text-white py-2 px-4" to="/">Home</Link>
                </li>
                <li class="flex-1 mr-2">
                    <Link class="text-center block border border-black rounded hover:border-gray-200 text-black-500 font-semibold text-xl hover:bg-black hover:text-white py-2 px-4" to="/board">Job Board</Link>
                </li>
                <li class="flex-1 mr-2">   
                    <Link class="text-center block border border-black rounded hover:border-gray-200 text-black-500 font-semibold text-xl hover:bg-black hover:text-white py-2 px-4" to="/social">Social</Link>
                </li>
                <li class="flex-1 mr-2">
                    <Link class="text-center block border border-black rounded hover:border-gray-200 text-black-500 font-semibold text-xl hover:bg-black hover:text-white py-2 px-4" to="/profile">Your Profile</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar