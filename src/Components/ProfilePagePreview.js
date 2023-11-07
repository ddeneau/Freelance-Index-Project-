const ProfilePagePreview = (image, name, title, description) => {
    return(
        <div className="border border-neutral-700 flex flex-row my-10 py-10">
            <img className="border border-neutral-900 rounded-full" src={image} alt="profile"/>
            <div className="flex flex-col pt-10">
                <div className="text-4xl">{name}</div>
                <div className="text-3xl">{title}</div>
                <div className="text-2xl">{description}</div>
            </div>
        </div>
    )
}

export default ProfilePagePreview