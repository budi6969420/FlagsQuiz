import React, { useState, useEffect } from "react";
import settingsService from "../../services/settingsService";
import { useNavigate } from "react-router-dom";
import "./index.css";

const SettingsPage = () => {
  const [timeBetweenRounds, setTimeBetweenRounds] = useState(2000);
  const [numberOfRounds, setNumberOfRounds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const settings = settingsService.getSettings();
    setTimeBetweenRounds(settings.timeBetweenRounds);
    setNumberOfRounds(settings.numberOfRounds);
  }, []);

  const handleSave = () => {
    settingsService.updateSettings({ timeBetweenRounds, numberOfRounds });
    navigate("/");
  };

  return (
    <div className="settings-container">
      <h1>Game Settings</h1>
      <div className="settings-form">
        <label>
          <span>Time Between Rounds (ms):</span>
          <input
            type="number"
            value={timeBetweenRounds}
            onChange={(e) => setTimeBetweenRounds(Number(e.target.value))}
            min="1000"
          />
        </label>
        <label>
          <span>Number of Rounds:</span>
          <input
            type="number"
            value={numberOfRounds}
            onChange={(e) => setNumberOfRounds(Number(e.target.value))}
            min="1"
          />
        </label>
        <div className="settings-actions">
          <button onClick={handleSave}>Save</button>
          <button onClick={() => navigate("/")}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
