import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf, BsStar } from "react-icons/bs";
import { useStateValue } from "../../context/stateprovider/StateProvider";

const BrandProdItem = ({ book, inx }) => {
  const { url } = useRouteMatch();
  const [{ cart }, dispatch] = useStateValue();
  const [buy, setBuy] = useState(0);

  const addProduct = (product) => {
      setBuy(buy +1)
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

  
  return (
    <div>
      <div className="product_box">
          {
              buy === 0 ? 
              <button onClick={() => addProduct(book)} className="addBtn"> + Add </button>
                :
            <div className="twoAddBtn">
                <button onClick={()=>setBuy(buy - 1)}>-</button>
                <p>{buy}</p>
                <button onClick={() => addProduct(book)}>+</button>
            </div>
            }
        <Link key={inx} to={`${url}/brandProd/${book._id}`}>
          <img src={book.fileImage} alt="" />
          <h1>{book.fileName}</h1>
          <p>{book.fileText}</p>
        </Link>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <BsStarHalf />
        <BsStar />
        <div className="product_box_links">
          <a href="aa">Pickup</a> <a href="aa">Delivery</a>
        </div>
      </div>
    </div>
  );
};

export default BrandProdItem;
