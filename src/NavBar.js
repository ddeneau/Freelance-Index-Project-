import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <ul class="pt-6 pr-10 pl-10 flex">
                <li class="flex-1 mr-2">
                    <div class="text-center block border border-black rounded hover:border-gray-200 text-black-500 font-semibold text-xl hover:bg-black hover:text-white py-2 px-4">
                        <Link to="/">Home</Link>
                    </div>
                </li>
                <li class="flex-1 mr-2">
                    <div class="text-center block border border-black rounded hover:border-gray-200 text-black-500 font-semibold text-xl hover:bg-black hover:text-white py-2 px-4">
                        <Link to="/board">Job Board</Link>
                    </div>
                </li>
                <li class="flex-1 mr-2">
                    <div class="text-center block border border-black rounded hover:border-gray-200 text-black-500 font-semibold text-xl hover:bg-black hover:text-white py-2 px-4">
                        <Link to="/social">Social</Link>
                    </div>
                </li>
                <li class="flex-1 mr-2">
                    <div class="text-center block border border-black rounded hover:border-gray-200 text-black-500 font-semibold text-xl hover:bg-black hover:text-white py-2 px-4">
                        <Link to="/profile">Your Profile</Link>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar