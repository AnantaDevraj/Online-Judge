import React from "react";

const Signup = () =>{
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-blue-200 via-green-300 to-blue-400">
            <div className="w-full max-w-sm p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
                <div className="header mb-5 text-center">
                    <div className="text font-bold text-2xl" style={{ color: 'GrayText' }}>
                        Sign Up
                    </div>
                    <div className="underline h-1 bg-gray-400 mt-2 mb-4"></div>
                </div>
                <div className="input mb-4">
                    <label className="block font-semibold mb-2">Name<span className="required text-red-600">*</span></label>
                    <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" type="text" placeholder="Name" />
                </div>
                <div className="input mb-4">
                    <label className="block font-semibold mb-2">Email<span className="required text-red-600">*</span></label>
                    <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" type="email" placeholder="Email" />
                </div>
                <div className="input mb-4">
                    <label className="block font-semibold mb-2">Password<span className="required text-red-600">*</span></label>
                    <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" type="password" placeholder="Password" />
                </div>
                <div className="input mb-4">
                    <label className="block font-semibold mb-2">Phone No.<span className="required text-red-600">*</span></label>
                    <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" type="tel" placeholder="Phone No." />
                </div>
                <div className="flex justify-between">
                    <button className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Sign Up</button>
                </div>
                <div className="mt-4 text-center">
                    <span>Already have an account? </span><a href="#" className="text-blue-600 hover:text-blue-700">Login</a>
                </div>
            </div>
        </div>
    )
}
export default Signup;
