import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { useAuthContext } from '../hooks/useAuthContext';



const Sidebar = () => {
  const { user } = useAuthContext();
  if(user){
    console.log("user.post: ", user.user.post);
  }
  return (
    <div className=" col-span-1 p-4 h-auto border-r-2 bg-white">
      <ul className="space-y-4 h-auto ">
        { user && (user.user.post === "productionmanager"|| user.post === "salesmanager") &&
        <li className="p-2 font-medium  hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="admin/products" >
            Products
          </Link>
        </li>
        }
        {user && user.user.post === "productionmanager" &&
        <li className="p-2 font-medium  hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/admin/products/add" className="">
            Add a Product
          </Link>
        </li>
        }
        {user && user.user.post === "cashier" &&
        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/admin/products/sell" className="">
            Sell
          </Link>
        </li>
        }
        {user && user.user.post === "salesmanager" &&
        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/order-to-factory" className="">
            Order to Factory
          </Link>
        </li>
        }
        {user && user.user.post === "salesmanager" &&
        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/receive-products" className="">
            Receive Products
          </Link>
        </li>
        }
        {user &&( user.user.post === "salesmanager"||user.user.post === "cashier") &&
        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="admin/sell-history" className="">
            Sell History
          </Link>
        </li>
        }
        
        {/* <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
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
        </li> */}

        {user && user.user.post === "rawmanager" &&
        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/factory/raw" className="">
          Raw Materials
          </Link>
        </li>
        }
        {user && user.user.post === "rawmanager" &&
        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/factory/raw/requests" className="">
          Requests
          </Link>
        </li>
        }
        {user && user.user.post === "productionmanager" &&
        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/factory/raw/requestHistory" className="">
          Use History
          </Link>
        </li>
        }
        {user && user.user.post === "rawmanager" &&
        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/factory/raw/purchaseHistory" className="">
          purchaseHistory
          </Link>
        </li>
        }
        {user && user.user.post === "rawmanager" &&
        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/factory/production/raws" className="">
          Raw Materials Production
          </Link>
        </li>
        }
        {user && user.user.post === "productionmanager" &&
        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/factory/production/requests" className="">
          Requests Production
          </Link>
        </li>
        }
        {user && user.user.post === "admin" &&
        <li className="p-2 font-medium hover:font-bold hover:bg-gray-100 rounded-lg">
          <Link to="/signup" className="">
          Add an employee
          </Link>
        </li>
        }

        

        
      </ul>
    </div>
  );
};

export default Sidebar;