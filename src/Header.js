import image from "./Images/logo_smaller.png"

const Header = () => {
    return (
        <div className="grid grid-cols-1 justify-items-center">
            <img src={image} class="scale-25 mt-0 mb-4" alt="logo"/>
            <p className="font-sans font-bold text-2xl">The Future of Work, Together</p>
        </div>
    )
}

export default Header