import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';

const GameOverPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) handleGoToMainMenu();
  }, []);

  const score = location.state?.score || 0;
  const totalRoundCount = location.state?.totalRoundCount || 0;

  const handlePlayAgain = () => {
    navigate('/game');
  };

  const handleGoToMainMenu = () => {
    navigate('/');
  };

  return (
    <div className="game-over-container">
      <h1 className="game-over-title">Game Over!</h1>
      <div className="score-container">
        <h3>
          Your Score: <span className="score-label">{score} / {totalRoundCount}</span>
        </h3>
      </div>
      <button className="button" onClick={handlePlayAgain}>
        Play Again
      </button>
      <br />
      <button className="button" onClick={handleGoToMainMenu}>
        Go to Main Menu
      </button>
    </div>
  );
};

export default GameOverPage;
