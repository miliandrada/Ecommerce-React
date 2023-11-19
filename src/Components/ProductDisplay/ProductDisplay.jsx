import React, { useContext } from "react";
import "./ProductDisplay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  
  const {product} = props;
 const {addToCart} = useContext(ShopContext);
 
 return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
            A lightweight, usually knitted, pollover shirt, close-fitting and while a around neckline and short sleeves, worn as an undershirt or outer garment.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>37</div>
                <div>38</div>
                <div>39</div>
                <div>40</div>
                <div>41</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category : </span>Women, T-Shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags : </span>Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
