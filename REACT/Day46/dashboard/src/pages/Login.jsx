import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  const [admin, setAdmin] = useState({ newadminId: "", newpassword: "" })

  const loginId = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value })
  }

  const handleForm = (e) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users')) || []
    const matchedUser = users.find(
      (u) => u.adminId === admin.newadminId && u.password === admin.newpassword
    )

    if (matchedUser) {
      localStorage.setItem('currentUser', matchedUser.adminId)
      navigate('/Home')
    } else {
      alert("Login failed. Check ID and password.")
    }
  }

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl grid grid-cols-2 rounded-2xl overflow-hidden shadow-xl border border-amber-100">

        {/* Left Panel */}
        <div className="bg-amber-600 p-10 flex flex-col justify-between">
          <div>
            <span className="inline-block bg-white/20 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
              🪙 ChitFund
            </span>
            <h2 className="text-2xl font-bold text-white leading-snug mb-3">
              Welcome to the Admin Dashboard
            </h2>
            <p className="text-amber-200 text-sm leading-relaxed">
              Securely manage your chit fund members, monthly records, and payments all in one place.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Authorized Access Only</p>
                <p className="text-amber-300 text-xs">Admin credentials required</p>
              </div>
            </div>
            <div className="flex gap-1.5">
              <div className="h-1.5 w-5 rounded-full bg-white" />
              <div className="h-1.5 w-1.5 rounded-full bg-white/35" />
              <div className="h-1.5 w-1.5 rounded-full bg-white/35" />
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="bg-white p-10 flex flex-col justify-center">
          <h1 className="text-xl font-bold text-gray-900 mb-1">Admin Login</h1>
          <p className="text-sm text-gray-400 mb-7">Sign in to manage your chit fund</p>

          <form onSubmit={handleForm} className="flex flex-col gap-5">

            {/* Login ID */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                Login ID
              </label>
              <input
                type="text"
                onChange={loginId}
                name="newadminId"
                placeholder="Enter your Login ID"
                required
                className="border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100 transition-all"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                Password
              </label>
              <input
                type="password"
                onChange={loginId}
                name="newpassword"
                placeholder="Enter your password"
                required
                className="border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100 transition-all"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 active:scale-[0.98] text-white font-bold text-sm rounded-xl py-3 mt-1 transition-all duration-150 shadow-md shadow-amber-200"
            >
              Login
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>

          </form>

          <p className="text-center text-xs text-gray-300 mt-6">
            Authorized personnel only
          </p>
          <p className="text-center text-sm text-gray-500 mt-3">
            No account?{' '}
            <button onClick={() => navigate('/register')} className="text-amber-700 font-semibold hover:underline">
              Register
            </button>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Login