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

  // Duplicate the array to create an infinite effect
  const marqueeLinks = [testLinks];

  return (
    <section className="py-4 bg-light">
      <div className="container">
        <h3 className="mb-4 font-bold">People are also looking for</h3>
        <div className="marquee-container">
          <div className="marquee-content">
            {testLinks.map((test, index) => (
              <a
                key={index}
                href="#"
                className="badge rounded-pill bg-white shadow-sm text-dark py-2 px-3 fw-semibold mb-2 mx-2"
              >
                <h6 className="mb-0 text-primary-custom">{test}</h6>
              </a>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default AlsoLookingFor;
