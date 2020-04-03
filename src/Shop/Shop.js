import React, { Component } from "react";
import "./Shop.css";
import { Container, Image } from "react-bootstrap";
import shopHoodie from "./shop-hoodie.jpg";
import shopT from "./shop-t.jpg";
import { Link } from "react-router-dom";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }
  render() {
    return (
      <>
        <div className="all-products">ALL PRODUCTS</div>
        <div className="all-items-flex">
          <div className="single-product">
<Link to="/singleProduct">
            <Image src={shopHoodie} fluid />
            </Link>
            <h3 className="item-heading">SPIRAL - HOODIE - BLUE</h3>
            <div className="price">$50.00</div>
          </div>
          <div className="single-product">
            <Image src={shopT} fluid />
            <h3 className="item-heading">SPIRAL - T - RED</h3>
            <div className="price">$50.00</div>
          </div>
        </div>
      </>
    );
  }
}

export default Shop;
