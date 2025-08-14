import TextField from "./Profile/TextField";

const Search = (placeholderText) => {
    return (
        <div class="grid justify-items-center">
            <TextField text="Search" type={"Search"} id={"Search"} placeholder={placeholderText} required={true}></TextField>
        </div>

    )
}

export default Search