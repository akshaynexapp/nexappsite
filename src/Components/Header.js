import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { Nav, NavDropdown } from 'react-bootstrap';
import Nexapp_logo from '../asset/Nexapp_Logo.png';
import './Header.css';
import navBg from '../asset/home_page_bg_img.jpg';

const navbarBg = {
  
  background: `url(${navBg})`,
  marginTop:'0px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const buttonStyle = {
  backgroundColor: '#f58d16', 
  color: '#fff', // Text color
  border: 'none', // Remove border if needed
  padding: '10px 20px ', // Adjust padding as needed
  cursor: 'pointer', // Add hover effect
};

const Header = () => {
  return (
    <>
      <nav  style ={navbarBg} className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            <NavLink className="nav-link" to="/"><img src={Nexapp_logo} alt='' className='logo' /></NavLink>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <NavDropdown className="nav-dropdown" title="Product" >
                <Nav className='drop'>
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
                  </Nav>
                </NavDropdown>
              </li>
              <li className="nav-item ">
                <NavDropdown className="nav-dropdown" title="Solutions" >
                <Nav className='drop'>
                  <NavDropdown className="dropend" title="Services" >
                    <NavLink className="nav-link" to="/SD_WAN_Performances_Optimization">SD-WAN Performances Optimization</NavLink>
                    <NavLink className="nav-link" to="/Network_Bussiness_Continuity">Network Bussiness Continuity</NavLink>
                    <NavLink className="nav-link" to="/MPLS_TO_SD_WAN_Migration">MPLS TO SD-WAN Migration</NavLink>
                  </NavDropdown>
                  <NavDropdown className="dropend" title="For Businesses" >
                    <NavLink className="nav-link" to="/Work_From_Home">Work From Home</NavLink>
                    <NavLink className="nav-link" to="/Mobility">Mobility</NavLink>
                    <NavLink className="nav-link" to="/SD_Branch">SD-Branch</NavLink>
                  </NavDropdown>
                  <NavDropdown className="dropend" title="M2M & IOT" >
                    <NavLink className="nav-link" to="/Industry_4">Industry 4.0</NavLink>
                    <NavLink className="nav-link" to="/Power_and_Utility">Power and Utility</NavLink>
                    <NavLink className="nav-link" to="/SmartCity_Surveillances">Smart City Surveillances</NavLink>
                  </NavDropdown>
                
                  <NavDropdown className="dropend" title="By Industry" >

                    <NavLink className="nav-link" to="/Financial_Institutions">Financial Institutions</NavLink>
                    <NavLink className="nav-link" to="/Health_Care">Health Care</NavLink>
                    <NavLink className="nav-link" to="/Manufacturing">Manufacturing</NavLink>
                    <NavLink className="nav-link" to="/Hospitality">Hospitality</NavLink>
                    <NavLink className="nav-link" to="/Enterprise_Retail">Enterprise Retail</NavLink>
                   
                  </NavDropdown>
                  </Nav>
                </NavDropdown>
              </li>
              <li className="nav-item ">
                <NavDropdown className="nav-dropdown " title="Managed Services" >
                  <Nav className='drop'>
                  <NavLink className="nav-link" to="/Nexapp_Connectivity_Suite">Nexapp Connectivity Suite</NavLink>
                  <NavLink className="nav-link" to="/Site_Deployement">Site Deployement</NavLink>
                  <NavLink className="nav-link" to="/NOC_Services">NOC Services</NavLink>
                  </Nav>
                </NavDropdown>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Partner">Partner</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Career">Career</NavLink>
              </li>
              <li className="nav-item ">
                <NavDropdown className="nav-dropdown" title="Company" >
                <Nav className='drop'>
                  <NavLink className="nav-link" to="/About_Us">About Us</NavLink>
                  <NavLink className="nav-link" to="/Our_Story">Our Story</NavLink>
                  <NavLink className="nav-link" to="/Vision">Vision</NavLink>
                  <NavLink className="nav-link" to="/Board_Of_Directors">Board Of Directors</NavLink>
                  <NavLink className="nav-link" to="/Resources">Resources</NavLink>
                  <NavLink className="nav-link" to="/Knowledge_Base">Knowledge Base</NavLink>
                  </Nav>
                </NavDropdown>
              </li>
            </ul>
            <NavLink className="nav-link" to="/Contact_Us"><Button href="./Pages/Contact_Us" className='btn' style={buttonStyle}>Contact Us</Button></NavLink>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
