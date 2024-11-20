// components/WizardForm.js
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import EmptyCart from "./EmptyCart";
import PriceDetails from "./PriceDetails";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const WizardForm = () => {
  const [step, setStep] = useState(1);
  const [patients, setPatients] = useState([]);
  const [totalAmount, setTotalAmount] = useState(11991);
  const [discount, setDiscount] = useState(1200);

  const cartItems = useSelector((state) => state.cart.items);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handlePatientSelection = (updatedPatients) => {
    setPatients(updatedPatients);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 onNext={handleNext} />;
      case 2:
        return (
          <Step2
            onNext={handleNext}
            onBack={handleBack}
            onPatientSelection={handlePatientSelection}
          />
        );
      case 3:
        return <Step3 onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <Step4 onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <Container className="wizard-form my-4">
      {cartItems?.length >0? (
        <Row className="justify-content-center">
          <Col md={6}>
            <ProgressBar step={step} setStep={setStep} />
            <Col md={12}>
              <div className="step-content p-3">{renderStep()}</div>
            </Col>
          </Col>
          <Col md={4}>
            <Row>
              <Col md={12}>
                <PriceDetails
                  totalAmount={totalAmount}
                  discount={discount}
                  step={step}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="text-end">
                {/* {step > 1 && (
                <Button
                  variant="secondary"
                  onClick={handleBack}
                  className="me-2 w-100"
                >
                  Back
                </Button>
              )} */}
                {step < 4 && (
                  <Button
                    variant="primary"
                    className="btn-lg w-100"
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        <EmptyCart/>
      )}
    </Container>
  );
};

export default WizardForm;
