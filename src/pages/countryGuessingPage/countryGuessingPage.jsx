import { useEffect, useState } from 'react';
import flagsDataService from '../../services/flagsDataService';
import gameCreationService from '../../services/gameCreationService';
import settingsService from '../../services/settingsService';
import { useNavigate } from 'react-router-dom';
import './index.css';

const CountryGuessingPage = () => {
  const [countryCodes, setCountryCodes] = useState([]);
  const [game, setGame] = useState({ rounds: [] });
  const [score, setScore] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [clickedOption, setClickedOption] = useState(null);
  const [loadingImage, setLoadingImage] = useState(true);
  const navigate = useNavigate();

  const { timeBetweenRounds, numberOfRounds } = settingsService.getSettings();

  useEffect(() => {
    async function getCountries() {
      const data = await flagsDataService.fetchCountries();
      setCountryCodes(data);
      return data;
    }

    getCountries().then((countries) => {
      const createdGame = gameCreationService.createGame(countries, numberOfRounds);
      setGame(createdGame);

      const currentRound = createdGame.rounds[0];
      const allOptions = [currentRound.countryToGuess, ...currentRound.wrongGuesses];
      setShuffledOptions(allOptions.sort(() => Math.random() - 0.5));
    });
  }, [numberOfRounds]);

  if (game.rounds.length === 0) {
    return <div className="loading">Loading...</div>;
  }

  const currentRoundIndex = numberOfRounds - game.rounds.length + 1;
  const currentRound = game.rounds[0];

  const onOptionClick = (option) => {
    setClickedOption(option.code);
  
    if (option.code === currentRound.countryToGuess.code) {
      setBackgroundColor('#7cb46b');
      setScore((prevScore) => prevScore + 1);
    } else {
      setBackgroundColor('#ff2c2c');
    }
  
    setTimeout(() => {
      setBackgroundColor('white');
      setClickedOption(null);
      const updatedRounds = game.rounds.slice(1);
      if (updatedRounds.length === 0) {
        navigate('/game-over', { state: { score: score + (option.code === currentRound.countryToGuess.code ? 1 : 0), totalRoundCount: numberOfRounds } });
      } else {
        setGame((prevGame) => ({ ...prevGame, rounds: updatedRounds }));
        const newRound = updatedRounds[0];
        const newOptions = [newRound.countryToGuess, ...newRound.wrongGuesses];
        setShuffledOptions(newOptions.sort(() => Math.random() - 0.5));
      }
    }, timeBetweenRounds);
  };

  const handleImageLoad = () => {
    setLoadingImage(false);
  };

  return (
    <div className="game-container" style={{ backgroundColor }}>
      <div className="header">
        <h2>Guess the Country</h2>
        <h3>Score: <span className="score-label">{score}</span></h3>
      </div>
      <div className="round-counter">
        {currentRoundIndex} / {numberOfRounds}
      </div>
      <div className="flag-container">
        {loadingImage && <div className="loading-indicator">Loading Flag...</div>}
        <img
          src={`https://flagcdn.com/w320/${currentRound.countryToGuess.code}.png`}
          className="flag-image"
          alt="Country flag"
          onLoad={handleImageLoad} 
        />
      </div>
      <div className="options-container">
        {shuffledOptions.map((option, index) => (
          <button
            key={index}
            className={`option-button ${clickedOption === option.code ? 'clicked' : ''}`}
            onClick={() => onOptionClick(option)}
            disabled={clickedOption !== null}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CountryGuessingPage;
