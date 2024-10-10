import React, { useState, useEffect } from 'react';
import statCalculations from '../utils/statCalculations.js';
import statCategories from '../utils/statCategories.js';
import roadmaps from '../data/roadmaps.js';
import d20Icon from '../images/d20.png';  // Import the d20 icon
import './Card.css';

const calculateHalfLevel = (level) => {
  return Math.max(1, Math.ceil(level / 2));
};

const Card = ({ name, level, baseRoadmap }) => {
  const statButtons = [
    'AC', 'Perception', 'HP', 'Fort', 'Ref', 'Will', 
    'Attack', 'Attk Damage', 'Save DC', 'AoE Damage', 
    'AoE Radius', 'Skill'
  ];

  const [showOptions, setShowOptions] = useState({});
  const [selectedValues, setSelectedValues] = useState({});
  const [smallTextBox, setSmallTextBox] = useState('');
  const [largeTextBox, setLargeTextBox] = useState('');

  useEffect(() => {
    const roadmap = roadmaps[baseRoadmap] || {};
    const initialValues = {};
    for (const [stat, option] of Object.entries(roadmap)) {
      if (statCalculations[stat]) {
        initialValues[stat] = {
          option,
          value: statCalculations[stat](level, option)
        };
      }
    }
    setSelectedValues(initialValues);
  }, [baseRoadmap, level]);

  const halfLevel = calculateHalfLevel(level);
  const placeholderText = `Notes. Use for immunity, resistances (value: ${halfLevel}-${level}), weaknesses (value: ${halfLevel}-${level}), as well as special reactions, tracking skill training, etc.`;


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
      <span>{baseRoadmap}</span>
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
                  <img src={d20Icon} alt="d20" className="d20-icon" />
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
        placeholder={placeholderText}
        className="large-text-box"
      />
    </div>
  );
};

export default Card;