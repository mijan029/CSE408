import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

const ProductOrderTableShowroom = ({orderList, fetchProducts}) => {

  const { user } = useAuthContext();

  const [items, setItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0)

  
  useEffect(()=>{
      setItems(orderList.map(raw => ({ ...raw, id: raw._id, orderAmount: 1, total: raw.price })))
      setGrandTotal(orderList.reduce((sum,raw)=>sum+raw.price,0))
    },[orderList])
    
console.log(items)
  const handleAmountChange = (id, amount) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        const updatedAmount = Number(amount);
        setGrandTotal(grandTotal-item.total+updatedAmount*item.price)
        return { ...item, orderAmount: updatedAmount, total: updatedAmount * item.price };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleClick = async ()=>{

    await axios.post('/factory/product/orderHistory',{branch_id:user.user.branch_id ,status:'Ordered', Materials:items, grandTotal:grandTotal})
    .then(response=>{
      console.log(response.data)
    }).catch(error=>{
      console.log(error)
    })

    fetchProducts();
  }

  return (
    <div className="overflow-x-auto mt-14 bg-white rounded">
      <table className="min-w-full table-auto">
        <thead className="border-b">
          <tr>
           <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Category</th>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Name</th>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Price</th>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Amount</th>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
                <tr key={item.id} className="border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{item.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <input 
                    type="number" 
                    defaultValue={1}
                    className="mt-1 block w-1/2 px-3 py-2 border-2 border-black rounded-lg" 
                    value={item.purchaseAmount} 
                    onChange={(e) => handleAmountChange(item.id, e.target.value)}
                    />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.total}</td>
                </tr>
          ))}
        </tbody>
      </table>
            <div className='flex justify-between px-6 py-4 font-bold border-t-2 border-black'>
                <div className="whitespace-nowrap  text-gray-900">Grand Total:</div>
                <div>{grandTotal}</div>
            </div>

            <div className='m-5 float-right'>
                
                <button
                type="submit"
                
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleClick}>
                Order </button>

                <button
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-5"
                onClick={()=>{
                    fetchProducts();
                    }}>
                Cancel </button>


            </div>


    </div>
  );
};

export default ProductOrderTableShowroom;
