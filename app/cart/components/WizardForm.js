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
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, toggleLoginModal } from "../../../redux/authSlice";
import { setCartStep } from "../../../redux/cartSlice";
import { toast } from "react-toastify";

const WizardForm = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, isLoginModalVisible } = useSelector(
    (state) => state.auth
  );
  const { items, selectedPatient, selectedAddress, cartStep } = useSelector(
    (state) => state.cart
  );

  const handleNext = () => {
    if (cartStep < 4 && isLoggedIn) {
      if (cartStep == 2) {
        if (selectedPatient) {
          dispatch(setCartStep(cartStep + 1));
        } else {
          toast.error("Please select patient");
        }
      } else if (cartStep == 3) {
        if (selectedAddress) {
          dispatch(setCartStep(cartStep + 1));
        } else {
          toast.error("Please select address");
        }
      } else {
        dispatch(setCartStep(cartStep + 1));
      }
    } else {
      dispatch(setCartStep(1));
      if (!isLoggedIn && !isLoginModalVisible) {
        dispatch(toggleLoginModal(true));
      }
    }
  };

  const handleBack = () => {
    if (cartStep > 1 && isLoggedIn) {
      dispatch(setCartStep(cartStep - 1));
    } else {
      dispatch(setCartStep(1));
      if (!isLoggedIn && !isLoginModalVisible) {
        dispatch(toggleLoginModal(true));
      }
    }
  };

  const handlePatientSelection = (updatedPatients) => {
    setPatients(updatedPatients);
  };

  const renderStep = () => {
    switch (cartStep) {
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
      {items?.length > 0 ? (
        <Row className="justify-content-center">
          <Col md={6}>
            <ProgressBar />
            <Col md={12}>
              <div className="step-content py-3">{renderStep()}</div>
            </Col>
          </Col>
          <Col md={4}>
            <Row>
              <Col md={12}>
                <PriceDetails />
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
                {cartStep < 4 && (
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
        <EmptyCart />
      )}
    </Container>
  );
};

export default WizardForm;
