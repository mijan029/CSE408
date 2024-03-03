import React, { useEffect, useState } from 'react';
import axios from 'axios'

const UpdateRaw = ({raw, onSetStatus, fetchRaws}) => {
  const [name,setName] = useState('')
  const [price,setPrice] = useState("")
  const [inStock,setInStock] = useState("")

  useEffect(()=>{
    console.log("eikhane ashce?")
    axios.get(`/factory/raw/${raw._id}`)
    .then(response=>{
        setName(response.data.name)
        setPrice(response.data.price)
        setInStock(response.data.inStock)
    }).catch(error=>{
        console.log(error)
    })
  },[raw])
  

  const handleUpdateForm = async (e) => {
    e.preventDefault();
    await axios.put(`/factory/raw/${raw._id}`, {name:name, price:price, inStock:inStock})
    .then( (response) => {
        fetchRaws()
    })
    .catch((error) => {
        console.error('Error adding product:', error);
    });
    onSetStatus("Add")
  };

  return (
    <div className="flex items-center justify-center mt-14">
      <form  onSubmit={handleUpdateForm} className="max-w-md bg-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 pl-5">Update</h2>

        <div className='flex justify-between'>
        <p className='font-bold m-5 mt-7'>Name:</p>
        <input
          type="text"
          placeholder={name}
          value={name}
          onChange={e=>setName(e.target.value)}
          className="border-2 rounded m-5 p-2"
        /></div>
        <div className='flex justify-between'>
        <p className='font-bold m-5 mt-7'>Prime:</p>
        <input
          type="Number"
          placeholder={price}
          value={price}
          onChange={e=>setPrice(e.target.value)}
          className="border-2 rounded m-5 p-2"
        /></div>
        <div className='flex justify-between'>
        <p className='font-bold m-5 mt-7'>Stock:</p>
        <input
          type="Number"
          placeholder={inStock}
          value={inStock}
          readOnly
          className="border-2 rounded m-5 p-2 bg-gray-100"
        /></div>

        <div className='flex justify-around my-5 mr-20'>
            <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update </button>

            <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={()=>{onSetStatus("Add")}}>
            Cancel </button>


        </div>

      
      </form>
    </div>
  );
};

export default UpdateRaw;