import React, { useEffect, useState } from 'react';
import axios from "axios"

const ReceiveShowroom = () => {
    const [history, setHistory] = useState([])
    const [data, setData] = useState([]);
    const itemQuantities = [];

    const fetchHistoryOrderData = async () => {
        try {
            const response = axios.get('factory/product/orderHistory');
            const data = response.data;
            console.log(data)
            return data;
        } catch (error) {
            console.error('Error fetching history order data:', error);
            return [];
        }
    };


//   useEffect(() => {
//     fetchData();
//   }, []);
  

  const calculateTotalQuantity = async () => {
    try {
        const historyOrderData = await fetchHistoryOrderData();
        const successfulOrders = historyOrderData.filter(order => order.status === "Approved")
        successfulOrders.forEach(order => {
            order.items.forEach(item => {
                const existingItem = itemQuantities.find(i => i.name === item.name);
                if (existingItem) {
                    existingItem.quantity += item.quantity;
                } else {
                    itemQuantities.push({ name: item.name, quantity: item.quantity });
                }
            });
        });

        //const table = createTable(itemQuantities);
        //document.body.appendChild(table);
    } catch (error) {
        console.error('Error calculating total quantity:', error);
    }
};

calculateTotalQuantity();
console.log(itemQuantities)

  return (
    <div className="container mx-auto">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {itemQuantities.map((item) => (
            <tr>
              <td className="border px-4 py-2">{item.itemName}</td>
              <td className="border px-4 py-2">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReceiveShowroom;


