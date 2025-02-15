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
        <h1 className="home-title">Budi's flags!</h1>
        <p className="home-text">
          flag game wooo, u get a cookie if u get them all right!
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
