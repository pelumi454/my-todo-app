import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          iTodos
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
         
          <li className='nav-item'>
            <Link
              to='/login'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
          <Link
              to='/SignUp'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      
      </nav>
    </>
  );
}

export default Navbar;
