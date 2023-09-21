"use client"
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaEnvelope,
  FaFacebookF,
  FaGem,
  FaGoogle,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaPrint,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    // <></>
    <div>
       <Row>
        <Col md={12}>
        <div className="row ufooter">
          {/* <!-- Footer --> */}
          <footer className="text-center text-lg-start bg-dark text-light">
            {/* <!-- Section: Social media --> */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
              {/* <!-- Left --> */}
              <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
              </div>
              {/* <!-- Left --> */}

              {/* <!-- Right --> */}
              <div>
                <a href="" className="me-4 text-reset">
                  <FaFacebookF />
                </a>
                <a href="" className="me-4 text-reset">
                  <FaTwitter />
                </a>
                <a href="" className="me-4 text-reset ">
                  <FaGoogle />
                </a>
                <a href="" className="me-4 text-reset">
                  <FaInstagram />
                </a>
                <a href="" className="me-4 text-reset">
                  <FaLinkedin />
                </a>
                <a href="" className="me-4 text-reset">
                  <FaWhatsapp />
                </a>
              </div>
              {/* <!-- Right --> */}
            </section>
            {/* <!-- Section: Social media --> */}

            {/* <!-- Section: Links  --> */}
            <section className="">
              <div className="container text-center text-md-start mt-5">
                {/* <!-- Grid row --> */}
                <div className="row mt-3">
                  {/* <!-- Grid column --> */}
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    {/* <!-- Content --> */}
                    <h6 className="text-uppercase fw-bold mb-4">
                      <FaGem /> Company name
                    </h6>
                    <p>
                      Here you can use rows and columns to organize your footer
                      content. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit.
                    </p>
                  </div>
                  {/* <!-- Grid column --> */}

                  {/* <!-- Grid column --> */}
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold mb-4">
                      Our Popular Products
                    </h6>
                    <p>
                      <a href="#" className="text-reset">
                        Amazfit
                      </a>
                    </p>
                    <p>
                      <a href="#" className="text-reset">
                        Fastrack
                      </a>
                    </p>
                    <p>
                      <a href="#" className="text-reset">
                        Rolex
                      </a>
                    </p>
                    <p>
                      <a href="#" className="text-reset">
                        Omega
                      </a>
                    </p>
                  </div>
                  {/* <!-- Grid column --> */}

                  {/* <!-- Grid column --> */}
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                    <p>
                      <a href="#!" className="text-reset">
                        Pricing
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Settings
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Orders
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Help
                      </a>
                    </p>
                  </div>
                  {/* <!-- Grid column --> */}

                  {/* <!-- Grid column --> */}
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <p>
                      <FaHome className="me-2" /> Gafsa, Tunisie
                    </p>
                    <p>
                      <FaEnvelope className="me-2" />{" "}
                      <a
                        href="mailto:premv0013@gmail.com"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        kaisnamsi@gmail.com
                      </a>
                    </p>
                    <p>
                      <FaPhoneAlt className="me-2" /> +216 7007436861
                    </p>
                    <p>
                      <FaPrint className="me-2" /> +216 7678829642
                    </p>
                  </div>
                  {/* <!-- Grid column --> */}
                </div>
                {/* <!-- Grid row --> */}
              </div>
            </section>
            {/* <!-- Section: Links  --> */}
          </footer>
          {/* <!-- Footer --> */}
        </div>
        <div
          className="row text-light text-center py-2"
          style={{ background: "black" }}
        >
          <div className="col-sm-6">
            Devoloped By ||{" "}
            <span className="text-danger">Kais Namsi</span>
          </div>
          <div className="col-sm-6">|| &copy; MyCart ||</div>
        </div>
        </Col>
       </Row>
    </div>
  );
}
