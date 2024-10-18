import React from 'react'
import { IoMdMenu } from "react-icons/io";
import './Slasectionnavbar.css';




export const SLANavbar = () => {
  return (
    <>
    <div className='SLANavbar'>
   
   <button className='navbarIcons'><IoMdMenu /></button> 

   <div className='navbartext'> Task SLAs</div>


    <div className='search'>Search
        <select className='navberselect'>
            <option>SLA defination</option>
            </select>
            
            <input className='navberinput' type='text' placeholder='Seach' />  
            </div>
    
   
   
    </div>


    </>
  )
}
