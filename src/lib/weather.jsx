export async function getWeatherData(city) {
  const apiKey = '80e3b016ff345e425f1921711773fb7d'; // Replace with your OpenWeatherMap API key
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  if (!response.ok) {
    throw new Error('Weather data not found');
  }
  const data = await response.json();
  return data;
}

export async function getForecastData(city) {
  const apiKey = '80e3b016ff345e425f1921711773fb7d'; // Replace with your OpenWeatherMap API key
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
  if (!response.ok) {
    throw new Error('Forecast data not found');
  }
  const data = await response.json();
  return data;
}
