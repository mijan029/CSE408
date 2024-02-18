import React, { useState } from 'react';
import axios from 'axios'

const AddRaw = ({onSetRaws}) => {
  const [name,setName] = useState('')
  const [price,setPrice] = useState("")
  const [inStock,setInStock] = useState("")
  const [error, setError] = useState(null)

  


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/factory/raw', {name:name, price:price, inStock:inStock})
      .then((response) => {
        setError("");
        setName("");
        setPrice("");
        setInStock("");
        onSetRaws(response.data);
      })
      .catch((error) => {
        setError("Please check the input fields")
        console.error('Error adding product:', error);
      });
      console.log("hello mijan")
  };

  return (
    <div className="flex items-center justify-center mt-14">
      <form  onSubmit={handleSubmit} className="max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 pl-5">Add a new Raw</h2>
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

export default AddRaw;