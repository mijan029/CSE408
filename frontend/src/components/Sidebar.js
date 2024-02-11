import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Sidebar = () => {
  return (
    <div className="bg-gray-800 col-span-1 p-4 h-auto">
      <ul className="space-y-4 h-auto ">
        <li className="p-2 text-white hover:border-b-2 hover:border-green-200">
          <Link to="admin/products" >
            Products
          </Link>
        </li>
        <li className="p-2 text-white hover:border-b-2 hover:border-green-200">
          <Link to="/admin/products/add" className="text-white">
            Add a Product
          </Link>
        </li>

        <li className="p-2 text-white hover:border-b-2 hover:border-green-200">
          <Link to="/admin/products/sell" className="text-white">
            Sell
          </Link>
        </li>


        <li className="p-2 text-white hover:border-b-2 hover:border-green-200">
          <Link to="/order-to-factory" className="text-white">
            Order to Factory
          </Link>
        </li>
        <li className="p-2 text-white hover:border-b-2 hover:border-green-200">
          <Link to="/receive-products" className="text-white">
            Receive Products
          </Link>
        </li>
        <li className="p-2 text-white hover:border-b-2 hover:border-green-200">
          <Link to="/history" className="text-white">
            History
          </Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;