import React, { useEffect, useRef, useState } from 'react'
import { HomeNavbar } from './HomeNavbar'
import "./Homepage.css";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import ClickOutsideWrapper from '../ClickOutsideWrapper';

export const Home = () => {

    const tableData = [
        {
            checkbox: "false",
            number: "INC0000001",
            opened: "2020-01-25",
            shortdescription: "Can't read email",
            caller: "Fred Luddy",
            priority: "low",
            state: "on hold",
            category: "Network",
            group: "Service Desk",
            assigned: "charlie Whitherspoon",
            updated: "2020-06-02",
            updatelist: "admin"
        },
        {
            checkbox: "false",
            number: "INC0000002",
            opened: "2020-01-19",
            shortdescription: "Forgot email password",
            caller: "Fred Luddy",
            priority: "low",
            state: "Closed",
            category: "Network",
            group: "Network",
            assigned: "Howard Johnson",
            updated: "2020-04-26",
            updatelist: "admin"
        },
        {
            checkbox: "false",
            number: "INC0000003",
            opened: "2020-01-26",
            shortdescription: "Network files shares",
            caller: "Joe Employee",
            priority: "high",
            state: "In Progress",
            category: "Hardware",
            group: "Hardware",
            assigned: "David Loo",
            updated: "2022-04-05",
            updatelist: "system"
        },
        {
            checkbox: "false",
            number: "INC0000004",
            opened: "2020-01-16",
            shortdescription: "reset my password",
            caller: "Joe Employee",
            priority: "low",
            state: "In Progress",
            category: "Software",
            group: "Software",
            assigned: "User",
            updated: "2022-04-05",
            updatelist: "admin"
        },
        {
            checkbox: "false",
            number: "INC0000005",
            opened: "2020-01-10",
            shortdescription: "CPU load high",
            caller: "Fred Luddy",
            priority: "Medium",
            state: "Closed",
            category: "Network",
            group: "Network",
            assigned: "User",
            updated: "2022-04-05",
            updatelist: "admin"
        },
        {
            checkbox: "false",
            number: "INC0000006",
            opened: "2020-01-10",
            shortdescription: "CPU load high",
            caller: "Fred Luddy",
            priority: "Medium",
            state: "Closed",
            category: "Network",
            group: "Network",
            assigned: "User",
            updated: "2022-04-05",
            updatelist: "admin"
        },
        {
            checkbox: "false",
            number: "INC0000006",
            opened: "2020-01-10",
            shortdescription: "CPU load high",
            caller: "Fred Luddy",
            priority: "Medium",
            state: "Closed",
            category: "Network",
            group: "Network",
            assigned: "User",
            updated: "2022-04-05",
            updatelist: "admin"
        },
        {
            checkbox: "false",
            number: "INC0000006",
            opened: "2020-01-10",
            shortdescription: "CPU load high",
            caller: "Fred Luddy",
            priority: "Medium",
            state: "Closed",
            category: "Network",
            group: "Network",
            assigned: "User",
            updated: "2022-04-05",
            updatelist: "admin"
        },

    ];

    const [isopen, setIsopen] = useState(false);


    const toggleButton = (e) => {
        setIsopen(!isopen)
    }

    const [isOpenNumber, setIsOpenNumber] = useState(false);
    const dropdownRef = useRef(null);
    const inputRef = useRef(null);

    const toggleOpenNumber = (e) => {
        setIsOpenNumber(!isOpenNumber);

    }

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpenNumber(false);
            setIsopen(false)
        }
    };


    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isOpenNumber && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpenNumber]);
    return (
        <>
            <HomeNavbar />
            <div className="overflow-x-scroll">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100 select-none">
                        <tr>
                            <th className="border border-gray-300">
                                <IoMdSettings className='tableIcons' />
                            </th>
                            <th onClick={toggleOpenNumber} className='homepageDropdown cursor-pointer border border-gray-300 p-2'>
                                <ClickOutsideWrapper onClickOutside={() => setIsOpenNumber(false)}>
                                    <div className='flex flex-row items-center justify-center'>
                                        Number
                                        <span className='homepageArrowUp'>
                                            {isOpenNumber ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                                        </span>
                                    </div>
                                    {isOpenNumber && (
                                        <div className={`dropdownContent ${isOpenNumber ? 'show' : ''}`}>
                                            <input ref={inputRef} type='text' placeholder='Search by number...' className='border border-gray-300 p-1' />
                                        </div>
                                    )}
                                </ClickOutsideWrapper>
                            </th>
                            <th className="border border-gray-300 p-2">Opened</th>
                            <th className="border border-gray-300 p-2">Short Description</th>
                            <th className="border border-gray-300 p-2">Caller</th>
                            <th onClick={toggleButton} className='homepageDropdown cursor-pointer border border-gray-300 p-2'>
                                Priority
                                <span className='homepageArrowUp'>
                                    {isopen ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                                </span>
                                {isopen && (
                                    <div ref={dropdownRef} className='dropdownContent'>
                                        <ul className="border border-gray-300">
                                            <li className="p-2 hover:bg-gray-200 cursor-pointer">--None--</li>
                                            <li className="p-2 hover:bg-gray-200 cursor-pointer">1 - Critical</li>
                                            <li className="p-2 hover:bg-gray-200 cursor-pointer">2 - High</li>
                                            <li className="p-2 hover:bg-gray-200 cursor-pointer">3 - Moderate</li>
                                            <li className="p-2 hover:bg-gray-200 cursor-pointer">4 - Low</li>
                                            <li className="p-2 hover:bg-gray-200 cursor-pointer">5 - Planning</li>
                                        </ul>
                                    </div>
                                )}
                            </th>
                            <th className="border border-gray-300 p-2">State</th>
                            <th className="border border-gray-300 p-2">Category</th>
                            <th className="border border-gray-300 p-2">Assignment Group</th>
                            <th className="border border-gray-300 p-2">Assigned to</th>
                            <th className="border border-gray-300 p-2">Updated</th>
                            <th className="border border-gray-300 p-2">Updated BY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className='checkbox border border-gray-300 p-2'><input type="checkbox" /></td>
                                <td className="border border-gray-300 p-2">{row.number}</td>
                                <td className="border border-gray-300 p-2">{row.opened}</td>
                                <td className="border border-gray-300 p-2">{row.shortdescription}</td>
                                <td className="border border-gray-300 p-2">{row.caller}</td>
                                <td className="border border-gray-300 p-2">{row.priority}</td>
                                <td className="border border-gray-300 p-2">{row.state}</td>
                                <td className="border border-gray-300 p-2">{row.category}</td>
                                <td className="border border-gray-300 p-2">{row.group}</td>
                                <td className="border border-gray-300 p-2">{row.assigned}</td>
                                <td className="border border-gray-300 p-2">{row.updated}</td>
                                <td className="border border-gray-300 p-2">{row.updatelist}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        </>
    );
};

