import LoginButton from "../../Components/Home/LoginButton"
import TextField from "../../Components/Profile/TextField"
import label_style from "../../Components/Reusable/tailwind_styles"

const CreateProfile = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <label className={label_style}>Username</label>

            <TextField text={"Username"} type={"text"} id={"username"} placeholder={"Username"} required={true}></TextField>

            <label className={label_style}>E-Mail</label>

            <TextField text={"E-Mail"} type={"email"} id={"email"} placeholder={"E-Mail"} required={true}></TextField>

            <label className={label_style}>Password</label>

            <div className="flex flex-row justify-center items-center">
                <TextField text={"Password"} type={"password"} id={"password"} placeholder={"Password"} required={true}></TextField>
                <TextField text={"Confirm Password"} type={"password"} id={"confirm_password"} placeholder={"Confirm Password"} required={true}></TextField>
            </div>

            <LoginButton className="mb-10">Create Account</LoginButton>
    </div>
        
    )
}

export default CreateProfile