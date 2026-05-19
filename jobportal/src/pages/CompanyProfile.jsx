import React, { useState } from 'react'

const CompanyProfile = () => {
  const [company, setCompany] = useState({
    name: 'TechCorp Inc.',
    email: 'hr@techcorp.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    website: 'https://techcorp.com',
    description: 'Leading technology company specializing in innovative software solutions.',
    industry: 'Technology',
    size: '500-1000 employees',
    founded: '2010'
  })

  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState(company)

  const handleEdit = () => {
    setIsEditing(true)
    setEditData(company)
  }

  const handleSave = () => {
    setCompany(editData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData(company)
    setIsEditing(false)
  }

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Company Profile</h1>
          {!isEditing ? (
            <button
              onClick={handleEdit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Edit Profile
            </button>
          ) : (
            <div className="space-x-2">
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Company Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-lg">{company.name}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p>{company.email}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Phone</label>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={editData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p>{company.phone}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Location</label>
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={editData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p>{company.location}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Website</label>
            {isEditing ? (
              <input
                type="url"
                name="website"
                value={editData.website}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {company.website}
              </a>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Description</label>
            {isEditing ? (
              <textarea
                name="description"
                value={editData.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            ) : (
              <p>{company.description}</p>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Industry</label>
              {isEditing ? (
                <input
                  type="text"
                  name="industry"
                  value={editData.industry}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p>{company.industry}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Company Size</label>
              {isEditing ? (
                <input
                  type="text"
                  name="size"
                  value={editData.size}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p>{company.size}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Founded</label>
              {isEditing ? (
                <input
                  type="text"
                  name="founded"
                  value={editData.founded}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p>{company.founded}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile