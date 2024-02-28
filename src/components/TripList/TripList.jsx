import React from 'react';
import TripCard from './TripCard';

import { useSelector, useDispatch } from 'react-redux';

const TripList = ({ weatherList = [], activeModal, setActiveModal }) => {
  const dispatch = useDispatch();
  const filter = useSelector(state =>
    state.weatherReducer.filter.toLowerCase()
  );
  const visibleTrip = weatherList.filter(trip =>
    trip.city.toLowerCase().includes(filter)
  );
  return (
    <ul>
      {visibleTrip.map((e, i) => {
        return (
          <TripCard
            key={`${e.name}${i}`}
            city={e.city}
            startDate={e.startDate}
            endDate={e.endDate}
            index={i}
          />
        );
      })}
      <li
        key={`${visibleTrip[0].location}${visibleTrip.length + 1}`}
        onClick={() => dispatch(setActiveModal(!activeModal))}
      >
        <h3>Add trip</h3>
      </li>
    </ul>
  );
};

export default TripList;
