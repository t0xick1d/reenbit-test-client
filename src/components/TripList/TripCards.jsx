import React from 'react';
import {
  setActiveTrip,
  removeTrip,
} from '../../redux-store/weather/weatherSlice';
import { useGetCityQuery } from '../../redux-store/city/cityApi';
import { useDispatch, useSelector } from 'react-redux';
import { TiDelete } from 'react-icons/ti';
import s from './TripList.module.scss';

const TripCard = ({ city = '', startDate = '', endDate = '', index = 0 }) => {
  const activeTrip = useSelector(state => state.weatherReducer.activeTrip);
  const {
    data = { hits: [{ webformatURL: '' }] },
    error,
    isLoading,
  } = useGetCityQuery({
    city,
  });
  const dispatch = useDispatch();
  if (isLoading) {
    return <div>Wait on img</div>;
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
      <li
        onClick={e => {
          dispatch(setActiveTrip(index));
        }}
        className={`${s.cardContainer} ${
          index === activeTrip ? s.activeCard : ''
        }`}
      >
        <TiDelete
          onClick={() => {
            dispatch(removeTrip(index));
          }}
          className={s.deleteSvg}
        />
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
