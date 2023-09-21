"use client";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

export default function Customer() {
  return (
    <>
      <section>
        <Row className="mt-1 py-2" style={{ background: "#e7f6ed" }}>
          <Col md={2}></Col>
          <Col md={8} className="text-center">
            <h1>
              <b className="text-primary">Contact </b>With Us
            </h1>
            <hr
              style={{
                width: "13%",
                height: "1.5px",
                opacity: "0.6",
                background: "blue",
                color: "blue",
                marginTop: "-1px",
              }}
              className="d-inline-block"
            />
            <p>
              You may contact number or filling in this form any time you need
              professional Support of have any question. <br /> Thank you!
            </p>
          </Col>
          <Col md={2}></Col>
        </Row>

        <Row className="my-5">
          <Col md={1}></Col>
          <Col md={10}>
            <Row>
              <Col md={7}>
                <b className="fs-4">Send Your Message</b>
                <hr
                  style={{
                    width: "9%",
                    height: "2px",
                    opacity: "0.6",
                    background: "blue",
                    color: "blue",
                    marginTop: "-2px",
                  }}
                />

                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter Your Name*"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Contact</Form.Label>
                        <Form.Control
                          type="text"
                          name="contact"
                          placeholder="Enter Your Contact Number*"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter Your Email*"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Type Your Message Here..."
                    />
                  </Form.Group>

                  <input
                    type="submit"
                    value="SEND MESSAGE"
                    className="my-color btn cat-btn mt-2"
                    style={{ border: "none" }}
                  />
                </Form>
              </Col>
              <Col
                md={4}
                className="py-4 px-5 mt-3"
                style={{
                  background: "#e7f6ed",
                  border: "1px solid rgb(0,0,0,.1)",
                  borderRadius: "5px",
                }}
              >
                <b className="fs-3">Contact Info</b>
                <hr
                  style={{
                    width: "26%",
                    height: "2px",
                    opacity: "0.6",
                    background: "blue",
                    color: "blue",
                    marginTop: "-1px",
                    marginLeft: "5px",
                  }}
                />

                <div className="px-4">
                  <b className="text-primary fs-5">
                    <FaLocationArrow /> Address
                  </b>
                  <hr
                    style={{
                      width: "15%",
                      height: "2px",
                      opacity: "0.6",
                      background: "blue",
                      color: "blue",
                      marginTop: "-1px",
                      marginLeft: "25px",
                    }}
                  />
                  <div className="ms-4">
                    <p>
                     Gafsa <br /> 
                      Tunisia
                    </p>
                  </div>
                </div>
                <div className="px-4">
                  <b className="text-primary fs-5">
                    <FaPhoneAlt /> Call Us
                  </b>
                  <hr
                    style={{
                      width: "15%",
                      height: "2px",
                      opacity: "0.6",
                      background: "blue",
                      color: "blue",
                      marginTop: "-1px",
                      marginLeft: "25px",
                    }}
                  />
                  <div className="ms-4">
                    <p>+216 7007436861</p>
                  </div>
                </div>
                <div className="px-4">
                  <b className="text-primary fs-5">
                    <FaEnvelope /> Mail us
                  </b>
                  <hr
                    style={{
                      width: "15%",
                      height: "2px",
                      opacity: "0.6",
                      background: "blue",
                      color: "blue",
                      marginTop: "-1px",
                      marginLeft: "25px",
                    }}
                  />
                  <div className="ms-4">
                    <p>kaisnamsi@gmail.com</p>
                  </div>
                </div>
              </Col>
              <Col md={1}></Col>
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </section>
    </>
  );
}
