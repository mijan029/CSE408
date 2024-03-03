import React, { useState } from 'react';
import axios from 'axios'

const AddProduct = ({onSetProduct}) => {
    const [category, setCategory] = useState([""])
    const [name,setName] = useState('')
    const [price,setPrice] = useState("")
    const [inStock,setInStock] = useState("")
    const [error, setError] = useState(null)
    const categoryList = ["Juice", "Misty", "Curd", "Butter", "Cheese", "Milk", "Yogurt", "Ice Cream", "Ghee", "Paneer", "Lassi", "Sweets"]

    const showroomIdList = [1, 2, 3, 4, 5, 6, 7, 8]


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/factory/product', {category:category, name:name, price:price, inStock:inStock})
      .then((response) => {
        setError("");
        setCategory("");
        setName("");
        setPrice("");
        setInStock("");
        onSetProduct(response.data);
      })
      .catch((error) => {
        setError("Please check the input fields")
        console.error('Error adding product:', error);
      });
      
      showroomIdList.map((id) => {
        axios.post(`/showroom/${id}/product`, {category:category, name:name, price:price, inStock:0, branch_id:id})
          .then((response) => {
            console.log(response.data)
            console.log(id)
          })
          .catch((error) => {
            console.error('Error adding product to showroom', error);
          });
      })

      console.log("hello mijan in prodcut")
  };

  return (
    <div className="flex items-center justify-center mt-14">
      <form  onSubmit={handleSubmit} className="max-w-md bg-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 pl-5">Add a new Product</h2>

        <select
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border-2 rounded p-2 m-5 px-20"
        >
            <option value="" disabled>Category</option>
            {
                categoryList.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                })
            }

        </select>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e=>setName(e.target.value)}
          className="border-2 rounded m-5 p-2"
        />
        <input
          type="Number"
          placeholder="Price"
          value={price}
          onChange={e=>setPrice(e.target.value)}
          className="border-2 rounded m-5 p-2"
        />
        <input
          type="Number"
          placeholder="In stock"
          value={inStock}
          onChange={e=>setInStock(e.target.value)}
          className="border-2 rounded m-5 p-2"
        />

        <div className='my-5'>
            <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 ml-5 rounded"
            
            >
            Add
            </button>
        </div>

      {
        error && error.charAt(0)==='S' ? (<div className="text-green-700 mt-2">{error}</div>) :(<div className="text-red-700 mt-2">{error}</div>)
      }
      </form>
    </div>
  );
};

export default AddProduct;