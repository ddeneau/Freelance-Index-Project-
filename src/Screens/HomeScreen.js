import HomeInfo from "../Components/HomeInfo"

const HomeScreen = () => {
    return (
        <div className="block border border-black rounded my-20 lg:mx-20 justify-self-center">
            <div className="flex items-center justify-center font-extrabold text-4xl">
       
            </div>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1" >
                {HomeInfo ("Create and Post Contracts.", "Create and customize job listings quickly. Specify job requirements, responsibilities, and add any other details important to you.")}
                {HomeInfo ("Browse Available Contracts.", "Browse through a diverse range of job listings with ease. Search filters help you find the jobs that align perfectly with your qualifications and personal needs.")}
            </div>
            <div className="flex items-center justify-center font-extrabold text-4xl pt-10">
                <div className="flex flex-row">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/5434/5434690.png"
                        class="resize h-auto max-w-xs object-cover mx-6"
                        alt=""
                    />
                </div>
            </div>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1" >
                {HomeInfo("Create and Post A Profile.", "Create your Talent Showcase, highlighting your skills, background, and interests. Allow users to discover you and reach out directly.")}
                {HomeInfo ("Browse Available Profiles.", "Browse to find individuals who can make a significant impact on your projects. Filter by skills, experience, and location to pinpoint the perfect profile.")}
            </div>
        </div>
    )
}

export default HomeScreen