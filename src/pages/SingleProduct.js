import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Newsletter from '../components/Newsletter'
import '../assets/css/singleProduct.css'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const SingleProduct = () => {
  return (
    <div className='container'>
    <Nav />
    <Announcement />
    <div className="wrapper">
    <div className="image-container">
            <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
        </div>
    
        
        <div className="info-container">
            <h3>Denim Jeans</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem expedita laudantium in officia iure. Harum ducimus culpa eveniet, iste distinctio est similique molestias laudantium quibusdam voluptatibus quis necessitatibus modi voluptate.</p>
           <h4>Price: 20$</h4>
           <div className="settings">
           <select>
            <option selected>Size</option>
            <option >XL</option>
            <option >L</option>
            <option >M</option>
            <option >S</option>
            <option >XS</option>
           </select>
           <div className="quantity">
          <RemoveIcon />
          <p>1</p>
         <AddIcon />
           </div>
           </div>
           <button className='btn-buy'>Add to Cart</button>
        </div>
        </div>
   

<Newsletter />
<Footer />
</div>
  )
}

export default SingleProduct