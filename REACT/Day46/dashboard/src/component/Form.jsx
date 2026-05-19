import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {

  const goNav = useNavigate()
  const currentUser = localStorage.getItem('currentUser') || ''
  const memberStorageKey = currentUser ? `chitMember-${currentUser}` : 'chitMember'
  const [groupMem, setGroupMem] = useState({ name: "", phone: "", chit: "" ,uId :""})

  const handleUser = (e) => {
    setGroupMem({ ...groupMem, [e.target.name]: e.target.value })
  }

  const subDetail = (e) => {
    e.preventDefault()
   if(true){
     let createStorage = JSON.parse(localStorage.getItem(memberStorageKey)) || []
    createStorage.push(groupMem)
    localStorage.setItem(memberStorageKey, JSON.stringify(createStorage))
    setGroupMem({ name: "", phone: "", chit: "" , uId :""})
    alert("Added Successfully")

    
   }
    
    
  }

  const goBack = () => {
    goNav('/Member')
  }

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-100">

          {/* Header */}
          <div className="bg-amber-600 px-8 py-6">
            <h1 className="text-2xl font-bold text-white tracking-tight">Add Chit Member</h1>
            <p className="text-amber-200 text-sm mt-1">Fill in the details to register a new member</p>
          </div>

          {/* Form Body */}
          <div className="px-8 py-8">
            <form onSubmit={subDetail} className="space-y-5">

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter the name"
                  name="name"
                  value={groupMem.name}
                  onChange={handleUser}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter the phone"
                  name="phone"
                  value={groupMem.phone}
                  onChange={handleUser}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                />
              </div>


              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  User Id
                </label>
                <input
                  type="tel"
                  placeholder="Enter the userId"
                  name="uId"
                  value={groupMem.uId}
                  onChange={handleUser}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                />
              </div>

              {/* Chit Amount */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Chit Amount
                </label>
                <input
                  type="number"
                  placeholder="Enter the chit"
                  name="chit"
                  value={groupMem.chit}
                  onChange={handleUser}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-bold py-3 rounded-xl transition-all duration-150 shadow-md shadow-amber-200 mt-2"
              >
                + Add Member
              </button>
            </form>
          </div>

          {/* Footer / Back */}
          <div className="px-8 pb-8">
            <button
              onClick={goBack}
              className="w-full border-2 border-amber-200 hover:border-amber-400 hover:bg-amber-50 text-amber-700 font-semibold py-3 rounded-xl transition-all duration-150"
            >
              ← Back to Members
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Form