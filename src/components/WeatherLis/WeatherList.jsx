import React from 'react';
import Spinner from '../Spiner/Spiner';
import WeatherCard from './WeatherCard';
import { useGetWeatherQuery } from '../../redux-store/weather/weatherApi';
import { useSelector } from 'react-redux';

import s from './WeatherList.module.scss';

const WeatherList = () => {
  const listTrip = useSelector(state => state.weatherReducer.listTrip);
  const activeTrip = useSelector(state => state.weatherReducer.activeTrip);
  const { city = '', startDate = '', endDate = '' } = listTrip[activeTrip];
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
   return (
     <div className={s.container}>
       <h3>Week</h3>
       <ul className={s.ulContainer}>
         {data.days.map((e, i) => {
           return <WeatherCard item={e} key={`weatherCard${i}`} />;
         })}
       </ul>
     </div>
   );
  }
};

export default WeatherList;
