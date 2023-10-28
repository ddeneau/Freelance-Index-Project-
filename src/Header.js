import image from "./Images/logo.png"

const Header = () => {
    return (
        <div className="grid grid-cols-1">
            <img src={image} class="justify-self-center scale-25 mt-0 mb-4" alt="logo"/>
        </div>
    )
}

export default Header