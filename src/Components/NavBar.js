import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav class="justify-items-center">
            <ul class="pt-6 lg:px-10 sm:px-5 flex">
                <li class="flex-1 mr-2">
                    <Link class="text-center block border border-black rounded hover:border-gray-200 text-black-500 font-semibold text-xl hover:bg-black hover:text-white py-2 px-4 transition-all duration-200" to="/">Home</Link>
                </li>
                <li class="flex-1 mr-2">
                    <Link class="text-center block border border-black rounded hover:border-gray-200 text-black-500 font-semibold text-xl hover:bg-black hover:text-white py-2 px-4 transition-all duration-200" to="/board">Board</Link>
                </li>
                <li class="flex-1 mr-2">   
                    <Link class="text-center block border border-black rounded hover:border-gray-200 text-black-500 font-semibold text-xl hover:bg-black hover:text-white py-2 px-4 transition-all duration-200" to="/social">Social</Link>
                </li>
                <li class="flex-1 mr-2">
                    <Link class="text-center block border border-black rounded hover:border-gray-200 text-black-500 font-semibold text-xl hover:bg-black hover:text-white py-2 px-4 transition-all duration-200" to="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar