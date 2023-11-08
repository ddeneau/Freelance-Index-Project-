const ContractPagePreview = (poster, title, description, domain, imageSource) => {
    return(
        <div className="w-1/2 border border-neutral-700 flex flex-col my-10 py-10 pl-5">
            <p className="text-4xl">{title}</p>
            <p className="text-3xl">{poster}</p>
            <img className="w-1/4 h-1/2 mx-3 my-3" src={imageSource} alt="contract"></img>
            <p className="text-2xl">{description}</p>
        </div>
    )
}

export default ContractPagePreview