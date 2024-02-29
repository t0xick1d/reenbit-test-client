import React from 'react';
import Spinner from '../Spiner/Spiner';
import { setActiveTrip } from '../../redux-store/weather/weatherSlice';
import { useGetCityImgQuery } from '../../redux-store/city/cityApi';
import { useDispatch, useSelector } from 'react-redux';

import s from './TripList.module.scss';

const TripCard = ({ city, startDate, endDate, index }) => {
  const activeTrip = useSelector(state => state.weatherReducer.activeTrip);
  const { data, error, isLoading } = useGetCityImgQuery({
    city,
  });
  const dispatch = useDispatch();
  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <div> {error} </div>;
  }
  if (!isLoading) {
    return (
      <li
        onClick={e => {
          dispatch(setActiveTrip(index));
        }}
        className={`${s.cardContainer} ${
          index === activeTrip ? s.activeCard : ''
        }`}
      >
        <img src={data.hits[0].webformatURL} alt={data.hits[0].tags} />
        <div className={s.infoContainer}>
          <h3> {city}</h3>
          <div className={s.dataContainer}>
            <p>{startDate}</p> - <p>{endDate}</p>
          </div>
        </div>
      </li>
    );
  }
};

export default TripCard;
