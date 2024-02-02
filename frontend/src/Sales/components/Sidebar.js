import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Sidebar = () => {
  return (
    <div className="bg-gray-800 col-span-1 p-4 h-auto ">
      <ul className="space-y-4 h-auto ">
        <li className="border-3">
          <Link to="admin/product" className="text-white border-1 hover:border-b-white">
            Products
          </Link>
        </li>
        <li>
          <Link to="/admin/product/add" className="text-white">
            Add a Product
          </Link>
        </li>
        <li>
          <Link to="/order-to-factory" className="text-white">
            Order to Factory
          </Link>
        </li>
        <li>
          <Link to="/receive-products" className="text-white">
            Receive Products
          </Link>
        </li>
        <li>
          <Link to="/history" className="text-white">
            History
          </Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;