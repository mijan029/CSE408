import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between border-b-2 border-white-700	 ">
      <div className="flex items-center">
        <h1 className="text-lg font-bold">Production & Sales Management System</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="#" className="text-gray-300 hover:text-white">
          <div className="w-5 h-5" > Cart </div>
        </Link>
        <div className="flex items-center">
          <div className="w-5 h-5 text-gray-300" >  </div>
          <span className="ml-2 text-gray-300">John Doe</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;