import React from 'react';
import Spinner from '../Spiner/Spiner';
import WeatherCard from './WeatherCard';
import { useGetWeatherQuery } from '../../redux-store/weather/weatherApi';
import { useSelector } from 'react-redux';

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
    return <div> {error} </div>;
  }
  if (!isLoading) {
    return (
      <div>
        {data.days.map((e, i) => {
          return <WeatherCard item={e} key={`weatherCard${i}`} />;
        })}
      </div>
    );
  }
};

export default WeatherList;
