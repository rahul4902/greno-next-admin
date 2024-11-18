// components/Step2.js
import { useState } from "react";
import { Form, Button, ListGroup, Badge } from "react-bootstrap";

const Step2 = ({ onNext, onBack, onPatientSelection }) => {
  const [selectedPatients, setSelectedPatients] = useState([]);

  const togglePatient = (patient) => {
    const newSelection = selectedPatients.includes(patient)
      ? selectedPatients.filter((p) => p !== patient)
      : [...selectedPatients, patient];
    setSelectedPatients(newSelection);
    onPatientSelection(newSelection);
  };

  return (
    <div>
      <h4>Add Patients</h4>
      {selectedPatients?.map((patient, index) => (
        <div key={index} className="mb-3">
          <h5>
            {patient.name} | {patient.age} | {patient.gender}{" "}
            <Badge bg="info">{patient.tests.length}</Badge>
          </h5>
          <ListGroup>
            {patient.tests.map((test, i) => (
              <ListGroup.Item key={i} className="d-flex align-items-center">
                <Form.Check
                  type="checkbox"
                  checked={test.selected}
                  onChange={() => togglePatientTest(index, i)}
                />
                <span className="ms-2">{test.name}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      ))}
    </div>
  );
};

export default Step2;
