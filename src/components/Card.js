import React, { useState, useEffect } from 'react';
import statCalculations from '../utils/statCalculations.js';
import statCategories from '../utils/statCategories.js';
import roadmaps from '../data/roadmaps.js';
import d20Icon from '../images/d20.png';  // Import the d20 icon
import './Card.css';
import StatButton from './StatButton.js';

const calculateHalfLevel = (level) => {
  return Math.max(1, Math.ceil(level / 2));
};
const Card = ({ name, level, baseRoadmap, type }) => {

  const statButtons = type === 'creature' ? [
    'AC', 'Perception', 'HP', 'Fort', 'Ref', 'Will', 
    'Attack', 'Attk Damage', 'Save DC', 'AoE Damage', 
    'AoE Radius', 'Skill'
  ] : [
    'AC', 'Hardness', 'Hazard HP', 'Fort', 'Ref', 'Attack', 
    'Hazard Damage', 'Save DC', 'Skill'
  ];

  const displayName = name.trim() === '' ? 'Gathofrax' : name.trim();

  const [selectedValues, setSelectedValues] = useState({});
  const [smallTextBox, setSmallTextBox] = useState('');
  const [largeTextBox, setLargeTextBox] = useState('');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const roadmap = roadmaps[baseRoadmap] || {};
    const initialValues = {};
    for (const stat of statButtons) {
      if (roadmap[stat] && statCalculations[stat]) {
        initialValues[stat] = {
          option: roadmap[stat],
          value: statCalculations[stat](level, roadmap[stat])
        };
      }
    }
    setSelectedValues(initialValues);
  }, [baseRoadmap, level]);

  const halfLevel = calculateHalfLevel(level);
  const placeholderText = `Notes. Use for immunity, resistances (value: ${halfLevel}-${level}), weaknesses (value: ${halfLevel}-${level}), as well as special reactions, tracking skill training, etc.`;

  const handleRoll = (stat, statValue) => {
    const randomRoll = Math.floor(Math.random() * 20) + 1;
    const total = randomRoll + statValue;
    const message = `${stat} Roll: ${randomRoll} + ${statValue} = ${total}`;
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleStatChange = (stat, newValue) => {
    setSelectedValues(prev => ({
      ...prev,
      [stat]: newValue
    }));
  };

  return (
    <div className="card">
      <h3>{displayName}</h3>
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
            <StatButton
              stat={stat}
              level={level}
              initialValue={selectedValues[stat]}
              onRoll={handleRoll}
              onChange={handleStatChange}
            />
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