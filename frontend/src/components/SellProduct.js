import {useEffect, useState } from "react";

const SellProduct = ({product, handleQuantityChange, handleRemoveCart})=>{
     const [addCart, setAddCart] = useState(false)
     const [quantity, setQuantity] = useState(0)

    //const [showCart, setShowCart] = useState(false)

    useEffect(()=>{
        
    },[])


    
      
    // const fetchProducts = async ()=>{
            
    //     const response = await fetch('/admin/products');
    //     const json = await response.json();
        
    //     console.log(json)

    //     if(response.ok){
    //         setProducts(json)
    //     }
    // }

    const handleCartClick = async ()=>{
        //if(addCart===true)
            handleQuantityChange(product, quantity)
        //else handleRemoveCart(product, quantity)
        
        setAddCart(!addCart)
      }

     return (
         
            <div className="max-w-3xl mx-auto px-4">
                    
                            <div>

                                
                                    
                                        <div className="bg-white rounded-xl shadow-xl my-4 p-3">
                                            <h2 className="text-xl font-semibold mb-2">{product.category}</h2>

                                        
                                                <div className="flex">
                                                {/* <div className=" border-black border-2">
                                                    <img
                                                    src="product-image.jpg"
                                                    alt="Product_image"
                                                    className="w-16 h-16 rounded mr-4"
                                                    />
                                                </div> */}
                                                <div className="ml-2">
                                                    <h3 className="text-lg font-semibold">{product.name}</h3>
                                                    <p className="text-gray-600">Price: { product.price }</p>
                                                    <p className="text-gray-600">Quantity: { product.quantity }</p>
                                                </div>
                                                </div>
                                            <div className="flex justify-between mt-2">
                                            
                                            {
                                                <input
                                                type="number"
                                                //value={quantities[index]}
                                                defaultValue={0}
                                                className="border-2 rounded-md border-black w-20 py-1 pl-6"
                                                onChange={(e) =>
                                                setQuantity(e.target.value)
                                                }
                                              />
                                            }
                                            <button className={`${addCart===true?"bg-red-600 hover:bg-red-800":"bg-blue-600 hover:bg-blue-800"} p-2 border-2 rounded-md  text-white`} onClick = {handleCartClick}>
                                                {addCart===true?"Remove From Cart":"Add to Cart"}
                                            </button>

                                            </div>

                                        </div>
                                        
                                    
                                



                            </div>
                            
                                
                    
                            
                    

            </div>
        
     )
}

export default SellProduct