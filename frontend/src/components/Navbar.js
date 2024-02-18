import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className=" bg-gray-800 text-white p-5 flex items-center justify-between border-b-2 border-white-700	 ">
      <div className="flex items-center">
      <Link to="/" className=' text-white font-bold'>Production & Sales Management System</Link>
      </div>
      <div className="flex items-center space-x-4">
        
        <div className="flex items-center">
          <div className="w-5 h-5 text-gray-300" >  </div>
          <span className="ml-2 text-gray-100">Profile</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;