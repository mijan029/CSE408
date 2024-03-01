import { useEffect, useState } from "react"
import axios from "axios"
import SearchBar from "../components/Searchbar"
import { useAuth } from "../context/AuthContext"

const SellPage = ()=>{
    const [raws, setRaws] = useState([])
    const [keyWord, setKeyWord] = useState('')
    const [requestList, setRequestList] = useState([])
    const [OnBoard, setOnBoard] = useState([])
    // status can be None, Update, Purchase, Add
    const { user }= useAuth()
    //const token= user.token
    //console.log(user)

    
    const fetchRaws = async () => {
        let showroomId = user.user.branch_id;
        await axios.get(`/showroom/${user.user.branch_id}/product`,{
            params : {showroomId}
            //params: {startDate,endDate}
        })
        .then(response=>{
            setRaws(response.data)
            })
            .catch(error=>{
                console.log(error)
                });
        setOnBoard(Array(raws.length).fill(false))
        setRequestList([])
    };
    
  

    // const fetchRaws = async () => {
    //     axios.get('/factory/raw',{
    //         // headers: {
    //         //     Authorization: `Bearer ${ user.token }`
    //         // }
    //     })
    //     .then(response =>{
    //         setRaws(response.data)
    //     }
    //     ).catch(error=>{
    //         console.log(error)
    //     })
    //     setOnBoard(Array(raws.length).fill(false))
    //     setRequestList([])
    // }

    useEffect(()=>{
        fetchRaws();
    },[])



    const onRequest = (raw)=>{
        //setStatus("Purchase")
        var ase = false
        var filteredList = requestList.filter(e=>{
            if(e._id===raw._id ) {console.log(ase); ase=true; return false}
            else return true;
        })

        ase===false?setRequestList([...filteredList,raw]):setRequestList(filteredList)

    }

    const handleClick = (raw,index)=>{
        onRequest(raw)
        let newOnBoard = OnBoard
        newOnBoard[index] = !OnBoard[index]
        setOnBoard(newOnBoard)
    }


    return (
        <div className='grid grid-cols-2 h-dvh'>
            <div className="col-span-1 mx-10">

                    <SearchBar setKeyWord={setKeyWord}/>
                    
                {
                    
                    raws && raws.map((raw,index) => (

                            raw.name.match(keyWord) && (

                                <div className="bg-white rounded-lg my-4 p-3">
           
                                    <div className="flex">
                                        <div className="ml-2">
                                            <p className="text-xl font-semibold text-blue-900">{raw.category}</p>
                                            <p className="text-lg font-semibold text-blue-500">{raw.name}</p>
                                            <p className="text-gray-600">Unit Price: { raw.price }</p>
                                            <p className="text-gray-600">inStock: { raw.inStock }</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-end my-2">
                                        
                                           
                                        <button  onClick={()=>handleClick(raw, index)}
                                            className={`ml-2 px-4 py-2 bg-blue-500 text-white rounded ${OnBoard[index] && "shadow-lg bg-pink-500"}`}
                                        >  {OnBoard[index] ? "OnBoard":"Get"}  </button>

                                     
                                    </div>

                                </div>
                                )
                        )
                    )
                }
                
            </div>

            <div className="col-span-1 mx-3">
                {
                      <SellPage requestList={requestList} fetchRaws={fetchRaws}/>
                }
                
            </div>

        </div>
    )
}

export default SellPage