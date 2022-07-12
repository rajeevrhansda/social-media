import React from 'react'
import './registre.css'
export default function Register() {
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
                    <input className="loginInput" placeholder='Username'/>
                    <input className="loginInput" placeholder='Email'/>
                    <input className="loginInput" placeholder='password'/>
                    <input className="loginInput" placeholder='Password again'/>
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Log into account</button>


                </div>
            </div>
        </div>
    </div>
  )
}
