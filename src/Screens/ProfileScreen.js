import LoggedInProfile from "./Profile/LoggedInProfile"
import CreateProfile from "./Profile/CreateProfile"

var loggedIn = false

const ProfileScreen = () => {
    return (
        <div>
          {loggedIn ? (
            // Display logged-in user details and profile options
            <LoggedInProfile/>
          ) : (
            // Display option to create an account
            <CreateProfile/>
          )}
        </div>
      )
}

export default ProfileScreen