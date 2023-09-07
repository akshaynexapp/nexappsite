import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import AboutUs from './Pages/About_Us';
import ContactUs from './Pages/Contact_Us';
import Partner from './Pages/Partner';
import SD_WAN from './Products/SD-WAN';
import SD_IOT from './Products/SD-IOT';
import NetworkSecurity from './Products/Network_Security';
import NexappOS from './Products/NexappOS';
import Platforms from './Products/Platforms';
import WirelessSDWAN from './Products/Wireless_SD_WAN';
import FiveG  from './Products/5G';

function Routing() {
  return (
    <>
    <div className='Routes'>
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/SD-WAN" element={<SD_WAN />} />
        <Route path="/SD-IOT" element={<SD_IOT />} />
        <Route path="/Network_Security" element={<NetworkSecurity />} />
        <Route path="/NexappOS" element={<NexappOS />} />
        <Route path="/Platforms" element={<Platforms />} />
        <Route path="/Wireless_SD_WAN" element={<WirelessSDWAN />} />
        <Route path="/5G" element={<FiveG />} />
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
