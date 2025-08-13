import LoginButton from "../../Components/Home/LoginButton"

const page_style = "flex flex-col justify-center items-center py-5"
const path_create = "/createProfile"
const path_logged = "/loggedInProfile"

const ProfileChoice = () => {
    return (
        <div className={page_style}>
            <LoginButton link={path_logged}>Log In</LoginButton>
            <LoginButton link={path_create}>Sign Up</LoginButton>
        </div>

    )
}

export default ProfileChoice