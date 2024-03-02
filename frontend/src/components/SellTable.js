import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

const SellTable = ({requestList, fetchRaws}) => {

  const [items, setItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0)
  const [customerName, setCustomerName] = useState("")
  const [customerContact, setCustomerContact] = useState("")
  const {user} = useAuthContext()

  
  useEffect(()=>{
      setItems(requestList.map(raw => ({ ...raw, id: raw._id, sellAmount: 1, total: raw.price })))
      setGrandTotal(requestList.reduce((sum,raw)=>sum+raw.price,0))
    },[requestList])
    
console.log(items)
  const handleAmountChange = (id, amount) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        const updatedAmount = Number(amount);
        setGrandTotal(grandTotal-item.total+updatedAmount*item.price)
        return { ...item, sellAmount: updatedAmount, total: updatedAmount * item.price };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleClick = async ()=>{

    await axios.post(`/showroom/${user.user.branch_id}/sell`,{customerName:customerName, customerContact:customerContact,branch_id:user.user.branch_id, cashier_id:user.user.email ,products:items, grandTotal:grandTotal})
    .then(response=>{
      console.log(response.data)
    }).catch(error=>{
      console.log(error)
    })

    let showroomId = user.user.branch_id;
    const response = await axios.get(`/showroom/${user.user.branch_id}/product`,{
      params : {showroomId}
    });
    const filteredProducts = response.data.filter(product => product.branch_id === user.user.branch_id);

    items.forEach(item => {
      const product = filteredProducts.find(p => p.name === item.name && p.category===item.category);
      if (product) {
        product.inStock-= item.sellAmount;
        axios.put(`/showroom/${user.user.branch_id}/product/${product._id}`, product)
          .then(response => console.log(response.data))
          .catch(error => console.log(error));
      }
    });


    setCustomerName("")
    setCustomerContact("")
    fetchRaws();
  }

  return (
    <div className="overflow-x-auto mt-14 bg-white rounded">
        <div className="p-5">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerName">
                    Customer Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="customerName"
                    type="text"
                    placeholder=""
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerContact">
                    Customer Contact
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="customerContact"
                    type="text"
                    placeholder="E-mail or phone"
                    value={customerContact}
                    onChange={(e) => setCustomerContact(e.target.value)}
                />
            </div>
        </div>
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
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <input 
                    type="number" 
                    defaultValue={1}
                    className="mt-1 block w-1/2 px-3 py-2 border-2 border-black rounded-lg" 
                    value={item.sellAmount} 
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
                Sell </button>

                <button
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-5"
                onClick={()=>{
                    fetchRaws();
                    }}>
                Cancel </button>


            </div>


    </div>
  );
};

export default SellTable;
