import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import ProductImage from "./components/ProductImage/ProductImage";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import ProductImageDesktop from "./components/ProductImageDesktop/ProductImageDesktop";
import ModalDesktop from "./components/ModalDesktop/ModalDesktop";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  const handelModal = () => setShowModal(!showModal);

  const addToCart = (value) => setCartItems(value);
  const subtractFromCart = () => setCartItems(cartItems - 1);

  const deleteCart = () => setCartItems(0);

  return (
    <>
      <NavBar cartItems={cartItems} deleteCart={deleteCart} />
      <div className="main-container">
        <ProductImage />
        <ProductImageDesktop handelModal={handelModal} />
        <ModalDesktop showModal={showModal} handelModal={handelModal} />
        <ProductDescription
          cartItem={cartItems}
          addToCart={addToCart}
          subtractFromCart={subtractFromCart}
        />
      </div>
    </>
  );
}

export default App;