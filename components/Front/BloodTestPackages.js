import { Card, Row, Col } from "react-bootstrap";
import styles from "./BloodTests.module.css";
import { CircleDot, IndianRupee } from "lucide-react";

const BloodTestPackages = () => {
  return (
    <div className="container">
      <Row className={styles.labRow}>
        {[1, 2, 3].map(() => {
          return (
            <>
              <Col md={4}>
                <Card className={styles.labPackageCard}>
                  <Card.Body>
                    <div className={styles.labPackageHeader}>
                      <h4 className={styles.labPackageTitle}>
                        Basic Health Checkup
                      </h4>
                      <div className={styles.labPriceWrapper}>
                        <div className={styles.labCurrentPrice}>
                          Spacial Price <IndianRupee strokeWidth={2.5} />999
                        </div>
                      </div>
                    </div>

                    <div className={styles.labTestList}>
                      {[
                        "Complete Blood Count (CBC)",
                        "Blood Glucose Fasting",
                        "Lipid Profile",
                        "Liver Function Tests",
                        "Kidney Function Tests",
                        "Thyroid Stimulating Hormone (TSH)",
                        "Urine Routine Analysis",
                        "Hemoglobin A1C",
                        "Electrolyte Panel",
                      ].map((test, i) => (
                        <div key={i} className={styles.labTestItem}>
                          <CircleDot strokeWidth={2.5} width={10} className="me-2"/>{" "} {test}
                        </div>
                      ))}
                    </div>

                    <div className={styles.labPackageFooter}>
                      <button className="btn btn-primary w-100">
                       Book Now At <IndianRupee strokeWidth={2.5}  width={16}/>999
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>{" "}
            </>
          );
        })}
      </Row>
    </div>
  );
};

export default BloodTestPackages;
