import React, { useState } from 'react'

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    jobAlerts: true,
    profileVisibility: 'public',
    language: 'en',
    theme: 'light'
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSave = () => {
    // Handle save settings
    console.log('Settings saved:', settings)
    alert('Settings saved successfully!')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="emailNotifications"
                  checked={settings.emailNotifications}
                  onChange={handleChange}
                  className="mr-3"
                />
                Email notifications for job updates
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="jobAlerts"
                  checked={settings.jobAlerts}
                  onChange={handleChange}
                  className="mr-3"
                />
                Job alerts for new opportunities
              </label>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Privacy</h2>
            <div>
              <label className="block text-sm font-medium mb-2">Profile Visibility</label>
              <select
                name="profileVisibility"
                value={settings.profileVisibility}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="connections">Connections only</option>
              </select>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Preferences</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Language</label>
                <select
                  name="language"
                  value={settings.language}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Theme</label>
                <select
                  name="theme"
                  value={settings.theme}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Account</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                Change Password
              </button>
              <button className="w-full text-left px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                Download My Data
              </button>
              <button className="w-full text-left px-4 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50">
                Delete Account
              </button>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={handleSave}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings