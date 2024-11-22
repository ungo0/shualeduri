import "./ProductImage.css";
import img1 from "../../assets/images/image-product-1.jpg";
import img2 from "../../assets/images/image-product-2.jpg";
import img3 from "../../assets/images/image-product-3.jpg";
import img4 from "../../assets/images/image-product-4.jpg";
import prev from "../../assets/images/icon-previous.svg";
import next from "../../assets/images/icon-next.svg";
import { useState } from "react";

const ProductImage = () => {
    const [imgUrl, setImgUrl] = useState(0);
    const prodImgs = [img1, img2, img3, img4];

    return (
        <div className="productImage__container">
            <img src={prodImgs[imgUrl]} alt="productImage" />
            <div className="arrows">
                <button
                    className="arrow"
                    disabled={imgUrl === 0}
                    onClick={() => setImgUrl(imgUrl - 1)}
                >
                    <img src={prev} alt="arrowPrev"></img>
                </button>
                <button
                    className="arrow"
                    disabled={imgUrl >= prodImgs.length - 1}
                    onClick={() => setImgUrl(imgUrl + 1)}
                >
                    <img src={next} alt="arrowNext"></img>
                </button>
            </div>
        </div>
    );
};

export default ProductImage;
