import React from 'react'
import { categories } from '../data'
import SingleCategory from './SingleCategory'
import "../assets/css/category.css"
const Categories = () => {
    return (
        <div>
            <h1 className='heading'>Shop By Categories</h1>
        <div className='category-container'>{categories.map(item=>{
            return(
                <SingleCategory item={item} key={item.id} />
            )
        })}</div>
        </div>
      )
}

export default Categories
