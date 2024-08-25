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
  const [formData, setFormData] = useState({
    packageOrTest: '',
    code: '',
    name: '',
    slug: '',
    amount: '',
    labCost: '',
    offerPrice: '',
    minAge: '',
    maxAge: '',
    tatTime: '',
    tatTimeDuration: '',
    recommendedAge: '',
    recommendedGender: '',
    discountType: '',
    discount: '',
    fastingTime: '',
    packagePrice: '',
    sample1hInterval3Times: false,
    sample1hInterval2Times: false,
    sample2hInterval1Time: false,
    sample20mInterval3Times: false,
    homeCollection: false,
    smartReportAvailable: false,
    isActive: false,
    details: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  

  const [categoryOptions, setCategoryOptions] = useState([]);
  const [sampleTypesOptions, setSampleTypesOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSampleType, setSelectedSampleType] = useState(null);

  const [parameterOptions, setParameterOptions] = useState(["papaya2"]);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
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

    // Basic client-side validation
    let hasErrors = false;
    const newErrors = {};

    // Example validation (you may need to adjust this based on your form fields)
    if (!formData.name) {
      newErrors.name = "Name is required";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await apiService.submitForm(formData);
      console.log('Form submitted successfully', response);
      // Handle successful submission (e.g., show a success message or redirect)
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors || {});
      } else {
        console.error('Submission error', error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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

            <Form onSubmit={handleSubmit}>
              {/* Package or Test */}
              <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="package_or_test">Package or Test</Form.Label>
    <Col md={8} xs={12}>
      <Form.Control
        type="text"
        placeholder="Enter Package or Test"
        id="package_or_test"
        name="package_or_test"
        value={formData.package_or_test || ""}
        onChange={handleChange}
        isInvalid={!!errors.package_or_test}
        required
      />
      {errors.package_or_test && (
        <Form.Control.Feedback type="invalid">{errors.package_or_test}</Form.Control.Feedback>
      )}
    </Col>
  </Row>

            {/* Code */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="code">Code</Form.Label>
    <Col md={8} xs={12}>
      <Form.Control
        type="text"
        placeholder="Enter Code"
        id="code"
        name="code"
        value={formData.code || ""}
        onChange={handleChange}
        isInvalid={!!errors.code}
        required
      />
      {errors.code && (
        <Form.Control.Feedback type="invalid">{errors.code}</Form.Control.Feedback>
      )}
    </Col>
  </Row>

             {/* Name */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="name">Name</Form.Label>
    <Col md={8} xs={12}>
      <Form.Control
        type="text"
        placeholder="Enter Name"
        id="name"
        name="name"
        value={formData.name || ""}
        onChange={handleChange}
        isInvalid={!!errors.name}
        required
      />
      {errors.name && (
        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
      )}
    </Col>
  </Row>

               {/* Slug */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="slug">Slug</Form.Label>
    <Col md={8} xs={12}>
      <Form.Control
        type="text"
        placeholder="Enter Slug"
        id="slug"
        name="slug"
        value={formData.slug || ""}
        onChange={handleChange}
        isInvalid={!!errors.slug}
        required
      />
      {errors.slug && (
        <Form.Control.Feedback type="invalid">{errors.slug}</Form.Control.Feedback>
      )}
    </Col>
  </Row>
             {/* Amount */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="amount">Amount</Form.Label>
    <Col md={8} xs={12}>
      <Form.Control
        type="number"
        placeholder="Enter Amount"
        id="amount"
        name="amount"
        value={formData.amount || ""}
        onChange={handleChange}
        isInvalid={!!errors.amount}
        required
      />
      {errors.amount && (
        <Form.Control.Feedback type="invalid">{errors.amount}</Form.Control.Feedback>
      )}
    </Col>
  </Row>

               {/* Lab Cost */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="lab_cost">Lab Cost</Form.Label>
    <Col md={8} xs={12}>
      <Form.Control
        type="number"
        placeholder="Enter Lab Cost"
        id="lab_cost"
        name="lab_cost"
        value={formData.lab_cost || ""}
        onChange={handleChange}
        isInvalid={!!errors.lab_cost}
        required
      />
      {errors.lab_cost && (
        <Form.Control.Feedback type="invalid">{errors.lab_cost}</Form.Control.Feedback>
      )}
    </Col>
  </Row>

               {/* Offer Price */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="offer_price">Offer Price</Form.Label>
    <Col md={8} xs={12}>
      <Form.Control
        type="number"
        placeholder="Enter Offer Price"
        id="offer_price"
        name="offer_price"
        value={formData.offer_price || ""}
        onChange={handleChange}
        isInvalid={!!errors.offer_price}
        required
      />
      {errors.offer_price && (
        <Form.Control.Feedback type="invalid">{errors.offer_price}</Form.Control.Feedback>
      )}
    </Col>
  </Row>

            {/* Minimum Age */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="min_age">Minimum Age</Form.Label>
    <Col md={8} xs={12}>
      <Form.Control
        type="number"
        placeholder="Enter Minimum Age"
        id="min_age"
        name="min_age"
        value={formData.min_age || ""}
        onChange={handleChange}
        isInvalid={!!errors.min_age}
        required
      />
      {errors.min_age && (
        <Form.Control.Feedback type="invalid">{errors.min_age}</Form.Control.Feedback>
      )}
    </Col>
  </Row>
  {/* Maximum Age */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="max_age">Maximum Age</Form.Label>
    <Col md={8} xs={12}>
      <Form.Control
        type="number"
        placeholder="Enter Maximum Age"
        id="max_age"
        name="max_age"
        value={formData.max_age || ""}
        onChange={handleChange}
        isInvalid={!!errors.max_age}
        required
      />
      {errors.max_age && (
        <Form.Control.Feedback type="invalid">{errors.max_age}</Form.Control.Feedback>
      )}
    </Col>
  </Row>

             


             

              {/* TAT Time */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="tat_time">TAT Time</Form.Label>
    <Col md={8} xs={12}>
      <Form.Control
        type="text"
        placeholder="Enter TAT Time"
        id="tat_time"
        name="tat_time"
        value={formData.tat_time || ""}
        onChange={handleChange}
        isInvalid={!!errors.tat_time}
        required
      />
      {errors.tat_time && (
        <Form.Control.Feedback type="invalid">{errors.tat_time}</Form.Control.Feedback>
      )}
    </Col>
  </Row>

            {/* TAT Time Duration */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="tat_time_duration">TAT Time Duration</Form.Label>
    <Col md={8} xs={12}>
      <Form.Control
        type="text"
        placeholder="Enter TAT Time Duration"
        id="tat_time_duration"
        name="tat_time_duration"
        value={formData.tat_time_duration || ""}
        onChange={handleChange}
        isInvalid={!!errors.tat_time_duration}
        required
      />
      {errors.tat_time_duration && (
        <Form.Control.Feedback type="invalid">{errors.tat_time_duration}</Form.Control.Feedback>
      )}
    </Col>
  </Row>

               {/* Recommended Age */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="recommended_age">Recommended Age</Form.Label>
    <Col md={8} xs={12}>
      <Form.Control
        type="text"
        placeholder="Enter Recommended Age"
        id="recommended_age"
        name="recommended_age"
        value={formData.recommended_age || ""}
        onChange={handleChange}
        isInvalid={!!errors.recommended_age}
        required
      />
      {errors.recommended_age && (
        <Form.Control.Feedback type="invalid">{errors.recommended_age}</Form.Control.Feedback>
      )}
    </Col>
  </Row>
 {/* Category Dropdown */}
 <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="category">Category</Form.Label>
    <Col md={8} xs={12}>
      <Select
        id="category"
        name="category"
        options={categoryOptions}
        value={selectedCategory}
        onChange={(selected) => setSelectedCategory(selected)}
        placeholder="Select Category"
        isClearable
        isSearchable
        classNamePrefix="react-select"
        isInvalid={!!errors.category}
      />
      {errors.category && (
        <div className="text-danger">{errors.category}</div>
      )}
    </Col>
  </Row>

              {/* Sample Type */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="sample_types">Sample Type</Form.Label>
    <Col md={8} xs={12}>
      <Select
        id="sample_types"
        name="sample_types"
        options={sampleTypesOptions}
        value={selectedSampleType}
        onChange={(selected) => setSelectedSampleType(selected)}
        placeholder="Select Sample Type"
        isClearable
        isSearchable
        classNamePrefix="react-select"
        isInvalid={!!errors.sample_types}
      />
      {errors.sample_types && (
        <div className="text-danger">{errors.sample_types}</div>
      )}
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
                      isInvalid={!!errors.parameter}
                    />
                    {errors.parameter && (
                      <div className="text-danger">{errors.parameter}</div>
                    )}
                </Col>
              </Row>
               

               {/* Recommended Gender */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="recommended_gender">Recommended Gender</Form.Label>
    <Col md={8} xs={12}>
      <Form.Select id="recommended_gender" name="recommended_gender" value={formData.recommended_gender || ""} onChange={handleChange} isInvalid={!!errors.recommended_gender}>
        <option value="">Select Gender</option>
        <option value="both">Both</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Form.Select>
      {errors.recommended_gender && (
        <div className="text-danger">{errors.recommended_gender}</div>
      )}
    </Col>
  </Row>

               {/* Discount Type */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="discountType">Discount Type</Form.Label>
    <Col md={8} xs={12}>
      <Form.Select id="discountType" name="discountType" value={formData.discountType || ""} onChange={handleChange} isInvalid={!!errors.discountType}>
        <option value="fixed">Fixed</option>
        <option value="percentage">Percentage (%)</option>
      </Form.Select>
      {errors.discountType && (
        <div className="text-danger">{errors.discountType}</div>
      )}
    </Col>
  </Row>

               {/* Discount */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="discount">Discount</Form.Label>
    <Col md={8} xs={12}>
      <Form.Control
        type="number"
        placeholder="Enter Discount"
        id="discount"
        name="discount"
        min={0}
        value={formData.discount || ""}
        onChange={handleChange}
        isInvalid={!!errors.discount}
      />
      {errors.discount && (
        <Form.Control.Feedback type="invalid">{errors.discount}</Form.Control.Feedback>
      )}
    </Col>
  </Row>

            {/* Fasting Time */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="fasting_time">Fasting Time</Form.Label>
    <Col md={8} xs={12}>
      <Form.Control
        type="number"
        placeholder="Fasting Time"
        id="fasting_time"
        name="fasting_time"
        value={formData.fasting_time || ""}
        onChange={handleChange}
        isInvalid={!!errors.fasting_time}
      />
      {errors.fasting_time && (
        <Form.Control.Feedback type="invalid">{errors.fasting_time}</Form.Control.Feedback>
      )}
    </Col>
  </Row>

             {/* Package Price */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="package_price">Package Price</Form.Label>
    <Col md={8} xs={12}>
      <Form.Control
        type="number"
        placeholder="Enter Package Price"
        id="package_price"
        name="package_price"
        min={0}
        value={formData.package_price || ""}
        onChange={handleChange}
        isInvalid={!!errors.package_price}
      />
      {errors.package_price && (
        <Form.Control.Feedback type="invalid">{errors.package_price}</Form.Control.Feedback>
      )}
    </Col>
  </Row>
              

            
 {/* Sample 1 HR Interval 3 Times */}
 <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="sample_1h_interval_3times">Sample 1 HR Interval 3 Times</Form.Label>
    <Col md={8} xs={12}>
      <Form.Check
        type="checkbox"
        id="sample_1h_interval_3times"
        name="sample_1h_interval_3times"
        checked={formData.sample_1h_interval_3times || false}
        onChange={handleChange}
      />
    </Col>
  </Row>

               {/* Sample 1 HR Interval 2 Times */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="sample_1h_interval_2times">Sample 1 HR Interval 2 Times</Form.Label>
    <Col md={8} xs={12}>
      <Form.Check
        type="checkbox"
        id="sample_1h_interval_2times"
        name="sample_1h_interval_2times"
        checked={formData.sample_1h_interval_2times || false}
        onChange={handleChange}
      />
    </Col>
  </Row>


 {/* Sample 2 HR Interval 1 Times */}
 <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="sample_2h_interval_1time">Sample 2 HR Interval 1 Time</Form.Label>
    <Col md={8} xs={12}>
      <Form.Check
        type="checkbox"
        id="sample_2h_interval_1time"
        name="sample_2h_interval_1time"
        checked={formData.sample_2h_interval_1time || false}
        onChange={handleChange}
      />
    </Col>
  </Row>

             {/* Sample 20 Min Interval 3 Times */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="sample_20m_interval_3times">Sample 20 Min Interval 3 Times</Form.Label>
    <Col md={8} xs={12}>
      <Form.Check
        type="checkbox"
        id="sample_20m_interval_3times"
        name="sample_20m_interval_3times"
        checked={formData.sample_20m_interval_3times || false}
        onChange={handleChange}
      />
    </Col>
  </Row>

{/* Home Collection */}
<Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="home_collection">Home Collection</Form.Label>
    <Col md={8} xs={12}>
      <Form.Check
        type="checkbox"
        id="home_collection"
        name="home_collection"
        checked={formData.home_collection || false}
        onChange={handleChange}
      />
    </Col>
  </Row>
          {/* Smart Report Available */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="smart_report_available">Smart Report Available</Form.Label>
    <Col md={8} xs={12}>
      <Form.Check
        type="checkbox"
        id="smart_report_available"
        name="smart_report_available"
        checked={formData.smart_report_available || false}
        onChange={handleChange}
      />
    </Col>
  </Row>

              {/* Is Active */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="is_active">Is Active</Form.Label>
    <Col md={8} xs={12}>
      <Form.Check
        type="checkbox"
        id="is_active"
        name="is_active"
        checked={formData.is_active || false}
        onChange={handleChange}
      />
    </Col>
  </Row>
               {/* Details */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="details">Details</Form.Label>
    <Col md={8} xs={12}>
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Enter Details"
        id="details"
        name="details"
        value={formData.details || ""}
        onChange={handleChange}
        isInvalid={!!errors.details}
      />
      {errors.details && (
        <Form.Control.Feedback type="invalid">{errors.details}</Form.Control.Feedback>
      )}
    </Col>
  </Row>

               {/* Description */}
  <Row className="mb-3">
    <Form.Label className="col-sm-4" htmlFor="description">Description</Form.Label>
    <Col md={8} xs={12}>
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Enter Description"
        id="description"
        name="description"
        value={formData.description || ""}
        onChange={handleChange}
        isInvalid={!!errors.description}
      />
      {errors.description && (
        <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
      )}
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
