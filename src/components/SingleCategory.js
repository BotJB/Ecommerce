import React from 'react'
import "../assets/css/category.css"
const SingleCategory = ({item}) => {
  return (
    <div className='single-container'>
        <img src={item.img} alt="" />
        <h4>{item.title}</h4>


    </div>
  )
}

export default SingleCategory