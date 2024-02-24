import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  //console.log("Navbar user: ", user);


  //const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
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
        {user ? (
          <div>
          <span className="mr-2">Welcome, {user.email}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
          
          </div>
        ) : (
          <>
            <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Login</Link>
            {/* {user && user.post === "admin" &&
            <Link to="/signup" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Signup</Link>
          } */}
            
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;