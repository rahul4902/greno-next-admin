import React, { useState } from "react";
import {
  Offcanvas,
  Button,
  Form,
  FloatingLabel,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  loginUser,
  toggleLoginModal,
  toggleSignUpModal,
} from "../redux/authSlice"; // Adjust path as needed
import { toast } from "react-toastify";
import { API_URL } from "../utils/constant";
import {setCookie}  from 'cookies-next';

const SignUpOffCanvas = () => {
  const dispatch = useDispatch();
  const { isSignUpModalVisible, isLoggedIn } = useSelector(
    (state) => state.auth
  );
  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false); // For loading state

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    try {
      const response = await axios.post(`${API_URL}api/auth/signup`, {
        name,
        email,
        password,
      });

      if (response.data.status == 400) {
        toast.error(response.data.message);
      }
      if (response.data.status == 422) {
        toast.error(response.data.message);
        setError(response.data.errors);
      }

      if (response.data.status == 200) {
        toast.success(response.data.message);
        const userDetail = response.data.data;
        setCookie('auth-token',userDetail.token)
        dispatch(
          loginUser({
            token: userDetail.token,
            userDetail,
            expireTime: new Date().getTime() + 3600 * 1000,
            permissions: [], // Set token expiration time (1 hour)
          })
        );
      }
      setIsLoading(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
      setIsLoading(false); // Stop loading
    }
  };

  const handleClose = () => {
    dispatch(toggleSignUpModal());
  };

  const handleSignInOpen = () => {
    dispatch(toggleLoginModal(true));
  };

  return (
    <Offcanvas show={isSignUpModalVisible} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Sign Up</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form onSubmit={handleSignUpSubmit}>
          <FloatingLabel
            controlId="name"
            label="Name"
            className={`${!error.name ? "mb-3" : ""}`}
          >
            <Form.Control
              type="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FloatingLabel>
          {error.name && (
            <p className="text-danger fw-semibold">{error.name}</p>
          )}
          <FloatingLabel
            controlId="email"
            label="Email"
            className={`${!error.email ? "mb-3" : ""}`}
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>
          {error.email && (
            <p className="text-danger fw-semibold">{error.email}</p>
          )}
          <FloatingLabel
            controlId="password"
            label="Password"
            className={`${!error.password ? "mb-3" : ""}`}
          >
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
          {error.password && (
            <p className="text-danger fw-semibold">{error.password}</p>
          )}

          {/* Loading spinner when request is in progress */}
          {isLoading ? (
            <Button
              variant="primary"
              size="lg"
              type="submit"
              className="w-100"
              disabled
            >
              <Spinner animation="border" size="sm" /> Wait...
            </Button>
          ) : (
            <Button variant="primary" size="lg" type="submit" className="w-100">
              SignUp
            </Button>
          )}
        </Form>
        <hr />
        <p>
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="text-primary-custom fw-semibold"
            onClick={handleSignInOpen}
          >
            Sign In
          </a>
        </p>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SignUpOffCanvas;
