import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { RxTriangleDown } from "react-icons/rx";
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
  
  return (
    <div className='navbar'>
    <div className="navbar-wrapper container">
      <nav>
        <a href='/' className='link'>
          <span className='bars icon'><FaBars /></span>
          All Departments
          <span className='triangle icon'><RxTriangleDown /></span>
          </a>
          

        <div className='nav-links container'>
          <a href='/home' className='nav-link'>Home</a>
          <a href='/shop' className='nav-link'>Shop</a>
          <a href='/blog' className='nav-link'>Blog</a>
          <a href='/portfolio' className='nav-link'>Portfolio</a>
          <a href='/pages' className='nav-link'>Pages</a>
          <a href='/contacts' className='nav-link'>Contacts</a>
        </div>

          <div className='navbar-con'>
          <span className='user'><FaRegUser /></span>
          <span className='heart'><FaRegHeart /></span>
          <span className='basket'><BsFillBasket2Fill /></span>
        </div>

          <div className='linking'>
          <Link to="/login" className={`log-in ${location.pathname === '/login' ? 'active' : ''}`}>
            Sign In
            </Link>
          <Link to="/signup" className={`sign-up ${location.pathname === '/signup' ? 'active' : ''}`}>
            Sign Up
          </Link>
          </div>

      </nav>
    </div>

  </div>
  )
}

export default Navbar

