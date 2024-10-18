import React from 'react'
import "./SLAsection.css";
import { IoMdSettings } from "react-icons/io";

import { SLANavbar } from './SlasectionNavbar';

export const SLAsection = () => {

    const tableData = [
        {
            checkbox: "false",
            SLAdefination: "",
            type: "",
            Stage: "In progress",
            BusinessTimeLeft: "0 seconds",
            BusinessElapsedTime: "4 minutes",
            BusinessElapsedPercentage: "8.78%",
            Data: "2024-9-3",
            SLA: "0 seconds",

        },
        {
            checkbox: "false",
            SLAdefination: "Incident Response",
            type: "LA",
            Stage: "In progress",
            BusinessTimeLeft: "1 seconds",
            BusinessElapsedTime: "4 minutes",
            BusinessElapsedPercentage: "67.08%",
            Data: "2024-9-3",   
               
            SLA: "0 seconds",
        },
        {
            checkbox: "false",
            SLAdefination: "",
            type: "",       
            Stage: "In progress",
            BusinessTimeLeft: "0 seconds",
            BusinessElapsedTime: "4 minutes",
            BusinessElapsedPercentage: "29%",
            Data: "2024-9-3",

            SLA: "0 seconds",
        },


    ];


    return (
        <>
            <SLANavbar />
            <div className="SDLtablecontainer">
                <table className="table">
                    <thead>
                        <tr>
                            <th ><IoMdSettings className='tableIcons' /></th>
                            <th  className='homepageDropdown'>
                                SLA defination</th>
                            <th>Type</th>
                            <th>Stage</th>
                            <th > Business Time Left</th>
                            <th>Business Elapsed Time</th>
                            <th>Business Elapsed Percentage</th>
                            <th>Data</th>

                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td className='checkbox'><input type="checkbox" checkbox={row.checkbox} /></td>
                                <td>{row.SLAdefination}</td>
                                <td>{row.type}</td>
                                <td>{row.Stage}</td>
                                <td>{row.BusinessTimeLeft}</td>
                                <td>{row.BusinessElapsedTime}</td>
                                <td>{row.BusinessElapsedPercentage}</td>
                                <td>{row.Data}</td>
                              
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

