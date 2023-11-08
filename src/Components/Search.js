const Search = (placeholderText) => {
    return (
        <div class="">
            <input type="search" id="profile-search" class="center block w-full p-3 pl-10 text-2xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pt-5 mt-5" placeholder={placeholderText} required></input>
        </div>
    )
}

export default Search