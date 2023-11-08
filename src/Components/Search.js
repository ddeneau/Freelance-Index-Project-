const Search = (placeholderText) => {
    return (
        <div class="grid justify-items-center">
            <input type="search" id="profile-search" class="w-9/12 block p-3 pl-5 text-2xl font-extrabold text-black border border-black rounded-full bg-gray-50 focus:ring-grey-500 focus:border-grey-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-grey-700 dark:focus:border-grey-700 pt-5 mt-5" placeholder={placeholderText} required></input>
        </div>

    )
}

export default Search