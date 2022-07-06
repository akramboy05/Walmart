import React, { useState, useEffect } from "react";
// import "./BannerProd.css"
import axios from "axios";
// import SecondProdItem from './SecondProdItem';
import { useStateValue } from "../../context/stateprovider/StateProvider";
import { Link, useRouteMatch } from "react-router-dom";
import HealthProductsItem from "./HealthProductsItem"

const HealthProducts = () => {
  const [bannerFiles, setBannerFiles] = useState(null);
  const [data, setData] = useState([]);
  const [{ cart }, dispatch] = useStateValue();
  const { url } = useRouteMatch();

  useEffect(() => {
    setBannerFiles(null);

    axios
      .get("http://localhost:9000/second/secondProducts/all")
      .then((bannerFiles) => setBannerFiles(bannerFiles.data))
      .catch((err) => console.error(err));
  }, []);

  const addProduct = (product) => {
    let indexProduct = cart.findIndex((i) => i._id === product._id);
    if (indexProduct < 0) {
      let newProduct = {
        ...product,
        quantity: 1,
      };
      dispatch({ type: "ADD__PRODUCT", payload: [...cart, newProduct] });
    } else {
      let newCarts = cart.map((cartProduct, index) => {
        if (index === indexProduct) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        } else {
          return cartProduct;
        }
      });
      dispatch({ type: "ADD__PRODUCT", payload: newCarts });
    }
  };

  // console.log(bannerFiles);
  return (
    <div>
      <div className="home_banner_wrapper">
        {bannerFiles?.slice(0, 20).map((book, inx) => (
              <HealthProductsItem book={book} inx={inx}/> 
        ))}
      </div>
    </div>
  );
};

export default HealthProducts;
