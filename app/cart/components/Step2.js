// components/Step2.js
import { Calendar, ChevronDown, ChevronUp, Dna, Plus, User, UsersRound } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Accordion, Badge } from "react-bootstrap";
import AddPatientModal from "./AddPatientModal";
import apiClient from "../../../services/apiClient";
import { API_URL } from "../../../utils/constant";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { selectPatient } from "../../../redux/cartSlice";

const Step2 = ({ onNext, onBack, onPatientSelection }) => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const { items, selectedPatient, selectPatientsItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [patients, setPatients] = useState([]);
  const [activeKeys, setActiveKeys] = useState([]);


  const handleAccordionToggle = (key) => {
    setActiveKeys((prevKeys) =>
      prevKeys.includes(key)
        ? prevKeys.filter((k) => k !== key)
        : [...prevKeys, key]
    );
        
  };

  const getPatientsList = useCallback(async () => {
    try {
      let response = await apiClient.get(`${API_URL}api/member/list`);
      console.log('response',response)
      let patients = response?.data?.data?.map((_v, _x) => ({
        ..._v,
        id: _v._id,
        tests: items?.map((_cv, _cx) => ({
          ..._cv,
          id: _cv._id,
          checked: true,
        })),
      }));
      setPatients(patients||[]);
    } catch (error) {
      toast.error(error.message);
    }
  }, [items]);

  useEffect(() => {
    getPatientsList();
  }, [getPatientsList]);

  return (
    <div className="container">
      <h4>
        <UsersRound size={24} /> Patients
      </h4>
      <button
        className="btn btn-lg btn-outline-primary w-100 mb-2"
        onClick={() => handleOpenModal()}
      >
        <Plus /> Add Patient
      </button>
      <Accordion activeKey={activeKeys} alwaysOpen>
        {patients?.map((patient, index) => {
          const allChecked = patient.tests.every((test) => test.checked);
          const someChecked = patient.tests.some((test) => test.checked);
          const eventKey = String(index);

          return (
            <Accordion.Item
              eventKey={eventKey}
              key={patient.id}
              className="custom-accordion mb-3"
            >
              <Accordion.Header>
                <div
                  className="d-flex align-items-center w-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(selectPatient(patient.id));
                    // handleAccordionToggle(eventKey);
                  }}
                >
                  <input
                    type="radio"
                    name="patient"
                    className="form-check-input me-2"
                    checked={selectedPatient === patient.id}
                    onChange={() => dispatch(selectPatient(patient.id))}
                    ref={(el) => {
                      if (el) {
                        el.indeterminate = someChecked && !allChecked;
                      }
                    }}
                    id={`patient_${patient.id}`}
                  />
                  <label htmlFor={`patient_${patient.id}`}>{patient.name}</label>
                  <Badge bg="secondary" className="ms-2">
                    {patient?.relation}
                  </Badge>
                  
                </div>
                <span onClick={()=>{handleAccordionToggle(eventKey)}}>
                    {activeKeys.includes(eventKey)? <ChevronUp strokeWidth={1.5}/>:<ChevronDown strokeWidth={1.5}/> }
                    
                  </span>
              </Accordion.Header>
              <Accordion.Body>
                <div className="d-flex align-items-center gap-2">
                  <span>
                    <Calendar size={16} />
                  </span>
                  <span className="fw-semibold text-muted">Dob : </span>
                  <span>{patient?.dob}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span>
                    <User size={16} />
                  </span>
                  <span className="fw-semibold text-muted">Gender : </span>
                  <span>{patient?.gender}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span>
                    <Dna size={16} />
                  </span>
                  <span className="fw-semibold text-muted">Relation : </span>
                  <span>{patient?.relation}</span>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>

      <AddPatientModal
        show={showModal}
        onClose={handleCloseModal}
        getPatientsList={getPatientsList}
      />
    </div>
  );
};

export default Step2;
