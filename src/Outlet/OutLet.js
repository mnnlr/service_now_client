import React from 'react';

import { Outlet } from 'react-router-dom'
import Sidepanel from '../Components/Sidepanel/Sidepanel'
import Navbar from '../Components/Navbar/Navbar'
import "./Outlet.css"
import SignupHook from '../Components/Signin&Signup/hooks/SignupHook';

export const OutLet = () => {
  return (
    <div className="layout w-full">

      {/* <SignupHook/> */}
      <Navbar />
      <div className="layoutmain">
        <Sidepanel />
        <div className='w-full'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
