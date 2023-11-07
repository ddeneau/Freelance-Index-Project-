const HomeInfo = (title, body) => {
    return (
        <div>
            <div className="flex items-center justify-center text-4xl pt-3 lg:px-11">
                {title}
            </div>
            <div className="flex grow text-2xl lg:px-11 py-11 font-light text-center leading-loose">
                {body}
            </div>
        </div>
    )
}

export default HomeInfo