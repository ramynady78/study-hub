import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
            © 2024 Course Platform. Empowering learners worldwide
             with top-notch courses and resources. Your journey starts here.

            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to={"/"} className="text-light text-decoration-none">Home</Link>
              </li>
              <li>
                <Link to={"/courses"}className="text-light text-decoration-none">Courses</Link>
              </li>
              <li>
                <Link to={""} className="text-light text-decoration-none">About</Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              Email: support@courses.com <br />
              Phone: +7 982 728 86 14
            </p>
            <div className="d-flex">
              <a href="https://facebook.com" className="me-3 text-light" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" className="me-3 text-light" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://instagram.com" className="me-3 text-light" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">© 2024 course platform. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;