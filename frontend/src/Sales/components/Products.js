
const Products = ({product})=>{


    const handleClick = async ()=>{
      const response = await fetch('/admin/product/'+product._id,{
          method: 'DELETE'
      })

      const json = await response.json();
      if(response.ok){
          //dispatch({type:'DELETE_WORKOUT', payload:json})
      }
    }


    return (
        <div className="bg-white rounded shadow my-4 p-3">
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

            <button className='mt-2 px-2 border-2 rounded-md border-red-500 text-red-600 hover:bg-red-100 bg-white' onClick = {handleClick}><strong>Delete</strong></button>

      </div>
    )
}

export default Products