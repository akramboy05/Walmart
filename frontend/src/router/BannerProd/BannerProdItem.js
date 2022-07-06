import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import {AiFillStar} from "react-icons/ai"
import {BsStarHalf, BsStar} from "react-icons/bs"
import { useStateValue } from '../../context/stateprovider/StateProvider';



const BannerProdItem = ({book}) => {
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
         
              <div  className="product_box" >
              <button onClick={()=> addProduct(book)} className='addBtn'>+ Add</button>

              <Link to={`${url}/bannerProd/${book._id}`} >
              <img src={book.fileImage} alt="" />
               <h1>{book.fileName}</h1>
               <p>{book.fileText}</p>
               </Link>

                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <BsStarHalf/>
                <BsStar/>

                <div className="product_box_links">
                <a href="aa">Pickup</a> <a href="aa">Delivery</a>
               
                </div>
            </div>
     
        
    </div>
  )
}

export default BannerProdItem