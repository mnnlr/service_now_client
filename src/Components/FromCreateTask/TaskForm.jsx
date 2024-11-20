import React, { useState } from 'react';
import './CreateTask.css';
import { useTaskContext } from '../../ContextApi/TaskContext';
import { IoIosSearch } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";
import { PiTreeStructureDuotone } from "react-icons/pi";
import CreateNewTask from '../create-new-task/CreateNewTask';
import SLA from '../SLA/SLA';

export const TaskForm = () => {

    const { formData, errors, handleChange, handleSubmit } = useTaskContext();

    const [showSelect, setShowSelect] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showAssignmentGroup, setShowAssignmentGroup] = useState(false);

    const [selectedService, setSelectedService] = useState('');
    const [selectedConfiguration, setSelectedConfiguration] = useState('');
    const [AssignmentGroup, setAssignmentGroup] = useState('');



    const toggleSelectVisibility = () => {
        setShowSelect(!showSelect);
    };

    const toggleSelectConfiguration = () => {
        setShowSearch(!showSearch);
    };

    const toggleAssignmentGroup = () => {
        setShowAssignmentGroup(!showAssignmentGroup);
    }

    const handleSelectService = (service) => {
        setSelectedService(service);
        setShowSelect(false);
    };

    const handleSelectConfiguration = (Configuration) => {
        setSelectedConfiguration(Configuration);
        setShowSearch(false);
    };
    const handleAssignmentGroup = (AssignmentGroup) => {
        setAssignmentGroup(AssignmentGroup);
        setShowAssignmentGroup(false);
    };

    return (
        <>
            <div className='createtask'>
                <div className='createbackground' >
                    <form onSubmit={handleSubmit}>
                        <div className='form-grid'>
                            <div className='form-item'>
                                <label>
                                    Number
                                    <input type='text' className='numbercreateinput' placeholder='Number' />
                                </label>
                            </div>
                            <div className='form-item'>
                                <label>
                                    Contact Type
                                    <select className='selectinput'>
                                        <option >-None-</option>
                                        <option >Phone</option>
                                        <option >Email</option>
                                        <option >Web</option>
                                        <option >Walk-in</option>
                                        <option >Other</option>
                                    </select>
                                </label>
                            </div>
                            <div className='form-item'>
                                <label>
                                    * Caller
                                    <div className='input-container'>
                                        <input
                                            type='text'
                                            className='createinput'
                                            placeholder='Caller'
                                            name='caller'
                                            value={formData.caller}
                                            onChange={handleChange}
                                        />
                                        <IoIosSearch className='search-icon' />
                                        <PiTreeStructureDuotone className='tree-icon' />
                                        <div className='icon-container'>
                                            <IoAlertCircleOutline className='alert-icon' />
                                            <div className='tooltip'>Please enter a valid caller name.</div>
                                        </div>
                                    </div>
                                    {errors.caller && <span className="error">{errors.caller}</span>}
                                </label>
                            </div>
                            <div className='form-item'>
                                <label>
                                    State
                                    <select className='selectinput'>
                                        <option >New</option>
                                        <option >In Progress</option>
                                        <option >On Hold</option>
                                        <option >Resolved</option>
                                        <option >Closed</option>
                                        <option >Canceled</option>
                                    </select>
                                </label>
                            </div>
                            <div className='form-item'>
                                <label>
                                    Category
                                    <select className='selectinput'>
                                        <option >Inquiry / Help</option>
                                        <option >Software</option>
                                        <option >Hardware</option>
                                        <option >Network</option>
                                        <option >Security</option>
                                        <option >Service Request</option>
                                    </select>
                                </label>
                            </div>
                            <div className='form-item'>
                                <label>
                                    Impact
                                    <select className='selectinput'>
                                        <option >1 - High</option>
                                        <option >2 - Medium</option>
                                        <option >3 - Low</option>
                                        <option >4 - No Impact</option>
                                    </select>
                                </label>
                            </div>
                            <div className='form-item'>
                                <label>
                                    Subcategory
                                    <select className='selectinput'>
                                        <option >None</option>
                                        <option >Email</option>
                                        <option >Login Issues</option>
                                        <option >Printing</option>
                                        <option >Telephony</option>
                                    </select>
                                </label>
                            </div>
                            <div className='form-item'>
                                <label>
                                    Urgency
                                    <select className='selectinput'>
                                        <option>1 - High</option>
                                        <option >2 - Medium</option>
                                        <option >3 - Low</option>
                                        <option >4 - Planning</option>
                                    </select>
                                </label>
                            </div>
                            <div className='form-item'>
                                <label>
                                    Service
                                    <div className='input-container'>
                                        <input
                                            type='text'
                                            className='createinput'
                                            placeholder='Select a service'
                                            value={selectedService}
                                            readOnly
                                        />
                                        <IoIosSearch
                                            className='search-icon'
                                            onClick={toggleSelectVisibility}
                                        />
                                        <PiTreeStructureDuotone className='tree-icon' />
                                        <div className='icon-container'>
                                            <IoAlertCircleOutline className='alert-icon' />
                                            <div className='tooltip'>Please enter a valid caller name.</div>
                                        </div>
                                        {showSelect && (
                                            <div className='service-dropdown'>
                                                <ul>
                                                    <li onClick={() => handleSelectService('SAP Financial Accounting')}>SAP Financial Accounting</li>
                                                    <li onClick={() => handleSelectService('ERP System')}>ERP System</li>
                                                    <li onClick={() => handleSelectService('CRM System')}>CRM System</li>
                                                    <li onClick={() => handleSelectService('Financial Accounting')}>Financial Accounting</li>
                                                    <li onClick={() => handleSelectService('Custom Services')}>Custom Services</li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </label>
                            </div>
                            <div className='form-item'>
                                <label>
                                    Priority
                                    <select className='selectinput'>
                                        <option>--None--</option>
                                        <option >1 - Critical</option>
                                        <option >2 - High</option>
                                        <option >3 - Moderate</option>
                                        <option >4 - Low</option>
                                        <option >5 - Planning</option>
                                    </select>
                                </label>
                            </div>
                            <div className='form-item'>
                                <label>
                                    Configuration Item
                                    <div className='input-container'>
                                        <input
                                            type='text'
                                            className='createinput'
                                            placeholder='Select a Configuration Item'
                                            value={selectedConfiguration}
                                            readOnly
                                        />
                                        <IoIosSearch
                                            className='search-icon'
                                            onClick={toggleSelectConfiguration}
                                        />
                                        <PiTreeStructureDuotone className='tree-icon' />
                                        <div className='icon-container'>
                                            <IoAlertCircleOutline className='alert-icon' />
                                            <div className='tooltip'>Please enter a valid caller name.</div>
                                        </div>
                                        {showSearch && (
                                            <div className='service-dropdown'>
                                                <ul>
                                                    <li onClick={() => handleSelectConfiguration('Servers')}>Servers</li>
                                                    <li onClick={() => handleSelectConfiguration('ASSET-IBM')}>ASSET-IBM</li>
                                                    <li onClick={() => handleSelectConfiguration('Laptops/Workstations')}>Laptops/Workstations</li>
                                                    <li onClick={() => handleSelectConfiguration('Network Equipment')}>Network Equipment</li>
                                                    <li onClick={() => handleSelectConfiguration('Software Licenses')}>Software Licenses</li>
                                                    <li onClick={() => handleSelectConfiguration('None')}>None</li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </label>
                            </div>
                            <div className='form-item'>
                                <label>
                                    Assignment Group
                                    <div className='input-container'>
                                        <input
                                            type='text'
                                            className='createinput'
                                            placeholder='Select a AssignmentGroup'
                                            value={AssignmentGroup}
                                            readOnly
                                        />
                                        <IoIosSearch
                                            className='searchgroup-icon'
                                            onClick={toggleAssignmentGroup}
                                        />
                                        <div className='icon-container'>
                                            <IoAlertCircleOutline className='alert-icon' />
                                            <div className='tooltip'>Please enter a valid caller name.</div>
                                        </div>
                                        {showAssignmentGroup && (
                                            <div className='service-dropdown'>
                                                <ul>
                                                    <li onClick={() => handleAssignmentGroup('ATF_TestGroup_ServiceDesk')}>ATF_TestGroup_ServiceDesk</li>
                                                    <li onClick={() => handleAssignmentGroup('Service Desk')}>Service Desk</li>
                                                    <li onClick={() => handleAssignmentGroup('Network Team')}>Network Team</li>
                                                    <li onClick={() => handleAssignmentGroup('Software Development')}>Software Development</li>
                                                    <li onClick={() => handleAssignmentGroup('Security Team')}>Security Team</li>
                                                    <li onClick={() => handleAssignmentGroup('Custom Groups')}>Custom Groups</li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </label>
                                <div className='form-item'>
                                    <label>
                                        Assigned to
                                        <div className='input-container'>
                                            <input
                                                type='text'
                                                className='createinput'
                                                placeholder='Assigned to'
                                            />
                                            <IoIosSearch className='searchgroup-icon' />
                                            <div className='icon-container'>
                                                <IoAlertCircleOutline className='alert-icon' />
                                                <div className='tooltip'>Please enter a valid caller name.</div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className='form-item'>
                                <label>
                                    Description
                                    <textarea
                                        type='textarea'
                                        name='shortdescription'
                                        className='createareainput'
                                        placeholder='Short Description'
                                        value={formData.shortdescription}
                                        onChange={handleChange}
                                    />
                                    {errors.shortdescription && <span className="error">{errors.shortdescription}</span>}
                                </label>
                            </div>
                        </div>
                    </form>
                    <div className=''>
                        <CreateNewTask />
                        <SLA />
                    </div>
                </div>
            </div>
        </>
    )
}
