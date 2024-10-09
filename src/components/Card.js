import React, { useState } from 'react';
import './Card.css'; // Make sure to create this CSS file

const Card = ({ title, description, category }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedAC, setSelectedAC] = useState(null);

  const handleACClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    setSelectedAC(option);
    setShowOptions(false);
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{category}</span>
      <div className="ac-container">
      <button
        className="ac-button"
        onClick={handleACClick}
        data-selected={selectedAC ? selectedAC.toLowerCase() : ''}
      >
        {selectedAC ? `AC: ${selectedAC}` : 'AC'}
      </button>
        {showOptions && (
          <div className="ac-options">
            {['Low', 'Moderate', 'High', 'Extreme'].map((option) => (
              <button
                key={option}
                className={`ac-option ${option.toLowerCase()}`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;