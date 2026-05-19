import React, { useContext, useEffect, useState } from 'react'
import Create from '../hook/Create'
import Navbar from './Navbar'
import { useLocation, useNavigate } from 'react-router-dom'

const StatMonth = () => {
  const CHIT_HOLD_AMOUNT = 6500

  const getMem = useContext(Create)
  const location = useLocation()
  const navigate = useNavigate()
  const selectedMonth = location.state?.month
  const [paymentStatus, setPaymentStatus] = useState({})
  const currentUser = localStorage.getItem('currentUser') || ''

  const monthKey = selectedMonth?.MonthYear || 'default'
  const storageKey = currentUser ? `paymentStatus-${monthKey}-${currentUser}` : `paymentStatus-${monthKey}`

  const handleBack = () => {
    navigate('/Home')
  }

  useEffect(() => {
    const savedStatus = JSON.parse(localStorage.getItem(storageKey)) || {}
    setPaymentStatus(savedStatus)
  }, [storageKey])

  const getMemberPayment = (memberId) => {
    const memberPayment = paymentStatus[memberId]
    if (!memberPayment) return { status: 'pending', paidAmount: '' }

    // Handle legacy string values already stored in localStorage.
    if (typeof memberPayment === 'string') {
      return { status: memberPayment, paidAmount: '' }
    }

    return {
      status: memberPayment.status || 'pending',
      // Support old key name `partialAmount` and new `paidAmount`.
      paidAmount: memberPayment.paidAmount ?? memberPayment.partialAmount ?? ''
    }
  }

  const handleMarkStatus = (memberId, status) => {
    const current = getMemberPayment(memberId)
    const updatedStatus = {
      ...paymentStatus,
      [memberId]: {
        status,
        paidAmount: status === 'paid' ? '' : current.paidAmount
      }
    }
    setPaymentStatus(updatedStatus)
    localStorage.setItem(storageKey, JSON.stringify(updatedStatus))
  }

  const handlePaidAmountChange = (memberId, value) => {
    const current = getMemberPayment(memberId)
    const updatedStatus = {
      ...paymentStatus,
      [memberId]: {
        status: current.status === 'paid' ? 'pending' : current.status,
        paidAmount: value
      }
    }
    setPaymentStatus(updatedStatus)
    localStorage.setItem(storageKey, JSON.stringify(updatedStatus))
  }

  const getStatusLabel = (memberId) => {
    const status = getMemberPayment(memberId).status
    if (status === 'paid') return 'Paid'
    if (status === 'partial') return 'Partially Paid'
    return 'Pending'
  }

  const getStatusClasses = (status) => {
    if (status === 'paid') return 'bg-emerald-100 text-emerald-700'
    if (status === 'partial') return 'bg-amber-100 text-amber-700'
    return 'bg-rose-100 text-rose-700'
  }

  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-amber-50 px-4 py-8'>
        <div className='max-w-6xl mx-auto space-y-6'>
        {selectedMonth ? (
          <div className="bg-white rounded-2xl shadow-xl border border-amber-100 overflow-hidden">
            <div className="bg-amber-600 px-6 py-4">
              <h2 className="text-xl font-bold text-white tracking-tight">Month Details</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
              <div className="bg-amber-50 rounded-xl p-4">
                <p className="text-xs uppercase text-amber-600 font-semibold">Month & Year</p>
                <p className="text-lg font-bold text-amber-900 mt-1">{selectedMonth.MonthYear || '-'}</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-4">
                <p className="text-xs uppercase text-amber-600 font-semibold">Holder</p>
                <p className="text-lg font-bold text-amber-900 mt-1">{selectedMonth.Holder || '-'}</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-4">
                <p className="text-xs uppercase text-amber-600 font-semibold">Amount</p>
                <p className="text-lg font-bold text-amber-900 mt-1">Rs. {selectedMonth.Amount || '-'}</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-4">
                <p className="text-xs uppercase text-amber-600 font-semibold">No Of Chit</p>
                <p className="text-lg font-bold text-amber-900 mt-1">{selectedMonth.NoOfChit || '-'}</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-4">
                <p className="text-xs uppercase text-amber-600 font-semibold">Saving</p>
                <p className="text-lg font-bold text-amber-900 mt-1">Rs. {selectedMonth.Saving || '-'}</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-4">
                <p className="text-xs uppercase text-amber-600 font-semibold">Amount Debit</p>
                <p className="text-lg font-bold text-amber-900 mt-1">Rs. {selectedMonth.AmountDebit || '-'}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-amber-100 text-amber-800 rounded-xl p-4 flex items-center justify-between">
            <p className="font-medium">No month selected. Please go back and click View on a month card.</p>
            <button
              onClick={handleBack}
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Back to Home
            </button>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl border border-amber-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-amber-100 bg-amber-50">
            <h3 className="text-lg font-bold text-amber-900">Member Payment Status</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-amber-600 text-white">
                <tr>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wide">User Id</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wide">Name</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wide">Phone No</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wide">Chit Hold</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wide">Status</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody>
                {getMem.map((e, i) => {
                  const memberPayment = getMemberPayment(e.uId)
                  return (
                    <tr
                      key={i}
                      className={`border-b border-amber-100 ${i % 2 === 0 ? 'bg-white' : 'bg-amber-50/40'} hover:bg-amber-50`}
                    >
                      <td className="px-5 py-4 font-semibold text-gray-700">{e.uId}</td>
                      <td className="px-5 py-4 font-semibold text-gray-900">{e.name}</td>
                      <td className="px-5 py-4 text-gray-700">{e.phone}</td>
                      <td className="px-5 py-4">
                        <span className="inline-block bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full text-sm">
                          Rs. {CHIT_HOLD_AMOUNT}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getStatusClasses(memberPayment.status)}`}>
                          {getStatusLabel(e.uId)}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <select
                            value={memberPayment.status}
                            onChange={(event) => handleMarkStatus(e.uId, event.target.value)}
                            className="border border-gray-300 bg-white rounded-lg px-3 py-2 text-sm min-w-40 focus:outline-none focus:ring-2 focus:ring-amber-400"
                          >
                            <option value="paid">Paid</option>
                            <option value="pending">Pending</option>
                            <option value="partial">Partially Paid</option>
                          </select>
                          {(memberPayment.status === 'partial' || memberPayment.status === 'pending') && (
                            <input
                              type="number"
                              min="0"
                              value={memberPayment.paidAmount}
                              onChange={(event) => handlePaidAmountChange(e.uId, event.target.value)}
                              placeholder="Paid amount"
                              className="border border-gray-300 bg-white rounded-lg px-3 py-2 text-sm w-32 focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default StatMonth