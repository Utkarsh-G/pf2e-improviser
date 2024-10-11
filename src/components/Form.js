import React, { useState } from 'react';
import roadmaps from '../data/roadmaps.js';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    level: '',
    baseRoadmap: 'No Roadmap'
  });

  const [levelError, setLevelError] = useState('');

  const validateLevel = (level) => {
    const trimmedLevel = level.trim();
    const parsedLevel = parseInt(trimmedLevel, 10);
    
    if (trimmedLevel === '') {
      setLevelError('Level is required');
      return false;
    }
    
    if (isNaN(parsedLevel) || !Number.isInteger(parsedLevel)) {
      setLevelError('Level must be an integer');
      return false;
    }
    
    if (parsedLevel < -1 || parsedLevel > 24) {
      setLevelError('Level must be between -1 and 24');
      return false;
    }
    
    setLevelError('');
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    if (name === 'level') {
      validateLevel(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateLevel(formData.level)) {
      onSubmit({
        ...formData,
        level: parseInt(formData.level.trim(), 10),
        type: e.nativeEvent.submitter.name === 'create-creature' ? 'creature' : 'hazard'
      });
      setFormData({ name: '', level: '', baseRoadmap: 'No Roadmap' });
      setLevelError('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="level"
        value={formData.level}
        onChange={handleChange}
        placeholder="Level (-1 to 24)"
        required
      />
      {levelError && <div className="error">{levelError}</div>}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name (Optional)"
      />
      <select
        name="baseRoadmap"
        value={formData.baseRoadmap}
        onChange={handleChange}
      >
        {Object.keys(roadmaps).map(roadmap => (
          <option key={roadmap} value={roadmap}>{roadmap}</option>
        ))}
      </select>
      <div className="button-container">
        <button type="submit" name="create-creature" disabled={!!levelError}>Create Creature</button>
        <button type="submit" name="create-hazard" disabled={!!levelError}>Create Hazard</button>
      </div>    
    </form>
  );
};

export default Form;