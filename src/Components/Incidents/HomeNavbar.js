import React from 'react'
import { IoMdMenu } from "react-icons/io";
import './HomeNavbar.css';
import { Link } from "react-router-dom"


export const HomeNavbar = () => {
  return (
    <>
      <div className='flex flex-row items-center justify-between px-3 py-3 bg-gray-300'>

        <div className='pl-3 flex flex-row items-center justify-center space-x-3'>
          <button className='px-1 py-1 rounded-sm bg-slate-100 border border-gray-400 scale-150'><IoMdMenu /></button>

          <div className='navbartext font-semibold'> Incidents</div>

          <Link to="/createtask" className='px-3 py-1 bg-green-700 hover:bg-green-600 duration-300 ease-in-out text-white rounded' >New</Link>

          <div className='navbartext font-semibold'> Search</div>

          <div className="flex items-center">
            <select className="p-2 rounded-sm border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 hover:bg-gray-100 transition ease-in-out duration-150">
              <option>Number</option>
            </select>
            <input
              className="ml-[1px] rounded-sm border border-gray-300 px-3 py-[7px] focus:outline-none focus:ring-2 focus:ring-teal-500"
              type="text"
              placeholder="Search"
            />
          </div>

        </div>

        <div>
          Right Side
        </div>

      </div>
    </>
  )
}
