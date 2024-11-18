import { useState } from "react";

const Step1 = ({ onNext, onBack, onPatientSelection }) => {
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
      <h2>Add Patients</h2>
      <div>
        <label>
          <input
            type="checkbox"
            onChange={() => togglePatient("Patient 1")}
            checked={selectedPatients.includes("Patient 1")}
          />
          Patient 1
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => togglePatient("Patient 2")}
            checked={selectedPatients.includes("Patient 2")}
          />
          Patient 2
        </label>
      </div>
    </div>
  );
};

export default Step1;
