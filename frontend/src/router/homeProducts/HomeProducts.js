import React, {useState, useEffect} from 'react'
import axios from 'axios';
// import "../Electronic.css"
import HomeProductsItem from "./HomeProductsItem"


const Electronics = () => {
  const [bannerFiles, setBannerFiles] = useState(null)


  console.log(bannerFiles);
  return (
    <div>
        <div className="electronic_reclam">
            <h1>Sizzling summer savings</h1>
            <p>Score hot finds at super-low prices now!</p>
        </div>
      <div className="electronics_wrapper">
        
        {
            bannerFiles?.slice(0,20).map((book, inx) =>
            <HomeProductsItem book={book} inx={inx} />

            )
          
          }
       
          </div>
    </div>
  )
}

export default Electronics