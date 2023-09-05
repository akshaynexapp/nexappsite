import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About_Us">AboutUs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact_Us">Contact_Us</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="/Partner">Partner</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Header;
