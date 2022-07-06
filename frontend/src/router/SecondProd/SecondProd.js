import React, { useState, useEffect } from "react";
import axios from "axios";
import SecondProdItem from "./SecondProdItem";

const SecondProd = () => {
  const [bannerFiles, setBannerFiles] = useState(null);
  
  useEffect(() => {
    setBannerFiles(null);

    axios
      .get("http://localhost:9000/second/secondProducts/all")
      .then((bannerFiles) => setBannerFiles(bannerFiles.data))
      .catch((err) => console.error(err));
  }, []);

  // console.log(bannerFiles);
  return (
    <div>
      <div className="home_banner_wrapper">
        {bannerFiles?.slice(0, 20).map((book, inx) => (
              <SecondProdItem key={inx} book={book} inx={inx}/> 
        ))}
      </div>
    </div>
  );
};

export default SecondProd;
