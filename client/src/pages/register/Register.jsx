import axios from 'axios';
import React, { useRef } from 'react'
import './registre.css'

import {Navigate, useNavigate} from 'react-router-dom'


export default function Register() {
  const navigate = useNavigate();


    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    // const history = useHisto

    const handleClick = async (e) => {
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Password don't match!")
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try{
                
                const res = await axios.post("auth/register", user)
                navigate("/login");

            }catch(err){

            }
        }
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
                    <input className="loginInput" placeholder='Username' ref={username} autoComplete="on" required/>
                    <input className="loginInput" placeholder='Email' type="email" ref={email}  autoComplete="on" required/>
                    <input className="loginInput" placeholder='password' type="password" ref={password} minLength='6'  autoComplete="on" required/>
                    <input className="loginInput" placeholder='Password again' type="password" ref={passwordAgain}  autoComplete="on" required/>
                    <button className="loginButton" type='submit'>Sign Up</button>
                    <button className="loginRegisterButton">Log into account</button>


                </form>
            </div>
        </div>
    </div>
  )
}
