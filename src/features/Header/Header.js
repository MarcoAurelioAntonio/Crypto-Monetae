import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/cryptologo.png';
import bell from '../assets/bell.svg';
import wheel from '../assets/settingswheel.svg';
import './Header.css';

const Header = () => {
  console.log('hi');

  return (

    <div className="navbar">
      <div className="logo-section">
        <NavLink className="logo-section" to="/">
          <span><img className="logo" src={logo} alt="logo" /></span>
          <span className="monetae">Monet&aelig;</span>
        </NavLink>
      </div>
      <div className="setting-bell-section">
        <span><img className="setting" src={wheel} alt="setting" /></span>
        <span><img className="bell" src={bell} alt="bell" /></span>
      </div>
    </div>
  );
};

export default Header;
