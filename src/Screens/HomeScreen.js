

const HomeScreen = () => {
    return (
        <div className="block border border-black rounded my-20 mx-20">
            <div className="flex items-center justify-center font-extrabold text-4xl">
       
            </div>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1" >
                <div>
                    <div className="flex items-center justify-center text-4xl pt-3 px-11">
                        Create and Post Contracts.
                    </div>
                    <div className="flex grow text-2xl px-11 py-11 font-light text-center leading-loose">
                    Create and customize job listings quickly. You can specify job requirements, responsibilities, and any other details important to you. 
                    Connect you with the most suitable candidates, streamlining the hiring process.
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-center text-4xl pt-3 px-11">
                        Browse Available Contracts.
                    </div>
                    <div className="flex grow text-2xl px-11 py-11 font-light text-center leading-loose">
                    Browse through a diverse range of job listings with ease. 
                    Whether you're seeking part-time, full-time, remote, or on-site positions, 
                    we've got you covered. Search filters help you find the jobs that align perfectly with your qualifications and personal needs.
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center font-extrabold text-4xl pt-10">
            <div className="flex flex-row">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/5434/5434690.png"
                    class="resize h-auto max-w-xs object-cover mx-6"
                    alt="" />
                    <img
                    src="https://cdn-icons-png.flaticon.com/512/5434/1077077.png"
                    class="resize lg:h-auto lg:max-w-xs md:min-w-ws object-cover mx-6"
                    alt="" />
                    <img
                    src="https://cdn-icons-png.flaticon.com/512/5434/5434690.png"
                    class="resize lg:h-auto lg:max-w-xs md:min-w-ws object-cover mx-6"
                    alt="" />
                    <img
                    src="https://cdn-icons-png.flaticon.com/512/5434/5434690.png"
                    class="resize lg:h-auto lg:max-w-xs md:min-w-ws object-cover mx-6"
                    alt="" />
                </div>
            </div>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1" >
                <div>
                    <div className="flex items-center justify-center text-4xl pt-3 px-11">
                    Create and Post A Profile.
                    </div>
                    <div className="text-2xl px-11 py-11 font-light text-center leading-loose">
                    Create your Talent Showcase effortlessly, highlighting your skills, portfolio, and achievements. Let users discover your talents and reach out to you directly. 
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-center text-4xl pt-3 px-11">
                        Browse Available Profiles.
                    </div>
                    <div className="text-2xl px-11 py-11 font-light text-center leading-loose">
                        Browse through profiles to find the individuals who can make a significant impact on your projects and initiatives. 
                        Filter by skills, experience, and location to pinpoint the perfect fit for your team. 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen