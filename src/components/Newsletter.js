import React from 'react'
import "../assets/css/newsletter.css"
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const Newsletter = () => {
  return (
    <div className='newsletter-container'>
        <h1>Newsletter</h1>
        <h4>Get latest updates on sales and best prices</h4>
        <div className="search-components">
        <TextField className='signup-btn' id="outlined-basic" label="Enter Email" variant="outlined" />
        <SendIcon className='send-icon' />

        </div>
    </div>
  )
}

export default Newsletter