import React from "react";

const AlsoLookingFor = () => {
  const testLinks = [
    "Complete Blood Count (CBC)",
    "Blood Glucose Test",
    "Lipid Profile Test",
    "Liver Function Test (LFT)",
    "Kidney Function Test (KFT)",
    "Thyroid Function Test (TFT)",
    "Hemoglobin Test",
    "Vitamin D Test",
  ];

  return (
    <section className="py-4 bg-light">
      <div className="container">
        <h2 className="mb-4">People are also looking for</h2>
        <div className="d-flex flex-wrap gap-2">
          {testLinks.map((test, index) => (
            <a
              key={index}
              href="#"
              className="badge rounded-pill bg-white shadow-sm text-dark py-2 px-3 fw-semibold"
              style={{ color: "#12344d", textDecoration: "none" }}
            >
              {test}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlsoLookingFor;
