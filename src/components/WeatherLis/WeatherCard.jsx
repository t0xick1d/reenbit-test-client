import React from 'react';
import { DateTime } from 'luxon';

import s from './WeatherList.module.scss';

const WeatherCard = item => {
  const weekDay = DateTime.fromISO(item.item.datetime).toFormat('EEEE');
  return (
    <li className={s.cardContainer}>
      <h4>{weekDay}</h4>
      <p>{item.item.icon}</p>
      <p>
        {Math.round(((item.item.tempmin - 32) * 5) / 9)}/
        {Math.round(((item.item.tempmax - 32) * 5) / 9)}
      </p>
    </li>
  );
};

export default WeatherCard;
