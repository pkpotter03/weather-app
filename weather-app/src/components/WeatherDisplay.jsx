import React from 'react';

const WeatherDisplay = ({ weather }) => {
  if (!weather) {
    return <div className="text-center mt-10">Weather data is not available at the moment. Please try again later.</div>;
  }

  const condition = weather.weather[0].description;
  const iconCode = weather.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="text-2xl font-bold">{weather.name}</h2>
      <img src={iconUrl} alt={condition} className="w-12 h-12"/>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Humidity: {weather.main.humidity} %</p>
      <p>Condition: {condition}</p>
    </div>
  );
};

export default WeatherDisplay;
