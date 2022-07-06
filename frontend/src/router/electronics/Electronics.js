import React, {useState, useEffect} from 'react'
import axios from 'axios';
import "./Electronic.css"
import ElectronicsItem from './ElectronicsItem';


const Electronics = () => {
  const [bannerFiles, setBannerFiles] = useState(null)
  useEffect (()=>{
    setBannerFiles(null);

    axios.get("http://localhost:9000/brand/brandProducts/all")
    .then((bannerFiles)=> setBannerFiles(bannerFiles.data))
    .catch((err)=> console.error(err))
  }, [])

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
            <ElectronicsItem book={book} inx={inx} />

            )
          
          }
       
          </div>
    </div>
  )
}

export default Electronics