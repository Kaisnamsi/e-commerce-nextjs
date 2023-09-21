"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function MyProfile() {
  return (
    <section>
      <Row>
        <h2 className="text-center text-primary my-4">My Profile</h2>
        <Col md={3}></Col>
        <Col md={6}>
          <Card className="mb-5">
            <Card.Body>
              <Row className="g-5">
                <Col md={4}>
                  <Image
                    height={0}
                    width={0}
                    alt=""
                    style={{ height: "100%", width: "100%" }}
                    sizes="100vw"
                    src="https://e-commerce-p.netlify.app/images/mens.jpg"
                  />
                </Col>
                <Col md={8}>
                  <div className="ms-5 mt-4">
                    <b>Name:</b> Kais Namsi <br />
                    <b>Mobile:</b> 7007436861 <br />
                    <b>Email:</b>kaisnamsi@gmail.com <br />
                    <b>Address:</b>Gafsa, Tunisie <br />
                    <br />
                    <Link href="#" class="btn cat-btn my-color">
                      Edit Profile
                    </Link>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}></Col>
      </Row>
    </section>
  );
}
