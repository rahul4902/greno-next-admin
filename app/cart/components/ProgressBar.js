// components/ProgressBar.js
import { Row, Col } from "react-bootstrap";
import {
  CalendarClock,
  Check,
  IndianRupee,
  TestTube,
  ListTodo,
  UsersRound,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setCartStep } from "../../../redux/cartSlice";

// Define steps with labels
const steps = [
  { step: 1, label: "Tests", icon: <ListTodo color="#12344d" size={15} /> },
  {
    step: 2,
    label: "Patients",
    icon: <UsersRound color="#12344d" size={15} />,
  },
  {
    step: 3,
    label: "Address",
    icon: <CalendarClock color="#12344d" size={15} />,
  },
  {
    step: 4,
    label: "Payment",
    icon: <IndianRupee color="#12344d" size={15} />,
  },
];

const ProgressBarComponent = () => {
  const { cartStep } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  // Function to handle clicking on steps
  const handleStepClick = (targetStep) => {
    if (targetStep <= cartStep) {
      dispatch(setCartStep(targetStep));
      // setStep(targetStep);
    }
  };

  return (
    <Row className="progress-bar-custom mb-4 d-flex align-items-center justify-content-center">
      {steps.map((item, index) => (
        <Col key={item.step} className="text-center position-relative">
          <Col key={item.step} className="text-center position-relative">
            {/* Line connecting steps */}
            {index > 0 && (
              <div
                className={`progress-line ${
                  item.step <= cartStep ? "bg-primary-custom" : "bg-secondary"
                }`}
              ></div>
            )}
            {/* Step Button */}
            <div
              className={`progress-step ${
                item.step <= cartStep ? "completed" : ""
              } ${item.step === cartStep ? "current" : ""}`}
              onClick={() => handleStepClick(item.step)}
            >
              {/* Display Check icon for completed steps, otherwise show step number */}
              <span className="fw-bold">
                {" "}
                {item.step < cartStep ? (
                  <Check size={20} color="white" />
                ) : (
                  item.step
                )}
              </span>
            </div>
            {/* Step Label */}
          </Col>
          <div className="progress-label title-primary">
            {item.icon} {item.label}
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ProgressBarComponent;
