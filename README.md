# Weather App

A responsive web application that provides current weather information and a 5-day forecast for any city. The app dynamically updates its background based on the current weather condition of the searched location.

## Features

- Search for current weather and 5-day forecast by city name.
- Dynamically changes the background based on weather conditions.
- Displays weather details such as temperature, humidity, and condition.
- Real-time weather updates using the OpenWeatherMap API.
- User-friendly design with responsive UI.

## Technologies Used

- **Frontend**: React, Tailwind CSS, Next.js
- **API**: OpenWeatherMap API
- **Hosting**: Vercel

## Getting Started

### Prerequisites

1. Node.js installed on your machine.
2. A valid OpenWeatherMap API key. You can obtain it from [OpenWeatherMap](https://openweathermap.org/api).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
2. Navigate to the project directory:
   ```bash
   cd weather-app
3. Install dependencies:
   ```bash
   npm install
4. Add your OpenWeatherMap API key to the weather.jsx file:
   ```javaScript
   const apiKey = 'YOUR_API_KEY'; // Replace YOUR_API_KEY with your actual key

### Running the Application

1. Start the development server:
   ```bash
    npm run dev
The application will run at http://localhost:3000.

### Building for Production

1. To create a production build:
   ```bash
   npm run build
2. start the application:
   ```bash
    npm start

### Usage

1. Enter a city name in the search bar.
2. View current weather details and a 5-day forecast.
3. Observe the background dynamically change based on the weather condition.
   
### Background Conditions

The background updates according to the following conditions:
Weather Condition	Background Image
Clear	clear.jpg
Clouds	cloudy.jpg
Drizzle	drizzle.jpg
Rain	rain.jpg
Thunderstorm	thunderstorm.jpg
Snow	snow.jpg
Atmosphere (Fog)	fog.jpg
Ensure these images are stored in the /public/images directory.

### Project Structure

  ```css
  weather-app/
├── public/
│   └── images/
│       ├── clear.jpg
│       ├── cloudy.jpg
│       ├── drizzle.jpg
│       ├── fog.jpg
│       ├── rain.jpg
│       ├── snow.jpg
│       └── thunderstorm.jpg
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.jsx
│   │   └── page.jsx
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── WeatherDisplay.jsx
│   │   └── ForecastDisplay.jsx
│   └── services/
│       └── weather.jsx
└── README.md





