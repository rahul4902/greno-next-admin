import React, { useState } from "react";
import styles from "@/app/form.module.css";
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
import { setCookie } from "cookies-next";
import { Lock, Mail, User } from "lucide-react";

const LoginOffCanvas = () => {
  const dispatch = useDispatch();
  const { isLoginModalVisible, isLoggedIn } = useSelector(
    (state) => state.auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false); // For loading state

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    try {
      const response = await axios.post(`${API_URL}api/auth/signin`, {
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
        setCookie("auth-token", userDetail.token);
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
      setErrorMessage(error.response?.data?.message || "Login failed");
      setIsLoading(false); // Stop loading
    }
  };

  // Handle closing the login modal
  const handleClose = () => {
    dispatch(toggleLoginModal(false)); // Hide the modal
  };

  const handleSignUpOpen = () => {
    dispatch(toggleSignUpModal(true)); // Hide the modal
  };

  return (
    <Offcanvas show={isLoginModalVisible} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Login</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form onSubmit={handleLogin} className={styles.attractiveForm}>
          {/* Email Input Group */}
          <div className={styles.inputGroup}>
            <Mail className={styles.inputIcon} />
            <input
              type="email"
              className={styles.customInput}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              required
            />
          </div>
          {error.email && (
            <p className="text-danger fw-semibold">{error.email}</p>
          )}

          {/* Password Input Group */}
          <div className={styles.inputGroup}>
            <Lock className={styles.inputIcon} />
            <input
              type="password"
              className={styles.customInput}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>
          {error.password && (
            <p className="text-danger fw-semibold">{error.password}</p>
          )}

          {/* Loading spinner and submit button (remain unchanged) */}
          {isLoading ? (
            <Button
              variant="primary"
              size="lg"
              type="submit"
              className="w-100"
              disabled
            >
              <Spinner animation="border" size="sm" /> Logging in...
            </Button>
          ) : (
            <Button variant="primary" size="lg" type="submit" className="w-100">
              Login
            </Button>
          )}
        </Form>
        <hr />
        <p>
          Don&apos;t have an account yet?{" "}
          <a
            href="#"
            className="text-primary-custom fw-semibold"
            onClick={handleSignUpOpen}
          >
            Sign Up
          </a>
        </p>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default LoginOffCanvas;
