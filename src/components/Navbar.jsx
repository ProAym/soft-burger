import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/backgroundyok.png';

const Navbar = () => {
  const [changeHeader, setChangeHeader] = useState(false);

  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  // Change header by scrolling
  window.addEventListener('scroll', onChangeHeader);

  const navbarStyle = {
    height: '120px', // Set a fixed height for the navbar
    backgroundColor: changeHeader ? '#E8E7DC' : 'transparent', // Set background color
    transition: 'background-color 0.3s', // Smooth background color transition
  };

  return (
   
      <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3 z-10" style ={navbarStyle}>
        <div className="flex flex-grow">
          <img className="w-36 cursor-pointer" src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-end space-x-6">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <Link to="/signin">
            <button className="poppins text-black">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-500 px-6 py-3 text-white poppins rounded-full focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105">Sign Up</button>
          </Link>
        </div>
      </nav>
    
  );
};

export default Navbar;
