import Search from "../Components/Search"
import ContractPagePreview from "../Components/Board/ContractPagePreview"
import sampleImage from "../Images/sample_box.png"


let sampleContracts = []
for(let i = 0; i < 50; i++) {
    sampleContracts.push(ContractPagePreview("Poster", "Lead Software Engineer", "Description Sample", "Mobile Apps", sampleImage))
}

const BoardScreen = () => {
    return(
        <div>
            <div class="">
                {Search("Search for Contracts")}
            </div>
            <div className="justify-items-center grid md:grid-cols-3 sm:grid-cols-1">
                {sampleContracts}
            </div>
        </div>
    )
}

export default BoardScreen