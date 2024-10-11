import React, { useState, useEffect } from 'react';
import statCalculations from '../utils/statCalculations.js';
import statCategories from '../utils/statCategories.js';
import d20Icon from '../images/d20.png';

const StatButton = ({ stat, level, initialValue, onRoll, onChange }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialValue);

  useEffect(() => {
    setSelectedValue(initialValue);
  }, [initialValue]);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    const calculatedValue = statCalculations[stat] ? statCalculations[stat](level, option) : null;
    const newValue = { option, value: calculatedValue };
    setSelectedValue(newValue);
    setShowOptions(false);
    onChange(stat, newValue);
  };

  const handleSmallButtonClick = () => {
    if (onRoll && selectedValue) {
      onRoll(stat, selectedValue.value);
    }
  };

  const statsThatRoll = ['Fort', 'Ref', 'Will', 'Atk', 'Skill'];

  return (
    <div className="stat-button-container">
      <button
        className="stat-button"
        onClick={handleButtonClick}
        data-selected={selectedValue ? selectedValue.option.toLowerCase() : ''}
      >
        {selectedValue 
          ? `${stat}:  ${statsThatRoll.includes(stat) ? '+' : ''}${selectedValue.value}` 
          : stat}
      </button>
      {statsThatRoll.includes(stat) && (
        <button 
          className="small-action-button"
          onClick={handleSmallButtonClick}
        >
          <img src={d20Icon} alt="d20" className="d20-icon" />
        </button>
      )}
      {showOptions && (
        <div className="stat-options">
          {statCategories[stat].map((option) => (
            <button
              key={option}
              className={`stat-option ${option.toLowerCase()}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatButton;