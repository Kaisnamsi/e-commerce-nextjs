/* eslint-disable react/no-unescaped-entities */
"use client";
import customerServices from "@/services/customer.services";
import Image from "next/image";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
export default function Feedback() {
  const feedbackValidation = Yup.object().shape({
    name:Yup.string().required("name must be required*").matches(/^[A-Za-z\s]*$/, 'Name must contain only letters and spaces')
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name must be less than 50 characters long'),

    email:Yup.string().required("email must be required*").email("please enter correct email address*"),
    location:Yup.string().required("Location must be required*"),
    message:Yup.string().required("Please enter your message*")
  })

  const resolver = {
    mode:"onChange",
    resolver:yupResolver(feedbackValidation)
  }
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm(resolver);

  const submitFeedback = (data) => {
    const formData={}
    formData.file = data.file[0]
    formData.name=data.name
    formData.email=data.email
    formData.location=data.location
    formData.message=data.message
    customerServices.feedback(formData).then((res)=>{
      console.log(res)
      toast.success("We are truly thankful for your insightful feedback. It helps us improve.")
      reset()
    }).catch((err)=>{
      toast.warning("Something Went Wrong.")
    })

  };
  return (
    <section>
      <Row className="mt-1 py-2" style={{ background: "#e7f6ed" }}>
        <Col md={2}></Col>
        <Col md={8} className="text-center">
          <h2>
            <b className="text-primary">Your Valuable </b>Feedback
          </h2>
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
            We appriciate to Your Valuable feedback and we are always focused on
            it
          </p>
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row className="my-5">
        <Col md={1}></Col>
        <Col md={4}>
          <Image
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            src="https://media.istockphoto.com/id/1256802615/photo/a-woman-making-thumbs-up-and-thumbs-down-hands-sign.jpg?s=612x612&w=0&k=20&c=LxQVxCJCS-QSGHd8IDnXmveW4q3NDjJHI0wA3rvzu9k="
            style={{ height: "100%", width: "100%" }}
          />
        </Col>
        <Col md={6} className="px-3">
          <h4>
            <b>Add Your Feedback</b>
          </h4>
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
          <Form onSubmit={handleSubmit((data) => submitFeedback(data))}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    {...register("name")}
                  />
                  <Form.Text className="text-danger">{errors?.name?.message}</Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Upload file:</Form.Label>
                  <Form.Control type="file" name="file" {...register("file")} />
                  <Form.Text className="text-danger">{errors?.file?.message}</Form.Text>
                </Form.Group>
              </Col>
              <Form.Group className="mb-3">
                <Form.Label>Your Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  {...register("email")}
                />
                <Form.Text className="text-danger">{errors?.email?.message}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>You're from:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Current Location"
                  name="location"
                  {...register("location")}
                />
                <Form.Text className="text-danger">{errors?.location?.message}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Your feedback:</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  {...register("message")}
                  rows={4}
                  placeholder="Your Valuable Feedback"
                />
                <Form.Text className="text-danger">{errors?.message?.message}</Form.Text>
              </Form.Group>
            </Row>
            <input
              type="submit"
              className="btn my-color cat-btn"
              value="SEND FEEDBACK"
            />
          </Form>
        </Col>
        <Col md={1}></Col>
      </Row>
    </section>
  );
}
