"use client";
import { useCallback, useEffect, useState, useRef } from "react";
import { Container, Spinner } from "react-bootstrap";
import { FormSelect, PageHeading } from "widgets";
import { Col, Row, Form, Card, Button } from "react-bootstrap";
import Select from "react-select";
import apiService from "@/services/apiService";
import { TagsInput } from "react-tag-input-component";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "utils/constant";
import { TestFormData } from "@/data/greno/defaultFormData";
import { useRouter, useSearchParams } from "next/navigation";
import "./FormWizard.css";
const TestForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState(TestFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [categoryOptions, setCategoryOptions] = useState([]);
  const [sampleTypesOptions, setSampleTypesOptions] = useState([]);
  const [relatedPackageOptions, setRelatedPackageOptions] = useState([]);
  const [packageTestOptions, setPackageTestOptions] = useState([]);
  const [parameterOptions, setParameterOptions] = useState([]);
  const [tagOptions, setTagOptions] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [testType, setTestType] = useState("test");

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

  const handlePackageOrTestChange = (e) => {
    const { name, value } = e.target;
    setTestType(value || "test");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let response;
      if (editMode) {
        response = await axios.post(API_URL + "api/test/update", {
          ...formData,
          parameter: parameterOptions,
          tags: tagOptions,
        });
      } else {
        response = await axios.post(API_URL + "api/test/create", {
          ...formData,
          parameter: parameterOptions,
          tags: tagOptions,
        });
      }

      if (response.data.status === 422) {
        setErrors(response.data.errors);
        toast.error(response.data.message);
        setIsSubmitting(false);
        return;
      } else if (response.data.status === 200) {
        toast.success(response.data.message);
        setFormData(TestFormData);

        router.push("/admin/dashboard/test");
      } else {
        toast.error(response.data.message);
        setIsSubmitting(false);
      }
      // Handle successful submission (e.g., show a success message or redirect)
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors || {});
      } else {
        console.error("Submission error", error);
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
    const fetchRelatedTests = async () => {
      let testList = await apiService.fetchTests();
      setRelatedPackageOptions(testList);
      setPackageTestOptions(testList);
    };
    fetchCategories();
    fetchSampleTypes();
    fetchRelatedTests();
  }, []);

  const handleParameterKeyUp = (e) => {
    console.log("query", e.target.value);
    // Handle the selected category (e.g., save it to the form state)
  };

  const handleTagKeyUp = (e) => {
    console.log("query", e.target.value);
    // Handle the selected category (e.g., save it to the form state)
  };

  // Text Criteria
  const handleCriteriaInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedCriteria = [...formData.test_criteria];
    updatedCriteria[index][name] = value;
    setFormData({ ...formData, test_criteria: updatedCriteria });
  };

  const handleAnswerChange = (index, answerIndex, event) => {
    const updatedCriteria = [...formData.test_criteria];
    updatedCriteria[index].answer[answerIndex] = event.target.value;
    setFormData({ ...formData, test_criteria: updatedCriteria });
  };

  const handleAddMoreCriteria = () => {
    setFormData({
      ...formData,
      test_criteria: [
        ...formData.test_criteria,
        { question: "", answer: [""] },
      ],
    });
  };

  const handleAddMoreAnswer = (index) => {
    const updatedCriteria = [...formData.test_criteria];
    updatedCriteria[index].answer.push("");
    setFormData({ ...formData, test_criteria: updatedCriteria });
  };

  const handleRemoveCriteria = (index) => {
    const updatedCriteria = [...formData.test_criteria];
    updatedCriteria.splice(index, 1);
    setFormData({ ...formData, test_criteria: updatedCriteria });
  };

  const handleRemoveAnswer = (index, answerIndex) => {
    const updatedCriteria = [...formData.test_criteria];
    updatedCriteria[index].answer.splice(answerIndex, 1);
    setFormData({ ...formData, test_criteria: updatedCriteria });
  };

  // QNA
  const handleAddMoreQna = () => {
    setFormData({
      ...formData,
      qna: [...formData.qna, { question: "", answer: "" }],
    });
  };

  const handleRemoveQna = (index) => {
    const updatedQna = [...formData.qna];
    updatedQna.splice(index, 1);
    setFormData({ ...formData, qna: updatedQna });
  };

  const handleQnaInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedQna = [...formData.qna];
    updatedQna[index][name] = value;
    setFormData({ ...formData, qna: updatedQna });
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const steps = [
    { id: 1, title: "Info", completed: false },
    { id: 2, title: "Price", completed: false },
    { id: 3, title: "Age/Gender", completed: false },
    { id: 4, title: "FAQ", completed: false },
    { id: 5, title: "Meta", completed: false },
    { id: 6, title: "Description", completed: false },
  ];

  useEffect(() => {
    const fetchRelatedTests = async () => {
      let _id = searchParams.get("_id");
      if (_id) {
        let testData = await apiService.fetchTest(_id);
        console.log("testData", testData);
        setFormData(testData);
        setTestType(testData?.package_or_test || "");
        setParameterOptions(testData?.parameter || []);
        setTagOptions(testData?.tags || []);
        setEditMode(true);
      }
    };
    fetchRelatedTests();
  }, [searchParams]);

  return (
    <div className="form-wizard">
      <Container fluid className="p-6">
        {/* Page Heading */}
        <PageHeading
          heading={`${editMode ? "Edit" : "Create New"} ${
            testType == "test" ? "Test" : "Package"
          }`}
        />
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="step-indicator">
            {steps.map((step, stepIndex) => (
              <div
                onClick={() => {
                  setCurrentStep(step.id);
                }}
                key={step.id}
                role="button"
                className={`step ${currentStep === step.id ? "active" : ""} ${
                  step.completed ? "completed" : ""
                }`}
              >
                <div className="step-number">{step.id}</div>
                <div className="step-title">{step.title}</div>
              </div>
            ))}
          </div>
        </div>
        <Form onSubmit={handleSubmit}>
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-1">
                  Create {testType == "test" ? "Test" : "Package"}
                </h4>
                
                <Button variant="primary"  type="submit" disabled={isSubmitting} size="sm">
                  {isSubmitting?<><Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...</>:<>Submit</>}
                
            </Button>
              </div>
            </Card.Header>
            {/* card body */}
            <Card.Body>
              <div>
                {currentStep === 1 && (
                  <section>
                    {/* Is Active */}
                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="status">
                        Is Active
                      </Form.Label>
                      <Col md={2} xs={3}>
                        <Form.Check
                          type="checkbox"
                          id="status"
                          name="status"
                          checked={formData.status || false}
                          onChange={handleChange}
                        />
                      </Col>
                      <Form.Label
                        className="col-sm-2"
                        htmlFor="package_or_test"
                      >
                        Test Type
                      </Form.Label>
                      <Col md={4} xs={3}>
                        <Form.Select
                          id="package_or_test"
                          name="package_or_test"
                          value={formData.package_or_test || ""}
                          onChange={(e) => {
                            handleChange(e);
                            handlePackageOrTestChange(e);
                          }}
                          isInvalid={!!errors.package_or_test}
                        >
                          <option value="test">Test</option>
                          <option value="package">Package</option>
                        </Form.Select>

                        {errors.package_or_test && (
                          <Form.Control.Feedback type="invalid">
                            {errors.package_or_test}
                          </Form.Control.Feedback>
                        )}
                      </Col>
                    </Row>
                    {/* Code */}
                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="code">
                        Code
                      </Form.Label>
                      <Col md={8} xs={12}>
                        <Form.Control
                          type="text"
                          placeholder="Enter Code"
                          id="code"
                          name="code"
                          value={formData.code || ""}
                          onChange={handleChange}
                          isInvalid={!!errors.code}
                        />
                        {errors.code && (
                          <Form.Control.Feedback type="invalid">
                            {errors.code}
                          </Form.Control.Feedback>
                        )}
                      </Col>
                    </Row>

                    {/* Name */}
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

                    {/* Category Dropdown */}
                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="category">
                        Category
                      </Form.Label>
                      <Col md={8} xs={12}>
                        <Select
                          id="category"
                          name="category"
                          options={categoryOptions}
                          value={categoryOptions.map((item) => {
                            if (formData?.category == item?.value) {
                              return {
                                label: item?.label,
                                value: item?.value,
                              };
                            }
                          })}
                          onChange={(e) => {
                            setFormData({ ...formData, category: e.value });
                          }}
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
                      <Form.Label className="col-sm-4" htmlFor="sample_types">
                        Sample Type
                      </Form.Label>
                      <Col md={8} xs={12}>
                        <Select
                          id="sample_types"
                          name="sample_types"
                          options={sampleTypesOptions}
                          onChange={(selectedOptions) => {
                            const selectedValues = selectedOptions
                              ? selectedOptions.map((option) => option.value)
                              : [];
                            setFormData({
                              ...formData,
                              sample_types: selectedValues,
                            });
                            console.log("sample_types", formData?.sample_types);
                          }}
                          value={sampleTypesOptions.filter((option) =>
                            formData.sample_types?.includes(option.value)
                          )}
                          placeholder="Select Sample Type"
                          isClearable
                          isSearchable
                          isMulti
                          classNamePrefix="react-select"
                          isInvalid={!!errors.sample_types}
                        />
                        {errors.sample_types && (
                          <div className="text-danger">
                            {errors.sample_types}
                          </div>
                        )}
                      </Col>
                    </Row>
                    {/* Parameters (Multiple Select) */}
                    {testType == "test" ? (
                      <Row className="mb-3">
                        <Form.Label className="col-sm-4" htmlFor="parameter">
                          Parameters
                        </Form.Label>
                        <Col md={8} xs={12}>
                          <TagsInput
                            name="parameter"
                            placeHolder="Enter parameter"
                            value={parameterOptions}
                            onChange={setParameterOptions}
                            onBlur={() => console.log("Input blurred")}
                            disabled={false}
                            classNames={{
                              input: "custom-input",
                              tag: "custom-tag",
                            }}
                            onKeyUp={handleParameterKeyUp}
                            isInvalid={!!errors.parameter}
                          />
                          {errors.parameter && (
                            <div className="text-danger">
                              {errors.parameter}
                            </div>
                          )}
                        </Col>
                      </Row>
                    ) : (
                      <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="package_tests">
                        Package Tests
                      </Form.Label>
                      <Col md={8} xs={12}>
                        <Select
                          id="package_tests"
                          name="package_tests"
                          options={packageTestOptions}
                          onChange={(selectedOptions) => {
                            const selectedValues = selectedOptions
                              ? selectedOptions.map((option) => option.value)
                              : [];
                            setFormData({
                              ...formData,
                              package_tests: selectedValues,
                            });
                          }}
                          value={packageTestOptions.filter((option) =>
                            formData.package_tests?.includes(option.value)
                          )}
                          placeholder="Select Package Tests"
                          isClearable
                          isSearchable
                          isMulti
                          classNamePrefix="react-select"
                          isInvalid={!!errors.package_tests}
                        />
                        {errors.package_tests && (
                          <div className="text-danger">
                            {errors.package_tests}
                          </div>
                        )}
                      </Col>
                    </Row>
                    )}
                  </section>
                )}

                {currentStep === 2 && (
                  <section>
                    {/* Amount */}
                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="amount">
                        Amount
                      </Form.Label>
                      <Col md={8} xs={12}>
                        <Form.Control
                          type="number"
                          placeholder="Enter Amount"
                          id="amount"
                          name="amount"
                          value={formData.amount || ""}
                          onChange={handleChange}
                          isInvalid={!!errors.amount}
                        />
                        {errors.amount && (
                          <Form.Control.Feedback type="invalid">
                            {errors.amount}
                          </Form.Control.Feedback>
                        )}
                      </Col>
                    </Row>

                    {/* Lab Cost */}
                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="lab_cost">
                        Lab Cost
                      </Form.Label>
                      <Col md={8} xs={12}>
                        <Form.Control
                          type="number"
                          placeholder="Enter Lab Cost"
                          id="lab_cost"
                          name="lab_cost"
                          value={formData.lab_cost || ""}
                          onChange={handleChange}
                          isInvalid={!!errors.lab_cost}
                        />
                        {errors.lab_cost && (
                          <Form.Control.Feedback type="invalid">
                            {errors.lab_cost}
                          </Form.Control.Feedback>
                        )}
                      </Col>
                    </Row>

                    {/* Offer Price */}
                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="offer_price">
                        Offer Price
                      </Form.Label>
                      <Col md={8} xs={12}>
                        <Form.Control
                          type="number"
                          placeholder="Enter Offer Price"
                          id="offer_price"
                          name="offer_price"
                          value={formData.offer_price || ""}
                          onChange={handleChange}
                          isInvalid={!!errors.offer_price}
                        />
                        {errors.offer_price && (
                          <Form.Control.Feedback type="invalid">
                            {errors.offer_price}
                          </Form.Control.Feedback>
                        )}
                      </Col>
                    </Row>
                    {/* Discount Type */}
                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="discountType">
                        Discount Type
                      </Form.Label>
                      <Col md={8} xs={12}>
                        <Form.Select
                          id="discountType"
                          name="discountType"
                          value={formData.discountType || ""}
                          onChange={handleChange}
                          isInvalid={!!errors.discountType}
                        >
                          <option value="fixed">Fixed</option>
                          <option value="percentage">Percentage (%)</option>
                        </Form.Select>
                        {errors.discountType && (
                          <div className="text-danger">
                            {errors.discountType}
                          </div>
                        )}
                      </Col>
                    </Row>

                    {/* Discount */}
                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="discount">
                        Discount
                      </Form.Label>
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
                          <Form.Control.Feedback type="invalid">
                            {errors.discount}
                          </Form.Control.Feedback>
                        )}
                      </Col>
                    </Row>
                  </section>
                )}

                {currentStep === 3 && (
                  <section>
                    {/* Fasting Time */}
                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="fasting_time">
                      Fasting Time
                      </Form.Label>
                      <Col md={4} xs={6}>
                        <Form.Control
                          type="text"
                          placeholder="Enter Fasting Time"
                          id="fasting_time"
                          name="fasting_time"
                          value={formData.fasting_time || ""}
                          onChange={handleChange}
                          isInvalid={!!errors.fasting_time}
                        />
                        {errors.fasting_time && (
                          <Form.Control.Feedback type="invalid">
                            {errors.fasting_time}
                          </Form.Control.Feedback>
                        )}
                      </Col>                      
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="tat_time">
                        TAT Time
                      </Form.Label>
                      <Col md={4} xs={6}>
                        <Form.Control
                          type="text"
                          placeholder="Enter TAT Time"
                          id="tat_time"
                          name="tat_time"
                          value={formData.tat_time || ""}
                          onChange={handleChange}
                          isInvalid={!!errors.tat_time}
                        />
                        {errors.tat_time && (
                          <Form.Control.Feedback type="invalid">
                            {errors.tat_time}
                          </Form.Control.Feedback>
                        )}
                      </Col>
                      {/* TAT Time Duration */}
                      <Col md={4} xs={6}>
                        <Form.Control
                          type="text"
                          placeholder="Enter TAT Time Duration"
                          id="tat_time_duration"
                          name="tat_time_duration"
                          value={formData.tat_time_duration || ""}
                          onChange={handleChange}
                          isInvalid={!!errors.tat_time_duration}
                        />
                        {errors.tat_time_duration && (
                          <Form.Control.Feedback type="invalid">
                            {errors.tat_time_duration}
                          </Form.Control.Feedback>
                        )}
                      </Col>
                    </Row>
                    {/* Recommended Age */}
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-4"
                        htmlFor="recommended_age"
                      >
                        Recommended Age/Gender
                      </Form.Label>
                      <Col md={4} xs={6}>
                        <Form.Control
                          type="text"
                          placeholder="Enter Recommended Age"
                          id="recommended_age"
                          name="recommended_age"
                          value={formData.recommended_age || ""}
                          onChange={handleChange}
                          isInvalid={!!errors.recommended_age}
                        />
                        {errors.recommended_age && (
                          <Form.Control.Feedback type="invalid">
                            {errors.recommended_age}
                          </Form.Control.Feedback>
                        )}
                      </Col>
                      {/* Recommended Gender */}
                      <Col md={4} xs={6}>
                        <Form.Select
                          id="recommended_gender"
                          name="recommended_gender"
                          value={formData.recommended_gender || ""}
                          onChange={handleChange}
                          isInvalid={!!errors.recommended_gender}
                        >
                          <option value="">Select Gender</option>
                          <option value="both">Both</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </Form.Select>
                        {errors.recommended_gender && (
                          <div className="text-danger">
                            {errors.recommended_gender}
                          </div>
                        )}
                      </Col>
                    </Row>
                    {/* Minimum Age */}
                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="min_age">
                        Minimum/Max Age
                      </Form.Label>
                      <Col md={4} xs={6}>
                        <Form.Control
                          type="number"
                          placeholder="Enter Minimum Age"
                          id="min_age"
                          name="min_age"
                          value={formData.min_age || ""}
                          onChange={handleChange}
                          isInvalid={!!errors.min_age}
                        />
                        {errors.min_age && (
                          <Form.Control.Feedback type="invalid">
                            {errors.min_age}
                          </Form.Control.Feedback>
                        )}
                      </Col>
                      {/* Maximum Age */}
                      <Col md={4} xs={6}>
                        <Form.Control
                          type="number"
                          placeholder="Enter Maximum Age"
                          id="max_age"
                          name="max_age"
                          value={formData.max_age || ""}
                          onChange={handleChange}
                          isInvalid={!!errors.max_age}
                        />
                        {errors.max_age && (
                          <Form.Control.Feedback type="invalid">
                            {errors.max_age}
                          </Form.Control.Feedback>
                        )}
                      </Col>
                    </Row>

                    {/* Sample 1 HR Interval 3 Times */}
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-4"
                        htmlFor="sample_1h_interval_3times"
                      >
                        Sample 1 HR Interval 3 Times
                      </Form.Label>
                      <Col md={2} xs={12}>
                        <Form.Check
                          type="checkbox"
                          id="sample_1h_interval_3times"
                          name="sample_1h_interval_3times"
                          checked={formData.sample_1h_interval_3times || false}
                          onChange={handleChange}
                        />
                      </Col>

                      {/* Sample 1 HR Interval 2 Times */}

                      <Form.Label
                        className="col-sm-4"
                        htmlFor="sample_1h_interval_2times"
                      >
                        Sample 1 HR Interval 2 Times
                      </Form.Label>
                      <Col md={2} xs={12}>
                        <Form.Check
                          type="checkbox"
                          id="sample_1h_interval_2times"
                          name="sample_1h_interval_2times"
                          checked={formData.sample_1h_interval_2times || false}
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      {/* Sample 2 HR Interval 1 Times */}
                      <Form.Label
                        className="col-sm-4"
                        htmlFor="sample_2h_interval_1time"
                      >
                        Sample 2 HR Interval 1 Time
                      </Form.Label>
                      <Col md={2} xs={2}>
                        <Form.Check
                          type="checkbox"
                          id="sample_2h_interval_1time"
                          name="sample_2h_interval_1time"
                          checked={formData.sample_2h_interval_1time || false}
                          onChange={handleChange}
                        />
                      </Col>

                      {/* Sample 20 Min Interval 3 Times */}
                      <Form.Label
                        className="col-sm-4"
                        htmlFor="sample_20m_interval_3times"
                      >
                        Sample 20 Min Interval 3 Times
                      </Form.Label>
                      <Col md={2} xs={2}>
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
                      <Form.Label
                        className="col-sm-4"
                        htmlFor="home_collection"
                      >
                        Home Collection
                      </Form.Label>
                      <Col md={2} xs={2}>
                        <Form.Check
                          type="checkbox"
                          id="home_collection"
                          name="home_collection"
                          checked={formData.home_collection || false}
                          onChange={handleChange}
                        />
                      </Col>
                      {/* Smart Report Available */}
                      <Form.Label
                        className="col-sm-4"
                        htmlFor="smart_report_available"
                      >
                        Smart Report Available
                      </Form.Label>
                      <Col md={2} xs={2}>
                        <Form.Check
                          type="checkbox"
                          id="smart_report_available"
                          name="smart_report_available"
                          checked={formData.smart_report_available || false}
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                  </section>
                )}

                {currentStep === 4 && (
                  <section>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="qna">
                        FAQ
                      </Form.Label>
                      <Col md={8} xs={12}>
                        {formData?.qna?.map((qna, index) => (
                          <Row
                            key={index}
                            className="mb-3 shadow-sm rounded py-2"
                          >
                            <Col md={6}>
                              <Form.Group controlId={`question-${index}`}>
                                <Form.Label>Question</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="question"
                                  value={qna.question}
                                  onChange={(e) =>
                                    handleQnaInputChange(index, e)
                                  }
                                  placeholder="Enter question"
                                  required
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group controlId={`answer-${index}`}>
                                <Form.Label>Answer</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="answer"
                                  value={qna.answer}
                                  onChange={(e) =>
                                    handleQnaInputChange(index, e)
                                  }
                                  placeholder="Enter answer"
                                  required
                                />
                              </Form.Group>
                            </Col>
                            <Col xs={12} className="mt-2">
                              <Button
                                variant="danger"
                                size="sm"
                                onClick={() => handleRemoveQna(index)}
                              >
                                Remove Qna
                              </Button>
                            </Col>
                          </Row>
                        ))}
                        <div className="d-flex justify-content-end">
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={handleAddMoreQna}
                          >
                            + Add More Qna
                          </Button>
                        </div>
                      </Col>
                    </Row>

                    {/* Tags (Multiple Select) */}

                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="parameter">
                        Tags
                      </Form.Label>
                      <Col md={8} xs={12}>
                        <TagsInput
                          name="tags"
                          placeHolder="Enter tags"
                          value={tagOptions}
                          onChange={setTagOptions}
                          onBlur={() => console.log("Input blurred")}
                          disabled={false}
                          classNames={{
                            input: "custom-input",
                            tag: "custom-tag",
                          }}
                          onKeyUp={handleTagKeyUp}
                          isInvalid={!!errors.tags}
                        />
                        {errors.tags && (
                          <div className="text-danger">{errors.tags}</div>
                        )}
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="criteria">
                        Test Criteria
                      </Form.Label>
                      <Col md={8} xs={12}>
                        {formData.test_criteria.map((criteria, index) => (
                          <Row
                            key={index}
                            className="mb-3 shadow-sm rounded py-2"
                          >
                            <Col md={4}>
                              <Form.Group controlId={`question-${index}`}>
                                <Form.Label>Question</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="question"
                                  value={criteria.question}
                                  onChange={(e) =>
                                    handleCriteriaInputChange(index, e)
                                  }
                                  placeholder="Enter question"
                                  required
                                />
                              </Form.Group>
                            </Col>
                            <Col md={8}>
                              {criteria.answer.map((ans, answerIndex) => (
                                <Form.Group
                                  controlId={`answer-${index}-${answerIndex}`}
                                  key={answerIndex}
                                >
                                  <Form.Label>
                                    Answer {answerIndex + 1}
                                  </Form.Label>
                                  <div className="d-flex">
                                    <Form.Control
                                      type="text"
                                      value={ans}
                                      onChange={(e) =>
                                        handleAnswerChange(
                                          index,
                                          answerIndex,
                                          e
                                        )
                                      }
                                      placeholder="Enter answer"
                                    />
                                    <Button
                                      variant="danger"
                                      size="sm"
                                      onClick={() =>
                                        handleRemoveAnswer(index, answerIndex)
                                      }
                                      className="ms-2"
                                    >
                                      Remove
                                    </Button>
                                  </div>
                                </Form.Group>
                              ))}
                              <Button
                                variant="link"
                                size="sm"
                                onClick={() => handleAddMoreAnswer(index)}
                              >
                                + Add Answer
                              </Button>
                            </Col>
                            <Col xs={12} className="mt-2">
                              <Button
                                variant="danger"
                                size="sm"
                                onClick={() => handleRemoveCriteria(index)}
                              >
                                Remove Criteria
                              </Button>
                            </Col>
                          </Row>
                        ))}
                        <div className="d-flex justify-content-end">
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={handleAddMoreCriteria}
                          >
                            + Add More Criteria
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </section>
                )}

                {currentStep === 5 && (
                  <section>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="meta_keyword">
                        Meta Keyword
                      </Form.Label>
                      <Col md={8} xs={12}>
                        <Form.Control
                          type="text"
                          placeholder="Enter Meta Keyword"
                          id="meta_keyword"
                          name="meta_keyword"
                          value={formData.meta_keyword || ""}
                          onChange={handleChange}
                          isInvalid={!!errors.meta_keyword}
                        />
                        {errors.meta_keyword && (
                          <Form.Control.Feedback type="invalid">
                            {errors.meta_keyword}
                          </Form.Control.Feedback>
                        )}
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="meta_keyword">
                        Meta Description
                      </Form.Label>
                      <Col md={8} xs={12}>
                        <Form.Control
                          type="text"
                          placeholder="Enter Meta Description"
                          id="meta_description"
                          name="meta_description"
                          value={formData.meta_description || ""}
                          onChange={handleChange}
                          isInvalid={!!errors.meta_description}
                        />
                        {errors.meta_description && (
                          <Form.Control.Feedback type="invalid">
                            {errors.meta_description}
                          </Form.Control.Feedback>
                        )}
                      </Col>
                    </Row>
                  </section>
                )}

                {currentStep === 6 && (
                  <section>
                    {/* Details */}
                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="details">
                        Details
                      </Form.Label>
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
                          <Form.Control.Feedback type="invalid">
                            {errors.details}
                          </Form.Control.Feedback>
                        )}
                      </Col>
                    </Row>
                    {/* Description */}
                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="description">
                        Description
                      </Form.Label>
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
                          <Form.Control.Feedback type="invalid">
                            {errors.description}
                          </Form.Control.Feedback>
                        )}
                      </Col>
                    </Row>

                    {/* Also Known As */}
                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="also_known_as">
                        Also Known As
                      </Form.Label>
                      <Col md={8} xs={12}>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Enter Also Known As"
                          id="also_known_as"
                          name="also_known_as"
                          value={formData.also_known_as || ""}
                          onChange={handleChange}
                          isInvalid={!!errors.also_known_as}
                        />
                        {errors.also_known_as && (
                          <Form.Control.Feedback type="invalid">
                            {errors.also_known_as}
                          </Form.Control.Feedback>
                        )}
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="related_tests">
                        Related Package/Test
                      </Form.Label>
                      <Col md={8} xs={12}>
                        <Select
                          id="related_tests"
                          name="related_tests"
                          options={relatedPackageOptions}
                          onChange={(selectedOptions) => {
                            const selectedValues = selectedOptions
                              ? selectedOptions.map((option) => option.value)
                              : [];
                            setFormData({
                              ...formData,
                              related_tests: selectedValues,
                            });
                          }}
                          value={relatedPackageOptions.filter((option) =>
                            formData.related_tests?.includes(option.value)
                          )}
                          placeholder="Select Related Package/Test"
                          isClearable
                          isSearchable
                          isMulti
                          classNamePrefix="react-select"
                          isInvalid={!!errors.related_tests}
                        />
                        {errors.related_tests && (
                          <div className="text-danger">
                            {errors.related_tests}
                          </div>
                        )}
                      </Col>
                    </Row>
                  </section>
                )}

                <div className="navigation-buttons">
                  {currentStep > 1 && (
                    <Button
                      variant="primary"
                      type="button"
                      size="sm"
                      onClick={prevStep}
                    >
                      Previous
                    </Button>
                  )}
                  {currentStep < 6 && (
                    <Button
                      variant="primary"
                      type="button"
                      size="sm"
                      onClick={nextStep}
                    >
                      Next
                    </Button>
                  )}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Form>
      </Container>
    </div>
  );
};

export default TestForm;
