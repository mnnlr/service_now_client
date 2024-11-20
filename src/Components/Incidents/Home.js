import React, { useEffect, useRef, useState } from 'react';
import { HomeNavbar } from './HomeNavbar';
import "./Homepage.css";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import ClickOutsideWrapper from '../ClickOutsideWrapper';
import { tableData } from '../../tableData';

export const Home = () => {
    const [isOpenNumber, setIsOpenNumber] = useState(false);
    const [isOpenAssigned, setIsOpenAssigned] = useState(false);
    const [isOpenCaller, setIsOpenCaller] = useState(false);

    const [numberSearch, setNumberSearch] = useState("");
    const [assignedSearch, setAssignedSearch] = useState("");
    const [callerSearch, setCallerSearch] = useState("");

    const dropdownRefNumber = useRef(null);
    const dropdownRefAssigned = useRef(null);
    const dropdownRefCaller = useRef(null);

    const inputRefNumber = useRef(null);
    const inputRefAssigned = useRef(null);
    const inputRefCaller = useRef(null);

    const [priorityFilter, setPriorityFilter] = useState("");
    const [stateFilter, setStateFilter] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");

    const toggleOpenNumber = () => setIsOpenNumber(!isOpenNumber);
    const toggleOpenAssigned = () => setIsOpenAssigned(!isOpenAssigned);
    const toggleOpenCaller = () => setIsOpenCaller(!isOpenCaller);

    const handleClickOutside = (event) => {
        if (dropdownRefNumber.current && !dropdownRefNumber.current.contains(event.target)) {
            setIsOpenNumber(false);
        }
        if (dropdownRefAssigned.current && !dropdownRefAssigned.current.contains(event.target)) {
            setIsOpenAssigned(false);
        }
        if (dropdownRefCaller.current && !dropdownRefCaller.current.contains(event.target)) {
            setIsOpenCaller(false);
        }
    };

    // Filter data based on selected filters and search terms
    let filteredData = tableData;

    if (priorityFilter) {
        filteredData = filteredData.filter(row => row.priority === priorityFilter);
    }
    if (stateFilter) {
        filteredData = filteredData.filter(row => row.state === stateFilter);
    }
    if (categoryFilter) {
        filteredData = filteredData.filter(row => row.category === categoryFilter);
    }
    if (numberSearch) {
        filteredData = filteredData.filter(row => row.number.includes(numberSearch));
    }
    if (assignedSearch) {
        filteredData = filteredData.filter(row => row.assigned.includes(assignedSearch));
    }
    if (callerSearch) {
        filteredData = filteredData.filter(row => row.caller.includes(callerSearch));
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (isOpenNumber && inputRefNumber.current) inputRefNumber.current.focus();
        if (isOpenAssigned && inputRefAssigned.current) inputRefAssigned.current.focus();
        if (isOpenCaller && inputRefCaller.current) inputRefCaller.current.focus();
    }, [isOpenNumber, isOpenAssigned, isOpenCaller]);

    return (
        <>
            <HomeNavbar />
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-200 font-bold text-center text-gray-700 select-none">
                        <tr>
                            <th className="border border-gray-300"><IoMdSettings className="tableIcons" /></th>

                            {/* Number Column with Dropdown Search */}
                            <th onClick={toggleOpenNumber} className="border border-gray-300 cursor-pointer relative">
                                <ClickOutsideWrapper onClickOutside={() => setIsOpenNumber(false)}>
                                    <div className="flex items-center justify-center">
                                        Number
                                        <span className="ml-2">{isOpenNumber ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</span>
                                    </div>
                                    {isOpenNumber && (
                                        <div className="absolute top-0 left-28 w-40 bg-white border p-2 mt-1 shadow-md">
                                            <input
                                                ref={inputRefNumber}
                                                type="text"
                                                placeholder="Search by number..."
                                                value={numberSearch}
                                                onChange={(e) => setNumberSearch(e.target.value)}
                                                className="w-full p-1 border"
                                            />
                                        </div>
                                    )}
                                </ClickOutsideWrapper>
                            </th>

                            <th className="border border-gray-300 ">Opened</th>
                            <th className="border border-gray-300 ">Short Description</th>

                            {/* Caller Column with Dropdown Search */}
                            <th onClick={toggleOpenCaller} className="border border-gray-300 cursor-pointer relative">
                                <ClickOutsideWrapper onClickOutside={() => setIsOpenCaller(false)}>
                                    <div className="flex items-center justify-center">
                                        Caller
                                        <span className="ml-2">{isOpenCaller ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</span>
                                    </div>
                                    {isOpenCaller && (
                                        <div className="absolute top-0 left-28 w-40 bg-white border p-2 mt-1 shadow-md">
                                            <input
                                                ref={inputRefCaller}
                                                type="text"
                                                placeholder="Search by caller..."
                                                value={callerSearch}
                                                onChange={(e) => setCallerSearch(e.target.value)}
                                                className="w-full p-1 border"
                                            />
                                        </div>
                                    )}
                                </ClickOutsideWrapper>
                            </th>

                            <th className="border border-gray-300 ">
                                <select onChange={(e) => setPriorityFilter(e.target.value)} value={priorityFilter} className="cursor-pointer bg-gray-200 p-2 w-full">
                                    <option value="">Priority</option>
                                    <option value="Critical">1 - Critical</option>
                                    <option value="High">2 - High</option>
                                    <option value="Moderate">3 - Moderate</option>
                                    <option value="Low">4 - Low</option>
                                    <option value="Planning">5 - Planning</option>
                                </select>
                            </th>

                            {/* Assigned to Column with Dropdown Search */}
                            <th onClick={toggleOpenAssigned} className="border border-gray-300 cursor-pointer relative">
                                <ClickOutsideWrapper onClickOutside={() => setIsOpenAssigned(false)}>
                                    <div className="flex items-center justify-center">
                                        Assigned to
                                        <span className="ml-2">{isOpenAssigned ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</span>
                                    </div>
                                    {isOpenAssigned && (
                                        <div className="absolute top-0 left-28 w-40 bg-white border p-2 mt-1 shadow-md">
                                            <input
                                                ref={inputRefAssigned}
                                                type="text"
                                                placeholder="Search by assigned to..."
                                                value={assignedSearch}
                                                onChange={(e) => setAssignedSearch(e.target.value)}
                                                className="w-full p-1 border"
                                            />
                                        </div>
                                    )}
                                </ClickOutsideWrapper>
                            </th>
                            <th className="border border-gray-300 ">
                                <select
                                    onChange={(e) => setStateFilter(e.target.value)}
                                    value={stateFilter}
                                    className="cursor-pointer bg-gray-200 p-2 w-full"
                                >
                                    <option value="">State</option>
                                    <option value="In Progress">1 - In Progress</option>
                                    <option value="On Hold">2 - On Hold</option>
                                    <option value="Resolved">3 - Resolved</option>
                                    <option value="Closed">4 - Closed</option>
                                    <option value="Canceled">5 - Canceled</option>
                                </select>
                            </th>
                            <th className="border border-gray-300 ">
                                <select
                                    onChange={(e) => setCategoryFilter(e.target.value)}
                                    value={categoryFilter}
                                    className="cursor-pointer bg-gray-200 p-2 w-full"
                                >
                                    <option value="">Category</option>
                                    <option value="Inquiry/Help">1 - Inquiry/Help</option>
                                    <option value="Software">2 - Software</option>
                                    <option value="Hardware">3 - Hardware</option>
                                    <option value="Network">4 - Network</option>
                                    <option value="Security">5 - Security</option>
                                    <option value="Service Request">6 - Service Request</option>
                                </select>
                            </th>
                            <th className="border border-gray-300 ">Updated</th>
                            <th className="border border-gray-300 ">Updated By</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className='checkbox border border-gray-300 p-2'><input type="checkbox" /></td>
                                <td className="border border-gray-300 p-2">{row.number}</td>
                                <td className="border border-gray-300 p-2">{row.opened}</td>
                                <td className="border border-gray-300 p-2">{row.shortdescription}</td>
                                <td className="border border-gray-300 p-2">{row.caller}</td>
                                <td className="border border-gray-300 p-2">{row.priority}</td>
                                <td className="border border-gray-300 p-2">{row.assigned}</td>
                                <td className="border border-gray-300 p-2">{row.state}</td>
                                <td className="border border-gray-300 p-2">{row.category}</td>
                                <td className="border border-gray-300 p-2">{row.updated}</td>
                                <td className="border border-gray-300 p-2">{row.updatelist}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};
