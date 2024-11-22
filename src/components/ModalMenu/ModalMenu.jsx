import "./ModalMenu.css";
import close from "../../assets/images/icon-close-menu.svg";

const ModalMenu = ({ openMenu, closeMenu }) => {
    return (
        <div
            className={
                openMenu ? "modal-menu-container open-menu" : "modal-menu-container"
            }
        >
            <div className="wrapper">
                <img src={close} alt="close" onClick={closeMenu} />
                {["Collection", "Man", "Women", "About", "Contact"].map(
                    (item, index) => (
                        <a key={`${item}-${index}`} href="/">
                            {item}
                        </a>
                    )
                )}
            </div>
        </div>
    );
};

export default ModalMenu;
