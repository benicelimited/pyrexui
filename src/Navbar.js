import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logoImage from './img/pyrex.png'
import logo from './img/logo.png'
import logoutIcon from './img/logout.png'
import './Navbar.css'

import { ReactSession } from 'react-client-session'

function Navbar({user}) {
  
  useEffect(() => {
    if (!ReactSession.get("id")) {
      window.location.href = "/";
    }
  }, []);

  const logout = () => {
    ReactSession.set("id", null);
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav className="flex">
      <div className="nav-left text-left">
        <Link to='/'>
          <img src={logoImage} alt="Pyrex" className="width-60px logo-img"/>
        </Link>
      </div>
      <ul className="menu-list">
        <li>
          <Link to="/resi">Residential</Link>
        </li>
        <li>
          <Link to="/isp">ISP</Link>
        </li>
      </ul>
      <div className="nav-right">
        <ul className="flex right">
          <li>
            <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} alt="" className="prof border-radius-20" />
          </li>
          <li className="mgtop15"><h6>{`${user.username.toUpperCase()} #${user.discriminator}`}</h6></li>
          <li onClick={logout}>
            <img src={logoutIcon} alt="Logout" className="top-imgs mgtio10" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

