"use client";
import { useEffect, useState } from "react";
import { Container, FormGroup, Image, Spinner } from "react-bootstrap";
import { PageHeading } from "widgets";
import { Col, Row, Form, Card, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "utils/constant";
import { useRouter, useSearchParams } from "next/navigation";
import { SampleTypeFormData } from "data/greno/defaultFormData";
import apiService from "services/apiService";

const TestForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [iconPreview, setIconPreview] = useState(null);
  const [formData, setFormData] = useState(SampleTypeFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

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
      const formDataToSubmit = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSubmit.append(key, formData[key]);
      });
      if (selectedFile) {
        formDataToSubmit.append("icon", selectedFile);
      }

      let response;
      if (editMode) {
        response = await axios.post(`${API_URL}sampleType/update`,formDataToSubmit,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Accept: "application/json",
            },
          }
        );
      } else {
        response = await axios.post(
          `${API_URL}sampleType/create`,
          formDataToSubmit,
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
        setFormData(SampleTypeFormData);
        setSelectedFile(null);
        setIconPreview(null);
        router.push("/admin/sampletypes");
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

  useEffect(() => {
    const fetchSampleType = async () => {
      const _id = searchParams.get("_id");
      if (_id) {
        const testData = await apiService.fetchSampleTypeById(_id);
        setFormData(testData);
        setEditMode(true);
      }
    };
    fetchSampleType();
  }, [searchParams]);

  return (
    <div className="form-wizard">
      <Container fluid className="p-6">
        <PageHeading heading={`${editMode ? "Edit" : "Create"} Sample Types`} />
        <Form onSubmit={handleSubmit}>
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-1">{`${
                  editMode ? "Edit" : "Create"
                } Sample Types`}</h4>
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
                  <Form.Label className="col-sm-4" htmlFor="name">
                    Name
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      id="name"
                      name="name"
                      value={formData.name || ""}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                    />
                    {errors.name && (
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    )}
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="status">
                    Is Active
                  </Form.Label>
                  <Col md={8} xs={3}>
                    <Form.Check
                      type="checkbox"
                      id="status"
                      name="status"
                      checked={formData.status || false}
                      onChange={handleChange}
                    />
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
