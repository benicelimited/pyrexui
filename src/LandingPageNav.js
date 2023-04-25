import React from 'react';
import { Link } from 'react-router-dom';
import DiscordAuthButton from './DiscordOauth';
import './style.css'

function Navbar() {
  // define click handler function
  const handleClick = (event, anchorId) => {
    event.preventDefault();

    const anchorElement = document.getElementById(anchorId);
    if (anchorElement) {
      window.scrollTo({
        top: anchorElement.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-md main-nav navigation fixed-top sidebar-left">
      <div className="container">
        <button className="navbar-toggler" type="button">
          <span className="icon-bar"></span> 
          <span className="icon-bar"></span> 
          <span className="icon-bar"></span>
        </button>			
        <div className="collapse navbar-collapse" id="main-navbar">
          <Link to="/" className="navbar-brand">
            <img src="img/logo.png" alt="k" className="logo logo-sticky d-block d-md-none" />
            <img src="img/logo.png" alt="k" className="logo d-none d-md-block" />
          </Link>	
          <ul className="nav navbar-nav">
            <li className="nav-item"><Link to="/" onClick={(e) => handleClick(e,'home')} className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/pricing" onClick={(e) => handleClick(e,'features')} className="nav-link ">Features</Link></li>
            <li className="nav-item"><Link to="/products" onClick={(e) => handleClick(e,'id-of-target-section3')} className="nav-link ">Products</Link></li>
            <li className="nav-item"><Link to="/sitelist" onClick={(e) => handleClick(e,'id-of-target-section4')} className="nav-link ">Sitelist</Link></li>
            <li className="nav-item"><Link to="/faq" onClick={(e) => handleClick(e,'id-of-target-section5')} className="nav-link ">FAQ</Link></li>
          </ul>				 				 	 
          <div className="dash_right"> 
            <DiscordAuthButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
