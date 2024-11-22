import "./ModalDesktop.css";
import ProductImageDesktop from "../ProductImageDesktop/ProductImageDesktop";
import close from "../../assets/images/icon-close.svg";

const ModalDesktop = ({ showModal, handelModal }) => {
    return (
        <div className={showModal ? "modal-container show" : "modal-container"}>
            <button onClick={handelModal}>
                <img src={close} alt="close" />
            </button>
            <ProductImageDesktop />
        </div>
    );
};

export default ModalDesktop;
