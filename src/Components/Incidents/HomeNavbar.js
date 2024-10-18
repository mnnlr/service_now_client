import React from 'react'
import { IoMdMenu } from "react-icons/io";
import './HomeNavbar.css';
import { Link } from "react-router-dom"


export const HomeNavbar = () => {
  return (
    <>
      <div className='flex flex-row items-center justify-between px-3 py-3 bg-gray-300'>

        <div className='pl-3 flex flex-row items-center justify-center space-x-3'>
          <button className='scale-150'><IoMdMenu /></button>

          <div className='navbartext'> Incidents</div>

          <Link to="/createtask" className='px-3 py-1 bg-green-500 hover:bg-green-600 duration-300 ease-in-out text-white rounded' >New</Link>
        </div>


        <div className="flex items-center space-x-2">
          <input
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            type="text"
            placeholder="Search"
          />
          <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option>Number</option>
          </select>
        </div>


      </div>
    </>
  )
}
