import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Sidebar = () => {
  return (
    <div className=" col-span-1 p-4 h-auto border-r-2 bg-white">
      <ul className="space-y-4 h-auto ">
        <li className="p-2 font-medium  hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="admin/products" >
            Products
          </Link>
        </li>
        <li className="p-2 font-medium  hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/admin/products/add" className="">
            Add a Product
          </Link>
        </li>

        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/admin/products/sell" className="">
            Sell
          </Link>
        </li>


        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/order-to-factory" className="">
            Order to Factory
          </Link>
        </li>
        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/receive-products" className="">
            Receive Products
          </Link>
        </li>
        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="admin/sell-history" className="">
            Sell History
          </Link>
        </li>

        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/employees" className="">
          Employees
          </Link>
        </li>

        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/accounts" className="">
          Accounts
          </Link>
        </li>

        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/employeesAttendance" className="">
          Attendance
          </Link>
        </li>

        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/employeesPerformance" className="">
          Performance
          </Link>
        </li>

        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/factory/raw" className="">
          Raw Materials
          </Link>
        </li>

        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/factory/raw/requests" className="">
          Requests
          </Link>
        </li>

        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/factory/raw/requestHistory" className="">
          Use History
          </Link>
        </li>

        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/factory/raw/purchaseHistory" className="">
          purchaseHistory
          </Link>
        </li>

        
        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/factory/production/raws" className="">
          Raw Materials Production
          </Link>
        </li>

        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/factory/production/requests" className="">
          Requests Production
          </Link>
        </li>

        

        
      </ul>
    </div>
  );
};

export default Sidebar;