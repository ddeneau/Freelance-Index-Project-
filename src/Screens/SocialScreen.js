import ProfilePagePreview from "../Components/Social/ProfilePagePreview"
import Search from "../Components/Search"
import profilePic from "../Images/Sample_User_Icon.png"

let sampleProfiles = []
for (let samples = 0; samples < 50; samples++) {
    sampleProfiles.push(ProfilePagePreview(profilePic, "Sample Name", "Sample Title", "Sample people have no experience or sample experience"))
}

const SocialScreen = () => {
    return(
        <div>
        <div className="">
           {Search("Search for Profiles...")}
        </div>
        <div className="mx-10 my-10 px-10 py-10">
            {ProfilePagePreview(profilePic, "First Last", "Java Engineer", "Three years of experience working on Java client software.")}
            {ProfilePagePreview(profilePic, "First Last", "Mobile Engineer", "Engineering team lead and back-end developer with 10+ YOE.")}
            {sampleProfiles}
        </div>
    </div>
    )
}

export default SocialScreen