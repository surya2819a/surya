import React, { useState } from 'react'

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 987-6543',
    location: 'New York, NY',
    bio: 'Experienced software developer with a passion for creating innovative solutions.',
    skills: ['JavaScript', 'React', 'Node.js', 'Python'],
    experience: '5 years'
  })

  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState(profile)

  const handleEdit = () => {
    setIsEditing(true)
    setEditData(profile)
  }

  const handleSave = () => {
    setProfile(editData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData(profile)
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
          <h1 className="text-3xl font-bold">User Profile</h1>
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
            <label className="block text-sm font-medium mb-2">Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-lg">{profile.name}</p>
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
              <p>{profile.email}</p>
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
              <p>{profile.phone}</p>
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
              <p>{profile.location}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Bio</label>
            {isEditing ? (
              <textarea
                name="bio"
                value={editData.bio}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            ) : (
              <p>{profile.bio}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Skills</label>
            {isEditing ? (
              <input
                type="text"
                name="skills"
                value={editData.skills.join(', ')}
                onChange={(e) => setEditData({...editData, skills: e.target.value.split(', ')})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Years of Experience</label>
            {isEditing ? (
              <input
                type="text"
                name="experience"
                value={editData.experience}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p>{profile.experience}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile