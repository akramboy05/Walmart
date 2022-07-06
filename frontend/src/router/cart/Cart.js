import React from "react";
import "./Cart.css";
import { useStateValue } from "../../context/stateprovider/StateProvider";
import { FiX } from "react-icons/fi";

function Cart() {
  const [{ cart }, dispatch] = useStateValue();
  // const res = [...new Set(cart)];
  const total = cart.reduce((a, b) => a + b.fileName * b.quantity, 0);
  const incr = (product) => {
    let indexProduct = cart.findIndex((i) => i._id === product._id);
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
  };

  const decr = (product) => {
    let indexProduct = cart.findIndex((i) => i._id === product._id);
    let newCarts = [];
    cart.forEach((cartProduct, index) => {
      if (index === indexProduct) {
        if (cartProduct.quantity <= 1) {
          clearProduct(product._id);
        } else {
          newCarts.push({
            ...cartProduct,
            quantity: cartProduct.quantity - 1,
          });
        }
      } else {
        newCarts.push(cartProduct);
      }
    });
    dispatch({ type: "ADD__PRODUCT", payload: newCarts });
  };

  const clearProduct = (id) => {
    let indexProduct = cart.findIndex((i) => i._id === id);
    let newCart = [
      ...cart.slice(0, indexProduct),
      ...cart.slice(indexProduct + 1),
    ];
    dispatch({ type: "ADD__PRODUCT", payload: newCart });
  };
  const clearItem = () => {
    const empty = [];
    dispatch({ type: "ADD__PRODUCT", payload: empty });
  };
  //style={{ textAlign: "center", marginTop: "20px" }}
  return (
    <div className="Cart">
      <div className="cart">
      <h1 className="cart_start">Pickup or delivery from store, as soon as today</h1>
      {<h1>Your Cart is Empty</h1> &&
        cart.map((i, inx) => (
          <div key={inx} className="cart___item">
         
            <img src={i.fileImage} alt="" />
            <h3>{i.fileText}</h3>
          
            <p className="cart__price">{i.fileName}</p>
            <h4 className="cart__total__count">
              Total $ {i.fileName * i.quantity}
            </h4>
            <h2 className="cart__clear" onClick={() => clearProduct(i._id)}>
              <FiX />
            </h2>
            <div className="counter">
              <button onClick={() => decr(i)} className="remove__product__btn">
              -
              </button>
              <h3>{i.quantity}</h3>
              <button onClick={() => incr(i)} className="add__product__btn">
               +
              </button>
            </div>
          </div>
        ))}
      {cart.length > 0 ? (
        <div className="total__container">
          <h2>Total price: $ {total}</h2>
          <button className="clear__btn" onClick={clearItem}>
            Clear Cart
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
    </div>
  );
}

export default Cart;
