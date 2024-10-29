import React, { useState } from 'react'
import './SLA.css'
import { CgMenuBoxed } from "react-icons/cg";
import { LuFilter } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { IoIosSearch } from "react-icons/io"
import { IoMdMenu } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";

const SLA = () => {

    const[activeTab, setActiveTab]=useState('Task SLAs')



const renderContent=()=>{

    switch(activeTab){

        case 'Task SLAs':
            return(
                <div className="contents">
                   <div className='Task-SLA-bar'> 
                    <span className='bar-individual'><CgMenuBoxed size={30}/></span>
                    <span className='bar-individual' style={{color:'darkgreen', fontWeight:'bold'}}>Task SLAs</span>
                    <span className='bar-individual' style={{fontWeight:'bolder', color:'darkslategray'}}>Search</span>
                    <span className='bar-individual'>
                        <select className='SLA-defination'>
                            <option>SLA Defination</option>
                            <option>--none--</option>
                        </select>
                    </span>
                    <span >
                        <input type='text' placeholder='Search' className='SLA-defination'/>
                    </span>
                   </div>

                   <div className='filter-section'>
                    <span className='bar-individual'><LuFilter  size={25}/></span>
                    <span className='bar-individual'>Task = INC8888888</span>

                   </div>

                   <div className='SLA-headings'>
                    <span className='headings-item'><GoGear size={20}/></span>
                    <span className='headings-item'><IoIosSearch size={20} /></span>
                    <span className='headings-item'><IoMdMenu size={20} />SLA defination</span>
                    <span className='headings-item'><IoMdMenu size={20}  />Type</span>
                    <span className='headings-item'><IoMdMenu size={20} />Stage</span>
                    <span className='headings-item'><IoMdMenu size={20} />Has breached</span>
                    <span className='headings-item'><IoMdMenu size={20} />Start time</span>
                    <span className='headings-item'><IoMdMenu size={20} />Stop time</span>
                    <span className='headings-item'><IoMdMenu size={20} />Actual elapsed time</span>
                    <span className='headings-item'><IoMdMenu size={20} />Actual elapsed percentage</span>
                   </div>

                   <div className='headings-line'>
                   <hr />
                   </div>

                   <div className='SLA-record-resolution'>
                    <span className='record-item'><input type='checkbox'/></span>
                    <span className='record-item'><AiOutlineInfoCircle size={25}/></span>
                    <span className='record-item'>Resolution</span>
                    <span className='record-item'>SLA</span>
                    <span className='record-item'>Paused</span>
                    <span className='record-item'>false</span>
                    <span className='record-item'>08/29/2024</span>
                    <span className='record-item'>empty</span>
                    <span className='record-item'>3 days 23 hours 41 Minutes</span>
                    <span className='record-item'>50.22%
                    <div className='progress-bar-parent'>
                            <div className='progress-resolution-child'>

                            </div>

                        </div>
                    </span>
                   </div>
                   
                   <div className='SLA-record-response'>
                    <span className='record-item'><input type='checkbox'/></span>
                    <span className='record-item'><AiOutlineInfoCircle size={25}/></span>
                    <span className='record-item'>Response</span>
                    <span className='record-item'>SLA</span>
                    <span className='record-item'>Paused</span>
                    <span className='record-item'>false</span>
                    <span className='record-item'>08/29/2024</span>
                    <span className='record-item'>empty</span>
                    <span className='record-item'>3 days 23 hours 41 Minutes</span>
                    <span className='record-item'>33.22%
                        <div className='progress-bar-parent'>
                            <div className='progress-response-child'>

                            </div>

                        </div>
                        
                    </span>
                   </div>

                </div>
            );

            case 'Incidents':
                return(
                    <div className="contents">
                        <div className='Task-SLA-bar'> 
                    <span className='bar-individual'><CgMenuBoxed size={30}/></span>
                    <span className='bar-individual' style={{color:'darkgreen', fontWeight:'bold'}}>Incidents</span>
                    <span className='bar-individual' style={{fontWeight:'bolder', color:'darkslategray'}}>Search</span>
                    <span className='bar-individual'>
                        <select className='SLA-defination'>
                            <option>Number</option>
                            <option>--none--</option>
                        </select>
                    </span>
                    <span >
                        <input type='text' placeholder='Search' className='SLA-defination'/>
                    </span>
                   </div>
                   <div className='filter-section'>
                    <span className='bar-individual'><LuFilter  size={25}/></span>
                    <span className='bar-individual'>Parent = INC8888888</span>

                   </div>
                    <div>
                        <p>No records to display</p>
                    </div>

                    </div>
                );

            
            case 'Requests':
                    return(
                        <div className="contents">
                            <div className='Task-SLA-bar'> 
                    <span className='bar-individual'><CgMenuBoxed size={30}/></span>
                    <span className='bar-individual' style={{color:'darkgreen', fontWeight:'bold'}}>Requests</span>
                    <span className='bar-individual' style={{fontWeight:'bolder', color:'darkslategray'}}>Search</span>
                    <span className='bar-individual'>
                        <select className='SLA-defination'>
                            <option>Number</option>
                            <option>--none--</option>
                        </select>
                    </span>
                    <span >
                        <input type='text' placeholder='Search' className='SLA-defination'/>
                    </span>
                   </div>
                   <div className='filter-section'>
                    <span className='bar-individual'><LuFilter  size={25}/></span>
                    <span className='bar-individual'>Parent = INC8888888</span>

                   </div>
                   <div>
                        <p>No records to display</p>
                    </div>
                        </div>
                    );

            case 'Incidents Tasks':
                        return(
                            <div className="contents">
                                <div className='Task-SLA-bar'> 
                    <span className='bar-individual'><CgMenuBoxed size={30}/></span>
                    <span className='bar-individual' style={{color:'darkgreen', fontWeight:'bold'}}>Incidents Tasks</span>
                    <span className='bar-individual' style={{fontWeight:'bolder', color:'darkslategray'}}>Search</span>
                    <span className='bar-individual'>
                        <select className='SLA-defination'>
                            <option>Number</option>
                            <option>--none--</option>
                        </select>
                    </span>
                    <span >
                        <input type='text' placeholder='Search' className='SLA-defination'/>
                    </span>
                   </div>
                   <div className='filter-section'>
                    <span className='bar-individual'><LuFilter  size={25}/></span>
                    <span className='bar-individual'>Parent = INC8888888</span>

                   </div>
                   <div>
                        <p>No records to display</p>
                    </div>
                            </div>
                        );

            case 'Change Requests':
            return(
                <div className="contents">
                    <div className='Task-SLA-bar'> 
                    <span className='bar-individual'><CgMenuBoxed size={30}/></span>
                    <span className='bar-individual' style={{color:'darkgreen', fontWeight:'bold'}}>Change Requests</span>
                    <span className='bar-individual' style={{fontWeight:'bolder', color:'darkslategray'}}>Search</span>
                    <span className='bar-individual'>
                        <select className='SLA-defination'>
                            <option>Number</option>
                            <option>--none--</option>
                        </select>
                    </span>
                    <span >
                        <input type='text' placeholder='Search' className='SLA-defination'/>
                    </span>
                   </div>
                   <div className='filter-section'>
                    <span className='bar-individual'><LuFilter  size={25}/></span>
                    <span className='bar-individual'>Parent = INC8888888</span>

                   </div>
                   <div>
                        <p>No records to display</p>
                    </div>
                </div>
            )
 
    }

}


  return (
    <div className='SLA-section'>

<div className='side-name'>
      <h2>Related Links</h2>
      <a href='#'>Show SLA Timeline</a>
</div>    

<div className='SLA-tabs-container'>

    <div className='SLA-tabs'>

 <div className={`tab ${activeTab === 'Task SLAs' ? 'active' : ''}`}
 onClick={()=> setActiveTab('Task SLAs')}
 >
Task SLAs
 </div>

 <div className={`tab ${activeTab === 'Incidents' ? 'active' : ''}`}
 onClick={()=> setActiveTab('Incidents')}
 >
Incidents
 </div>

 <div className={`tab ${activeTab === 'Requests' ? 'active' : ''}`}
 onClick={()=> setActiveTab('Requests')}
 >
Requests
 </div>

 <div className={`tab ${activeTab === 'Incidents Tasks' ? 'active' : ''}`}
 onClick={()=> setActiveTab('Incidents Tasks')}
 >
Incidents Tasks
 </div>

 <div className={`tab ${activeTab === 'Change Requests' ? 'active' : ''}`}
 onClick={()=> setActiveTab('Change Requests')}
 >
Change Requests
 </div>

    </div>

</div>

{renderContent()}
    
    </div>
  )
}

export default SLA
