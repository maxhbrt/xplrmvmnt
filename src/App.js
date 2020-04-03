import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import routes from "./routes";
import "./App.css";
import { CartContext } from "./Context/CartContext";

import { Container, Image, Navbar, Nav, Col, Row } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
function App() {
  const [cart, setCart] = useContext(CartContext);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">XPLRMVMNT</Link>
        <h1>{cart.length}</h1>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/shop">SHOP</Link>
            <Link href="#pricing">ABOUT</Link>
            <Link href="#pricing">CONTACT</Link>
          </Nav>
          <Nav>
            <Link href="#deets">
              <FaShoppingCart />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="App">{routes}</div>
      <div className="footerr">
        <div>© 2020 EXPLRMVMNT</div>
        <div>POWERED BY MAXOSCHEME</div>
      </div>
    </>
  );
}

export default App;
