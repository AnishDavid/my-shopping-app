import React from 'react';
import { useState } from 'react';
import { Routes } from '../utils/routes';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnValue, setBtnValue] = useState(true);
  const onlineStatus = useOnlineStatus();
  const loginClickHandler = () => {
    setBtnValue(!btnValue);
    // console.log(btnValue);
  };
  const logoImage = require('../assets/my-shopping-logo.jpg');

  return (
    <header>
      <nav className="flex justify-between">
        <div>
          <img src={logoImage} className="w-24"></img>
        </div>
        <ul className="flex items-center mr-10 justify-between w-1/2">
          <li className="text-xl font-bold">
            Online : {onlineStatus ? '🟢' : '🔴'}
          </li>
          <li>
            <Link to={Routes.BODY}>
              <div className="text-xl font-bold hover:outline outline-1 p-2 rounded-md">
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link to={Routes.ABOUT_US}>
              <div className="text-xl font-bold hover:outline outline-1 p-2 rounded-md">
                About Us
              </div>
            </Link>
          </li>
          <li>
            <Link to={Routes.CONTACT_US}>
              <div className="text-xl font-bold hover:outline outline-1 p-2 rounded-md">
                Contact Us
              </div>
            </Link>
          </li>
          <li>
            <Link to={Routes.CART}>
              <div className="text-xl font-bold hover:outline outline-1 p-2 rounded-md">
                Cart
              </div>
            </Link>
          </li>
          <li>
            <button
              onClick={loginClickHandler}
              className="bg-black hover:bg-slate-700 rounded-lg w-24 pt-1 pb-1"
            >
              <div className="text-xl font-bold text-white">
                {btnValue ? 'Login' : 'Logout'}
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
