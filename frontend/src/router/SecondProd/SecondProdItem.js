import React, {useState} from 'react'
import {AiFillStar} from "react-icons/ai"
import {BsStarHalf, BsStar} from "react-icons/bs"
// import { useStateValue } from "../../context/stateprovider/StateProvider";
import { Link, useRouteMatch } from 'react-router-dom'
import { useStateValue } from '../../context/stateprovider/StateProvider';



const SecondProdItem = ({book, inx}) => {
  const { url } = useRouteMatch();
  const [{ cart }, dispatch] = useStateValue();


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

  return (
    <div> 
        <Link key={inx} to={`${url}/secondProducts/${book._id}`} >
          
              <div key={inx}  className="product_box" >
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
        </Link>
    </div>
  )
}

export default SecondProdItem