import ProfilePagePreview from "../Components/ProfilePagePreview"
import Search from "../Components/Search"
import profilePic from "../Images/Sample_User_Icon.png"

const SocialScreen = () => {
    return(
        <div>
        Social Screen
        <div className="flex items-center justify-center font-extrabold text-4xl">
           {Search("Search for Profiles...")}
        </div>
        <div className="mx-10 my-10 px-10 py-10">
            {ProfilePagePreview(profilePic, "First Last", "Java Engineer", "Three years of experience working on Java client software.")}
            {ProfilePagePreview(profilePic, "First Last", "Mobile Engineer", "Engineering team lead and back-end developer with 10+ YOE.")}
        </div>
        
    </div>
    )
}

export default SocialScreen