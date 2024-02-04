import { useContext, useState } from "react"
import { MyContext } from "../context/MyConext"
import {useNavigate} from 'react-router-dom'
import CartProducts from "../components/cartProduct"
import Table from "./TableCart"

const Cart = ()=>{
    const {allProducts, dispatch} = useContext(MyContext)
    const navigate = useNavigate()
    const [cartArray, setCartArray] = useState([])
    const [customerName, setCustomerName] = useState("")
    const [customerContact, setCustomerContact] = useState("")
    const [showPreviewTable, setShowPreviewTable] = useState(false)

    console.log("ami ashci")



    const handleClick = async ()=>{
        

        console.log("ok ok");
        cartArray && console.log(...cartArray)

        const data = {customerName:customerName, customerContact:customerContact, items:cartArray}
        const response = await fetch('/admin/product/sale/add',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        )

            const json = await response.json()
            if(!response.ok){
                alert(json.error)
            }
            else{
                allProducts.map(async e=>{
                    if(e.isAdded===true){
                        e.isAdded=false;
                        e.quantity-=cartArray.filter(w=>w.id===e._id)[0].saleAmount;
                        const response = await fetch('/admin/product/'+e._id,
                            {
                                method: 'PUT',
                                body: JSON.stringify(e),
                                headers:{
                                    'Content-Type': 'application/json'
                                }
                            }
                        )
                        const json = await response.json()
                        dispatch({type:'CREATE_UPDATE', payload: json})
                    }
                })
                
                //console.log(json);
                //
                navigate('/admin/product')
            }
        }


        const handlePreview = ()=>{
            setShowPreviewTable(!showPreviewTable)
        }
    

    if(showPreviewTable===false){

                return (
                    <div className="max-w-3xl mx-auto px-4">


                        <div className="bg-white rounded-xl shadow-lg my-4 p-3">

                            
                            <div className="">
                                <div>
                                    <label for = "customer_name" className="text-xl font-medium mr-4">Customer Name:</label>
                                    <input 
                                        className="border-2 rounded-md border-gray-500  py-1 pl-6 ml-4"
                                        type="String"
                                        name="customer_name"
                                        placeholder="Faisal Zaman"
                                        onChange={(e)=>{
                                            setCustomerName(e.target.value)
                                        }}
                                    /> 
                                </div>

                                <div className="mt-3">
                                    <label for = "customer_contact" className="text-xl font-medium">Customer Contact:</label>
                                    <input 
                                        className="border-2 rounded-md border-gray-500  py-1 pl-6 ml-4"
                                        type="String"
                                        name="customer_contact"
                                        placeholder="+880.. or ..@gmail.com"
                                        onChange={(e)=>{
                                            setCustomerContact(e.target.value)
                                        }}
                                    />    
                                </div>        
                            </div>


                        </div>

                        {
                            
                            allProducts && allProducts.map(product => {
                                return product.isAdded===true ? <CartProducts product = {product} cartArray={cartArray} setCartArray={setCartArray} / > : <></>
                            }
                        
                            )
                        }
                        <div className="flex justify-between">
                            <button 
                                className="mt-2 p-2 border-2 rounded-md border-blue-700 text-white hover:bg-blue-800 bg-blue-700"
                                onClick={()=>navigate('/admin/product')}
                            >Add more Product</button>
                            <button 
                                className="mt-2 p-2 border-2 rounded-md border-blue-700 text-white hover:bg-blue-800 bg-blue-700"
                                onClick={handlePreview}
                            > preview </button>
                            <button 
                                className="mt-2 p-2 border-2 rounded-md border-blue-700 text-white hover:bg-blue-800 bg-blue-700"
                                onClick={handleClick}
                            > submit </button>
                        </div>
                            

                    </div>
                )

            }else{
                return(
                    <div>
                        <Table data = {cartArray} />
                        <button 
                            className="flex justify-center ml-30 mt-2 p-2 px-5 border-2 rounded-md border-blue-700 text-white hover:bg-blue-800 bg-blue-700"
                            onClick={handlePreview}
                        > Ok </button>
                    
                    </div>
                )

            }
        }

            
        
export default Cart