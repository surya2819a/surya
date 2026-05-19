import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import { useNavigate } from 'react-router-dom'

const Member = () => {
  const currentUser = localStorage.getItem('currentUser') || ''
  const memberStorageKey = currentUser ? `chitMember-${currentUser}` : 'chitMember'
  const [tabledata, setTableData] = useState([])

  const newNav = useNavigate()

  const addNew = () => {
    newNav('/Form')
  }

  const handleDelete = (e) => {
    const delItem = tabledata.filter((member) => member.uId !== e.uId)
    if (delItem) {
      setTableData(delItem)
      localStorage.setItem(memberStorageKey, JSON.stringify(delItem))
    }
  }

  useEffect(() => {
    const latestData = JSON.parse(localStorage.getItem(memberStorageKey)) || []
    setTableData(latestData)
  }, [memberStorageKey])

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-amber-50 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-amber-600 to-amber-500 px-6 py-6 md:px-8 md:py-7 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Chit Members</h2>
              <p className="text-amber-100 text-sm mt-1">
                {tabledata.length} member{tabledata.length !== 1 ? 's' : ''} registered
              </p>
            </div>
            <button
              onClick={addNew}
              className="bg-white text-amber-700 font-bold px-5 py-2.5 rounded-xl hover:bg-amber-50 active:scale-95 transition-all duration-150 shadow"
            >
              + Add Member
            </button>
          </div>

          <div className="mt-6 bg-white rounded-2xl shadow-xl border border-amber-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-amber-100 bg-amber-50">
              <h3 className="text-lg font-bold text-amber-900">Member List</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-amber-600 text-white">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold tracking-wide uppercase text-xs">S.No</th>
                    <th className="text-left px-6 py-4 font-semibold tracking-wide uppercase text-xs">User Id</th>
                    <th className="text-left px-6 py-4 font-semibold tracking-wide uppercase text-xs">Name</th>
                    <th className="text-left px-6 py-4 font-semibold tracking-wide uppercase text-xs">Phone No</th>
                    <th className="text-left px-6 py-4 font-semibold tracking-wide uppercase text-xs">Chit Hold</th>
                    <th className="text-left px-6 py-4 font-semibold tracking-wide uppercase text-xs">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tabledata.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-16 text-gray-400">
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-4xl">📋</span>
                          <span className="font-medium">No members yet</span>
                          <span className="text-xs text-gray-300">Click "Add Member" to get started</span>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    tabledata.map((e, i) => (
                      <tr
                        key={i + 1}
                        className={`border-t border-gray-100 transition-colors duration-100 ${i % 2 === 0 ? 'bg-white' : 'bg-amber-50/40'} hover:bg-amber-50`}
                      >
                        <td className="px-6 py-4 text-gray-400 font-mono text-xs">{i + 1}</td>
                        <td className="px-6 py-4 font-semibold text-gray-800">{e.uId}</td>
                        <td className="px-6 py-4 font-semibold text-gray-800">{e.name}</td>
                        <td className="px-6 py-4 text-gray-600">{e.phone}</td>
                        <td className="px-6 py-4">
                          <span className="inline-block bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full text-xs">
                            Rs. {e.chit}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => handleDelete(e)}
                            className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Member