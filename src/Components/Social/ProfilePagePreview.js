// User profile preview for social page.
// Need to add breakpoints for mobile support.
const ProfilePagePreview = (image, name, title, description) => {
    return(
        <div className="border border-neutral-700 flex my-10 py-10 md:flex-row sm:flex-col h-1/2 w-1/2">
            <img className="border border-neutral-900 rounded-full mx-4 my-4" src={image} alt="profile"/>
            <div className="flex flex-col pt-10">
                <div className="text-4xl">{name}</div>
                <div className="text-3xl">{title}</div>
                <div className="text-2xl">{description}</div>
            </div>
        </div>
    )
}

export default ProfilePagePreview