import { useContext } from "react";
import { MyContext } from "../context/MyConext";

const Products = ({product})=>{

    const {dispatch} = useContext(MyContext)

    const handleClick = async ()=>{
      const response = await fetch('/admin/product/'+product._id,{
          method: 'DELETE'
      })

      const json = await response.json();
      if(response.ok){
          dispatch({type:'DELETE_PRODUCT', payload:json})
      }
    }

    const handleCartClick = async ()=>{
      if(product.isAdded !== true){
        product.isAdded = true
        
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
        
      }else{
        alert("Already added")
      }
      
    }


    return (
        <div className="bg-white rounded-xl shadow-xl my-4 p-3">
            <h2 className="text-xl font-semibold mb-2">{product.category}</h2>

           
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
            <div className="flex justify-between mt-2">
              <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick = {handleClick}><strong>Delete</strong></button>
              <button className=' p-2 border-2 rounded-md border-blue-700 text-white hover:bg-blue-800 bg-blue-700' 
              
              onClick = {handleCartClick}><strong>{product.isAdded===true?"Added":"Add to Cart"}</strong>
              </button>

            </div>

      </div>
    )
}

export default Products