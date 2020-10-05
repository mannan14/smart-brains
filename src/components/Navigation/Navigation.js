import React from 'react';
import './Navigation.css'

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} className='grow signout'>Sign Out</p>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-start'}}>
          <ul className='nav-component'>
            <li onClick={() => onRouteChange('signin')} className='grow signin'>SignIn</li>
            <li onClick={() => onRouteChange('register')} className='grow register'>Register</li>
          </ul>
        </nav>
      );
    }
}

export default Navigation;
