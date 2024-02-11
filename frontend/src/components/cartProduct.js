import { useState } from "react";

const CartProduct = ({product, handleQuantityChange})=>{

    const [quantity, setQuantity] = useState(1)

    

      const handleChange = (e)=>{
        setQuantity(parseInt(e.target.value))
        handleQuantityChange(product._id, quantity)
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
                      <p className="text-gray-600">Unit Price: { product.price }</p>
                      <p className="text-gray-600">Quantity: { product.quantity }</p>
                  </div>
                </div>

            <div className="flex justify-between mt-3">
              <div >

                <input 
                  className="border-2 rounded-md border-black w-20 py-1 pl-6"
                  type="Number"
                  defaultValue={1}
                  onChange={handleChange}
                />

                <div className="text-green-600" >Price: {product.price*quantity}</div>

              </div>
            
            </div>

      </div>
    )
}

export default CartProduct