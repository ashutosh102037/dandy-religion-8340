
import React from 'react';
import '../Style/Navbar.css'; 
import logoImage from '../image/logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={logoImage} alt="HealthCare" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#Basics">Basics</a></li>
        <li><a href="#Health & Drug Plans">Health & Drug Plans</a></li>
        <li><a href="#Providers & Services">Providers & Services</a></li>
      </ul>
      <div className='LoginBtn'>
      <button>Login</button>
      </div>
     
    </nav>
  );
};

export default Navbar;
