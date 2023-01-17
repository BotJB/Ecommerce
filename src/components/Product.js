import React from 'react'
import { popularProducts } from '../data'
import '../assets/css/products.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Product = ({item}) => {
  return (
    <div className='single-popular-product'>
    <img src={item.img} alt="" />
    <div className="button-container">
    <ShoppingCartIcon className='btns' />
    <FavoriteBorderIcon className='btns'/>
    
    </div>
    

    </div>
  )
}

export default Product