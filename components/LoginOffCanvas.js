import React, { useState } from 'react';
import { Offcanvas, Button, Form, FloatingLabel, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { loginUser, toggleLoginModal } from '../redux/authSlice'; // Adjust path as needed
import { toast } from 'react-toastify';

const LoginOffCanvas = () => {
  const dispatch = useDispatch();
  const { isLoginModalVisible, isLoggedIn } = useSelector((state) => state.auth);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // For loading state

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      
      if(response.data.status == 400){
        toast.error(response.data.message)
      }
      setIsLoading(false);
      return;
      const { token, userDetails } = response.data;
      // Save token in localStorage or sessionStorage
      localStorage.setItem('authToken', token);

      // Dispatch login action to Redux
      dispatch(loginUser({
        token,
        userDetails,
        expireTime: new Date().getTime() + 3600 * 1000, // Set token expiration time (1 hour)
      }));
      
      // Close the login modal after successful login
      dispatch(toggleLoginModal());
      
      setIsLoading(false); // Stop loading
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Login failed');
      setIsLoading(false); // Stop loading
    }
  };

  // Handle closing the login modal
  const handleClose = () => {
    dispatch(toggleLoginModal()); // Hide the modal
  };

  return (
    <Offcanvas show={isLoginModalVisible} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Login</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form onSubmit={handleLogin}>
          <FloatingLabel controlId="email" label="Email" className="mb-3">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FloatingLabel>
          <FloatingLabel controlId="password" label="Password" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FloatingLabel>

          {/* Show error message if there's an error */}
          {errorMessage && <p className="text-danger">{errorMessage}</p>}

          {/* Loading spinner when request is in progress */}
          {isLoading ? (
            <Button variant="primary" size="lg" type="submit" className="w-100" disabled>
              <Spinner animation="border" size="sm" /> Logging in...
            </Button>
          ) : (
            <Button variant="primary" size="lg" type="submit" className="w-100">
              Login
            </Button>
          )}
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default LoginOffCanvas;
