"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

export default function Slider() {
  return (
    <section>
      <Row>
        <Col md={12}>
          <Carousel fade style={{ maxHeight: 500 }}>
            <Carousel.Item>
              <Image
                src="https://e-commerce-p.netlify.app/images/a.jpg"
                alt=""
                className="w-100"
                height={0}
                width={0}
                sizes="100vw"
                style={{height:"500px"}}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="https://e-commerce-p.netlify.app/images/b.jpg"
                alt=""
                className="w-100"
                height={0}
                width={0}
                sizes="100vw"
                style={{height:"500px"}}
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="https://e-commerce-p.netlify.app/images/c.jpg"
                alt=""
                className="w-100"
                style={{height:"500px"}}
                height={0}
                width={0}
                sizes="100vw"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </section>
  );
}
