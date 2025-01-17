"use client";
import { useEffect, useState } from "react";
import { PageHeading } from "widgets";
import { Container, Col, Row, Form, Card, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "utils/constant";
import { useRouter, useSearchParams } from "next/navigation";
import { CouponFormData } from "data/greno/defaultFormData";
import apiService from "../../../../services/apiService";
import apiClient from "../../../../services/apiClient";
import { formatDate } from './../../../../utils/helper';

const TestForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [formData, setFormData] = useState(CouponFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  const handleSelectChange = (e) => {
    setSelectedUser(e.target.value); // Set selected user for adding
  };

  const handleAddUser = () => {
    if (selectedUser && !formData.allowedUsers?.includes(selectedUser)) {
      setFormData(prevState => ({
        ...prevState,
        allowedUsers: [...prevState.allowedUsers, selectedUser],  // Add selected user
      }));
      setSelectedUser('');  // Reset selected user
    }
  };

  const handleRemoveUser = (userId) => {
    setFormData(prevState => ({
      ...prevState,
      allowedUsers: prevState.allowedUsers?.filter(id => id !== userId),  // Remove user by ID
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
          let response;
      if (editMode) {
        response = await axios.post(
          `${API_URL}api/coupon/update`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Accept: "application/json",
            },
          }
        );
      } else {
        response = await axios.post(
          `${API_URL}api/coupon/create`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Accept: "application/json",
            },
          }
        );
      }

      if (response.data.status === 422) {
        setErrors(response.data.errors);
        toast.error(response.data.message);
      } else if (response.data.status === 200) {
        toast.success(response.data.message);
        setFormData(CouponFormData);

        router.push("/admin/coupon");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors || {});
      } else {
        toast.error(error.message);
      }
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateCouponCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let couponCode = '';
    for (let i = 0; i < 8; i++) {
      couponCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return couponCode;
  };

  

  const handleGenerateCoupon = () => {
    setFormData(prevState => ({
      ...prevState,
      code: generateCouponCode(),  // Add selected user
    }));
  };

  useEffect(() => {
    const fetchCoupon = async () => {
      const _id = searchParams.get("_id");
      if (_id) {
        const testData = await apiService.fetchCouponById(_id);
        setFormData(testData);
        setEditMode(true);
      }
    };
    fetchCoupon();
  }, [searchParams]);

  useEffect(() => {
    const fetchUser = async () => {      
        const userData = await apiClient.get(API_URL + 'api/users', {});            
        setUsers(userData?.data?.data ||[])
    };
    fetchUser();
  }, []);

  return (
    <div className="form-wizard">
      <Container fluid className="p-6">
        <PageHeading heading={`${editMode ? "Edit" : "Create"} Coupon`} />
        <Form onSubmit={handleSubmit}>
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-1">{`${
                  editMode ? "Edit" : "Create"
                } Coupon`}</h4>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                  size="sm"
                >
                  {isSubmitting ? (
                    <>
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Loading...
                    </>
                  ) : (
                    <>Submit</>
                  )}
                </Button>
              </div>
            </Card.Header>
            <Card.Body>
              <div>
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="code">
                    Code
                  </Form.Label>
                  <Col md={7} xs={12}>
                    <Form.Control
                      type="text"
                      placeholder="Enter Code"
                      id="code"
                      name="code"
                      value={formData.code}
                      onChange={handleChange}
                      isInvalid={!!errors.code}
                    />
                    {errors.code && (
                      <Form.Control.Feedback type="invalid">
                        {errors.code}
                      </Form.Control.Feedback>
                    )}
                  </Col>
                  <Col md={1} xs={1}>
                  <Button size="sm" className="mt-1" onClick={handleGenerateCoupon}>Generate</Button>
                  </Col>

                </Row>

                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="type">
                    Type
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      isInvalid={!!errors.type}
                    >
                      <option value="flat">Flat</option>
                      <option value="percentage">Percentage</option>
                    </Form.Select>
                    {errors.type && (
                      <Form.Control.Feedback type="invalid">
                        {errors.type}
                      </Form.Control.Feedback>
                    )}
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="value">
                    Value
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control
                      type="number"
                      placeholder="Enter Value"
                      id="value"
                      name="value"
                      value={formData.value}
                      onChange={handleChange}
                      isInvalid={!!errors.value}
                    />
                    {errors.value && (
                      <Form.Control.Feedback type="invalid">
                        {errors.value}
                      </Form.Control.Feedback>
                    )}
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="expiryDate">
                    Expiry Date
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control
                      type="date"
                      id="expiryDate"
                      name="expiryDate"
                      value={formatDate(formData.expiryDate)}
                      onChange={handleChange}
                      isInvalid={!!errors.expiryDate}
                    />
                    {errors.expiryDate && (
                      <Form.Control.Feedback type="invalid">
                        {errors.expiryDate}
                      </Form.Control.Feedback>
                    )}
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="minAmount">
                    Min Amount
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control
                      type="number"
                      placeholder="Enter Minimum Amount"
                      id="minAmount"
                      name="minAmount"
                      value={formData.minAmount}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="maxAmount">
                    Max Amount
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control
                      type="number"
                      placeholder="Enter Maximum Amount"
                      id="maxAmount"
                      name="maxAmount"
                      value={formData.maxAmount}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="upTo">
                    Up To
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control
                      type="number"
                      placeholder="Enter Up To Value"
                      id="upTo"
                      name="upTo"
                      value={formData.upTo}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="usageCount">
                    Usage Count
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control
                      type="number"
                      placeholder="Enter Usage Count"
                      id="usageCount"
                      name="usageCount"
                      value={formData.usageCount}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="maxUsers">
                    Max Users
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control
                      type="number"
                      placeholder="Enter Max Users"
                      id="maxUsers"
                      name="maxUsers"
                      value={formData.maxUsers}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="allowedUsers">
                    Allowed Users
                  </Form.Label>
                  <Col md={8} xs={12}>
                    {/* Multi-select dropdown for selecting users */}
                    <Form.Control
                      as="select"
                      id="allowedUsers"
                      name="allowedUsers"
                      value={selectedUser}
                      onChange={handleSelectChange}
                      className="form-select"
                    >
                      <option value="">Select a User</option>
                      {users?.map((user) => (
                        <option key={user._id} value={user._id}>
                          {user.name}{" "}
                          {/* Assuming user has 'name' and '_id' properties */}
                        </option>
                      ))}
                    </Form.Control>

                    {/* Add selected user to allowedUsers list */}
                    <Button
                      className="mt-2"
                      onClick={handleAddUser}
                      disabled={!selectedUser}
                    >
                      Add User
                    </Button>

                    {/* Display selected users as tags with remove option */}
                    <div className="mt-3">
                      {formData?.allowedUsers?.map((userId) => {
                        const user = users?.find((user) => user._id === userId);
                        return user ? (
                          <span
                            key={user._id}
                            className="badge badge-info mr-2 text-dark border-primary"
                          >
                            {user.name}({user.email})
                            <Button
                              variant="link"
                              onClick={() => handleRemoveUser(user._id)}
                              className="ml-2"
                            >
                              x
                            </Button>
                          </span>
                        ) : null;
                      })}
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Form>
      </Container>
    </div>
  );
};

export default TestForm;
