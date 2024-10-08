// app/(auth)/register/page.tsx
"use client";

import Link from "next/link";
import React from "react";
import { Button, Form } from "react-bootstrap";

const RegisterPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-4 col-sm-6 border rounded p-4">
        <h3
          className="text-center mb-4"
          style={{
            fontWeight: "bold",
            color: "#007bff",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          Sign Up
        </h3>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              className="mb-2"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="mb-2"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="mb-2"
              required
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              className="mb-3"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mb-2">
            Register
          </Button>
        </Form>

        <div className="text-center">
          <p>
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
