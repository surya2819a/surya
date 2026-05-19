import React, { useState } from 'react'

const Login = () => {

    const [info, setInfo] = useState({ emailId: "", password: "" })
    const [error, setError] = useState("")

    const checkForm = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }

    const submitLogin = (e) => {
        e.preventDefault()

        const storeData = JSON.parse(localStorage.getItem("ProjectForm") || "[]")

        const user = storeData.find(
            (item) => item.emailId === info.emailId && item.password === info.password
        )

        if (user) {
            setError("")
            alert(`Welcome back, ${user.userName}!`)
        } else {
            setError("Invalid email or password. Please try again.")
        }
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center px-4">
                <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">

                    <h2 className="text-2xl font-bold text-gray-800 mb-1">Welcome Back</h2>
                    <p className="text-sm text-gray-400 mb-6">Login to your account</p>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-500 text-sm rounded-lg px-4 py-3 mb-4">
                            {error}
                        </div>
                    )}

                    <form onSubmit={submitLogin} className="space-y-4">

                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                Email Address
                            </label>
                            <input
                                type="text"
                                onChange={checkForm}
                                name="emailId"
                                placeholder="jane@example.com"
                                className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                Password
                            </label>
                            <input
                                type="password"
                                onChange={checkForm}
                                name="password"
                                placeholder="Enter your password"
                                className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                            />
                        </div>

                        <input
                            type="submit"
                            value="Login"
                            className="w-full bg-indigo-500 hover:bg-indigo-600 active:scale-95 text-white font-semibold py-2.5 rounded-lg cursor-pointer transition-all mt-2"
                        />

                    </form>

                    <p className="text-center text-sm text-gray-400 mt-5">
                        Don't have an account?{" "}
                        <span className="text-indigo-500 font-medium cursor-pointer hover:underline">
                            Register
                        </span>
                    </p>

                </div>
            </div>
        </>
    )
}

export default Login