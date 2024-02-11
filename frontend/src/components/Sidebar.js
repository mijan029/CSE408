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
          <Link to="admin/sell-history" className="text-white">
            Sell History
          </Link>
        </li>

        <li className="p-2 text-white hover:border-b-2 hover:border-green-200">
          <Link to="/employees" className="text-white">
          Employees
          </Link>
        </li>

        <li className="p-2 text-white hover:border-b-2 hover:border-green-200">
          <Link to="/accounts" className="text-white">
          Accounts
          </Link>
        </li>

        <li className="p-2 text-white hover:border-b-2 hover:border-green-200">
          <Link to="/employeesAttendance" className="text-white">
          Attendance
          </Link>
        </li>

        <li className="p-2 text-white hover:border-b-2 hover:border-green-200">
          <Link to="/employeesPerformance" className="text-white">
          Performance
          </Link>
        </li>

        
      </ul>
    </div>
  );
};

export default Sidebar;