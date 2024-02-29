import React from 'react';
import Spinner from '../Spiner/Spiner';
import { useGetWeatherQuery } from '../../redux-store/weather/weatherApi';
import { useSelector } from 'react-redux';
import { DateTime } from 'luxon';

import s from './FirstDay.module.scss';

const FirstDay = () => {
  const listTrip = useSelector(state => state.weatherReducer.listTrip);
  const activeTrip = useSelector(state => state.weatherReducer.activeTrip);
  const { city } = listTrip[activeTrip];
  const startDate = DateTime.now().toFormat('y-LL-dd');
  const endDate = DateTime.now().toFormat('y-LL-dd');
  const { data, error, isLoading } = useGetWeatherQuery({
    city,
    startDate,
    endDate,
  });

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return (
      <div>
        {error.status} {JSON.stringify(error.data)}
      </div>
    );
  }
  if (!isLoading) {
    const weekDay = DateTime.fromISO(data.days[0].datetime).toFormat('EEEE');
    return (
      <div className={s.container}>
        <h3>{weekDay}</h3>
        <p>{data.currentConditions.icon}</p>
        <p>{Math.round(((data.currentConditions.temp - 32) * 5) / 9)} ℃</p>
        <h4>{data.address}</h4>
      </div>
    );
  }
};

export default FirstDay;
