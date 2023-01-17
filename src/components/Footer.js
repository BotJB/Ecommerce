import React from 'react'
import "../assets/css/footer.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
const Footer = () => {
  return (
<div className='wrapper'>
<div className='left'>
    <h2>ForeEVer FasHion</h2>
    <p>Place where you always find the <br />
         trending clothes and latest offers <br />
         Search among different categories
         </p>
    <div className='socials'>
        <FacebookOutlinedIcon/>
        <TwitterIcon />
        <InstagramIcon />
    </div>
</div>
<div className="center">
    <h2>Useful Links</h2>
    <ul>
        <li>Cart</li>
        <li>Home</li>
        <li>Wishlist</li>
        <li>My Account</li>
    </ul>
</div>
<div className="right">
    <h2>Contact</h2>
    <div className="address-field"> <BusinessIcon className='address-logo' /><p> 468 Darwis Road,Toronto</p></div>
    <div className="address-field"> <PhoneIcon className='address-logo' /><p> +1 (889)-224-7879</p></div>
    <div className="address-field"> <MailIcon className='address-logo' /><p> Customer@Support</p></div>


</div>

    </div>
  )
}

export default Footer