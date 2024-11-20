import React from 'react';
import { IoLockClosedOutline } from "react-icons/io5";
import { AiOutlineUserAdd } from "react-icons/ai";

export const NotesContent = ({ workNote, setWorkNote, handlePost, activities }) => {
    return (
        <div className="content">
            <div className="input-group">
                <div className="content-lists-icons">
                    <span className="watch-list flex flex-row items-center">
                        Watch list
                        <span className='lock-icon'><IoLockClosedOutline /></span>
                        <span className='lock-icon'><AiOutlineUserAdd /></span>
                    </span>
                    <span className="work-list flex flex-row items-center">
                        Work notes list
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
                        <div className="activity-content">
                            <span className="activity-author">{activity.author}</span>
                            <p className="activity-details">Additional comments • {activity.time}</p>
                            <p className="activity-comment">{activity.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="activity">
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
    )
}
