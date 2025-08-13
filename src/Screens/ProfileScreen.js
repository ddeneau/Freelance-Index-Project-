import LoggedInProfile from "./Profile/LoggedInProfile"
import ProfileChoice from "./Profile/ProfileChoice"

var loggedIn = false

const ProfileScreen = () => {
    return (
        <div>
          {loggedIn ? (
            // Display logged-in user details and profile options
            <LoggedInProfile/>
          ) : (
            // Display option to create an account
            <ProfileChoice/>
          )}
        </div>
      )
}

export default ProfileScreen