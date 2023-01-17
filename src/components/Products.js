import React from 'react'
import { categories } from '../data'
import Product from './Product'
import { popularProducts } from '../data'
import '../assets/css/products.css'

const Products = () => {
  return (
    <div className='popular-products-container'>
       {popularProducts.map(item=>{
      return(
            <Product item={item} />
      )
     })}
    </div>
  )
}

export default Products