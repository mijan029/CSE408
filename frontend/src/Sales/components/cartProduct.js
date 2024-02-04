import { useContext, useState } from "react";
import { MyContext } from "../context/MyConext";

const CartProducts = ({product, cartArray, setCartArray})=>{

    const {dispatch} = useContext(MyContext)
    const [ase, setAse] = useState(false)

    const handleClick = async ()=>{
        product.isAdded=false
        const response = await fetch('/admin/product/'+product._id,
                {
                    method: 'PUT',
                    body: JSON.stringify(product),
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }
            )
        const json = await response.json();
        if(response.ok){
            dispatch({type:'UPDATE_PRODUCT', payload:json})
        }
      
      }

      const handleChange = (e)=>{
        const val = {id:product._id, category:product.category, name:product.name, price:product.price, saleAmount:e.target.value}
        
        
        cartArray && setCartArray(cartArray.map(w=>{
          if(w.id===product._id){
            setAse(true)
            return val
          }else{
            return w
          }
        }))
          

        if(ase === false){
          setCartArray([...cartArray, val])
        }
        
        //setNai(true)
        
        
      }


    return (
        <div className="bg-white rounded-xl shadow-lg my-4 p-3">

            <h2 className="text-xl font-semibold mb-2 text-blue-500">{product.category}</h2>

           
                <div className="flex">
                  <div className=" border-black border-2">
                    <img
                      src="product-image.jpg"
                      alt="Product_image"
                      className="w-16 h-16 rounded mr-4"
                    />
                  </div>
                  <div className="ml-2">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-gray-600">Price: { product.price }</p>
                      <p className="text-gray-600">Quantity: { product.quantity }</p>
                  </div>
                </div>

            <div className="flex justify-between mt-3">
              <div >

                <input 
                  className="border-2 rounded-md border-black w-20 py-1 pl-6"
                  type="Number"
                  defaultValue={0}
                  onChange={handleChange}
                />

              </div>
             <button className=' text-white bg-red-700 font-medium rounded-lg text-sm px-4 py-2 hover:bg-red-700 ' 
             onClick = {handleClick}><strong>Remove</strong></button>

            </div>

      </div>
    )
}

export default CartProducts