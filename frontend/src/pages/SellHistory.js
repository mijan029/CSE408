import React, { useState, useEffect } from 'react';

const SellHistoryPage = () => {
  const [sellRecords, setSellRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch the sell records from the backend API
    const fetchSellRecords = async () => {
      try {
        const response = await fetch('/admin/products/history/sale'); // Replace with your backend API endpoint
        const data = await response.json();
        // const data= [
        //     {
        //         "_id": "65c239b26313eea513c1777f",
        //         "items": [
        //             {
        //                 "product_name": "curd",
        //                 "product_price": 50,
        //                 "product_quantity": 1
        //             },
        //             {
        //                 "product_name": "misti",
        //                 "product_price": 60,
        //                 "product_quantity": 1
        //             }
        //         ],
        //         "customerName": "zaman",
        //         "customerContact": "01756976854",
        //         "createdAt": "2024-02-06T13:52:51.348Z",
        //         "updatedAt": "2024-02-06T13:52:51.348Z",
        //         "__v": 0
        //     }
        //]  
        setSellRecords(data);
      } catch (error) {
        console.error('Error fetching sell records:', error);
      }
    };

    fetchSellRecords();
  }, []);

  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const filteredSellRecords = sellRecords.filter(
    (sellRecord) =>
      sellRecord.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sellRecord.items.some((item) => item.product_name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search by customer name or product name"
          className="px-4 py-2 border border-gray-200 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <h1 className="text-2xl font-bold mb-4">Sell History</h1>
      {filteredSellRecords.map((sellRecord, index) => (
        <div key={index} className="mb-8">
          <div className="flex mb-2">
            <span className="font-bold">Created At:</span>
            <p className="ml-2">{sellRecord.createdAt}</p>
          </div>
          <div className="flex mb-2">
            <span className="font-bold">Customer Name:</span>
            <p className="ml-2">{sellRecord.customerName}</p>
          </div>
          <div className="flex mb-4">
            <span className="font-bold">Customer Contact:</span>
            <p className="ml-2">{sellRecord.customerContact}</p>
          </div>
          <table className="min-w-full bg-white border border-gray-200 mb-4">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200">Product Name</th>
                <th className="px-6 py-3 border-b border-gray-200">Quantity</th>
                <th className="px-6 py-3 border-b border-gray-200">Price</th>
                <th className="px-6 py-3 border-b border-gray-200">Total</th>
              </tr>
            </thead>
            <tbody>
              {sellRecord.items.map((item, itemIndex) => (
                <tr key={itemIndex}>
                  <td className="px-6 py-4 border-b border-gray-200">{item.name}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{item.quantity}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{item.price}</td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    {item.quantity * item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end">
            <span className="font-bold">Total Price:</span>
            <p className="ml-2">{calculateTotalPrice(sellRecord.items)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SellHistoryPage;