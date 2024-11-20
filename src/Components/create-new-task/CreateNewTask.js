import React, { useState, useEffect } from 'react';
import { IoLockClosedOutline } from "react-icons/io5";
import { AiOutlineUserAdd } from "react-icons/ai";
import './CreateNewTask.css';
import { NotesContent } from './NotesContent';
import { RelatedRecordsContent } from './RelatedRecordsContent';
import { ResolutionInformationContent } from './ResolutionInformationContent';

const CreateNewTask = () => {
  const [activeTab, setActiveTab] = useState('Notes');
  const [activities, setActivities] = useState([]);
  const [workNote, setWorkNote] = useState('');

  useEffect(() => {
    const savedActivities = JSON.parse(localStorage.getItem('activities')) || [];
    setActivities(savedActivities);
  }, []);

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);

  const handlePost = () => {
    if (workNote.trim()) {
      const newActivity = {
        author: 'B',
        comment: workNote,
        time: new Date().toLocaleString('en-GB', { hour12: false })
      };

      setActivities([newActivity, ...activities]);
      setWorkNote('');
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Notes':
        return (
          <NotesContent
            workNote={workNote}
            setWorkNote={setWorkNote}
            handlePost={handlePost}
            activities={activities}
          />
        );
      case 'Related Records':
        return (
          <RelatedRecordsContent />
        );
      case 'Resolution Information':
        return (
          <ResolutionInformationContent />
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

export default CreateNewTask;
