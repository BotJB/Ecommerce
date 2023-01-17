import React from 'react'
import Nav from '../components/Nav'
import Intro from '../components/Intro'
import Products from '../components/Products'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
const Home = () => {
  return (
    <div>
        <Nav />
        <Announcement />
        <Intro />
       <Categories />
       <Products />
       <Newsletter />
       <Footer />
    </div>
  )
}

export default Home