import React from 'react'
import IncidentTable from './IncidentTable'


const Incident=[{
    incidentNumber: 'INC0000001',
    title: 'Login Issue',
    description: 'User unable to login to the system',
    priority: 'High',
    status: 'Close',
    service: 'None',
    category: 'None',
    subcategory: 'None',
    contactType: 'Mobile',
    assignee:"Ramesh",
    Configuration_Item: 'None',
    AssignmentGroup:"IT",
    createdAt: '2024-10-15T06:48:10.089Z',
    updatedAt: '2024-10-15T06:48:10.089Z',
}]

function ResolvedTask() {
  return (
    <div>
    <div>
        <h1 className='flex justify-center font-bold text-2xl my-3'>Resolved Task</h1>
    </div>
 <div>
 <IncidentTable incidents={Incident}/>
 </div>
</div>
  )
}

export default ResolvedTask

