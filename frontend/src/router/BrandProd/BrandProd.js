import React, {useState, useEffect} from 'react'
// import "./BrandProd.css"
import axios from 'axios';
import BrandProdItem from './BrandProdItem';
// import { useStateValue } from '../../context/stateprovider/StateProvider';

const BrandProd = () => {
  // const [data, setData] = useState([]);
  // const [{ cart }, dispatch] = useStateValue();

  // const [{ cart }, dispatch] = useStateValue();
  const [bannerFiles, setBannerFiles] = useState(null)
  useEffect (()=>{
    setBannerFiles(null);

    axios.get("http://localhost:9000/brand/brandProducts/all")
    .then((bannerFiles)=> setBannerFiles(bannerFiles.data))
    .catch((err)=> console.error(err))
  }, [])

  return (
    <div>
      <div className="home_banner_wrapper">
      
      {
            bannerFiles?.slice(0,20).map((book, inx) =>
              <BrandProdItem key={inx} book={book} inx={inx}/>
            )
          
          }
       
          </div>
    </div>
  )
}

export default BrandProd