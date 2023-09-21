/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function Category() {
  return (
    <div>
      <section>
        <Row className="mt-5 mx-3">
          <Col md={4} className="mb-4">
            <Card className="bg-dark text-center" style={{lineHeight:10}}>
              <Card.Img
                src="https://e-commerce-p.netlify.app/images/mens.jpg"
                style={{ maxHeight: 200 }}
              />
              <Card.ImgOverlay>
                <Link href="" className="cat-btn btn my-color">
                Men's
                </Link>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="bg-dark text-center" style={{lineHeight:10}}>
              <Card.Img
                src="https://e-commerce-p.netlify.app/images/womens.jpg"
                style={{ maxHeight: 200 }}
              />
              <Card.ImgOverlay>
                <Link href="" className="cat-btn btn my-color">
                 Women's
                </Link>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="bg-dark text-center" style={{lineHeight:10}}>
              <Card.Img
                src="https://e-commerce-p.netlify.app/images/kids.jpg"
                style={{ maxHeight: 200 }}
              />
              <Card.ImgOverlay>
                <Link href="" className="cat-btn btn my-color">
                  Kid's
                </Link>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </section>
      
    </div>
  );
}
