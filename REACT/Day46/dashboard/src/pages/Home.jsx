import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navMonth = useNavigate()
  const [months, setMonths] = useState([])
  const currentUser = localStorage.getItem('currentUser') || ''
  const monthStorageKey = currentUser ? `Month-${currentUser}` : 'Month'

  const handleMonth = () => {
    navMonth('/addMonth')
  }

  const handleview = (selectedMonth) => {
    navMonth('/StatMonth', { state: { month: selectedMonth } })
  }

  useEffect(() => {
    const storedMonths = JSON.parse(localStorage.getItem(monthStorageKey)) || []
    setMonths(storedMonths)
  }, [monthStorageKey])

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-amber-50 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className='bg-gradient-to-r from-amber-600 to-amber-500 px-6 py-6 md:px-8 md:py-7 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
            <div>
              <h1 className='text-2xl md:text-3xl font-bold text-white tracking-tight'>Monthly Records</h1>
              <p className='text-amber-100 text-sm mt-1'>Manage and view month-wise chit details</p>
            </div>
            <button
              onClick={handleMonth}
              className='bg-white text-amber-700 font-bold px-5 py-2.5 rounded-xl hover:bg-amber-50 active:scale-95 transition-all duration-150 shadow'
            >
              + Add Month
            </button>
          </div>

          <div className='mt-6'>
            {months.length === 0 ? (
              <div className='bg-white border border-amber-100 rounded-2xl shadow p-10 text-center'>
                <p className='text-3xl mb-2'>Monthly Record</p>
                <h2 className='text-lg font-semibold text-amber-900'>No months added yet</h2>
                <p className='text-sm text-amber-700 mt-1'>Click "Add Month" to create your first month record.</p>
              </div>
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                {months.map((month, index) => (
                  <div
                    key={`${month.MonthYear}-${index}`}
                    className='bg-white border border-amber-100 rounded-2xl shadow-md hover:shadow-xl transition-shadow p-5'
                  >
                    <div className='flex items-center justify-between mb-4'>
                      <h2 className='text-lg font-bold text-amber-900'>{month.MonthYear || '-'}</h2>
                      <span className='text-xs font-semibold bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full'>
                        #{index + 1}
                      </span>
                    </div>

                    <div className='space-y-2 text-sm'>
                      <p className='text-gray-700'><span className='font-semibold text-gray-900'>Holder:</span> {month.Holder || '-'}</p>
                      <p className='text-gray-700'><span className='font-semibold text-gray-900'>Amount:</span> Rs. {month.Amount || '-'}</p>
                      <p className='text-gray-700'><span className='font-semibold text-gray-900'>No Of Chit:</span> {month.NoOfChit || '-'}</p>
                    </div>

                    <button
                      onClick={() => handleview(month)}
                      className='mt-5 w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 rounded-xl transition-colors'
                    >
                      View
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home