import { useEffect, useState } from "react"
import AddRaw from "../components/AddRaw"
import RawProduct from "../components/RawProduct"
import axios from "axios"

const RawPage = ()=>{
    const [raws, setRaws] = useState([])

    const fetchRaws = ()=> {
        axios.get('/raw')
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

    return (
        <div className='grid grid-cols-2 h-dvh'>
            <div className="col-span-1 mx-10">
                {
                    raws && raws.map((raw) => (
                            <RawProduct raw={raw}/>
                        )
                    )
                }
                
            </div>

            <div className="col-span-1 mx-3">
                <AddRaw onSetRaws={onSetRaws} />
            </div>

        </div>
    )
}

export default RawPage