"use client";
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { X, User, Mail, Phone, Send } from "lucide-react";
import styles from "@/app/form.module.css";
import Image from "next/image";

const CallbackModal = ({ show, handleClose }) => {
  // const [show, handleClose] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [handleClose]);

  // const handleClose = () => handleClose(false);

  return (
    <Modal
      show={show}
      onHide={()=>{handleClose(false)}}
      centered
      backdrop="static"
      className={styles.customModal}
      size="lg"
    >
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={()=>{handleClose(false)}}>
          <X size={24} className={styles.closeIcon} />
        </button>

        <div className="row g-0">
          <div className="col-md-6 d-none d-md-block p-3">
            <div className={`${styles.imageContainer}`}>
              <Image
                src="/images/callback_img.png" // Replace with your image path
                alt="Customer Service"
                layout="fill"
                objectFit="cover"
                className={styles.decorativeImage}
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>

          <div className="col-md-6">
            <div className={styles.formContent}>
              <h2 className={styles.modalTitle}>
                Request A Call Back
                <span className={`${styles.titleHighlight} text-danger-custom`}>
                  Home Collection!
                </span>
              </h2>

              <form className={styles.attractiveForm}>
                <div className={styles.inputGroup}>
                  <User className={styles.inputIcon} />
                  <input
                    type="text"
                    className={styles.customInput}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <Mail className={styles.inputIcon} />
                  <input
                    type="email"
                    className={styles.customInput}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <Phone className={styles.inputIcon} />
                  <input
                    type="tel"
                    className={styles.customInput}
                    placeholder="Mobile Number"
                    required
                    pattern="[0-9]{10}"
                  />
                </div>

                <Button
                  type="submit"
                  className={`${styles.submitButton} btn btn-primary-custom`}
                >
                  Send Request Now <Send />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CallbackModal;
