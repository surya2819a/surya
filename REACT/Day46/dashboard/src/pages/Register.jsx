import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({ adminId: '', password: '', confirmPassword: '' })

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const handleRegister = (e) => {
    e.preventDefault()

    if (!userData.adminId || !userData.password) {
      alert('Please fill all fields')
      return
    }

    if (userData.password !== userData.confirmPassword) {
      alert('Password and Confirm Password must match')
      return
    }

    const users = JSON.parse(localStorage.getItem('users')) || []
    const userExists = users.find((u) => u.adminId === userData.adminId)

    if (userExists) {
      alert('User already exists. Please login.')
      return
    }

    users.push({ adminId: userData.adminId, password: userData.password })
    localStorage.setItem('users', JSON.stringify(users))
    alert('Account created successfully')
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-amber-100 overflow-hidden">
        <div className="bg-amber-600 px-8 py-6">
          <h1 className="text-2xl font-bold text-white tracking-tight">Create Account</h1>
          <p className="text-amber-200 text-sm mt-1">Register a new user to access dashboard</p>
        </div>

        <div className="px-8 py-8">
          <form onSubmit={handleRegister} className="space-y-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Login ID</label>
              <input
                type="text"
                name="adminId"
                onChange={handleChange}
                value={userData.adminId}
                placeholder="Enter Login ID"
                className="border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={userData.password}
                placeholder="Enter Password"
                className="border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={userData.confirmPassword}
                placeholder="Confirm Password"
                className="border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 active:scale-[0.98] text-white font-bold text-sm rounded-xl py-3 transition-all duration-150 shadow-md shadow-amber-200"
            >
              Register
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-5">
            Already have account?{' '}
            <button onClick={() => navigate('/')} className="text-amber-700 font-semibold hover:underline">
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
