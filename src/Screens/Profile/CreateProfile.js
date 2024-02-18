import LoginButton from "../../Components/Home/Login"
import Creat

const CreateProfile = () =>{
    return (
        <div className="flex flex-col justify-center items-center">
            <label className="mt-12 text-2xl font-extrabold">Username</label>
            <input type="text" id="username" 
            class="w-1/4 block pb-3 pl-5 text-2xl pt-5 mt-5 border-2 rounded-md border-black" 
            placeholder={"Username"} required></input>

            <label className="mt-4 text-2xl font-extrabold">E-Mail</label>
            <input type="text" id="email" 
            class="w-1/4 block pb-3 pl-5 text-2xl pt-5 mt-5 rounded-md border-2 border-black" 
            placeholder={"E-Mail"} required></input>

            <label className="mt-4 text-2xl font-extrabold">Password</label>

            <div className="flex flex-row justify-center items-center">
                
                <input type="password" id="password" 
                class="w-full pb-3 pl-5 text-2xl pt-5 my-5 rounded-md border-2 border-black" 
                placeholder={"Password"} required></input>

                <input type="password" id="password" 
                class="w-full pb-3 pl-5 text-2xl pt-5 my-5 mx-5 rounded-md border-2 border-black" 
                placeholder={"Confirm Password"} required></input>
            </div>

            <LoginButton className="mb-10">Create Account</LoginButton>
    </div>
        
    )
}

export default CreateProfile