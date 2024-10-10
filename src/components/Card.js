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

  const [notification, setNotification] = useState(null);

  const handleSmallButtonClick = (stat) => {
    const randomRoll = Math.floor(Math.random() * 20) + 1; // Generate random number between 1 and 20
    const statValue = selectedValues[stat] ? selectedValues[stat].value : 0;
    const total = randomRoll + statValue;

    const message = `${stat} Roll: ${randomRoll} + ${statValue} = ${total}`;
    setNotification(message);

    // Clear notification after 3 seconds
    setTimeout(() => setNotification(null), 3000);
  };


  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Level: {level}</p>
      <span>{baseTemplate}</span>
      {notification && <div className="notification">{notification}</div>}
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
              {['Perception', 'Fort', 'Ref', 'Will', 'Attack', 'Skill'].includes(stat) && (
                <button 
                  className="small-action-button"
                  onClick={() => handleSmallButtonClick(stat)}
                >
                  +
                </button>
            )}
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