import React from 'react';

const WeatherCard = ({ city, weather, onAddFavorite }) => {
  return (
    <div className="weather-card">
      <h3>{city}</h3>
      <p>Temperature: {weather.temp}°C</p>

      <button onClick={() => onAddFavorite(city)}>Add to Favorites</button>
    </div>
  );
};

export default WeatherCard;
