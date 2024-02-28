import React from 'react';
import { DateTime } from 'luxon';

const WeatherCard = item => {
  const weekDay = DateTime.fromISO(item.item.datetime).toFormat('EEEE');
  return (
    <div>
      <h4>{weekDay}</h4>
      <p>{item.item.icon}</p>
      <p>
        {item.item.tempmin}/{item.item.tempmax}
      </p>
    </div>
  );
};

export default WeatherCard;
