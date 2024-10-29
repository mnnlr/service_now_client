import React from 'react';
import { IoMdMenu } from "react-icons/io";
import './Navbarcreate.css';
import { IoAttachSharp } from "react-icons/io5";
import { TbActivity } from "react-icons/tb";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from '../../ContextApi/TaskContext';
import { PiDotsThreeOutline } from "react-icons/pi";

export const Navbarcreatetask = () => {
    const { handleSubmit } = useTaskContext();
    const navigate = useNavigate()

   const handleBacktohomepage = () =>{
    navigate("/")
   }
    return (
        <div className='createnavbar'>
             <button className='createnavbarIcons' onClick={handleBacktohomepage}><SlArrowLeft /></button>
                        <button className='createnavbarIcons'><IoMdMenu /></button>
 <div className='createnavbartext'>Incidents</div>
            <div className='createIcons'>
                <IoAttachSharp />
            </div>
            <div className='createIcons'>
                <TbActivity />
            </div>
            <div className='createIcons'>
                <HiAdjustmentsHorizontal />
            </div>
            <div className='createIcons'>
            <PiDotsThreeOutline />

            </div>
            <div className='buttonGroup'>
                <button type='submit' className='button' onClick={handleSubmit}>Update</button>
                <button type='submit' className='button'>Close Incident</button>
                <button type='submit' className='button'>Delete</button>
            </div>
        </div>
    );
}
