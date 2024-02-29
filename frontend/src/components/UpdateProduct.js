import React, { useEffect, useState } from 'react';
import axios from 'axios'

const UpdateProduct = ({product, onSetStatus, fetchProducts}) => {
    
    const [category, setCategory] = useState([""])
    const [name,setName] = useState('')
    const [price,setPrice] = useState("")
    const [inStock,setInStock] = useState("")
    const showroomIdList = [1, 2]

  useEffect(()=>{
    console.log("eikhane ashce?")
    axios.get(`/factory/product/${product._id}`)
    .then(response=>{
        setCategory(response.data.category)
        setName(response.data.name)
        setPrice(response.data.price)
        setInStock(response.data.inStock)
    }).catch(error=>{
        console.log(error)
    })

    
  },[product])
  

  const handleUpdateForm = async (e) => {
    e.preventDefault();
    await axios.put(`/factory/product/${product._id}`, {name:name, price:price, inStock:inStock})
    .then( (response) => {
        fetchProducts()
    })
    .catch((error) => {
        console.error('Error adding product:', error);
    });
    
    showroomIdList.map((id) => {

      axios.get(`/showroom/${id}/product/`)
      .then(response=>{
          response.data.map((item)=>{
              if(item.name === name && item.category === category){
                  axios.put(`/showroom/${id}/product/${item._id}`, {name:name, price:price})
                  .then((response) => {
                  })
                  .catch((error) => {
                    console.error('Error adding product to showroom', error);
                  });
              }
              console.log(item)
              console.log(id)
          }
          )
      }).catch(error=>{
          console.log(error)
      })


      
    })

    onSetStatus("Add")
  };

  return (
    <div className="flex items-center justify-center mt-14">
      <form  onSubmit={handleUpdateForm} className="max-w-md bg-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 pl-5">Update</h2>
        <input
          type="Number"
          placeholder={category}
          value={category}
          readOnly
          className="border-2 rounded m-5 p-2 bg-gray-100"
        />
        <input
          type="text"
          placeholder={name}
          value={name}
          onChange={e=>setName(e.target.value)}
          className="border-2 rounded m-5 p-2"
        />
        <input
          type="Number"
          placeholder={price}
          value={price}
          onChange={e=>setPrice(e.target.value)}
          className="border-2 rounded m-5 p-2"
        />
        <input
          type="Number"
          placeholder={inStock}
          value={inStock}
          readOnly
          className="border-2 rounded m-5 p-2 bg-gray-100"
        />

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

export default UpdateProduct;