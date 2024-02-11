import { useState } from "react"
import axios from 'axios'

const Product = ({product, setProducts})=>{
  const [addCart, setAddCart] = useState(false)


  const fetchProducts = async () => {
    try {
      const response = await axios.get('/admin/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

    const handleDelete = async ()=>{
      try {
        await axios.delete(`/admin/products/${product._id}`);
        fetchProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }

    const addToCart = async (productId) => {
      try {
        await axios.post('/admin/products/cart/add', { productId });
        console.log('Product added to cart');
      } catch (error) {
        console.error('Failed to add product to cart:', error);
      }
    };

    const removeFromCart = async (productId) => {
      try {
        await axios.delete(`/admin/products/cart/${productId}`);
        console.log('Product removed from cart');
      } catch (error) {
        console.error('Failed to remove product from cart:', error);
      }
    };

    const handleCartClick = async ()=>{
      if(addCart===true){
        removeFromCart(product._id)
      }else {
        addToCart(product._id)
      }
      setAddCart(!addCart)

      
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
              <button className='bg-red-500 text-white border rounded px-4' onClick = {handleDelete}><strong>Delete</strong></button>
              <button className={`${addCart===true?"bg-red-600 hover:bg-red-800":"bg-blue-600 hover:bg-blue-800"} p-2 border-2 rounded-md  text-white`} onClick = {handleCartClick}>
                {addCart===true?"Remove From Cart":"Add to Cart"}
              </button>

            </div>

      </div>
    )
}

export default Product