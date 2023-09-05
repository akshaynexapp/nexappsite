import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import AboutUs from './Pages/About_Us';
import ContactUs from './Pages/Contact_Us';
import Partner from './Pages/Partner';

function Routing() {
  return (
    <>
    <div className='Routes'>
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/About_Us" element={<AboutUs />} />
        <Route path="/Contact_Us" element={<ContactUs />} />
        <Route path="/Partner" element={<Partner />} />
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default Routing;
