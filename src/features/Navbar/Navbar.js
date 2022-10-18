import React from 'react';
import logo from '../assets/cryptologo.png';
import bell from '../assets/bell.svg';
import wheel from '../assets/settingswheel.svg';
import './Navbar.css';

const Navbar = () => (

  <div className="navbar">
    <div className="logo-section">
      <span><img className="logo" src={logo} alt="logo" /></span>
      <span className="monetae">Monet&aelig;</span>
    </div>
    <div className="setting-bell-section">
      <span><img className="setting" src={wheel} alt="setting" /></span>
      <span><img className="bell" src={bell} alt="bell" /></span>
    </div>
  </div>

);

export default Navbar;
