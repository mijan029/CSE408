import { useState,useEffect } from "react";
import { useAuth } from '../context/AuthContext'



const CashierProduct = ({product, onSell})=>{
    const [intoSell, setIntoSell] = useState(false)

    const user = useAuth()
    //console.log(user)

    useEffect(()=>{
      setIntoSell(false)
    },[product])

    return (
        <div className="bg-white  rounded-lg my-4 p-3">
           
                <div className="flex">
                  <div className="ml-2">
                      <p className="text-lg font-semibold text-blue-500">{product.name}</p>
                      <p className="text-gray-600">Unit Price: { product.price }</p>
                      <p className="text-gray-600">inStock: { product.inStock }</p>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                    
                      
                      <button  onClick={() => {onSell(product); setIntoSell(!intoSell)}}
                        className={`ml-2 px-4 py-2 bg-blue-500 text-white rounded ${intoSell && "shadow-lg bg-pink-500"}`}
                      >  {intoSell ? "OnBoard":"Purchase"}  </button>

                              

                </div>

         </div>
    )
}

export default CashierProduct