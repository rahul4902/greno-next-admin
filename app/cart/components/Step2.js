// components/Step2.js
import { Plus, UsersRound } from "lucide-react";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import AddPatientModal from "./AddPatientModal"

const Step2 = ({ onNext, onBack, onPatientSelection }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(null);
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Rohan Three | 7 | Male",
      tests: [
        { id: 1, name: "Kidney Function Test (KFT)", checked: false },
        {
          id: 2,
          name: "Fit India Full Body Checkup With Vitamin Screening with Free HsCRP",
          checked: true,
        },
        {
          id: 3,
          name: "Fit India Full Body Checkup With Vitamin Screening",
          checked: true,
        },
      ],
    },
    {
      id: 2,
      name: "Rohan Second | 10 | Male",
      tests: [
        { id: 1, name: "Kidney Function Test (KFT)", checked: false },
        {
          id: 2,
          name: "Fit India Full Body Checkup With Vitamin Screening with Free HsCRP",
          checked: true,
        },
        {
          id: 3,
          name: "Fit India Full Body Checkup With Vitamin Screening",
          checked: true,
        },
      ],
    },
  ]);

  const [activeKeys, setActiveKeys] = useState(
    patients.map((_, index) => String(index)) // Open all accordions by default
  );

  const toggleParentCheckbox = (patientId) => {
    setPatients((prev) =>
      prev.map((patient) =>
        patient.id === patientId
          ? {
              ...patient,
              tests: patient.tests.map((test) => ({
                ...test,
                checked: !patient.tests.every((t) => t.checked),
              })),
            }
          : patient
      )
    );
  };

  const toggleChildCheckbox = (patientId, testId) => {
    setPatients((prev) =>
      prev.map((patient) =>
        patient.id === patientId
          ? {
              ...patient,
              tests: patient.tests.map((test) =>
                test.id === testId ? { ...test, checked: !test.checked } : test
              ),
            }
          : patient
      )
    );
  };

  const handleAccordionToggle = (eventKey) => {
    setActiveKeys(
      (prev) =>
        prev.includes(eventKey)
          ? prev.filter((key) => key !== eventKey) // Close the accordion
          : [...prev, eventKey] // Open the accordion
    );
  };

    const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (patient = null) => {
    setCurrentPatient(patient); // Set patient data if editing
    setShowModal(true);
  };

  const handleSavePatient = (patient, isEditing) => {
    if (isEditing) {
      // Update existing patient data
      setPatients((prevPatients) =>
        prevPatients.map((p) =>
          p.id === patient.id ? { ...p, ...patient } : p
        )
      );
    } else {
      // Add new patient
      const newPatient = { ...patient, id: Date.now() }; // Assign a new unique ID
      setPatients((prevPatients) => [...prevPatients, newPatient]);
    }
  };

  return (
    <div className="container">
      <h4><UsersRound size={24} /> Patients</h4>
      <button className="btn btn-lg btn-outline-primary w-100 mb-2"  onClick={() => handleShowModal()}><Plus/> Add Patient</button>
      <Accordion activeKey={activeKeys} alwaysOpen>
        {patients.map((patient, index) => {
          const allChecked = patient.tests.every((test) => test.checked);
          const someChecked = patient.tests.some((test) => test.checked);
          const eventKey = String(index);

          return (
            <Accordion.Item
              eventKey={eventKey}
              key={patient.id}
              className="custom-accordion"
            >
              <Accordion.Header onClick={() => handleAccordionToggle(eventKey)}>
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  checked={allChecked}
                  onChange={(e) => {
                    e.stopPropagation(); // Prevent accordion toggle
                    toggleParentCheckbox(patient.id);
                  }}
                  ref={(el) => {
                    if (el) {
                      el.indeterminate = someChecked && !allChecked;
                    }
                  }}
                />
                {patient.name} ({patient.tests.filter((t) => t.checked).length})
              </Accordion.Header>
              <Accordion.Body>
                {patient.tests.map((test) => (
                  <div
                    className="form-check d-flex align-items-center mb-2"
                    key={test.id}
                  >
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      checked={test.checked}
                      onChange={() => toggleChildCheckbox(patient.id, test.id)}
                    />
                    <label className="form-check-label title">{test.name}</label>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
      <AddPatientModal
        show={showModal}
        handleClose={handleCloseModal}
        patientData={currentPatient}
        onSave={handleSavePatient}
      />
    </div>
  );
};

export default Step2;
