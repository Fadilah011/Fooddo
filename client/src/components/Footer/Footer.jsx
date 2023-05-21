import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "../../style/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="6">
            <div className="logo footer_logo text-start">
              <h5>Fooddo</h5>
              <p>
                Discover, Record, and Share Your Food Experiences with Fooddo
              </p>
            </div>
          </Col>
          <Col lg="4" md="7" sm="6">
            <h5 className="footer_title">Contact</h5>
            <ListGroup className="delivery_time-list">
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Location: Tanggerang.Banten.Indonesia</span>
              </ListGroupItem>
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Phone: 081295244740</span>
              </ListGroupItem>
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Email: fooddo@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title">NewsLetter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright_text">
              Copyright - 2023, webside made by Muhammad Fadilah. All Rights
              Reseverd.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="sosial_links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow:</p>
              <span>
                <Link to="">
                  <i className="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="">
                  <i className="ri-github-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="">
                  <i className="ri-youtube-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="">
                  <i className="ri-linkedin-box-fill"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
