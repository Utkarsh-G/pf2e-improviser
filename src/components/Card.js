import React, { useState } from 'react';
import statCalculations from '../utils/statCalculations.js';
import './Card.css';

const Card = ({ name, level, baseTemplate }) => {
  const statButtons = [
    'AC', 'Perception', 'HP', 'Fort', 'Ref', 'Will', 
    'Attack', 'Attk Damage', 'Save DC', 'AoE Damage', 'AoE Radius'
  ];

  const [showOptions, setShowOptions] = useState({});
  const [selectedValues, setSelectedValues] = useState({});

  const handleButtonClick = (stat) => {
    setShowOptions(prev => ({
      ...prev,
      [stat]: !prev[stat]
    }));
  };

  const handleOptionClick = (stat, option) => {
    const calculatedValue = statCalculations[stat] ? statCalculations[stat](level, option) : null;
    setSelectedValues(prev => ({
      ...prev,
      [stat]: { option, value: calculatedValue }
    }));
    setShowOptions(prev => ({
      ...prev,
      [stat]: false
    }));
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Level: {level}</p>
      <span>{baseTemplate}</span>
      <div className="stat-buttons-container">
        {statButtons.map(stat => (
          <div key={stat} className="stat-button-container">
            <button
              className="stat-button"
              onClick={() => handleButtonClick(stat)}
              data-selected={selectedValues[stat] ? selectedValues[stat].option.toLowerCase() : ''}
            >
              {selectedValues[stat] 
                ? `${stat}: ${selectedValues[stat].option} (${selectedValues[stat].value})` 
                : stat}
            </button>
            {showOptions[stat] && (
              <div className="stat-options">
                {['Low', 'Moderate', 'High', 'Extreme'].map((option) => (
                  <button
                    key={option}
                    className={`stat-option ${option.toLowerCase()}`}
                    onClick={() => handleOptionClick(stat, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;