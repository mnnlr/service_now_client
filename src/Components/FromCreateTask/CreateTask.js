// import React, { useState } from 'react';
// import { Navbarcreatetask } from './NavbarCreateTask';
// import { useTaskContext } from '../../ContextApi/TaskContext';
// import { IoIosSearch } from "react-icons/io";
// import { IoAlertCircleOutline } from "react-icons/io5";
// import { PiTreeStructureDuotone } from "react-icons/pi";
// import Notes from '../Notes/Notes';
// import SLA from '../SLA/SLA';

// export const CreateTask = () => {
//     const { formData, errors, handleChange, handleSubmit } = useTaskContext();

//     const [showSelect, setShowSelect] = useState(false);
//     const [showSearch, setShowSearch] = useState(false);
//     const [showAssignmentGroup, setShowAssignmentGroup] = useState(false);
//     const [selectedService, setSelectedService] = useState('');
//     const [selectedConfiguration, setSelectedConfiguration] = useState('');
//     const [AssignmentGroup, setAssignmentGroup] = useState('');

//     const toggleSelectVisibility = () => setShowSelect(!showSelect);
//     const toggleSelectConfiguration = () => setShowSearch(!showSearch);
//     const toggleAssignmentGroup = () => setShowAssignmentGroup(!showAssignmentGroup);

//     const handleSelectService = (service) => {
//         setSelectedService(service);
//         setShowSelect(false);
//     };

//     const handleSelectConfiguration = (Configuration) => {
//         setSelectedConfiguration(Configuration);
//         setShowSearch(false);
//     };

//     const handleAssignmentGroup = (AssignmentGroup) => {
//         setAssignmentGroup(AssignmentGroup);
//         setShowAssignmentGroup(false);
//     };

//     return (
//         <>
//             <Navbarcreatetask />
//             <div className="flex flex-col items-center p-4 bg-gray-100 h-screen">
//                 <div className="w-full max-w-full space-y-6 overflow-y-auto">
//                     <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
//                         <div className="space-y-2">
//                             <label className="block text-sm font-medium text-gray-700">Number</label>
//                             <input
//                                 type="text"
//                                 className="w-full p-2 border border-gray-300 rounded"
//                                 placeholder="Number"
//                             />
//                         </div>

//                         <div className="space-y-2">
//                             <label className="block text-sm font-medium text-gray-700">Contact Type</label>
//                             <select className="w-full p-2 border border-gray-300 rounded">
//                                 <option>-None-</option>
//                                 <option>Phone</option>
//                                 <option>Email</option>
//                                 <option>Web</option>
//                                 <option>Walk-in</option>
//                                 <option>Other</option>
//                             </select>
//                         </div>

//                         <div className="space-y-2 relative">
//                             <label className="block text-sm font-medium text-gray-700">* Caller</label>
//                             <div className="flex items-center relative">
//                                 <input
//                                     type="text"
//                                     className="w-full p-2 border border-gray-300 rounded"
//                                     placeholder="Caller"
//                                     name="caller"
//                                     value={formData.caller}
//                                     onChange={handleChange}
//                                 />
//                                 <IoIosSearch className="absolute right-10 text-gray-400 cursor-pointer" />
//                                 <PiTreeStructureDuotone className="absolute right-4 text-gray-400" />
//                                 <div className="relative group">
//                                     <IoAlertCircleOutline className="text-gray-400 ml-2 cursor-pointer" />
//                                     <div className="absolute hidden group-hover:block bg-black text-white text-xs rounded p-2 left-full ml-2 w-max">
//                                         Please enter a valid caller name.
//                                     </div>
//                                 </div>
//                             </div>
//                             {errors.caller && <span className="text-red-500 text-xs">{errors.caller}</span>}
//                         </div>

//                         <div className="space-y-2">
//                             <label className="block text-sm font-medium text-gray-700">State</label>
//                             <select className="w-full p-2 border border-gray-300 rounded">
//                                 <option>New</option>
//                                 <option>In Progress</option>
//                                 <option>On Hold</option>
//                                 <option>Resolved</option>
//                                 <option>Closed</option>
//                                 <option>Canceled</option>
//                             </select>
//                         </div>

//                         {/* Additional form fields for Category, Impact, Subcategory, Urgency, Service, etc. */}

//                         <div className="space-y-2">
//                             <label className="block text-sm font-medium text-gray-700">* Short Description</label>
//                             <textarea
//                                 className="w-full p-2 border border-gray-300 rounded"
//                                 name="shortdescription"
//                                 placeholder="Short Description"
//                                 value={formData.shortdescription}
//                                 onChange={handleChange}
//                             />
//                             {errors.shortdescription && <span className="text-red-500 text-xs">{errors.shortdescription}</span>}
//                         </div>

//                         <div className="space-y-2">
//                             <label className="block text-sm font-medium text-gray-700">Description</label>
//                             <textarea
//                                 className="w-full p-2 border border-gray-300 rounded"
//                                 placeholder="Issue resolved"
//                             />
//                         </div>
//                     </form>

//                     {/* Notes and SLA components */}
//                     <div className="pt-6">
//                         <Notes />
//                         <SLA />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };


// ---------------------------------------------------------------------------------------------------------------------------------

import React from 'react';
import { Navbarcreatetask } from './NavbarCreateTask';
import { TaskForm } from './TaskForm';

export const CreateTask = () => {

    return (
        <div className='w-screen h-screen flex flex-col'>
            <Navbarcreatetask />
            <TaskForm />
        </div>
    );
};
