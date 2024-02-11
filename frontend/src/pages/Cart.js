import {useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import CartProduct from "../components/cartProduct"
import axios from "axios"

const Cart = ()=>{
    const navigate = useNavigate()
    const [customerName, setCustomerName] = useState("")
    const [customerContact, setCustomerContact] = useState("")
    const [cartArray, setCartArray] = useState([])
     const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('/admin/products/cart');
      setCartArray(response.data);
    } catch (error) {
      console.error('Failed to fetch cart items:', error);
      // Handle the error or show an error message
    }
  };

    const deleteAllCartItems = async () => {
        try {
        await axios.delete('/admin/products/cart');
        setCartArray([]);
        console.log('All cart items deleted');
        // Update the UI or perform additional actions
        } catch (error) {
        console.error('Failed to delete cart items:', error);
        // Handle the error or show an error message
        }
    };

    const handleQuantityChange = (productId, quantity) => {
        const updatedCartItems = cartItems.map((item) => {
        if (item.productId === productId) {
            return { ...item, quantity };
        }
            return item;
        });

        setCartItems(updatedCartItems);
    };

    const handleClick = async ()=>{
        

        console.log("ok ok");
        cartArray && console.log(...cartArray)

        const data = {customerName:customerName, customerContact:customerContact, items:cartArray}
        const response = await fetch('/admin/products/sale/add',
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
                
                
                //console.log(json);
                //
                navigate('/admin/products')
            }
        }

    


    return (
        <div className="max-w-3xl mx-auto px-4">


            <div className="bg-white rounded-xl shadow-lg my-4 p-3">

                
                <div className="">
                    <div>
                        <span className="text-red-500 font-bold">*</span> <label for = "customer_name" className="text-xl font-medium mr-4">Customer Name:</label>
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
                    <span className="text-red-500 font-bold">*</span>  <label for = "customer_contact_info" className="text-xl font-medium">Customer Contact:</label>
                        <input 
                            className="border-2 rounded-md border-gray-500  py-1 pl-6 ml-4"
                            type="String"
                            name="customer_contact_info"
                            placeholder="+880.. or ..@gmail.com"
                            onChange={(e)=>{
                                setCustomerContact(e.target.value)
                            }}
                        />    
                    </div>        
                </div>


            </div>

            {
                
                cartArray && cartArray.map(product => (
                    <CartProduct product = {product} handleQuantityChange={handleQuantityChange}/ >
                )
            
                )
            }
            <div className="flex justify-between">
                <button 
                    className="mt-2 p-2 border-2 rounded-md border-blue-700 text-white hover:bg-blue-800 bg-blue-700"
                    onClick={handleClick}
                > submit </button>
            </div>
                

        </div>
    )

}
            
        
export default Cart