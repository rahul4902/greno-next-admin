import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ConfirmDialog = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body text-center">
            <p className="fw-bold">{message}</p>
            <div className="d-flex justify-content-center gap-2 mt-3">
              <button
                className="btn btn-outline-primary"
                onClick={onConfirm}
              >
                Yes
              </button>
              <button className="btn btn-outline-secondary" onClick={onClose}>
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
