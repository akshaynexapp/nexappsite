import React from 'react';
import homeBg from '../asset/home_page_bg_img.jpg';
import './Home.css';
import cloudImg from '../asset/home_page_cloud_img.png';

const homeStyle = {
 
    background: `url(${homeBg})`,
    height:'100vh',
    marginTop:'0px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};


const Home = () => {
  return (
    <>
      <div  style={homeStyle} className='home' >
        <div className="left-part">
        <span>
        Advanced WAN Edge Network Security For Your Dynamic Digital Business Needs
        </span><br/>
        <span>
      <button className="demo-button">
      Request a Demo
    </button>
    </span>
      </div>

      <div className="right-part">
        <img src={cloudImg} alt='cloudImg'></img>
        {/* Add content for the right part */}
      </div>
      </div>
    </>
  );
};

export default Home;
