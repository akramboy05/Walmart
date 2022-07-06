import React, { useEffect, useState } from "react";
import "./Axios.css";
import axios from "axios";
import { useStateValue } from "../../context/stateprovider/StateProvider";

function Axios() {
    const [data, setData] = useState([]);
    const [ {cart} , dispatch] = useStateValue();
    
    useEffect(() => {
        axios
            .get("https://fortniteapi.io/v2/shop?lang=en", {
                headers: {
                    Authorization: "0c13c2aa-0a2cec03-b5455c56-766ae857",
                },
            })
            .then((res) => setData(res.data.shop))
            .catch((err) => console.log(err));
    }, []);

    const addProduct = (product) => {
        let indexProduct = cart.findIndex((i) => i.mainId === product.mainId);
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
    console.log(data);
    return (
        <div className="container">
            {data?.map((pro) => (
                <div className="card" key={pro.mainId}>
                    <img src={pro.displayAssets[0].full_background} alt="" />
                    <h4 className="title">{pro.displayName}</h4>
                    {/* <p className="final">$ {pro.price.finalPrice.brm()}</p>
                    <p className="regular">$ {pro.price.regularPrice.brm()}</p> */}
                    <button onClick={() => addProduct(pro)} className="add">
                        Add to Cart
                    </button>
                </div>
            ))}{" "}
        </div>
    );
}

export default Axios;
