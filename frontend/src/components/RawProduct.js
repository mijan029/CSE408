import { useState } from "react"
import axios from 'axios'

const RawProduct = ({raw, onDelete, onUpdate, onPurchase})=>{
  const [addCart, setAddCart] = useState(false)


//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('/admin/products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

    // const handleDelete = async ()=>{
    //   try {
    //     await axios.delete(`/admin/products/${product._id}`);
    //     fetchProducts();
    //   } catch (error) {
    //     console.error('Error deleting product:', error);
    //   }
    // }

    // const addToCart = async (productId) => {
    //   try {
    //     await axios.post('/admin/products/cart/add', { productId });
    //     console.log('Product added to cart');
    //   } catch (error) {
    //     console.error('Failed to add product to cart:', error);
    //   }
    // };

    // const removeFromCart = async (productId) => {
    //   try {
    //     await axios.delete(`/admin/products/cart/${productId}`);
    //     console.log('Product removed from cart');
    //   } catch (error) {
    //     console.error('Failed to remove product from cart:', error);
    //   }
    // };

    // const handleCartClick = async ()=>{
    //   if(addCart===true){
    //     removeFromCart(product._id)
    //   }else {
    //     addToCart(product._id)
    //   }
    //   setAddCart(!addCart)

      
    // }


    return (
        <div className="bg-white rounded-xl shadow-xl my-4 p-3">
           
                <div className="flex">
                  <div className="ml-2">
                      <p className="text-lg font-semibold text-blue-500">{raw.name}</p>
                      <p className="text-gray-600">Unit Price: { raw.price }</p>
                      <p className="text-gray-600">inStock: { raw.inStock }</p>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                    
                    <button className=""></button>

                </div>

         </div>
    )
}

export default RawProduct