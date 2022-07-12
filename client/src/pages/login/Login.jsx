import React from 'react'
import './login.css'
export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Lamasocial</h3>
                <span className="loginDesc">
                    Connect with friend and the world around you on Lamasocial.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input className="loginInput" placeholder='Email'/>
                    <input className="loginInput" placeholder='Password'/>
                    <button className="loginButton">Login</button>
                    <span className="loginForgot">Forget password</span>
                    <button className="loginRegisterButton">Create new account</button>


                </div>
            </div>
        </div>
    </div>
  )
}
