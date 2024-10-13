import React from 'react';
import './QuickReferenceModal.css';

const QuickReferenceModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="back-button" onClick={onClose}>Back</button>
        <h2>Quick Reference</h2>
        {/* Add your quick reference content here */}
        <p>This is where you can put your quick reference information.</p>
      </div>
    </div>
  );
};

export default QuickReferenceModal;