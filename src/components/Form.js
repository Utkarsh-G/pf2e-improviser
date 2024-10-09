import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    level: '',
    baseTemplate: 'general'
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
        level: parseInt(formData.level.trim(), 10)
      });
      setFormData({ name: '', level: '', baseTemplate: 'general' });
      setLevelError('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="level"
        value={formData.level}
        onChange={handleChange}
        placeholder="Level (-1 to 24)"
        required
      />
      {levelError && <div className="error">{levelError}</div>}
      <select
        name="baseTemplate"
        value={formData.baseTemplate}
        onChange={handleChange}
      >
        <option value="general">General</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
      </select>
      <button type="submit" disabled={!!levelError}>Create</button>
    </form>
  );
};

export default Form;