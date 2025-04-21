import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-900 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">FitneXX</Link>
        <div className="md:hidden">
          <i className="bx bx-menu text-2xl cursor-pointer" onClick={toggleMenu}></i>
        </div>
        <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
            <li><Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/workout" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Workout</Link></li>
            <li><Link to="/meal-planner" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Meal Planner</Link></li>
            <li><Link to="/progress" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Progress</Link></li>
          </ul>
          <Link to="/join" className="ml-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 md:inline-block">Join Us</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;