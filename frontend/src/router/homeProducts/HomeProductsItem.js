import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import {AiFillStar} from "react-icons/ai"
import {BsStarHalf, BsStar} from "react-icons/bs"


const ElectronicsItem = ({book}) => {
  const { url } = useRouteMatch();

  
  
  return (
    <div> <Link  to={`${url}/${book._id}`} >
    <div  className="product_box2" >
    <img src={book.fileImage} alt="" />
     <h1>{book.fileName}</h1>
     <p>{book.fileText}</p>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <BsStarHalf/>
      <BsStar/>
      <div className="product_box_links">
      <a href="aa">Pickup</a> <a href="aa">Delivery</a>
      
      </div>
    {/* <h4>{book.fileOwner}</h4>  */}
  </div>
</Link></div>
  )
}

export default ElectronicsItem