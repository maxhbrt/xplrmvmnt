import React, { useState, useContext } from "react";
import "./SingleProduct.css";
import { Image } from "react-bootstrap";
import HoodieCollage from "./hoodie-collage.jpg";
import { CartContext } from "../../Context/CartContext";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const SingleProduct = (props) => {
  const [size, setSize] = useState("");

  const [color, setColor] = useState("baby-blue");

  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const shirt = { name: "spiral t-shirt", color: color, size: size };
    setCart((curr) => [...curr, shirt]);
  };
  const handleColor = (e) => {
    setColor(e.target.value);
  };
  const handleSize = (e) => {
    setSize(e.target.value);
  };

  return (
    <>
      <div className="detail-product-container">
        <Image
          src={
            "https://res.cloudinary.com/dl79laoab/image/upload/v1586139568/xplrmvmnt/shop-hoodie_egmozm.jpg"
          }
          fluid
        />
        <h3 className="single-shop-title">SPIRAL - HOODIE</h3>
        <div className="shirt-details">
          <FormControl>
            <h5>COLOR</h5>

            <Select
              native
              name={color}
              // value={values.color}
              onChange={handleColor}
            >
              <option value={"baby-blue"}>Baby-Blue</option>
              <option value={"dark-blue"}>Dark-Blue</option>
            </Select>
          </FormControl>

          <FormControl>
            <h5>SIZE</h5>

            <Select
              native
              name={size}
              // value={state.age}
              onChange={handleSize}
            >
              <option value={"S"}>S</option>
              <option value={"M"}>M</option>
              <option value={"L"}>L</option>
            </Select>
          </FormControl>
        </div>
        <div className="price-add">
          <div>$50.00</div>
          <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>

      <Image src={HoodieCollage} fluid />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </>
  );
};
export default SingleProduct;
