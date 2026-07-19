import React, { useState } from 'react'
import "./LoginRegister.css"
import { FaUserAlt , FaLock ,FaEnvelope } from "react-icons/fa";



const LoginRegister = () => {

  const [action, setAction] = useState('')

  const registerLink = (e) => {
      e.preventDefault()
      setAction('active')
    }
  const loginLink = (e) => {
    e.preventDefault()
    setAction('')
    }  



  return (
    <div className={`wrapper ${action}`}>
      <div className="form-box login">
        <form action="">
            <h1>Login</h1>
            <div className='input-box'>
                <input type="text" placeholder='Username' required/>
                <FaUserAlt className='icon' />

            </div>
            <div className='input-box'>
                <input type="Password" placeholder='Password' required/>
                <FaLock  className='icon'/>

            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />
                    Remember Me
                </label>
                <a href="/">Forgot Password?</a>
            </div>
            <button type='submit'>Login</button>
            <div className='Register-Link'>
                <p>Don't have an acoount? <a href="/" onClick={registerLink}>Register</a></p> 
            </div>
        </form>
      </div>

      <div className="form-box register">
        <form action="">
            <h1>Registration</h1>
            <div className='input-box'>
                <input type="text" placeholder='Username' required/>
                <FaUserAlt className='icon' />

            </div>
            <div className='input-box'>
                <input type="email" placeholder='Email' required/>
                <FaEnvelope className='icon' />

            </div>
            <div className='input-box'>
                <input type="Password" placeholder='Password' required/>
                <FaLock  className='icon'/>

            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />
                    I agree to the terms & conditions
                </label>
                <a href="/"></a>
            </div>
            <button type='submit'>Register</button>
            <div className='Register-Link'>
                <p>Already have an acoount? <a href="/" onClick={loginLink}>Login</a></p>
                 
            </div>
        </form>
      </div>
    </div>
  )
}

export default LoginRegister
