/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaKey, FaLock, FaUserAlt } from "react-icons/fa";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch} from "react-redux";
import AuthServices from "@/services/auth.services";
import { createAuth } from "@/store/slices/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter()
  const dispatch=useDispatch()
    const loginValidation = Yup.object().shape({
      email:Yup.string().required("email is required*").email("Please Enter Valid Email"),
      password: Yup.string()
      .required("password is mandatory*")
      .min(8, "password must be at 8 char long*")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit"
      ),
    })
      
    const formOption = {
      mode:"onChange",
      resolver:yupResolver(loginValidation)
    }

  const {handleSubmit,register,formState: { errors },reset}=useForm(formOption)
  const userLogin= (data)=>{
    AuthServices.login(data).then((res)=>{
      console.log(res)
      dispatch(createAuth(res?.data?.data))
      reset()
      toast.success("Login Successfully")
      router.push('/')

    }).catch((err)=>{
      console.log(err)
      toast.warning("Some thing went wrong")
      reset()
    })
  }
  return (
    <section>
      <Row style={{ background: "#e7f6ed" }} className="py-5">
        <Col md={2}></Col>
        <Col md={4} className="my-color me-1 justify-content-center d-flex align-items-center" style={{borderRadius:"10px 0px 0px 10px"}}>
          <h1>
            LOGIN
            <b className="text-primary">
              HERE <FaLock/>
            </b>
          </h1>
        </Col>
        <Col md={4} className="p-5 ms-1" style={{background:"rgb(176 247 204)",borderRadius:"0px 10px 10px 0px"}}>
          <Form onSubmit={handleSubmit((data)=>userLogin(data))}>
            <Form.Group  className="mb-3">
            <Form.Label style={{ margin: 0, padding: 0 }}>
              <b>Email id:</b>
            </Form.Label>
            <InputGroup>
              <InputGroup.Text className="my-color">
                <FaUserAlt />
              </InputGroup.Text>
              <Form.Control placeholder="Enter Your Email.."  name="email" {...register('email')} />
            </InputGroup>
              <Form.Text className="text-danger">{errors?.email?.message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label style={{ margin: 0, padding: 0 }}>
              <b>Password:</b>
            </Form.Label>
            <InputGroup>
              <InputGroup.Text className="my-color">
                <FaKey />
              </InputGroup.Text>
              <Form.Control type="password" placeholder="Enter Your Password.." name="password" {...register('password')} />
            </InputGroup>
            <Form.Text className="text-danger">{errors?.password?.message}</Form.Text>
            </Form.Group>

            <input
              className="my-color btn w-100 cat-btn"
              style={{ border: "none" }}
              type="submit"
              value="Login"
            />
          </Form>
          <div class="fs-6 mt-3 text-center">
            Dont't have Account ? &nbsp;
            <Link class="text-decoration-none fw-bold text-dark" href="/sign-up">
              Signup
            </Link>
          </div>
        </Col>
        <Col md={2}></Col>
      </Row>
    </section>
  );
}
