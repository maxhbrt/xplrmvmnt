import React, { Component, useContext } from "react";
import "./SingleProduct.css";
import { Dropdown, Image } from "react-bootstrap";
import shopHoodie from "./shop-hoodie.jpg";
import HoodieCollage from "./hoodie-collage.jpg";
import { CartContext } from "../../Context/CartContext";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const SingleProduct = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    const shirt = { name: "spiral" };
    setCart((curr) => [...curr, shirt]);
  };
  return (
    <>
      <div className="detail-product-container">
        <Image src={shopHoodie} fluid />
        <h3>SPIRAL - HOODIE</h3>
        <div className="shirt-details">
        <FormControl >
          <h5>COLOR</h5>
          
          <Select
            native
            // value={state.age}
            // onChange={handleChange}
            // inputProps={{
            //   name: "age",
            //   id: "age-native-simple",
            // }}
          >
           
            <option value={10}>Baby-Blue</option>
            <option value={20}>Dark-Blue</option>
           
          </Select>
        </FormControl>

        <FormControl >
          <h5>SIZE</h5>
          
          <Select
            native
            // value={state.age}
            // onChange={handleChange}
            // inputProps={{
            //   name: "age",
            //   id: "age-native-simple",
            // }}
          >
           
            <option value={10}>S</option>
            <option value={20}>M</option>
            <option value={30}>L</option>
          </Select>
        </FormControl>
        </div>
        <div className="price-add">
          <div>$50.00</div>
          <button onClick={addToCart}>Add to Cart</button>
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
