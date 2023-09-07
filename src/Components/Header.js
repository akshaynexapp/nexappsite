import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item ">
                <NavDropdown className="nav-dropdown" title="Product" >
                  <NavDropdown className="dropend" title="Edge Services" >
                    <NavLink className="nav-link" to="/SD-WAN">SD-WAN</NavLink>
                    <NavLink className="nav-link" to="/SD-IOT">SD-IOT</NavLink>
                    <NavLink className="nav-link" to="/Network_Security">Network-Security</NavLink>
                  </NavDropdown>
                  <NavDropdown className="dropend" title="Tech" >
                    <NavLink className="nav-link" to="/NexappOS">NexappOS</NavLink>
                    <NavLink className="nav-link" to="/Wireless_SD_WAN">Wireless-SD-WAN</NavLink>
                    <NavLink className="nav-link" to="/5G">5G</NavLink>
                  </NavDropdown>
                </NavDropdown>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About_Us">AboutUs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact_us">ContactUs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Partner">Partner</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
