import { useContext } from "react"
import { MyContext } from "../context/MyConext"
import {useNavigate} from 'react-router-dom'
import CartProducts from "../components/cartProduct"

const Cart = ()=>{
    const {allProducts} = useContext(MyContext)
    const navigate = useNavigate()
    console.log("ami ashci")
    return (
        <div className="max-w-3xl mx-auto px-4">


            <div className="bg-white rounded shadow my-4 p-3">

                
                <div className="">
                    <label for = "customer_name" className="font-2">customer_name:</label>
                    <input 
                        className="border-2 rounded-md border-gray-500 w-40 py-1 pl-6 ml-4"
                        type="String"
                        name="customer_name"
                        placeholder="Faisal Zaman"
                    />            
                </div>


            </div>

            {
                
                allProducts && allProducts.map(product => {
                    return product.isAdded===true ? <CartProducts product = {product} / > : <></>
                }
            
                )
            }
            <div className="flex justify-between">
                <button 
                    className="mt-2 px-2 border-2 rounded-md border-blue-500 text-white hover:bg-blue-700 bg-blue-500"
                    onClick={()=>navigate('/admin/product')}
                >Add more Product</button>
                <button 
                    className="mt-2 px-2 border-2 rounded-md border-blue-500 text-white hover:bg-blue-700 bg-blue-500"
                
                > Submit </button>
            </div>
                

        </div>
    )

}

export default Cart