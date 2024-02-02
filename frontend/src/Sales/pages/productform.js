import React, { useState } from 'react';

const ProductForm = () => {
  const [product, setProduct] = useState({ category: '', name: '', price: '' });
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/admin/product/add',
            {
                method: 'POST',
                body: JSON.stringify(product),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        )

        const json = await response.json()
        if(!response.ok){
            setError(json.error)
        }
        else{
            setError(null);
            setProduct({ category: '', name: '', price: '' })
            //dispatch({type:'CREATE_WORKOUT', payload: json})
            console.log(json);
        }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6">Add Product</h2>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          className="submitForm"
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={product.name}
          onChange={handleChange}
          className="submitForm"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="submitForm"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Product
        </button>
      </form>
      <div className="text-red">{error}</div>
    </div>
  );
};

export default ProductForm;