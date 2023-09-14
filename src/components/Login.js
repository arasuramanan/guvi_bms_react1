import React from 'react'

function Login() {
  return (
    <>
    <h1>Login Form</h1>
    <label htmlFor='email'>
        Email:
    </label>
    <input type="email" name="" id="email" />
     <br />
    <label htmlFor='pass1'>
        Password:
    </label>
    <input type="password" name="" id="pass1" />
     <br />
     <button type="submit">Login</button>


    </>
  )
}

export default Login