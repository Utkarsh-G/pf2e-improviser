import React, { useState } from 'react';
import Form from './components/Form';
import CardList from './components/CardList';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);

  const handleSubmit = (formData) => {
    setCards(prevCards => [...prevCards, formData]);
  };

  return (
    <div className="App">
      <h1>PF2e Improviser</h1>
      <Form onSubmit={handleSubmit} />
      <CardList cards={cards} />
    </div>
  );
}

export default App;
