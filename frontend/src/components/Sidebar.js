import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Sidebar = () => {
  return (
    <div className=" col-span-1 p-4 h-auto border-r-1 bg-gray-200">
      <ul className="space-y-4 h-auto ">
        <li className="p-2  hover:font-bold">
          <Link to="admin/products" >
            Products
          </Link>
        </li>
        <li className="p-2  hover:font-bold">
          <Link to="/admin/products/add" className="">
            Add a Product
          </Link>
        </li>

        <li className="p-2  hover:font-bold">
          <Link to="/admin/products/sell" className="">
            Sell
          </Link>
        </li>


        <li className="p-2  hover:font-bold">
          <Link to="/order-to-factory" className="">
            Order to Factory
          </Link>
        </li>
        <li className="p-2  hover:font-bold">
          <Link to="/receive-products" className="">
            Receive Products
          </Link>
        </li>
        <li className="p-2  hover:font-bold">
          <Link to="admin/sell-history" className="">
            Sell History
          </Link>
        </li>

        <li className="p-2  hover:font-bold">
          <Link to="/employees" className="">
          Employees
          </Link>
        </li>

        <li className="p-2  hover:font-bold">
          <Link to="/accounts" className="">
          Accounts
          </Link>
        </li>

        <li className="p-2  hover:font-bold">
          <Link to="/employeesAttendance" className="">
          Attendance
          </Link>
        </li>

        <li className="p-2  hover:font-bold">
          <Link to="/employeesPerformance" className="">
          Performance
          </Link>
        </li>

        <li className="p-2  hover:font-bold">
          <Link to="/raw" className="">
          Raw Materials
          </Link>
        </li>

        
      </ul>
    </div>
  );
};

export default Sidebar;