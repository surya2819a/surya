import React, { useState } from 'react'

const Register = () => {
    const [data, setData] = useState({ userName: "", emailId: "", phone: "", password: "" })

    const handleForm = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submitForm = (e) => {
        const submitForm = (e) => {
            e.preventDefault()

            const storeData = JSON.parse(localStorage.getItem("ProjectForm") || "[]")

            storeData.push(data)

            localStorage.setItem("ProjectForm", JSON.stringify(storeData))

            alert("Success")
        }
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center px-4">
                <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">

                    <h2 className="text-2xl font-bold text-gray-800 mb-1">Create Account</h2>
                    <p className="text-sm text-gray-400 mb-6">Fill in your details to get started</p>

                    <form onSubmit={submitForm} className="space-y-4">

                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Full Name</label>
                            <input
                                type="text"
                                onChange={handleForm}
                                name="userName"
                                placeholder="Name"
                                className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email Address</label>
                            <input
                                type="text"
                                onChange={handleForm}
                                name="emailId"
                                placeholder="name@example.com"
                                className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone</label>
                            <input
                                type="tel"
                                onChange={handleForm}
                                name="phone"
                                placeholder="mobile"
                                className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Password</label>
                            <input
                                type="text"
                                onChange={handleForm}
                                name="password"
                                placeholder="Min. 8 characters"
                                className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                            />
                        </div>

                        <input
                            type="submit"
                            value="Submit"
                            className="w-full bg-indigo-500 hover:bg-indigo-600 active:scale-95 text-white font-semibold py-2.5 rounded-lg cursor-pointer transition-all mt-2"
                        />

                    </form>
                </div>
            </div>
        </>
    )
}

export default Register