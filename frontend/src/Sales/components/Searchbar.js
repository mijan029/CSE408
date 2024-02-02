
const SearchBar = () =>{
    return (
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            placeholder="Search for products"
            className="bg-white border border-gray-300 rounded py-2 px-4 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded">
            Search
          </button>
        </div>
    )
}

export default SearchBar