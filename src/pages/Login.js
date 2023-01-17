import React from 'react'
import Nav from '../components/Nav'
import Announcement from '../components/Announcement'
import '../assets/css/register.css'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
const Login = () => {
  return (
    <div className='container'>
        <Nav />
        <Announcement />
        <h3>Register Forms</h3>
        <div className="register-form">
           
            <input type="text" placeholder='User name' />
            <input type="text" placeholder='password' />
            
            <button>Login</button>
            <p>Dont have an account? Sign Up</p>
        </div>
        <Newsletter />
        <Footer />
    </div>
  

  )
}

export default Login