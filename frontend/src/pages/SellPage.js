import {useEffect, useState } from "react";
import SellProduct from "../components/SellProduct";
import {useNavigate} from 'react-router-dom'
import  axios  from "axios"

const SellPage = ()=>{
     const navigate = useNavigate()
     const [customerName, setCustomerName] = useState("")
     const [customerContact, setCustomerContact] = useState("")

     //const [sellHistory, setSellHistory] = useState([])
     var sellHistory=[]
    
     const [products, setProducts] = useState([])
     const [Cart, setCart] = useState([])

    //const [showCart, setShowCart] = useState(false)
    const [quantities, setQuantities] = useState(Array(products.length).fill(0));

    useEffect(()=>{
        fetchProducts()
        setQuantities(Array(products.length).fill(0))
    },[])

    //setQuantities(Array(products.length).fill(0))
    console.log(quantities)

    const handleQuantityChange = (product, quantity) => {
        console.log(quantities)
        // setQuantities((prevQuantities) =>
        //   prevQuantities.map((quantity, index) =>
        //     products[index].id === productId ? newQuantity : quantity
        //   )
        // );

        setCart([...Cart,{product,quantity}])
      };

      
    const fetchProducts = async ()=>{
            
        const response = await fetch('/admin/products');
        const json = await response.json();
        
        console.log(json)

        if(response.ok){
            setProducts(json)
        }
    }

    const handleUpdateProduct = async (newProduct) => {
        try {
          const response = await axios.put(`/admin/products/${newProduct._id}`, newProduct);
          console.log('Product updated:', response.data);
          // Update the UI or perform additional actions
        } catch (error) {
          console.error('Failed to update product:', error);
          // Handle the error or show an error message
        }
      };

      const createSale = (val)=>{
        sellHistory = [...sellHistory,  val]
      }

    const handleSell = async () =>{
        Cart.map(item=>{
            //console.log(quantities[index])
            // if(quantities[index]>0 && quantities[index]<=product.quantity){
            //     product.quantity -= quantities[index]
            //     handleUpdateProduct(product)
            // }
            //console.log(item.quantity)
            const val  = {
                name: item.product.name,
                price: item.product.price,
                quantity: item.quantity,

            }
            console.log(val) 
            //setSellHistory([...sellHistory,  val])
            createSale(val)
            console.log(sellHistory)
            if(item.product.quantity>=item.quantity){
                item.product.quantity-=item.quantity
                handleUpdateProduct(item.product)
            }
        })

        fetchProducts()

        console.log(sellHistory)
        
        try {
            const response = await axios.post(`/admin/products/sale/add/`,{
                customerName: customerName,
                customerContact: customerContact,
                items: sellHistory
            });
            console.log('Product updated:', response.data);
            // Update the UI or perform additional actions
          } catch (error) {
            console.error('Failed to update product:', error);
            // Handle the error or show an error message
          }


        navigate('/admin/products')

    }

    // const handleCartClick = async ()=>{
    //     setAddCart(!addCart)
  
        
    //   }

     return (
         
            <div className="max-w-3xl mx-auto px-4">



                <div className="my-20 ml-10">
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




                    
                            <div>

                                {
                                    products && products.map((product,index) => (
                                        
                                        <SellProduct product={product} handleQuantityChange={handleQuantityChange} />
                                           
                                        )
                                    )
                                }

                                <div className="flex justify-between">
                                    <button 
                                        className="mt-2 ml-20 p-2 px-4 border-2 rounded-md border-blue-700 text-white hover:bg-blue-800 bg-blue-700"
                                        onClick={handleSell}
                                    > Sell </button>
                                </div>



                            </div>
                            
                                
                    
                            
                    

            </div>
        
     )
}

export default SellPage