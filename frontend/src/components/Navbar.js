import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';


const Navbar = () => {

  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
    // Additional actions upon logout, e.g., redirecting to homepage
  };
  return (
    <nav className=" bg-gray-800 text-white p-5 flex items-center justify-between border-b-2 border-white-700	 ">
      <div className="flex items-center">
      <Link to="/" className=' text-white font-bold'>Production & Sales Management System</Link>
      </div>
      {/*<div className="flex items-center space-x-4">
        
        <div className="flex items-center">
          <div className="w-5 h-5 text-gray-300" >  </div>
          <span className="ml-2 text-gray-100">Profile</span>
        </div>
      </div> */}

      <div>
        {currentUser ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Login</Link>
            <Link to="/signup" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;