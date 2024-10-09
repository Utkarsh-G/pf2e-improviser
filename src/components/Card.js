import React from 'react';

const Card = ({ title, description, category }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{category}</span>
    </div>
  );
};

export default Card;