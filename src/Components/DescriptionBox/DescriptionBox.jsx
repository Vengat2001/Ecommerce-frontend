import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
     <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Descriptionbox</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
     </div>
     <div className="descriptionbox-description">
      <p>An e-commerce website is essentially an online store. 
        It's the digital equivalent of a brick-and-mortar shop, 
        allowing businesses to sell products or services directly 
        to consumers over the internet. </p>
        <p>
        E-commerce websites have become a popular shopping destination for a multitude of reasons. 
        The sheer convenience is a major draw, allowing you to browse products and make purchases from the comfort of your couch, 
        24/7. 
        </p>
     </div>
    </div>
  )
}

export default DescriptionBox