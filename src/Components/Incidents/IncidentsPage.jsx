import React, { useEffect, useState } from 'react';
import { Getinci } from '../../hooks/IncidentsHook';
import IncidentTable from './IncidentTable';
const incidentsData = [
    {
        incidentNumber: 'INC0000001',
        title: 'Login Issue',
        description: 'User unable to login to the system',
        priority: 'medium',
        status: 'open',
        service: 'None',
        category: 'None',
        subcategory: 'None',
        contactType: 'None',
        Configuration_Item: 'None',
        createdAt: '2024-10-15T06:48:10.089Z',
        updatedAt: '2024-10-15T06:48:10.089Z',
    },
    {
        incidentNumber: 'INC0000002',
        title: 'Login Issue',
        description: 'User unable to login to the system',
        priority: 'medium',
        status: 'In-Progress',
        service: 'None',
        category: 'None',
        subcategory: 'None',
        contactType: 'None',
        Configuration_Item: 'None',
        createdAt: '2024-10-15T06:48:10.089Z',
        updatedAt: '2024-10-15T06:48:10.089Z',
    },
    // Add more incident objects as needed...
];

const IncidentPage = () => {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        try {
          const res = await Getinci();
          if (res && res.data) {
            console.log(res);
            setIncidents(res.data);
          } else {
            console.warn('No data found, falling back to default incidents.');
            setIncidents(incidentsData);
          }
        } catch (error) {
          console.error('Error fetching incidents:', error);
          setIncidents(incidentsData);
        }
      };

    return (
        <>
        <IncidentTable incidents={incidents}/>
        </>
    );
};

export default IncidentPage;
