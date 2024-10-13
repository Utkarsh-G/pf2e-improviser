import React, { useState } from 'react';
import Form from './components/Form';
import CardList from './components/CardList';
import QuickReferenceModal from './components/QuickReferenceModal';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (formData) => {
    setCards(prevCards => [...prevCards, formData]);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <h1>PF2e Improviser</h1>
      <Form onSubmit={handleSubmit} />
      <button className="quick-reference-btn" onClick={toggleModal}>Quick Reference</button>
      <CardList cards={cards} />
      {isModalOpen && <QuickReferenceModal onClose={toggleModal} />}
    </div>
  );
}

export default App;
