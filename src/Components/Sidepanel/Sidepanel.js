import React from 'react';
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiFilter2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Sidepanel = () => {
  return (
    <div className="bg-[#A0937D] text-white w-80 h-screen overflow-y-auto">
      <div className="flex bg-[#B5CDA3] h-24 items-center">
        <div className="relative">
          <div className="border border-gray-400 rounded-full h-6 w-56 flex items-center">
            <span className="absolute left-2 cursor-pointer">
              <RiFilter2Fill size={20} />
            </span>
            <span className="absolute right-2 cursor-pointer">
              <IoMdCloseCircleOutline size={20} />
            </span>
          </div>
        </div>

        <div className="flex space-x-8 pl-4">
          <span className="cursor-pointer"><SiHomeassistantcommunitystore size={20} /></span>
          <span className="cursor-pointer"><FaStar size={20} /></span>
          <span className="cursor-pointer"><AiOutlineClockCircle size={20} /></span>
        </div>
      </div>

      <div className="py-2">
        <ul className="list-none pl-0 text-left">
          <li className="bg-[#E7D4B5] p-2">Self-Service</li>
          <li className="p-2 cursor-pointer hover:bg-[#444]">
            <Link to="/" className="text-white no-underline">Incidents</Link>
          </li>
          <li className="p-2 cursor-pointer hover:bg-[#444]">Watched Incidents</li>
          <li className="bg-[#E7D4B5] p-2">Service Desk</li>
          <li className="p-2 cursor-pointer hover:bg-[#444]">
          <Link to="/incidents">Incident</Link>
             </li>
          <li className="bg-[#E7D4B5] p-2">
            <Link to="/incidents">Incidents</Link>
         </li>
          <ul className="list-none pl-4">
            <li className="p-2 cursor-pointer hover:bg-[#444]">
              <Link to="/createtask" className="text-white no-underline">Create New</Link>
            </li>
            <li className="p-2 cursor-pointer hover:bg-[#444]">
              <Link to="/Assign_to_me" className="text-white no-underline">Assigned to me</Link>
            </li>
            <li className="p-2 cursor-pointer hover:bg-[#444]">
              <Link to="/Assign_to_me" className="text-white no-underline">Open</Link>
            </li>
            <li className="p-2 cursor-pointer hover:bg-[#444]">
              <Link to="/unassigneed_Task" className="text-white no-underline">Open - Unassigned</Link>
            </li>
            <li className="p-2 cursor-pointer hover:bg-[#444]">
              <Link to="/resolved_task" className="text-white no-underline">Resolved</Link>
            </li>
            <li className="p-2 cursor-pointer hover:bg-[#444]">
              <Link to="/SLA" className="text-white no-underline">Task SLA</Link>
            </li>
          </ul>
          <li className="p-2 cursor-pointer hover:bg-[#444]">
            <Link to="/dashboard">Overview</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidepanel;
