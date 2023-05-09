import React from 'react';
import Navigation from './Navigation';
import Background from '../images/header.png';

const Header = () => {
  return (
    <div>
      <div
        className="p-5 text-center bg-image"
        style={{ 
          backgroundImage: `url(${Background})`, 
          height: '350px', 
          width: '100vw', 
          backgroundSize: 'cover'
        }}
      >
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
            <h1 className="mb-3" style={{fontSize: '5rem'}}>BRANDON WING: DEVELOPER IN TRAINING</h1>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default Header;
