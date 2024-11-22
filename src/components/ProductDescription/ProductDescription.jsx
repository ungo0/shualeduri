import "./ProductDescription.css";
import cart from "../../assets/images/icon-cart-button.svg";
import minus from "../../assets/images/icon-minus.svg";
import plus from "../../assets/images/icon-plus.svg";
import { ProductData } from "../../ProductData";
import { useState } from "react";

const ProductDescription = ({ addToCart, subtractFromCart, cartItem }) => {
    const [items, setItems] = useState(0);

    const { subtitle, title, description, price } = ProductData;

    return (
        <div className="productDescription__container">
            <div className="description-wrapper">
                <h3>{subtitle}</h3>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="price-container">
                    <div className="price-wrapper">
                        <strong>${price}.00</strong>
                        <p>50%</p>
                    </div>
                    <strong className="price-sale">$250.00</strong>
                </div>
                <div className="buttons">
                    <div className="input-wrapper">
                        <input type="number" value={items} onChange={() => { }} />
                        <div className="minus-plus">
                            <img
                                src={minus}
                                alt="minus"
                                onClick={() => {
                                    if (items === 0) return;
                                    setItems(items - 1);
                                    subtractFromCart(cartItem);
                                }}
                            ></img>
                            <img
                                src={plus}
                                alt="plus"
                                onClick={() => setItems(items + 1)}
                            ></img>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            addToCart(items);
                            setItems(0);
                        }}
                        disabled={items === 0}
                    >
                        <img src={cart} alt="cart"></img>Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
