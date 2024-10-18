import React from 'react'
// import './Navbar.css'
import { IoSearchSharp } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { MdOutlineHelpOutline } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
// import { useAuthContext } from '../Signin&Signup/context/AuthContext';
import LogoutHook from '../Signin&Signup/hooks/LogoutHook';

const Navbar = () => {
  // const { authUser } = useAuthContext()
  // const { loading, Logout } = LogoutHook()

  // const handleLogout = async (e) => {
  //     e.preventDefault()
  //     await Logout()
  // }

  return (
    <div className='flex flex-row items-center justify-between bg-slate-200 px-3 py-3'>

      <div className='flex items-center justify-center'>
        <h3 className='text-xl font-bold'>MNNLR <span className='text-green-400 font-serif'>Service Management</span></h3>
      </div>

      <div className='flex flex-row items-center justify-center'>

        <select className="mr-3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 hover:bg-gray-100 transition ease-in-out duration-150">
          <option value=''>Select Option</option>
          <option value='admin'>System Administrator</option>
          <option value='profile'>Profile</option>
          <option value='impersonateUser'>Impersonate User</option>
          <option value='elevateRoles'>Elevate Roles</option>
        </select>


        <div className='flex flex-row items-center justify-center space-x-3'>
          <span className=''><IoSearchSharp size={25} /></span>
          <span className=''><TiMessages size={25} /></span>
          <span className=''><MdOutlineHelpOutline size={25} /></span>
          <span className=''><FiSettings size={25} /></span>
        </div>
      </div>
      {/* <div className='service-border'> hi</div> */}
    </div>
  )
}

export default Navbar
