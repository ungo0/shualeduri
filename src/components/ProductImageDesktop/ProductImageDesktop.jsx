import { useState } from "react";
import "./ProductImageDesktop.css";
import img1 from "../../assets/images/image-product-1.jpg";
import img2 from "../../assets/images/image-product-2.jpg";
import img3 from "../../assets/images/image-product-3.jpg";
import img4 from "../../assets/images/image-product-4.jpg";
import imgBlur2 from "../../assets/images/image-product-2-thumbnail.jpg";
import imgBlur1 from "../../assets/images/image-product-1-thumbnail.jpg";
import imgBlur3 from "../../assets/images/image-product-3-thumbnail.jpg";
import imgBlur4 from "../../assets/images/image-product-4-thumbnail.jpg";

const ProductImageDesktop = ({ handelModal }) => {
    const [imgToShow, setImgToShow] = useState(0);
    const prodImgs = [img1, img2, img3, img4];
    const prodImgsBlur = [imgBlur1, imgBlur2, imgBlur3, imgBlur4];
    return (
        <div className="desktop-container">
            <div className="img-to-show-wrapper" onClick={handelModal}>
                <img src={prodImgs[imgToShow]} alt="prod-to-show"></img>
            </div>
            <div className="img-blur-list">
                {prodImgsBlur.map((img, i) => (
                    <button key={i} onClick={() => setImgToShow(i)}>
                        <img key={i} src={img} alt="prod" />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductImageDesktop;
