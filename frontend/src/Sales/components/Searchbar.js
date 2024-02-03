
const SearchBar = ({setKeyWord}) =>{
    //const [keyWord, setKeyWord] = useState(null)
    const handleChange = (e) =>{
      setKeyWord(e.target.value)
    }

    return (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for products"
            onChange={handleChange}
            className="bg-white border border-gray-300 rounded-md py-2 px-4 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-green-500"
          />
         
        </div>
    )
}

export default SearchBar