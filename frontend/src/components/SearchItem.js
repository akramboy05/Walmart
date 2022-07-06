import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import Zoom from '../router/zoomImage/Zoom'
import {AiFillStar, AiOutlineStar, AiOutlineCar, AiOutlineHeart} from "react-icons/ai"
import {GiPresent} from "react-icons/gi"
import {IoIosStarHalf} from "react-icons/io"
import {RiMapPin2Line} from "react-icons/ri"
import {MdOutlineShoppingBag} from "react-icons/md"
import {GrZoomIn} from "react-icons/gr"


function SearchItem() {
  const params = useParams();
  console.log(params);
  const [searchedFile, setSearchedFile] = useState(null);
  useEffect(() => {
      if(params?.itemId){
          axios.get(`http://localhost:9000/brand/brandProducts/${params?.itemId}`)
          .then(response => setSearchedFile(response?.data))
          .catch(err => console.log(err))
      }
  }, [params?.itemId])
  console.log(searchedFile);
  return (
    <div className='single_page'>
        <div className="productImage">
        <Zoom image={searchedFile?.fileImage} alt="" />
        <GrZoomIn/>
        </div>
        <div className="productText">
          <span>Popular pick</span>
          <a href="aa">Great Value</a>
         <h3>{searchedFile?.fileText}</h3>
         <div className="stars"> 
                   <AiFillStar/>
                   <AiFillStar/>
                   <AiFillStar/>
                   <AiFillStar/>
                   <IoIosStarHalf/>
                   <AiOutlineStar/>
           <p>(3.5) 1641 reviews</p>
         </div>
         <h1>{searchedFile?.fileName}</h1>
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
  );
}

export default SearchItem;