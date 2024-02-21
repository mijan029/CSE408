
const SearchBar = ({setKeyWord}) =>{
    //const [keyWord, setKeyWord] = useState(null)
    const handleChange = (e) =>{
      setKeyWord(e.target.value)
    }

    return (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleChange}
            className=" rounded-md py-2 px-4 w-1/3   focus:ring-green-500"
          />
         
        </div>
    )
}

export default SearchBar