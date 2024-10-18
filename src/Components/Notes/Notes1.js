// import React from 'react';
// import './Notes.css';

// const Notes = () => {
//   return (
//     <div className="notes-container">
//       <div className="tabs">
//         <div className="tab active">Notes</div>
//         <div className="tab ">Related Records</div>
//         <div className="tab">Resolution Information</div>
//       </div>

//       <div className="content">
//         <div className="input-group">
//           <div className="content-lists-icons">
//             <span className="watch-list">Watch list</span>
//             <span className="work-list">Work notes list</span>
//           </div>

//           <div className="work-notes-section">
//             <h3>Work notes</h3>
//             <textarea id="work-notes" className="work-notes-input" placeholder="Work notes"></textarea>
//           </div>

//           <div className="checkbox-group">
//             <input type="checkbox" id="customer-visible" />
//             <label htmlFor="customer-visible">Additional comments (Customer visible)</label>
//           </div>
//           <button className="post-button">Post</button>
//         </div>

//         <div className="activities">
//           <div className="activity">
//             <span className="activity-author">B</span>
//             <div className="activity-content">
//               <p className="activity-comment">When someone tries to call my extension, it will not ring.</p>
//               <p className="activity-details">Additional comments • 2021-09-03 17:45:27</p>
//             </div>
//           </div>
//           <div className="activity">
//             <span className="activity-author">B</span>
//             <div className="activity-content">
//               <p className="activity-details">Assigned to: ITIL User</p>
//               <p className="activity-details">Impact: 1 - High</p>
//               <p className="activity-details">Incident state: In Progress</p>
//               <p className="activity-details">Opened by: Bow Ruggeri</p>
//               <p className="activity-details">Priority: 3 - Moderate</p>
//               <p className="activity-details">Field changes • 2021-09-03 17:45:27</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Notes;



// import React, { useState } from 'react';
// import './Notes.css';

// const Notes = () => {
//   const [activities, setActivities] = useState([]);
//   const [workNote, setWorkNote] = useState('');

//   const handlePost = () => {
//     if (workNote.trim()) {
//       const newActivity = {
//         author: 'B',
//         comment: workNote,
//         time: new Date().toLocaleString('en-GB', { hour12: false }) // Format: "2021-09-03 17:45:27"
//       };

//       setActivities([newActivity, ...activities]);
//       setWorkNote(''); 
//     }
//   };


//   return (
//     <div className="notes-container">
//       <div className="tabs">
//         <div className="tab active">Notes</div>
//         <div className="tab">Related Records</div>
//         <div className="tab">Resolution Information</div>
//       </div>

//       <div className="content">
//         <div className="input-group">
//           <div className="content-lists-icons">
//             <span className="watch-list">Watch list</span>
//             <span className="work-list">Work notes list</span>
//           </div>

//           <div className="work-notes-section">
//             <h3>Work notes</h3>
//             <textarea
//               id="work-notes"
//               className="work-notes-input"
//               placeholder="Work notes"
//               value={workNote}
//               onChange={(e) => setWorkNote(e.target.value)}
//             ></textarea>
//           </div>

//           <div className="checkbox-group">
//             <input type="checkbox" id="customer-visible" />
//             <label htmlFor="customer-visible">Additional comments (Customer visible)</label>
//           </div>
//           <button className="post-button" onClick={handlePost}>Post</button>
//         </div>

//         <div className="activities">
//           {activities.map((activity, index) => (
//             <div key={index} className="activity">
//               <span className="activity-author">{activity.author}</span>
//               <div className="activity-content">
//                 <p className="activity-comment">{activity.comment}</p>
//                 <p className="activity-details">Additional comments • {activity.time}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="activity">
//              <span className="activity-author">B</span>
//              <div className="activity-content">
//                <p className="activity-details">Assigned to: ITIL User</p>
//                <p className="activity-details">Impact: 1 - High</p>
//                <p className="activity-details">Incident state: In Progress</p>
//                <p className="activity-details">Opened by: Bow Ruggeri</p>
//                <p className="activity-details">Priority: 3 - Moderate</p>
//                <p className="activity-details">Field changes • 2021-09-03 17:45:27</p>
//              </div>
//            </div>
//       </div>
//     </div>
//   );
// };

// export default Notes;

import React, { useState } from 'react';
import { IoLockClosedOutline } from "react-icons/io5";
import { AiOutlineUserAdd } from "react-icons/ai";
import './Notes1.css';

const Notess = () => {
  const [activeTab, setActiveTab] = useState('Notes');
  const [activities, setActivities] = useState([]);
  const [workNote, setWorkNote] = useState('');

  const handlePost = () => {
    if (workNote.trim()) {
      const newActivity = {
        author: 'B',
        comment: workNote,
        time: new Date().toLocaleString('en-GB', { hour12: false }) // Format: "2021-09-03 17:45:27"
      };

      setActivities([newActivity, ...activities]);
      setWorkNote(''); // Clear the textarea
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Notes':
        return (
          <div className="content">
            <div className="input-group">
              <div className="content-lists-icons">
                <span className="watch-list">Watch list
                  <span className='lock-icon'><IoLockClosedOutline /></span>
                  <span className='lock-icon'><AiOutlineUserAdd /></span>
                
                </span>
                
                <span className="work-list">Work notes list
                <span className='lock-icon'><IoLockClosedOutline /></span>
                <span className='lock-icon'><AiOutlineUserAdd /></span>
                </span>
              </div>

              <div className="work-notes-section">
                <h3>Work notes</h3>
                <textarea
                  id="work-notes"
                  className="work-notes-input"
                  placeholder="Work notes"
                  value={workNote}
                  onChange={(e) => setWorkNote(e.target.value)}
                ></textarea>
              </div>

              <div className="checkbox-group">
                <input type="checkbox" id="customer-visible" />
                <label htmlFor="customer-visible">Additional comments (Customer visible)</label>
              </div>
              <button className="post-button" onClick={handlePost}>Post</button>
            </div>

            <div className="activities">
              {activities.map((activity, index) => (
                
                <div key={index} className="activity">
                  {/* <span className="activity-author">{activity.author}</span> */}
                  <span>Activities:</span>
                  <div className="activity-content">
                  <span className="activity-author">{activity.author}</span>
                  <p className="activity-details">Additional comments • {activity.time}</p>
                    <p className="activity-comment">{activity.comment}</p>
                    {/* <p className="activity-details">Additional comments • {activity.time}</p> */}
                  </div>
                </div>
              ))}
            </div>
            <div className="activity">
              {/* <span className="activity-author">B</span> */}
              <div className="field-activity-content">
              <span className="activity-author">B</span>
              <p className="activity-details">Field changes • 2021-09-03 17:45:27</p>
              <span className='field-activity-group'>
                <p className="field-activity-details">Assigned to: ITIL User</p>
                <p className="field-activity-details">Impact: 1 - High</p>
                <p className="field-activity-details">Incident state: In Progress</p>
                <p className="field-activity-details">Opened by: Bow Ruggeri</p>
                <p className="field-activity-details">Priority: 3 - Moderate</p>
              </span>
              </div>
           </div>
          </div>
        );
      case 'Related Records':
        return (
          <div className="content">
            {/* <h3>Related Records</h3> */}

           <div className='related-records-fields'>

            <div className='related-record-left'>

            <span className='related-record-individual'>
            <label className='related-label'>Problem</label>
            <input type='text'/>
            </span>

            <span className='related-record-individual'>
            <label className='related-label'>Vendor Reference Number</label>
            <input type='text'/>
            </span>

            <span className='related-record-individual'>
            <label className='related-label'>Gateway ID</label>
            <input type='text'/>
            </span>

            <span className='related-record-individual'>
            <label className='related-label'>Source_Tool</label>
            <input type='text'/>
            </span>
            </div>
            
            <div className='related-record-right'>

            <span className='related-record-individual'>
            <label className='related-label'>Change Request</label>
            <input type='text'/>
            </span>

            
            <span className='related-record-individual'>
            <label className='related-label'>Caused by Change</label>
            <input type='text'/>
            </span>

            
            <span className='related-record-individual'>
            <label className='related-label'>Customer ticket id</label>
            <input type='text'/>
            </span>
            </div>


           </div>
           
           <div className='related-record-buttons'>
           <button className='related-button'>Update</button>
            <button className='related-button'>Resolve</button>

           </div>

          </div>
        );
      case 'Resolution Information':
        return (
          <div className="content">
            {/* <h3>Resolution Information</h3> */}

            <div className='resolution-info'>

           <div className='resolution-left'>
           <span className='related-record-individual'>
            <label className='related-label'>Close code</label>
            {/* <input type='text'/> */}
            <select className='related-dropdown'>
              <option>--None--</option>
              <option>Awaiting customer confirmaton</option>
              <option>Issue persists-risk agreed</option>
              <option>Manually Closed</option>
              <option>Monitoring</option>
              <option>No fix provided</option>
              <option>No further action required</option>
              <option>Permanently resolved</option>
              <option>Third party fix</option>
              <option>Workaround provided</option>
              <option>Duplicate</option>
              <option>In Person Support</option>

            </select>

            </span>


           </div>

           <div className='resolution-right'>

           <span className='related-record-individual'>
            <label className='related-label'>Closed by</label>
            <input type='text'/>
          
            </span>

            <span className='related-record-individual'>
            <label className='related-label'>Closed</label>
            <input type='text'/>
            </span>
           </div>

           <div className='resolution-close'> 
           <p className='label-close-notes'>Close notes</p>
           <div className='resolution-area'>
           <textarea className='resolution-textarea'></textarea>
           </div>

           </div>

           </div>
           <div className='related-record-buttons'>
           <button className='related-button'>Update</button>
            <button className='related-button'>Resolve</button>

           </div>

          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="notes-container">
      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'Notes' ? 'active' : ''}`} 
          onClick={() => setActiveTab('Notes')}
        >
          Notes
        </div>
        <div 
          className={`tab ${activeTab === 'Related Records' ? 'active' : ''}`} 
          onClick={() => setActiveTab('Related Records')}
        >
          Related Records
        </div>
        <div 
          className={`tab ${activeTab === 'Resolution Information' ? 'active' : ''}`} 
          onClick={() => setActiveTab('Resolution Information')}
        >
          Resolution Information
        </div>
      </div>

      {renderContent()}
    </div>
  );
};

export default Notess;



