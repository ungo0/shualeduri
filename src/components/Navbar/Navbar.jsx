import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import menu from "../../assets/images/icon-menu.svg";
import { useState } from "react";
import ModalCart from "../Modalcart/ModalCart";
import ModalMenu from "../ModalMenu/ModalMenu";

const NavBar = ({ cartItems, deleteCart }) => {
    const [cartModalShow, setCartModalShow] = useState(false);
    const [menuModalShow, setMenuModalShow] = useState(false);

    const closeMenu = () => setMenuModalShow(!menuModalShow);
    return (
        <div className="navBar__container">
            <div className="navBar__container-wrapper">
                <div className="flex-c-g">
                    <img
                        className="menu"
                        src={menu}
                        alt={menu}
                        onClick={() => setMenuModalShow(!menuModalShow)}
                    />
                    <ModalMenu openMenu={menuModalShow} closeMenu={closeMenu} />
                    <img src={logo} alt={logo} />
                    <div className="navLinks">
                        {["Collection", "Man", "Women", "About", "Contact"].map(
                            (item, index) => (
                                <a key={`${item}-${index}`} href="/">
                                    {item}
                                </a>
                            )
                        )}
                    </div>
                </div>
                <div className="flex-c-g">
                    <div className="cart-wrapper">
                        <div className={cartItems !== 0 ? "cart-items" : "hidden"}>
                            {cartItems}
                        </div>
                        <img
                            src={cart}
                            alt={cart}
                            onClick={() => setCartModalShow(!cartModalShow)}
                        />
                        <ModalCart
                            modalCartShow={cartModalShow}
                            items={cartItems}
                            deleteCart={deleteCart}
                        />
                    </div>
                    <img className="avatar" src={avatar} alt={avatar} />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
