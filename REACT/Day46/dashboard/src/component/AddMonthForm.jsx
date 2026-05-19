import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddMonthForm = () => {

    const navBack = useNavigate()
    const currentUser = localStorage.getItem('currentUser') || ''
    const monthStorageKey = currentUser ? `Month-${currentUser}` : 'Month'

    const [monthDetail, setMonthDetail] = useState({ MonthYear: "", Holder: "", Amount: "", NoOfChit: "" , Saving :"" , AmountDebit : "" })

    const getMonthInfo = (e) => {
        e.preventDefault()
        setMonthDetail({ ...monthDetail, [e.target.name]: e.target.value })
    }

    const handlesub = ()=>{

        const storeData = JSON.parse(localStorage.getItem(monthStorageKey))|| []
        storeData.push(monthDetail)

        localStorage.setItem(monthStorageKey,JSON.stringify(storeData))
        alert("Month Added Successfully")

    }



   

    const handleBack = () => {
        navBack('/Home')
    }

    return (
        <div className="min-h-screen bg-amber-50 px-4 py-8 md:py-12">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl border border-amber-100 overflow-hidden">

                    <div className="bg-gradient-to-r from-amber-700 to-amber-500 px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Add Month</h1>
                            <p className="text-amber-100 text-sm mt-1">Enter monthly chit details and save this record</p>
                        </div>
                        <button
                            onClick={handleBack}
                            className="bg-white text-amber-700 font-bold px-4 py-2.5 rounded-xl hover:bg-amber-50 active:scale-95 transition-all duration-150 text-sm shadow"
                        >
                            Back to Home
                        </button>
                    </div>

                    <div className="p-6 md:p-8">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={handlesub}>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                    Month & Year
                                </label>
                                <input
                                    type="month"
                                    onChange={getMonthInfo}
                                    name="MonthYear"
                                    placeholder="Enter the Month"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                    Chit Holder Name
                                </label>
                                <input
                                    type="text"
                                    onChange={getMonthInfo}
                                    name="Holder"
                                    placeholder="Chit Holder Name"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                    Amount (Rs)
                                </label>
                                <input
                                    type="number"
                                    onChange={getMonthInfo}
                                    name="Amount"
                                    placeholder="Enter Amount"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                    No. of Chit
                                </label>
                                <input
                                    type="number"
                                    onChange={getMonthInfo}
                                    name="NoOfChit"
                                    placeholder="No of Chit"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                    Amount Saved
                                </label>
                                <input
                                    type="number"
                                    onChange={getMonthInfo}
                                    name="Saving"
                                    placeholder="Enter Saved Amount"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                    Amount Debit
                                </label>
                                <input
                                    type="number"
                                    onChange={getMonthInfo}
                                    name="AmountDebit"
                                    placeholder="Enter Debit Amount"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                                />
                            </div>

                            <div className="md:col-span-2 pt-1">
                                <input
                                    type="submit"
                                    value="Save Month"
                                    className="w-full bg-amber-600 hover:bg-amber-700 active:scale-[0.99] text-white font-bold py-3.5 rounded-xl transition-all duration-150 shadow-md shadow-amber-200 cursor-pointer"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMonthForm