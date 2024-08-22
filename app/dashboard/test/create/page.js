'use client';
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from 'utils/constant';
import { list } from 'services/sampleType/api';

const TestForm = () => {

  // State to hold category options
  const [categories, setCategories] = useState();
  const [parameterOptions, setParameterOptions] = useState([]);

  // Fetch categories from the API on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      let { status, message, data } = await list();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  // Sample array data for dropdowns
  const recommendedGenderOptions = ['Both', 'Male', 'Female'];
  const fastingTimeOptions = ['Not Required', '8-12 hours', '12-16 hours'];
  const tatTimeOptions = ['10 Hours', '24 Hours', '48 Hours'];

  // Sample options for parameter
  useEffect(() => {
    // Assuming you have a similar API or data source for parameters
    setParameterOptions([
      'Parameter 1',
      'Parameter 2',
      'Parameter 3',
      'Parameter 4'
    ]);
  }, []);

  return (
    <Container fluid className="p-6">

      {/* Page Heading */}
      <PageHeading heading="Create New Test" />

      <Card>
        {/* card body */}
        <Card.Body>
          <div>
            <div className="mb-6">
              <h4 className="mb-1">Create Test</h4>
            </div>

            <Form>
              {/* Package or Test */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="package_or_test">Package or Test</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="text" placeholder="Enter Package or Test" id="package_or_test" required />
                </Col>
              </Row>

              {/* Code */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="code">Code</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="text" placeholder="Enter Code" id="code" required />
                </Col>
              </Row>

              {/* Name */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="name">Name</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="text" placeholder="Enter Name" id="name" required />
                </Col>
              </Row>

              {/* Slug */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="slug">Slug</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="text" placeholder="Enter Slug" id="slug" required />
                </Col>
              </Row>

              {/* Amount */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="amount">Amount</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="number" placeholder="Enter Amount" id="amount" required />
                </Col>
              </Row>

              {/* Lab Cost */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="leb_cost">Lab Cost</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="number" placeholder="Enter Lab Cost" id="leb_cost" required />
                </Col>
              </Row>

              {/* Offer Price */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="offer_price">Offer Price</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="number" placeholder="Enter Offer Price" id="offer_price" required />
                </Col>
              </Row>

              {/* Minimum Age */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="min_age">Minimum Age</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="number" placeholder="Enter Minimum Age" id="min_age" required />
                </Col>
              </Row>

              {/* Maximum Age */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="max_age">Maximum Age</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="number" placeholder="Enter Maximum Age" id="max_age" required />
                </Col>
              </Row>

              {/* Details */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="details">Details</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control as="textarea" rows={3} placeholder="Enter Details" id="details" required />
                </Col>
              </Row>

              {/* Description */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="description">Description</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control as="textarea" rows={3} placeholder="Enter Description" id="description" required />
                </Col>
              </Row>


              {/* Parameters (Multiple Select) */}

              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="parameter">Parameters</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Select id="tat_time" required>
                    <option value="">Select Parameters</option>
                    {parameterOptions.map((param, index) => (
                      <option key={index} value={param}>{param}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>

              {/* TAT Time */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="tat_time">TAT Time</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Select id="tat_time" required>
                    <option value="">Select TAT Time</option>
                    {tatTimeOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>

              {/* TAT Time Duration */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="tat_time_duration">TAT Time Duration</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="text" placeholder="Enter TAT Time Duration" id="tat_time_duration" required />
                </Col>
              </Row>

              {/* Recommended Age */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="recommended_age">Recommended Age</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="text" placeholder="Enter Recommended Age" id="recommended_age" required />
                </Col>
              </Row>

              {/* Category Dropdown */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="category">Category</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Select id="category" required>
                    <option value="">Select Category</option>
                    {categories?.map((cat) => (
                      <option key={cat._id} value={cat._id}>{cat.name}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>

              {/* Is Active */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="is_active">Is Active</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Check type="checkbox" id="is_active" />
                </Col>
              </Row>

              {/* Recommended Gender */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="recommended_gender">Recommended Gender</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Select id="recommended_gender" required>
                    <option value="">Select Gender</option>
                    {recommendedGenderOptions.map((gender, index) => (
                      <option key={index} value={gender}>{gender}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>

              {/* Discount */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="discount">Discount</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="number" placeholder="Enter Discount" id="discount" required />
                </Col>
              </Row>

              {/* Fasting Time */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="fasting_time">Fasting Time</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Select id="fasting_time" required>
                    <option value="">Select Fasting Time</option>
                    {fastingTimeOptions.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>

              {/* Package Price */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="package_price">Package Price</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="number" placeholder="Enter Package Price" id="package_price" required />
                </Col>
              </Row>

              {/* Smart Report Available */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="smart_report_available">Smart Report Available</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Check type="checkbox" id="smart_report_available" />
                </Col>
              </Row>

              {/* Sample type */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="sample_types">Sample Type</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Select id="sample_types" required>
                    <option value="">Select Fasting Time</option>
                  </Form.Select>
                </Col>
              </Row>

              {/* Sample 1 HR Interval 3 Times */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="sample_1h_interval_3times">Sample 1 HR Interval 3 Times</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Check type="checkbox" id="sample_1h_interval_3times" />
                </Col>
              </Row>

              {/* Sample 1 HR Interval 2 Times */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="sample_1h_interval_2times">Sample 1 HR Interval 2 Times</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Check type="checkbox" id="sample_1h_interval_2times" />
                </Col>
              </Row>

              {/* Sample 2 HR Interval 1 Times */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="sample_2h_interval_1time">Sample 2 HR Interval 1 Times</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Check type="checkbox" id="sample_2h_interval_1time" />
                </Col>
              </Row>

              {/* Sample 20 Min Interval 3 Times */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="sample_20m_interval_3times">Sample 20 Min Interval 3 Times</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Check type="checkbox" id="sample_20m_interval_3times" />
                </Col>
              </Row>


              {/* Home Collection */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="home_collection">Home Collection</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Check type="checkbox" id="home_collection" />
                </Col>
              </Row>

              <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit">Submit</Button>
              </div>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TestForm
