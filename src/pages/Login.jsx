import React from "react";


const Login = () => {
    return (
        <div className="formCon">
            <div className="formWrap">
                <span className="logo">chat.box</span>
                <span className="logo1">Sign In</span>
                <span className="title">Enter login details.</span>
                <form>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="New password"/>
                    <button className="button">Log In</button>
                </form>
                <p>No account yet? Sign Up</p>
            </div>
        </div>
    )
}


export default Login;