import React, { useState } from 'react'

const Applications = () => {
  const [applications] = useState([
    {
      id: 1,
      jobTitle: 'Software Engineer',
      company: 'TechCorp Inc.',
      status: 'Under Review',
      appliedDate: '2023-05-10',
      location: 'San Francisco, CA'
    },
    {
      id: 2,
      jobTitle: 'Frontend Developer',
      company: 'StartupXYZ',
      status: 'Interview Scheduled',
      appliedDate: '2023-05-08',
      location: 'New York, NY'
    },
    {
      id: 3,
      jobTitle: 'Full Stack Developer',
      company: 'InnovateLabs',
      status: 'Rejected',
      appliedDate: '2023-05-05',
      location: 'Austin, TX'
    },
    {
      id: 4,
      jobTitle: 'React Developer',
      company: 'WebSolutions Ltd.',
      status: 'Accepted',
      appliedDate: '2023-05-03',
      location: 'Seattle, WA'
    }
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800'
      case 'Interview Scheduled':
        return 'bg-blue-100 text-blue-800'
      case 'Rejected':
        return 'bg-red-100 text-red-800'
      case 'Accepted':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Applications</h1>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b">
          <h2 className="text-lg font-semibold">Application History</h2>
        </div>

        <div className="divide-y divide-gray-200">
          {applications.map((application) => (
            <div key={application.id} className="px-6 py-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{application.jobTitle}</h3>
                  <p className="text-sm text-gray-600">{application.company}</p>
                  <p className="text-sm text-gray-500">{application.location}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(application.status)}`}>
                    {application.status}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">Applied: {application.appliedDate}</p>
                </div>
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Details
                </button>
                {application.status === 'Interview Scheduled' && (
                  <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                    Join Interview
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {applications.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">You haven't applied to any jobs yet.</p>
          <a href="/jobs" className="text-blue-500 hover:underline mt-2 inline-block">
            Browse available jobs
          </a>
        </div>
      )}
    </div>
  )
}

export default Applications