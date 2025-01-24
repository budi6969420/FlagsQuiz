import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/game');
  };

  const handleOpenSettings = () => {
    navigate('/settings');
  };

  return (
    <div className="home-container">
      <div className="main-message">
        <h1 className="home-title">Hey Viviana!</h1>
        <p className="home-text">
          This website is supposed to help you get better at flags, to be able recognize them whenever we are out and about. (id be rly impressed)
        </p>
        <button className="button" onClick={handleStartGame}>
          Start Game
        </button>
        <br/>
        <br/>
        <button className="button" onClick={handleOpenSettings}>
          Settings
        </button>
      </div>
    </div>
  );
};

export default HomePage;
