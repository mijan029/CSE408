const Products = ({product})=>{
    return (
        <div className="bg-white rounded shadow my-4">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">{product.category}</h2>

            {/* Product List */}
            <ul className="divide-y divide-gray-200">
              <li className="py-4">
                {/* Product Item */}
                <div className="flex">
                  <div className="flex items-center">
                    <img
                      src="product-image.jpg"
                      alt="Product_image"
                      className="w-16 h-16 rounded mr-4"
                    />
                  </div>
                  <div>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-gray-600">Price: { product.price }</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
      </div>
    )
}

export default Products