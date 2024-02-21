import { useState,useEffect } from "react";
import { useAuth } from '../hooks/AuthContext'



const RawProduct = ({raw, onDelete, onUpdate, onPurchase})=>{
    const [intoPurchase, setIntoPurchase] = useState(false)

    const user = useAuth()
    //console.log(user)

    useEffect(()=>{
      setIntoPurchase(false)
    },[raw])

    return (
        <div className="bg-white  rounded-lg my-4 p-3">
           
                <div className="flex">
                  <div className="ml-2">
                      <p className="text-lg font-semibold text-blue-500">{raw.name}</p>
                      <p className="text-gray-600">Unit Price: { raw.price }</p>
                      <p className="text-gray-600">inStock: { raw.inStock }</p>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                    
                      <button onClick={() => {onUpdate(raw);} }
                        className="mr-2 px-4 py-2 bg-green-500 text-white rounded"
                      >  Update </button>
                      <button  onClick={() => {onPurchase(raw); setIntoPurchase(!intoPurchase)}}
                        className={`ml-2 px-4 py-2 bg-blue-500 text-white rounded ${intoPurchase && "shadow-lg bg-pink-500"}`}
                      >  {intoPurchase ? "OnBoard":"Purchase"}  </button>

                      <button  onClick={() => onDelete(raw)}
                        className="px-4 py-2 bg-red-500 text-white rounded"
                      >  Delete </button>            

                </div>

         </div>
    )
}

export default RawProduct