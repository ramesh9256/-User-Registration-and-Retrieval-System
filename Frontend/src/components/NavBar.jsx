import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          User System
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <ul className="hidden md:flex space-x-6 text-white text-lg">
            <li>
                <Link to="/" className="hover:text-gray-200">Home</Link>
            </li>
          <li>
            <Link to="/add" className="hover:text-gray-200">Register</Link>
          </li>
          <li>
            <Link to="/get" className="hover:text-gray-200">Login</Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-700 p-4 text-white space-y-2">
            <Link to="/" className="block hover:text-gray-300">Home</Link>
          <Link to="/add" className="block hover:text-gray-300">Register</Link>
          <Link to="/get" className="block hover:text-gray-300">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;