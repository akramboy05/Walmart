import React, {useState, useEffect} from 'react'
import "./BannerProd.css"
import axios from 'axios';
import BannerProdItem from './BannerProdItem';


const BannerProd = () => {
  const [bannerFiles, setBannerFiles] = useState(null)
  useEffect (()=>{
    setBannerFiles(null);

    axios.get("http://localhost:9000/create/bannerProducts")
    .then((bannerFiles)=> setBannerFiles(bannerFiles.data))
    .catch((err)=> console.error(err))
  }, [])

  return (
    <div>
      <div className="home_banner_wrapper">
      
        {
            bannerFiles?.slice(0,20).map((book, inx) =>
              <BannerProdItem key={inx} book={book} inx={inx}/>
              
            )
          
          }
       
          </div>
    </div>
  )
}

export default BannerProd