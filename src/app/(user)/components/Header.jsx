"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "../style/header.css";
import {
  Col,
  Container,
  Form,
  InputGroup,
  Nav,
  NavDropdown,
  Navbar,
  Row,
} from "react-bootstrap";
import {
  FaEnvelope,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaKey,
  FaPhoneAlt,
  FaProductHunt,
  FaSearch,
  FaShoppingCart,
  FaTwitter,
  FaUser,
  FaUserPlus,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, removeAuth } from "@/store/slices/auth";
import { useRouter } from "next/navigation";
export default function Header() {
  const auth = useSelector(getAuth);
  const router = useRouter()
  const dispatch = useDispatch()
  const logout = () =>{
    dispatch(removeAuth());
    router.push("/")
  }
  return (
    <div>
      <Container fluid>
        <section>
          <Row className="my-color top text-center">
            <Col md={4}>
              <span className="fs-6">
                <FaEnvelope /> kaisnamsi@gmail.com
              </span>
            </Col>
            <Col md={4} className="fs-6">
              <span>
                <FaPhoneAlt /> +216 7007436861
              </span>
            </Col>
            <Col md={4}>
              <FaFacebook color="blue" className="ic" />
              <FaInstagram color="#e93215" className="ic" />
              <FaTwitter color="#25aff3" className="ic" />
              <FaYoutube color="#ff0202" className="ic" />
            </Col>
          </Row>
        </section>
        <section>
          <Row className="middle text-center fw-bold fs-2 pt-2">
            <Col md={3}>
              <span>
                My<span className="text-primary">Cart</span>
              </span>
            </Col>
            <Col md={6} className="px-5">
              <Form className="pt-2">
                <InputGroup className="mb-3">
                  <Form.Control placeholder="Search item here..." />
                  <InputGroup.Text
                    className="my-color search"
                    style={{ cursor: "pointer" }}
                  >
                    <FaSearch />
                  </InputGroup.Text>
                </InputGroup>
              </Form>
            </Col>
            <Col md={3}>
              <FaShoppingCart className="text-primary fs-2" />
            </Col>
          </Row>
        </section>

        <section>
          <Row className="sticky-top menu-bg-color">
            <Col md={2}></Col>
            <Col md={8} className="menu">
              <Navbar expand="lg">
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-center"
                  >
                    <Nav className="gap-2">
                      <Nav.Link as={Link} href="/">
                        <FaHome className="mi" /> Home
                      </Nav.Link>
                      <NavDropdown
                        title={
                          <>
                            <FaProductHunt className="mi" /> Product
                          </>
                        }
                        id="basic-nav-dropdown"
                      >
                        <NavDropdown.Item as={Link} href="/mens">
                          Men's
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} href="/womens">
                          Women's
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} href="/kids">
                          Kid's
                        </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link as={Link} href="/my-order">
                        {" "}
                        <FaShoppingCart className="mi" /> My Orders
                      </Nav.Link>
                      <Nav.Link as={Link} href="/customer-support">
                        <FaPhoneAlt className="mi" /> Customers Support
                      </Nav.Link>
                      <Nav.Link as={Link} href="sign-up">
                        <FaUserPlus className="mi" /> Sign up
                      </Nav.Link>
                      <Nav.Link as={Link} href="/my-profile">
                        <FaUser className="mi" /> My Profile
                      </Nav.Link>
                      {!auth?.access ? (
                        <Nav.Link as={Link} href="/sign-in">
                          <FaKey className="mi" /> Sign in
                        </Nav.Link>
                      ) : (
                        <Nav.Link as={Link} href="#" onClick={logout}>
                          <FaKey className="mi" /> Sign out
                        </Nav.Link>
                      )}
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
            <Col md={2}></Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}
