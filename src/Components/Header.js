import LoginButton from "./Home/Login"
import image from "../Images/new_logo.png"

const Header = () => {
    return (
        <div className="grid grid-cols-1 justify-items-center">
            <div>
                <img src={image} class="object-contain h-50 mb-4" alt="logo"/>
            </div>
            <div className="flex flex-row">
                <LoginButton className="w-1/2 mx-2"/>
                <LoginButton className="w-1/2 mx-2">
                    Join
                </LoginButton>
            </div>
        </div>
    )
}

export default Header