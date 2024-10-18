import React, { useEffect, useRef, useState } from 'react'
import { HomeNavbar } from './HomeNavbar'
import "./Homepage.css";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

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
            <div className="tablecontainer">
                <table className="table">
                    <thead>
                        <tr>
                            <th ><IoMdSettings className='tableIcons' /></th>
                            <th onClick={toggleOpenNumber} className='homepageDropdown'>
                                Number
                                <span className='homepageArrowUp'>
                                    {isOpenNumber ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                                </span>
                                {isOpenNumber && (
                                    <div ref={dropdownRef} className={`dropdownContent ${isOpenNumber ? 'show' : ''}`}>
                                        <input ref={inputRef} type='text' placeholder='Search' />
                                    </div>
                                )}
                            </th>
                            <th>Opened</th>
                            <th>Short Description</th>
                            <th>Caller</th>
                            <th onClick={toggleButton} className='homepageDropdown'>
                                Priority
                                <span className='homepageArrowUp'>
                                    {isopen ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                                </span>
                                {isopen && (
                                    <div ref={dropdownRef} className='dropdownContent'>
                                        <ul>
                                            <li>--None--</li>
                                            <li>1 - Critical</li>
                                            <li>2 - High</li>
                                            <li>3 - Moderate</li>
                                            <li>4 - Low</li>
                                            <li>5 - Planning</li>
                                        </ul>
                                    </div>
                                )}
                            </th>
                            <th>State</th>
                            <th>Category</th>
                            <th>Assignment Group</th>
                            <th>Assigned to</th>
                            <th>Updated</th>
                            <th>Update BY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td className='checkbox'><input type="checkbox" checkbox={row.checkbox} /></td>
                                <td>{row.number}</td>
                                <td>{row.opened}</td>
                                <td>{row.shortdescription}</td>
                                <td>{row.caller}</td>
                                <td>{row.priority}</td>
                                <td>{row.state}</td>
                                <td>{row.category}</td>
                                <td>{row.group}</td>
                                <td>{row.assigned}</td>
                                <td>{row.updated}</td>
                                <td>{row.updatelist}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

