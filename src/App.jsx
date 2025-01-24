import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CountryGuessingPage from './pages/countryGuessingPage/countryGuessingPage';
import HomePage from './pages/homePage/HomePage';
import GameOverPage from './pages/gameOverPage/gameOverPage';
import SettingsPage from './pages/settingsPage/settingsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<CountryGuessingPage />} />
          <Route path="/game-over" element={<GameOverPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
