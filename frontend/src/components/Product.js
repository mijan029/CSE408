import { useState,useEffect } from "react";
import { useAuth } from '../context/AuthContext'



const Product = ({product, onDelete, onUpdate, onProduce})=>{
    const [intoPurchase, setIntoPurchase] = useState(false)

    const user = useAuth()
    //console.log(user)

    useEffect(()=>{
      setIntoPurchase(false)
    },[product])

    return (
        <div className="bg-white  rounded-lg my-4 p-3">
           
                <div className="flex">
                  <div className="ml-2">
                      <p className="text-2xl font-bold text-blue-500">{product.category}</p>
                      <p className="text-lg font-medium ">{product.name}</p>
                      <p className="text-gray-600">Unit Price: { product.price }</p>
                      <p className="text-gray-600">inStock: { product.inStock }</p>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                    
                      <button onClick={() => {onUpdate(product);} }
                        className="mr-2 px-4 py-2 bg-green-500 text-white rounded"
                      >  Update </button>
                      
                      <button  onClick={() => {onProduce(product); setIntoPurchase(!intoPurchase)}}
                        className={`ml-2 px-4 py-2 bg-blue-500 text-white rounded ${intoPurchase && "shadow-lg bg-pink-500"}`}
                      >  {intoPurchase ? "OnBoard":"Produce"}  </button>

                      <button  onClick={() => onDelete(product)}
                        className="px-4 py-2 bg-red-500 text-white rounded"
                      >  Delete </button>            

                </div>

         </div>
    )
}

export default Product