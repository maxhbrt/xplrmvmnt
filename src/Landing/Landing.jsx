import React, { Component } from "react";
import "./landing.scss";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import shirtCollage from "./shirt-collage.jpg";
import hoodieCollage from "./hoodie-collage.jpg";
import logo from "./finalfinal.jpg";
import { Container, Image, Navbar, Nav, Col, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  render() {
    return (
      <>
        <div className="body">
          <Container className="d-flex justify-content-center">
            <Image src={logo} alt="logo" fluid />
          </Container>

          <div className="shop-now">
            <h1 className="brand-heading">XPLRMVMNT 2020</h1>
            <h2>Hoodies</h2>
<Link to={'/shop'}>
            <button className="shopnow-button">SHOP NOW</button>
            </Link>
          </div>

          <div className="youtube-container">
            <div className="youtube-header">
              <h3>Youtube_</h3>
            </div>
            <Row>
              <Col>
                <Image
                  fluid
                  className="youtube"
                  src={"http://img.youtube.com/vi/ZEY3TFl9QhA/0.jpg"}
                />
              </Col>
              <Col>
                <Image
                  fluid
                  className="youtube"
                  src={"http://img.youtube.com/vi/ALvCw3jCOj4/0.jpg"}
                />
              </Col>
              <Col>
                <Image
                  fluid
                  className="youtube"
                  src={"http://img.youtube.com/vi/o9KLtD0CzJU/0.jpg"}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Image
                  fluid
                  className="youtube"
                  src={"http://img.youtube.com/vi/rGWQgTYcjlQ/0.jpg"}
                />
              </Col>
              <Col>
                <Image
                  fluid
                  className="youtube"
                  src={"http://img.youtube.com/vi/gNifeO1bX0E/0.jpg"}
                />
              </Col>
              <Col>
                <Image
                  fluid
                  className="youtube"
                  src={"http://img.youtube.com/vi/wyKoUBdKg5o/0.jpg"}
                />
              </Col>
            </Row>
          </div>
          <Container className="d-flex justify-content-center">
            <Image src={shirtCollage} alt="logo" fluid />
          </Container>
          <div className="collage-info">
            <div>XPLRMVMNT 2020 - T</div>
            <button className="moreinfo-button">More Details</button>
          </div>
          <Container className="d-flex justify-content-center">
            <Image src={hoodieCollage} alt="logo" fluid />
          </Container>
          <div className="collage-info-hoodies">
            <div>View 2020 Hoodies</div>
          </div>
          <div className="aboutus-outer-container">
            <div className="aboutus-container">
              <div>WHAT IS XPLRMVMNT ?</div>
              <button className="findout-button">FIND OUT</button>
            </div>
          </div>

          <div className="connect-outer-container">
            <div className="connect-container">
              <div className="connect-with-us">
                <div>CONNECT WITH US</div>
                <div className="react-icons">
                  <FiInstagram size={32} />
                  <FiYoutube size={32} />
                  <FiTwitter size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Landing;
