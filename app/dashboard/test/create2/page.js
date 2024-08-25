'use client';
import { useCallback, useEffect, useState, useRef } from 'react';
// import node module libraries
import { Container } from 'react-bootstrap';
// import widget as custom components
import { PageHeading } from 'widgets';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';
import Select from 'react-select';
import apiService from './../../../../services/apiService';
import { TagsInput } from "react-tag-input-component";


const TestForm = () => {
  

  const [categoryOptions, setCategoryOptions] = useState([]);
  const [sampleTypesOptions, setSampleTypesOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSampleType, setSelectedSampleType] = useState(null);

  const [parameterOptions, setParameterOptions] = useState(["papaya2"]);


  useEffect(() => {
    const fetchCategories = async () => {
      setCategoryOptions(await apiService.fetchCategories());
    };
    const fetchSampleTypes = async () => {
      setSampleTypesOptions(await apiService.fetchSampleTypes());
    };
    fetchCategories();
    fetchSampleTypes();
  }, []);


  const handleParameterKeyUp = (e) => {
    console.log('query',e.target.value)
    // Handle the selected category (e.g., save it to the form state)
  };

  
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

             


             

              {/* TAT Time */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="tat_time">TAT Time</Form.Label>
                <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="Enter Tat Time" id="tat_time" required />                
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
                
                <Select
                  id="category"
                  options={categoryOptions}
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  placeholder="Select Category"
                  isClearable
                  isSearchable      
                  classNamePrefix="react-select"
                />
                </Col>
              </Row>

              {/* Sample type */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="sample_types">Sample Type</Form.Label>
                <Col md={8} xs={12}>
                
                <Select
                  id="sample_types"
                  options={sampleTypesOptions}
                  value={selectedSampleType}
                  onChange={setSelectedSampleType}
                  placeholder="Select Sample Type"
                  isClearable
                  isSearchable      
                  isMulti
                  classNamePrefix="react-select"
                />
                </Col>
              </Row>
               {/* Parameters (Multiple Select) */}

               <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="parameter">Parameters</Form.Label>
                <Col md={8} xs={12}> 
                    <TagsInput
                      name="parameter"
                      placeHolder="Enter parameter"
                      value={parameterOptions}
                      onChange={setParameterOptions}
                      onBlur={() => console.log('Input blurred')}
                      disabled={false}
                      classNames={{
                        input: "custom-input",
                        tag: "custom-tag"
                      }}
                      onKeyUp={handleParameterKeyUp}
                    />
                </Col>
              </Row>
               

              {/* Recommended Gender */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="recommended_gender">Recommended Gender</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Select id="recommended_gender" required>
                    <option value="">Select Gender</option>
                    <option key="1" value="both">Both</option>
                    <option key="2" value="male">Male</option>
                    <option key="3" value="female">Female</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="discountType">Discount Type</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Select id="discountType">
                      <option key="1" value="fixed">Fixed</option>
                      <option key="2" value="percentage">Percentage(%)</option>
                  </Form.Select>
                </Col>
              </Row>

              {/* Discount */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="discount">Discount</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="number" placeholder="Enter Discount" id="discount" min={0} 
                  //max={discountType === 'percentage' ? 100 : null} 
                  required />
                </Col>
              </Row>

              {/* Fasting Time */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="fasting_time">Fasting Time</Form.Label>
                <Col md={8} xs={12}>
                <Form.Control type="number" placeholder="Fasting Time" id="fasting_time"/>
                </Col>
              </Row>

              {/* Package Price */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="package_price">Package Price</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="number" placeholder="Enter Package Price" id="package_price" min={0} required />
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
              {/* Smart Report Available */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="smart_report_available">Smart Report Available</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Check type="checkbox" id="smart_report_available" />
                </Col>
              </Row>

                    {/* Is Active */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="is_active">Is Active</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Check type="checkbox" id="is_active" />
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
