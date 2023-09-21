"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";

export default function MyOrder() {
  return (
    <section>
      <Row>
        <h2 className="text-center text-primary my-4">CURRENT ORDERS</h2>
        <Col md={1}></Col>
        <Col md={10}>
          <Card className="mb-5 px-4">
            <Card.Body>
              <Row>
                <Col md={4} className="text-center">
                  <Image
                    height={250}
                    width={200}
                    alt=""
                    sizes="100vw"
                    src="https://e-commerce-p.netlify.app/images/mens.jpg"
                  />
                </Col>
                <Col md={4}>
                  <div className=" mt-2">
                    <Badge className="my-color p-2 text-dark">Order Date : Sep 31 2023</Badge>
                    <p className="m-0">
                      <b>Product Name : </b> T-shirt
                    </p>
                    <p className="m-0">
                      <b>Total Price : </b>{" "}
                      <s className="text-danger">2000.00Rs</s>
                    </p>
                    <p className="m-0">
                      <b>Price : </b> 200.00Rs{" "}
                    </p>
                    <p className="m-0">
                      <b>Size : </b> M
                    </p>
                    <p className="m-0">
                      <b>color : </b> Black
                    </p>
                    <p className="m-0">
                      <b>Remark : </b> <Badge bg="danger">PENDING</Badge>
                    </p>
                    <button className="btn btn-danger mt-3">
                      Cancel Order
                    </button>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="mt-2">
                    <p className="text-start mt-3" style={{color:"#808080"}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore quasi quis impedit asperiores blanditiis corrupti
                      ipsum quibusdam ducimus sequi repudiandae fugit facere at
                      architecto hic distinctio ipsam, placeat eaque vero!
                    </p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={1}></Col>
      </Row>
    </section>
  );
}
