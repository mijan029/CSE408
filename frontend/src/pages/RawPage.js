import { useEffect, useState } from "react"
import AddRaw from "../components/AddRaw"
import RawProduct from "../components/RawProduct"
import axios from "axios"
import UpdateRaw from "../components/UpdateRaw"
import SearchBar from "../components/Searchbar"
import RawPurchaseTable from "../components/RawPurchaseTable"

const RawPage = ()=>{
    const [raws, setRaws] = useState([])
    const [status, setStatus] = useState("Add") 
    const [keyWord, setKeyWord] = useState('')
    const [updateRaw, setUpdateRaw] = useState(null)
    // status can be None, Update, Purchase, Add

    const fetchRaws = ()=> {
        axios.get('/factory/raw')
        .then(response =>{
            setRaws(response.data)
        }
        ).catch(error=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        fetchRaws();
    },[])

    const onSetRaws = (raw)=>{
        setRaws([...raws,raw])
    }

    const onDelete = (raw) =>{
        axios.delete(`/factory/raw/${raw._id}`)
        .then(
            setRaws(raws.filter(e=>(e._id !== raw._id)))
        ).catch(error=>{
            console.log(error)
        })
    }

    const onSetStatus = (stat)=>{
        setStatus(stat)
    }


    const onUpdate = (raw) =>{
        setStatus("Update")
        setUpdateRaw(raw)

    }
    // const handleUpdate = () =>{
       
    //      //setRaws(raws.map(e=>(newRaw._id===e._id ? newRaw : e)))
    //      fetchRaws()
       
    // }

    const onPurchase = (raw)=>{
        setStatus("Purchase")
    }


    return (
        <div className='grid grid-cols-2 h-dvh'>
            <div className="col-span-1 mx-10">

                    <SearchBar setKeyWord={setKeyWord}/>
                    
                {
                    
                    raws && raws.map((raw) => (
                            raw.name.match(keyWord) && <RawProduct raw={raw} onDelete={onDelete} onUpdate={onUpdate} onPurchase={onPurchase}/>
                        )
                    )
                }
                
            </div>

            <div className="col-span-1 mx-3">
                {
                    (status.match("Add") && (<AddRaw onSetRaws={onSetRaws} />)) ||
                    (status.match("Update") && (<UpdateRaw raw={updateRaw} onSetStatus={onSetStatus} fetchRaws={fetchRaws}/>))||
                    (status.match("Purchase") && <RawPurchaseTable raws={raws} onSetStatus={onSetStatus} fetchRaws={fetchRaws}/>) 
                }
                
            </div>

        </div>
    )
}

export default RawPage