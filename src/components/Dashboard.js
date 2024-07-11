import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { db } from '../firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import WeatherCard from './WeatherCard';

const Dashboard = ({ user }) => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const fetchCoordinates = async (city) => {
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=ffd95504804140d79765df3feb219795`);  // Replace YOUR_OPENCAGE_API_KEY with your actual API key
      const { lat, lng } = response.data.results[0].geometry;
      return { lat, lng };
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  const fetchWeather = async () => {
    try {
      const { lat, lng } = await fetchCoordinates(city);
      console.log(`Fetching weather for coordinates: lat=${lat}, lng=${lng}`);
      const response = await axios.get(`https://api.api-ninjas.com/v1/weather?lat=${lat}&lon=${lng}`, {
        headers: { 'X-Api-Key': 'pjjVhw/fxje3Xk543myF6Q==Cnrr9xAnzsctrN8k' }  // Replace YOUR_API_KEY with your actual API key
      });
      console.log('Weather data fetched:', response.data);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const addFavorite = async (city) => {
    try {
      await addDoc(collection(db, "favorites"), {
        userId: user.uid,
        city: city,
      });
      fetchFavorites();
    } catch (error) {
      console.error("Error adding favorite:", error);
    }
  };

  const fetchFavorites = async () => {
    try {
      const q = query(collection(db, "favorites"), where("userId", "==", user.uid));
      const querySnapshot = await getDocs(q);
      const userFavorites = querySnapshot.docs.map(doc => doc.data().city);
      setFavorites(userFavorites);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchFavorites();
    }
  }, [user]);

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
      <button onClick={fetchWeather}>Get Weather</button>
      {weather && <WeatherCard city={city} weather={weather} onAddFavorite={addFavorite} />}
      <h3>Favorites</h3>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>{favorite}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
