import React, { useState } from 'react';
import Form from './components/Form';
import CardList from './components/CardList';
import QuickReferenceModal from './components/QuickReferenceModal';
import SpicyModal from './components/SpicyModal';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSpicyModalOpen, setIsSpicyModalOpen] = useState(false);
  const handleSubmit = (formData) => {
    setCards(prevCards => [...prevCards, formData]);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleSpicyModal = () => {
    setIsSpicyModalOpen(!isSpicyModalOpen);
  };

  return (
    <div className="App">
      <h1>PF2e Improviser</h1>
      <Form onSubmit={handleSubmit} />
      <div className="modal-buttons-container">
        <button className="quick-reference-btn" onClick={toggleModal}>Quick Reference</button>
        <button className="quick-reference-btn" onClick={toggleSpicyModal}>Spice it up!</button>
      </div>
      <CardList cards={cards} />
      {isModalOpen && <QuickReferenceModal onClose={toggleModal} />}
      {isSpicyModalOpen && <SpicyModal onClose={toggleSpicyModal} />}
    </div>
  );
}

export default App;
