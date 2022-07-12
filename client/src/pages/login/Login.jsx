import React, { useRef, useContext } from 'react'
import './login.css'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import { CircularProgress } from '@mui/material'

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext)

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    }
    console.log(user);
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
                        <input className="loginInput" placeholder='Email' type="email" ref={email} autoComplete="on" required />
                        <input className="loginInput" placeholder='Password' type="password" ref={password} minLength='6' autoComplete='on' required />
                        <button className="loginButton" type='submit' disabled={isFetching}>{isFetching ? <CircularProgress /> : "Log in"}</button>
                    <span className="loginForgot">Forget password</span>
                    <button className="loginRegisterButton">{isFetching ? <CircularProgress /> : "Create new account"}</button>


                </form>
            </div>
        </div>
        </div >
    )
}
