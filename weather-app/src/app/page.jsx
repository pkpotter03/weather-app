"use client";
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherDisplay from '../components/WeatherDisplay';
import ForecastDisplay from '../components/ForecastDisplay';
import { getWeatherData, getForecastData } from '../lib/weather';


export default function Home() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const weatherData = await getWeatherData(city);
      const forecastData = await getForecastData(city);

      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      {loading && <div className="text-center mt-10">Loading...</div>}
      {error && <div className="text-center mt-10 text-red-500">{error}</div>}
      {weather && <WeatherDisplay weather={weather} />}
      {forecast && <ForecastDisplay forecast={forecast} />}
    </div>
  );
}
