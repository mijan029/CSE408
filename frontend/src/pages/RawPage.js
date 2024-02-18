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
    const [purchaseList, setPurchaseList] = useState([])
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

        setStatus("Add")
    }

    const onSetStatus = (stat)=>{
        setStatus(stat)
        setPurchaseList([])
    }


    const onUpdate = (raw) =>{
        setStatus("Update")
        setUpdateRaw(raw)
        console.log(raw)

    }
    // const handleUpdate = () =>{
       
    //      //setRaws(raws.map(e=>(newRaw._id===e._id ? newRaw : e)))
    //      fetchRaws()
       
    // }

    const onPurchase = (raw)=>{
        setStatus("Purchase")
        var ase = false
        var filteredList = purchaseList.filter(e=>{
            if(e._id===raw._id ) {console.log(ase); ase=true; return false}
            else return true;
        })

        ase===false?setPurchaseList([...filteredList,raw]):setPurchaseList(filteredList)

        console.log(purchaseList)
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
                    (status.match("Purchase") && <RawPurchaseTable purchaseList={purchaseList} onSetStatus={onSetStatus} fetchRaws={fetchRaws}/>) 
                }
                
            </div>

        </div>
    )
}

export default RawPage