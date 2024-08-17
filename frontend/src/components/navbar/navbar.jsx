import { NavLink, Link } from "react-router-dom";
import React, { useState } from 'react';
import logo from '../../assets/logo_kcp_black.png'

const Navbar = () => {
  const [hasClass, setHasClass] = useState();

  const collapseButton = () => {
    setHasClass(prevHasClass => !prevHasClass);
  }

  const getClass = ({ isActive }) =>
    `block py-2 px-3 rounded md:border-0 md:p-0 md:px-3 md:py-2 ${
      isActive
        ? 'bg-black md:bg-transparent md:bg-black text-white'
        : 'md:hover:outline-gray-600 md:hover:outline md:hover:outline-2 md:hover:text-black hover:bg-gray-700 hover:text-white md:hover:bg-transparent text-black'
    }`;

  return (
    <>
      <nav className="border-gray-200 bg-slate-100 shadow-md">

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="KCP Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Kris Computer Point</span>
          </Link>

          <button onClick={collapseButton} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-black hover:bg-slate-300 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>

          <div className={`w-full md:block md:w-auto md:visible ${hasClass? '' : 'hidden'}`} id="navbar-default">

            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-slate-300 md:bg-transparent border-gray-700">
              
              <li>
                <NavLink to="/" className={getClass} aria-current="page">Home</NavLink>
              </li>
              
              <li>
                <NavLink to="/courses" className={getClass}>Courses</NavLink>
              </li>
              
              <li>
                <NavLink to="/registration" className={getClass}>Register</NavLink>
              </li>

              <li>
                <NavLink to="/login" className={getClass}>Login</NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;