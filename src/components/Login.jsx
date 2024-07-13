import React from "react";

const Login = () =>{
return (
     <div className=" min-h-screen container min-w-full items-center justify-center bg-gradient-to-t
            from-blue-200 via-green-300 to-blue-400">
        <div className="w-full max-w-sm p-8 bg-white bg-opacity-150 rounded-lg shadow-lg ">
            <div className="header mb-5 text-center">
                <div className="text font-bold text-2xl" style={{color:'GrayText'}}>
                    Sign Up
                </div>
                <div className="underline h-1 bg-gray-400 mt-2 mb-4"></div>
            </div> 
            <div className="input">
                <label>Name<span className="required">*</span></label>
                 <input type="text" placeholder="Name"/>
            </div>
            <div className="input">
                <label>Name<span className="required">*</span></label>
                <input type="email" placeholder="email"/>
            </div>
            <div className="input">
                <label>Name<span className="required">*</span></label>
                <input type="password" placeholder="Password"/>
            </div>
            <div className="Forgot password">
                Forgot Password? <span>Click Here!</span>
            </div>
            <div>
                <button className="sign up">Sign Up</button>
                <button className="login">Login</button>
            </div>
        </div>
    </div>
)
}
export default Login;