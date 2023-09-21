"use client";
import AuthServices from "@/services/auth.services";
import React from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as Yup from 'yup'
import {
  FaEnvelope,
  FaFlag,
  FaKey,
  FaLocationArrow,
  FaPhoneAlt,
  FaUserAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignUp() {
  const userSchema = Yup.object().shape({
    name:Yup.string().required("name is required*").min(2,"please enter valid name*"),
    email:Yup.string().required("email is required*").email("please enter valid email"),
    country:Yup.string().required("country is required*").min(3,"please enter valid country name*").max(15,"please enter valid country name*"),
    address:Yup.string().required("address is required*").min(10,"please enter valid address*").max(200,"please enter valid address*"),
    mobile:Yup.string().required("mobile number is required*").matches(/^\d{10}$/, "Invalid phone number. Please enter a 10-digit number."),
    password: Yup.string()
      .required("password is mandatory*")
      .min(8, "password must be at 8 char long*")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit"
      ),
      cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'password must be match*').required('confirm password is required*'),
  })
  const formOption = {
    mode:"onChange",
    resolver:yupResolver(userSchema)
  }
  const {handleSubmit,reset,formState:{errors},register}=useForm(formOption)

  const submitUser = (data) =>{
    AuthServices.signup(data).then((res)=>{
      console.log(res)
      toast.success("Register Successfully")
      reset()
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <section>
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <h1 className="text-center text-primary my-3">Registration Form</h1>
          <Container
            style={{ background: "#e7f6ed", minHeight: 300 }}
            className="mb-3"
          >
            <Form onSubmit={handleSubmit((data)=>submitUser(data))}>
              <Row className="px-2 py-5">
                <Col md={6}>
                  <Form.Group className="mb-3">
                  <Form.Label style={{ margin: 0, padding: 0 }}>
                    Name:
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="my-color">
                      <FaUserAlt />
                    </InputGroup.Text>
                    <Form.Control placeholder="Enter Your name" name="name" {... register("name")}/>
                  </InputGroup>
                  <Form.Text className="text-danger">{errors?.name?.message}</Form.Text>
                  </Form.Group>
                 
                 <Form.Group className="mb-3">
                 <Form.Label style={{ margin: 0, padding: 0 }}>
                    Password:
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="my-color">
                      <FaKey />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Enter Your password"
                      type="password"
                      name="password"
                      {... register("password")}
                    />
                  </InputGroup>
                  <Form.Text className="text-danger">{errors?.password?.message}</Form.Text>
                 </Form.Group>
                  
                  <Form.Group className="mb-3">
                  <Form.Label style={{ margin: 0, padding: 0 }}>
                    Email:
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="my-color">
                      <FaEnvelope />
                    </InputGroup.Text>
                    <Form.Control placeholder="Enter Your Email" type="email" name="email" {... register("email")}/>
                  </InputGroup>
                  <Form.Text className="text-danger">{errors?.email?.message}</Form.Text>
                  </Form.Group>
                 
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                  <Form.Label style={{ margin: 0, padding: 0 }}>
                    Mobile:
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="my-color">
                      <FaPhoneAlt />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Enter Your Mobile No"
                      type="tel"
                      name="mobile"
                      maxLength={10}
                      {... register("mobile")}
                    />
                  </InputGroup>
                  <Form.Text className="text-danger">{errors?.mobile?.message}</Form.Text>
                  </Form.Group>
                 
                 <Form.Group  className="mb-3">
                 <Form.Label style={{ margin: 0, padding: 0 }}>
                    Confirm Password:
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="my-color">
                      <FaKey />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Enter Your Password"
                      type="password"
                      name="cpassword"
                      {... register("cpassword")}
                    />
                  </InputGroup>
                  <Form.Text className="text-danger">{errors?.cpassword?.message}</Form.Text>
                 </Form.Group>
                 
                 <Form.Group className="mb-3">
                 <Form.Label style={{ margin: 0, padding: 0 }}>
                   Country:
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="my-color">
                      <FaFlag />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Enter Your Country Name"
                      type="text"
                      name="country"
                      {... register("country")}
                    />
                  </InputGroup>
                  <Form.Text className="text-danger">{errors?.country?.message}</Form.Text>
                 </Form.Group>
                </Col>
                <Col md={12}>
                 <Form.Group>
                 <Form.Label style={{ margin: 0, padding: 0 }}>
                    Address:
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="my-color">
                      <FaLocationArrow />
                    </InputGroup.Text>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter Your Current Address"
                      name="address"
                      {... register("address")}
                    />
                  </InputGroup>
                  <Form.Text className="text-danger">{errors?.address?.message}</Form.Text>
                 </Form.Group>
                </Col>
                <Col md={12} className="text-center mt-3">
                  <input type="submit" value="Register Now" className="btn my-color cat-btn" />
                  <div className="mt-2">
                  Already have an account ? <b>Sign in</b>
                  </div>
                </Col>
              </Row>
            </Form>
          </Container>
        </Col>
        <Col md={2}></Col>
      </Row>
    </section>
  );
}
