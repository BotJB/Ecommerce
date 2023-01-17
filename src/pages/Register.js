import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import '../assets/css/register.css'
const Register = () => {
  return (
    <div className='container'>
        <Nav />
        <Announcement />
        <h3>Register Forms</h3>
        <div className="register-form">
            <input type="text" placeholder='first Name' />
            <input type="text" placeholder='Last Name' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='User name' />
            <input type="text" placeholder='password' />
            <input type="text" placeholder='Re Password' />
            <button>Register</button>
            <p>Already have an account? Login</p>
        </div>
        <Footer />

    </div>
  )
}

export default Register