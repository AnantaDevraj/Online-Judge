import React from "react";

const Login = () =>{
return (
     <div className=" min-h-screen flex items-center justify-center container min-w-full bg-gradient-to-t
            from-blue-200 via-green-300 to-blue-400">
        <div className="w-full max-w-sm p-8 bg-green-200 bg-opacity-150 rounded-lg shadow-lg ">
            <div className="header mb-5 text-center">
                <div className="text font-bold text-2xl" style={{color:'GrayText'}}>
                    Login
                </div>
                <div className="underline h-1 bg-gray-400 mt-2 mb-4"></div>
            </div> 
            <div className="input mb-4">
                <label className="block font-semibold mb-2">Name<span className="required text-red-600">*</span></label>
                 <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" type="text" placeholder="Name"/>
            </div>
            <div className="input mb-4">
                <label className="block font-semibold mb-2">Email<span className="required text-red-600">*</span></label>
                <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" type="email" placeholder="email"/>
            </div>
            <div className="input mb-4">
                <label className="block font-semibold mb-2">Password<span className="required text-red-600">*</span></label>
                <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" type="password" placeholder="Password"/>
            </div>
            <div className="Forgot password mb-6 text-center">
                <a href="#" className=" mb-2 text-blue-500 hover:text-blue-700">Forgot Password? <span>Click Here!</span></a>
            </div>
            <div className="flex justify-between">
                <button className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg
                hover:bg-blue-700 focus:outline-none focus:ring-2
                focus:ring-blue-400 focus:ring-opacity-75">Login</button>
            </div>
            <div className="mt-4 text-center">
            <span>Don't have an account? </span><a href="#" className=" text-blue-600 hover:text-blue-700">Sign Up</a>
            </div>
        </div>
    </div>
)
}
export default Login;