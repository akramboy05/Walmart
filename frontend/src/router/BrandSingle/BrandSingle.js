import React, { useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"
import {AiFillStar, AiOutlineStar, AiOutlineCar, AiOutlineHeart} from "react-icons/ai"
import {IoIosStarHalf} from "react-icons/io"
import {RiMapPin2Line} from "react-icons/ri"
import {MdOutlineShoppingBag} from "react-icons/md"
import {GiPresent} from "react-icons/gi"
import Zoom from '../zoomImage/Zoom'
import {GrZoomIn} from "react-icons/gr"


function ProductSingle() {
    const params = useParams();
    const [singleFile, setSingleFile] = useState(null)
    useEffect (()=>{
      axios
      .get(`http://localhost:9000/brand/brandProducts/${params.id}`)
      .then((bannerFiles)=> setSingleFile(bannerFiles.data))
      .catch((err)=> console.error(err))
    }, [params.id])
    return (
        <div className='single_page'>
        <div className="productImage">
        <Zoom image={singleFile?.fileImage} alt="" />
        <GrZoomIn/>
        </div>
        <div className="productText">
          <span>Popular pick</span>
          <a href="aa">Great Value</a>
         <h3>{singleFile?.fileText}</h3>
         <div className="stars"> 
                   <AiFillStar/>
                   <AiFillStar/>
                   <AiFillStar/>
                   <AiFillStar/>
                   <IoIosStarHalf/>
                   <AiOutlineStar/>
           <p>(3.5) 1641 reviews</p>
         </div>
         <h1>{singleFile?.fileName}</h1>
         <button  className='addButton'>
           Add To Cart
         </button>
         <div className="product_links">
           <p ><AiOutlineCar/> Pickup at <a href="ll">Sacramento Supercenter</a></p>
           <p><RiMapPin2Line/> Aisle A29</p>
           <p><MdOutlineShoppingBag/> Delivery from store <a href="ww">Check eligiblity</a></p>
         </div>
         <div className="product_add_lists">
           <p><AiOutlineHeart/><a href="ll">Add to list</a></p>
           <p><GiPresent/><a href="ll">Add to registry</a></p>
         </div>
        </div>
       </div>
  )
}

export default ProductSingle