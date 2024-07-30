import React, { useMemo } from 'react';

const ForecastDisplay = ({ forecast }) => {
  const groupedData = useMemo(() => {
    if (!forecast || !forecast.list) return null;

    const today = new Date().toLocaleDateString();

    const grouped = forecast.list.reduce((acc, item) => {
      const date = new Date(item.dt_txt).toLocaleDateString();
      if (date === today) return acc;

      if (!acc[date]) {
        acc[date] = {
          tempSum: 0,
          tempCount: 0,
          conditions: {},
          count: 0,
          iconCode: item.weather[0].icon, // Initialize iconCode for the day
        };
      }
      acc[date].tempSum += item.main.temp;
      acc[date].tempCount += 1;
      acc[date].count += 1;
      const condition = item.weather[0].description;
      if (!acc[date].conditions[condition]) {
        acc[date].conditions[condition] = 0;
      }
      acc[date].conditions[condition] += 1;

      // Update iconCode for the day if the current item has a different icon
      if (item.weather[0].icon !== acc[date].iconCode) {
        acc[date].iconCode = item.weather[0].icon;
      }
      
      return acc;
    }, {});

    return Object.keys(grouped).map((date) => {
      const avgTemp = grouped[date].tempSum / grouped[date].tempCount;
      const mostFrequentCondition = Object.keys(grouped[date].conditions).reduce(
        (a, b) => (grouped[date].conditions[a] > grouped[date].conditions[b] ? a : b)
      );
      const iconUrl = `http://openweathermap.org/img/wn/${grouped[date].iconCode}@2x.png`;

      return {
        date,
        avgTemp,
        condition: mostFrequentCondition,
        iconUrl,
      };
    });
  }, [forecast]);

  if (!forecast || !forecast.list) {
    return <div className="text-center mt-10">Forecast data is not available at the moment. Please try again later.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="text-2xl font-bold">5-Day Forecast</h2>
      <div className="flex flex-col gap-4 mt-4 sm:flex-row ">
        {groupedData.map((day, index) => (
          <div key={index} className="flex flex-col items-center p-2 border rounded-lg ">
            <p>{day.date}</p>
            <img src={day.iconUrl} alt={day.condition} className="w-12 h-12"/>
            <p>Avg Temp: {day.avgTemp.toFixed(2)} °C</p>
            <p>{day.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastDisplay;
