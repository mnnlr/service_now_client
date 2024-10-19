import React, { useState } from 'react'
// import './Navbar.css'
import { IoSearchSharp } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { MdAccountCircle, MdOutlineHelpOutline } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import LogoutHook from '../Signin&Signup/hooks/LogoutHook';
import { Link } from 'react-router-dom'
import { useAuthContext } from '../Signin&Signup/context/AuthContext';
import { BsChevronDown } from "react-icons/bs";
import Cookie from 'js-cookie';



const Navbar = () => {

  const [openOptions, setOpenOptions] = useState(false);
  const { authUser, setAuthUser, setAuthLSToken, setAuthCookieToken } = useAuthContext();

  // const { authUser } = useAuthContext()
  // const { loading, Logout } = LogoutHook()

  // const handleLogout = async (e) => {
  //     e.preventDefault()
  //     await Logout()
  // }

  const toggleOpenOptions = () => {
    setOpenOptions(!openOptions);
  };

  const upperCaseFirstLetter = (str) => {
    if (!str) return;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleLogout = () => {
    // Clear user data and tokens from local storage and cookies
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    Cookie.remove('access_token');
  };

  return (
    <div className='flex flex-row items-center justify-between bg-slate-200 px-3 py-3'>

      <div className='flex items-center justify-center'>
        <h3 className='text-2xl font-bold'>MNNLR <span className='text-[#88C273] text-lg font-serif'>Service Management</span></h3>
      </div>
      {/* working on this */}
      <div className='flex flex-row items-center justify-center'>
        <span onClick={toggleOpenOptions} className='flex flex-row items-center mr-3 px-2 py-1 bg-slate-200 rounded-md shadow-sm hover:shadow-md hover:bg-gray-100 transition ease-in-out duration-150 cursor-pointer space-x-3'>
          <MdAccountCircle className='' size={35} />
          {authUser ? upperCaseFirstLetter(authUser?.role) || upperCaseFirstLetter(authUser?.name) : "Un-None User"}< BsChevronDown />
        </span>
        {openOptions && (
          <div className='absolute top-16  flex flex-col px-1 py-2 mr-4 bg-slate-100 rounded-md shadow-3xl z-10'>
            <Link className='px-3 py-2 hover:bg-gray-200 rounded-md duration-300 ease-in-out' to="/logout">Profile</Link>
            <Link className='px-3 py-2 hover:bg-gray-200 rounded-md duration-300 ease-in-out' to="/logout">Impersonate User</Link>
            <Link className='px-3 py-2 hover:bg-gray-200 rounded-md duration-300 ease-in-out' to="/logout">Elevate Role</Link>
            <Link onClick={handleLogout} className='px-3 py-2 hover:bg-gray-200 rounded-md duration-300 ease-in-out' to="/signin">Logout</Link>
          </div>
        )}


        <div className='flex flex-row items-center justify-center space-x-3'>
          <span className=''><IoSearchSharp size={25} /></span>
          <span className=''><TiMessages size={25} /></span>
          <span className=''><MdOutlineHelpOutline size={25} /></span>
          <span className=''><FiSettings size={22} /></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
