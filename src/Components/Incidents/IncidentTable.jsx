import React from 'react'

function IncidentTable({incidents}) {
  return (
    <div className="bg-white shadow rounded-lg p-4 ">
    <div className=" flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">{incidents.length} Incidents</div>
        <div className="text-gray-500 mr-5">in last 30 days</div>
    </div>
    <div className="overflow-x-auto">
        <table className="w-[200px] bg-white">
            <thead>
                <tr>
                    <th className="px-4 py-2 border-b border-gray-200">
                        <input type="checkbox" />
                    </th>
                    <th className="px-4 py-2 border-b border-gray-200">Incident Number</th>
                    <th className="px-4 py-2 border-b border-gray-200">Title</th>
                    <th className="px-4 py-2 border-b border-gray-200">Description</th>
                    <th className="px-4 py-2 border-b border-gray-200">Contact-Type</th>
                    <th className="px-4 py-2 border-b border-gray-200">Priority</th>
                    <th className="px-4 py-2 border-b border-gray-200">Status</th>
                    <th className="px-4 py-2 border-b border-gray-200">Created At</th>
                    <th className="px-4 py-2 border-b border-gray-200">Updated At</th>
                    <th className="px-4 py-2 border-b border-gray-200">Service</th>
                    <th className="px-4 py-2 border-b border-gray-200">Category</th>
                    <th className="px-4 py-2 border-b border-gray-200">Assignment Group</th>
                    <th className="px-4 py-2 border-b border-gray-200">Assigned to</th>
                    <th className="px-4 py-2 border-b border-gray-200">Updated By</th>
                </tr>
            </thead>
            <tbody>
                {incidents.map((incident, index) => (
                    <tr key={index}>
                        <td className="px-4 py-2 border-b border-gray-200">
                            <input type="checkbox" />
                        </td>
                        <td className="px-4 py-2 border-b border-gray-200">{incident.incidentNumber}</td>
                        <td className="px-4 py-2 border-b border-gray-200">{incident.title}</td>
                        <td className="px-4 py-2 border-b border-gray-200">{incident.description}</td>
                        <td className="px-4 py-2 border-b border-gray-200 capitalize">{incident.contactType}</td>
                        <td className="px-4 py-2 border-b border-gray-200 capitalize">{incident.priority}</td>
                        <td className="px-4 py-2 border-b border-gray-200">
                            <span
                                className={`px-2 py-1 rounded-full text-sm ${incident.status === 'in_progress'
                                    ? 'bg-purple-100 text-purple-700'
                                    : incident.status === 'Resolved'||'Close'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-yellow-100 text-yellow-700'
                                    }`}
                            >
                                {incident.status}
                            </span>
                        </td>
                        <td className="px-4 py-2 border-b border-gray-200">
                            {new Date(incident.createdAt).toLocaleString()}
                        </td>
                        <td className="px-4 py-2 border-b border-gray-200">
                            {new Date(incident.updatedAt).toLocaleString()}
                        </td>
                        <td className="px-4 py-2 border-b border-gray-200 capitalize">{incident.service}</td>
                        <td className="px-4 py-2 border-b border-gray-200">
                            {incident.category}
                        </td>
                        <td className="px-4 py-2 border-b border-gray-200">
                            {incident?.AssignmentGroup||"N/A"}
                        </td>
                        <td className="px-4 py-2 border-b border-gray-200">
                            {incident?.assignee||"N/A"}
                        </td>
                        <td className="px-4 py-2 border-b border-gray-200">
                            {incident?.updated||"N/A"}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
  )
}

export default IncidentTable
