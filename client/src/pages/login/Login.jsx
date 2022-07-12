import React, { useRef } from 'react'
import './login.css'
export default function Login() {
    const email = useRef();
    const password = useRef();

    const handleClick = (e)=>{
        e.preventDefault();
        console.log(email.current.value);

    }

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
                <form className="loginBox" onSubmit={handleClick}>
                    <input className="loginInput" placeholder='Email' type="email" ref={email} required/>
                    <input className="loginInput" placeholder='Password' type="password" ref={password} minLength='6' required/>
                    <button className="loginButton">Login</button>
                    <span className="loginForgot">Forget password</span>
                    <button className="loginRegisterButton">Create new account</button>


                </form>
            </div>
        </div>
    </div>
  )
}
