import React, { useState } from 'react';
import statCalculations from '../utils/statCalculations.js';
import statCategories from '../utils/statCategories.js';
import './Card.css';

const Card = ({ name, level, baseTemplate }) => {
  const statButtons = [
    'AC', 'Perception', 'HP', 'Fort', 'Ref', 'Will', 
    'Attack', 'Attk Damage', 'Save DC', 'AoE Damage', 
    'AoE Radius', 'Skill'
  ];

  const [showOptions, setShowOptions] = useState({});
  const [selectedValues, setSelectedValues] = useState({});
  const [smallTextBox, setSmallTextBox] = useState('');
  const [largeTextBox, setLargeTextBox] = useState('');

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
        {statButtons.map((stat, index) => (
          <React.Fragment key={stat}>
            {index === 2 && (
              <input
                type="text"
                value={smallTextBox}
                onChange={(e) => setSmallTextBox(e.target.value)}
                maxLength="4"
                placeholder="HP"
                className="small-text-box"
              />
            )}
            <div className="stat-button-container">
              <button
                className="stat-button"
                onClick={() => handleButtonClick(stat)}
                data-selected={selectedValues[stat] ? selectedValues[stat].option.toLowerCase() : ''}
              >
                {selectedValues[stat] 
                  ? `${stat}: ${selectedValues[stat].value} (${selectedValues[stat].option}) ` 
                  : stat}
              </button>
              {showOptions[stat] && (
                <div className="stat-options">
                  {statCategories[stat].map((option) => (
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
          </React.Fragment>
        ))}
      </div>
      <textarea
        value={largeTextBox}
        onChange={(e) => setLargeTextBox(e.target.value)}
        maxLength="1024"
        placeholder="Notes. Use for immunity, resistances, weaknesses, as well as special reactions, tracking skill training, etc."
        className="large-text-box"
      />
    </div>
  );
};

export default Card;