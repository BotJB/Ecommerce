import React from 'react'
import '../assets/css/intro.css'
const Intro = () => {
  return (
    <div className='intro-wrapper'>
        <div className='img-container'>
          <img src="https://i.ibb.co/cXFnLLV/3.png" alt="" />
        </div>
        <div className="info-container">
            <p>Welcome to fashion forever where you can buy latest 
                trending clothes Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero accusamus et nisi, quidem dolore esse, laudantium odit voluptatum at quaerat ut impedit nam ducimus quae sint molestias corrupti sunt cumque!
            </p>
            <button>Check the latest collection</button>
        </div>
    </div>
  )
}

export default Intro