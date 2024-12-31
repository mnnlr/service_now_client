import React from 'react';
import { useState } from 'react';
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaStar, FaRegStar } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiFilter2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Sidepanel = () => {


  const [isIncidentsFavorite, setIsIncidentsFavorite] = useState(false);
  const [isWatchedIncidentFavorite, setIsWatchedIncidentFavorite] = useState(false);
  const [isIncidentFavorite, setIsIncidentFavorite] = useState(false);
  const [isCreateNewFavorite, setIsCreateNewFavorite] = useState(false);
  const [isAssignMeFavorite, setIsAssignMeFavorite] = useState(false);
  const [isOpenFavorite, setIsOpenFavorite] = useState(false);
  const [isOpenUnassignedFavorite, setIsOpenUnassignedFavorite] = useState(false);
  const [isResolvedFavorite, setIsResolvedFavorite] = useState(false);
  const [isTaskSLAFavorite, setIsTaskSLAFavorite] = useState(false);

  const[activeTab1, setActiveTab1]=useState('Home')

  const render = ()=>{
    switch(activeTab1){
      case 'Home':
        return(

          <div className="py-2">
          <ul className="list-none pl-0 text-left">
            <li className="bg-[#E7D4B5] p-2">Self-Service</li>
          
  
  <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
          <Link to="/" className="text-white no-underline flex-1">Incidents</Link>
          <button
            onClick={() => setIsIncidentsFavorite(!isIncidentsFavorite)}
            className="text-white ml-2 focus:outline-none"
          >
            {isIncidentsFavorite ? (
              <FaStar className="text-yellow-400" /> // Filled star (favorite)
            ) : (
              <FaRegStar className="text-white" /> // Empty star (not favorite)
            )}
          </button>
        </li>
  
        <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
          <Link to="/" className="text-white no-underline flex-1">Watched Incidents</Link>
          <button
            onClick={() => setIsWatchedIncidentFavorite(!isWatchedIncidentFavorite)}
            className="text-white ml-2 focus:outline-none"
          >
            {isWatchedIncidentFavorite ? (
              <FaStar className="text-yellow-400" /> // Filled star (favorite)
            ) : (
              <FaRegStar className="text-white" /> // Empty star (not favorite)
            )}
          </button>
        </li>
  
  
  
  
            <li className="bg-[#E7D4B5] p-2">Service Desk</li>
        
  <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
          <Link to="/" className="text-white no-underline flex-1">Incident</Link>
          <button
            onClick={() => setIsIncidentFavorite(!isIncidentFavorite)}
            className="text-white ml-2 focus:outline-none"
          >
            {isIncidentFavorite ? (
              <FaStar className="text-yellow-400" /> // Filled star (favorite)
            ) : (
              <FaRegStar className="text-white" /> // Empty star (not favorite)
            )}
          </button>
        </li>
   
            <li className="bg-[#E7D4B5] p-2">
              <Link to="/incidents">Incidents</Link>
           </li>
            <ul className="list-none pl-4">
  
  
              <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
          <Link to="/" className="text-white no-underline flex-1">Create New</Link>
          <button
            onClick={() => setIsCreateNewFavorite(!isCreateNewFavorite)}
            className="text-white ml-2 focus:outline-none"
          >
            {isCreateNewFavorite ? (
              <FaStar className="text-yellow-400" /> // Filled star (favorite)
            ) : (
              <FaRegStar className="text-white" /> // Empty star (not favorite)
            )}
          </button>
        </li>
  
  
              <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
          <Link to="/Assign_to_me" className="text-white no-underline flex-1">Assigned to me</Link>
          <button
            onClick={() => setIsAssignMeFavorite(!isAssignMeFavorite)}
            className="text-white ml-2 focus:outline-none"
          >
            {isAssignMeFavorite ? (
              <FaStar className="text-yellow-400" /> // Filled star (favorite)
            ) : (
              <FaRegStar className="text-white" /> // Empty star (not favorite)
            )}
          </button>
        </li>
  
  <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
          <Link to="/" className="text-white no-underline flex-1">Open</Link>
          <button
            onClick={() => setIsOpenFavorite(!isOpenFavorite)}
            className="text-white ml-2 focus:outline-none"
          >
            {isOpenFavorite ? (
              <FaStar className="text-yellow-400" /> // Filled star (favorite)
            ) : (
              <FaRegStar className="text-white" /> // Empty star (not favorite)
            )}
          </button>
        </li>
  
  
  
  <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
          <Link to="/" className="text-white no-underline flex-1">Open - Unassigned</Link>
          <button
            onClick={() => setIsOpenUnassignedFavorite(!isOpenUnassignedFavorite)}
            className="text-white ml-2 focus:outline-none"
          >
            {isOpenUnassignedFavorite ? (
              <FaStar className="text-yellow-400" /> // Filled star (favorite)
            ) : (
              <FaRegStar className="text-white" /> // Empty star (not favorite)
            )}
          </button>
        </li>
  
  
  
  <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
          <Link to="/" className="text-white no-underline flex-1">Resolved</Link>
          <button
            onClick={() => setIsResolvedFavorite(!isResolvedFavorite)}
            className="text-white ml-2 focus:outline-none"
          >
            {isResolvedFavorite ? (
              <FaStar className="text-yellow-400" /> // Filled star (favorite)
            ) : (
              <FaRegStar className="text-white" /> // Empty star (not favorite)
            )}
          </button>
        </li>
  
  
  
  <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
          <Link to="/" className="text-white no-underline flex-1">Task SLA</Link>
          <button
            onClick={() => setIsTaskSLAFavorite(!isTaskSLAFavorite)}
            className="text-white ml-2 focus:outline-none"
          >
            {isTaskSLAFavorite ? (
              <FaStar className="text-yellow-400" /> // Filled star (favorite)
            ) : (
              <FaRegStar className="text-white" /> // Empty star (not favorite)
            )}
          </button>
        </li>
  
  
            </ul>
            <li className="p-2 cursor-pointer hover:bg-[#444]">
              <Link to="/dashboard">Overview</Link></li>
          </ul>
        </div>
   
        );
        case 'Fav':
          return(
            <div>
              <h3 className="mt-4 text-white">Favorites</h3>
      <ul>
        {isIncidentsFavorite ? (
          <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
            <Link to="/" className="text-white no-underline flex-1">
              Incidents
            </Link>
          </li>
        ) : (
          <li className="p-2 text-gray-400">No favorites selected</li>
        )}

        {isWatchedIncidentFavorite && (
          <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
            <Link to="/" className="text-white no-underline flex-1">
            Watched Incidents
            </Link>
          </li>
        )}

{isIncidentFavorite && (
          <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
            <Link to="/" className="text-white no-underline flex-1">
            Incident
            </Link>
          </li>
)}


{isCreateNewFavorite && (
          <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
            <Link to="/" className="text-white no-underline flex-1">
            Create New
            </Link>
          </li>
)}

{isAssignMeFavorite && (
          <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
            <Link to="/" className="text-white no-underline flex-1">
            Assigned to me
            </Link>
          </li>
)}

{isOpenFavorite && (
          <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
            <Link to="/" className="text-white no-underline flex-1">
            Open
            </Link>
          </li>
)}


{isOpenUnassignedFavorite && (
          <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
            <Link to="/" className="text-white no-underline flex-1">
            Open Unassigned
            </Link>
          </li>
)}

{isResolvedFavorite && (
          <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
            <Link to="/" className="text-white no-underline flex-1">
            Resolved
            </Link>
          </li>
)}

{isTaskSLAFavorite && (
          <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
            <Link to="/" className="text-white no-underline flex-1">
            Task SLA
            </Link>
          </li>
)}

      </ul>
            </div>
          );

          case 'History':
            return(
              <div>
                your history
              </div>
            );
            default:
              return null;
    }
  };
 

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

        <div className=" flex absolute top-30 cursor-pointer pl-10 ">
          {/* <span className="sidebar-icon pl-4"><SiHomeassistantcommunitystore size={20} /></span> */}

          <span className=
            {`tab1 ${activeTab1 === 'Home' ? 'active' : ''}  pl-5 `} 
          onClick={() => setActiveTab1('Home')}
            style={activeTab1 === 'Home' ? { color: '#444' } : {}}
        ><SiHomeassistantcommunitystore size={20}/></span>

          {/* <span className="sidebar-icon pl-4"><FaStar size={20} /></span> */}
          <span className=
            {`tab1 ${activeTab1 === 'Fav' ? 'active' : ''}  pl-5 `} 
          onClick={() => setActiveTab1('Fav')} 
           style={activeTab1 === 'Fav' ? { color: '#444' } : {}}
        ><FaStar size={20} /></span>


          {/* <span className="sidebar-icon pl-4"><AiOutlineClockCircle size={20} /></span> */}
          <span className=
            {`tab1  ${activeTab1 === 'History' ? 'active' : ''}  pl-5 `} 
          onClick={() => setActiveTab1('History')}
          style={activeTab1 === 'History' ? { color: '#444' } : {}}
        ><AiOutlineClockCircle size={20} /></span>

        </div>
      </div>

      {/* <div className="py-2">
        <ul className="list-none pl-0 text-left">
          <li className="bg-[#E7D4B5] p-2">Self-Service</li>
        

<li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
        <Link to="/" className="text-white no-underline flex-1">Incidents</Link>
        <button
          onClick={() => setIsIncidentsFavorite(!isIncidentsFavorite)}
          className="text-white ml-2 focus:outline-none"
        >
          {isIncidentsFavorite ? (
            <FaStar className="text-yellow-400" /> // Filled star (favorite)
          ) : (
            <FaRegStar className="text-white" /> // Empty star (not favorite)
          )}
        </button>
      </li>

      <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
        <Link to="/" className="text-white no-underline flex-1">Watched Incidents</Link>
        <button
          onClick={() => setIsWatchedIncidentFavorite(!isWatchedIncidentFavorite)}
          className="text-white ml-2 focus:outline-none"
        >
          {isWatchedIncidentFavorite ? (
            <FaStar className="text-yellow-400" /> // Filled star (favorite)
          ) : (
            <FaRegStar className="text-white" /> // Empty star (not favorite)
          )}
        </button>
      </li>




          <li className="bg-[#E7D4B5] p-2">Service Desk</li>
      
<li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
        <Link to="/" className="text-white no-underline flex-1">Incident</Link>
        <button
          onClick={() => setIsIncidentFavorite(!isIncidentFavorite)}
          className="text-white ml-2 focus:outline-none"
        >
          {isIncidentFavorite ? (
            <FaStar className="text-yellow-400" /> // Filled star (favorite)
          ) : (
            <FaRegStar className="text-white" /> // Empty star (not favorite)
          )}
        </button>
      </li>
 
          <li className="bg-[#E7D4B5] p-2">
            <Link to="/incidents">Incidents</Link>
         </li>
          <ul className="list-none pl-4">


            <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
        <Link to="/" className="text-white no-underline flex-1">Create New</Link>
        <button
          onClick={() => setIsCreateNewFavorite(!isCreateNewFavorite)}
          className="text-white ml-2 focus:outline-none"
        >
          {isCreateNewFavorite ? (
            <FaStar className="text-yellow-400" /> // Filled star (favorite)
          ) : (
            <FaRegStar className="text-white" /> // Empty star (not favorite)
          )}
        </button>
      </li>


            <li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
        <Link to="/Assign_to_me" className="text-white no-underline flex-1">Assigned to me</Link>
        <button
          onClick={() => setIsAssignMeFavorite(!isAssignMeFavorite)}
          className="text-white ml-2 focus:outline-none"
        >
          {isAssignMeFavorite ? (
            <FaStar className="text-yellow-400" /> // Filled star (favorite)
          ) : (
            <FaRegStar className="text-white" /> // Empty star (not favorite)
          )}
        </button>
      </li>

<li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
        <Link to="/" className="text-white no-underline flex-1">Open</Link>
        <button
          onClick={() => setIsOpenFavorite(!isOpenFavorite)}
          className="text-white ml-2 focus:outline-none"
        >
          {isOpenFavorite ? (
            <FaStar className="text-yellow-400" /> // Filled star (favorite)
          ) : (
            <FaRegStar className="text-white" /> // Empty star (not favorite)
          )}
        </button>
      </li>



<li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
        <Link to="/" className="text-white no-underline flex-1">Open - Unassigned</Link>
        <button
          onClick={() => setIsOpenUnassignedFavorite(!isOpenUnassignedFavorite)}
          className="text-white ml-2 focus:outline-none"
        >
          {isOpenUnassignedFavorite ? (
            <FaStar className="text-yellow-400" /> // Filled star (favorite)
          ) : (
            <FaRegStar className="text-white" /> // Empty star (not favorite)
          )}
        </button>
      </li>



<li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
        <Link to="/" className="text-white no-underline flex-1">Resolved</Link>
        <button
          onClick={() => setIsResolvedFavorite(!isResolvedFavorite)}
          className="text-white ml-2 focus:outline-none"
        >
          {isResolvedFavorite ? (
            <FaStar className="text-yellow-400" /> // Filled star (favorite)
          ) : (
            <FaRegStar className="text-white" /> // Empty star (not favorite)
          )}
        </button>
      </li>



<li className="p-2 cursor-pointer hover:bg-[#444] flex items-center">
        <Link to="/" className="text-white no-underline flex-1">Task SLA</Link>
        <button
          onClick={() => setIsTaskSLAFavorite(!isTaskSLAFavorite)}
          className="text-white ml-2 focus:outline-none"
        >
          {isTaskSLAFavorite ? (
            <FaStar className="text-yellow-400" /> // Filled star (favorite)
          ) : (
            <FaRegStar className="text-white" /> // Empty star (not favorite)
          )}
        </button>
      </li>


          </ul>
          <li className="p-2 cursor-pointer hover:bg-[#444]">
            <Link to="/dashboard">Overview</Link></li>
        </ul>
      
    </div> */}

{render()}
</div>
  );
};

export default Sidepanel;
