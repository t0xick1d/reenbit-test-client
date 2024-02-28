import React from 'react';
import { setActiveTrip } from '../../redux-store/weather/weatherSlice';
import { useDispatch } from 'react-redux';

const TripCard = ({ city, startDate, endDate, index }) => {
  const dispatch = useDispatch();
  return (
    <li
      onClick={e => {
        dispatch(setActiveTrip(index));
      }}
    >
      <h3> {city}</h3>
      <div>
        <p>{startDate}</p> - <p>{endDate}</p>
      </div>
    </li>
  );
};

export default TripCard;
