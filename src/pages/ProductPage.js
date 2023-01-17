import React from 'react'
import "../index.css"
import Nav from '../components/Nav'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Products from '../components/Products'
const ProductPage = () => {
  return (
   <div className="container">
    <Nav />
    <Announcement />
    <h1>Browse our collection</h1>
    <div className="filter-container">
        <div className="filter"><p>Filter By</p>
        <select>
            <option disabled selected>
                Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Blue</option>
            <option>Yellow</option>
        </select>
        </div>
        <div className="filter"><p> Sort By</p>
        <select>
            <option disabled selected>
                Color
            </option>
            <option>Xl</option>
            <option>L</option>
            <option>M</option>
            <option>S</option>
            <option>XS</option>
        </select>
        </div>
    </div>
    <Products />
    <Newsletter />
    <Footer />
   </div>
   
  )
}

export default ProductPage