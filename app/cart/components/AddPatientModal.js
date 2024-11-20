// components/AddPatientModal.js
import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddPatientModal = ({ show, handleClose, patientData, onSave }) => {
  const [name, setName] = useState("");
  const [tests, setTests] = useState([
    { id: 1, name: "Kidney Function Test (KFT)", checked: false },
    { id: 2, name: "Full Body Checkup", checked: false },
    { id: 3, name: "Blood Test", checked: false },
  ]);

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (patientData) {
      setName(patientData.name);
      setTests(patientData.tests);
      setIsEditing(true);
    } else {
      setName("");
      setTests([
        { id: 1, name: "Kidney Function Test (KFT)", checked: false },
        { id: 2, name: "Full Body Checkup", checked: false },
        { id: 3, name: "Blood Test", checked: false },
      ]);
      setIsEditing(false);
    }
  }, [patientData]);

  const handleCheckboxChange = (testId) => {
    setTests((prevTests) =>
      prevTests.map((test) =>
        test.id === testId ? { ...test, checked: !test.checked } : test
      )
    );
  };

  const handleSave = () => {
    const updatedPatient = { name, tests };
    onSave(updatedPatient, isEditing);
    handleClose(); // Close modal after saving
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isEditing ? "Edit Patient" : "Add Patient"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="patientName">
            <Form.Label>Patient Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter patient name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>       
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          {isEditing ? "Save Changes" : "Add Patient"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddPatientModal;
