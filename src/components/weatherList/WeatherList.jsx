import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const WeatherList = ({ weatherList = [], activeModal, setActiveModal }) => {
  const dispatch = useDispatch();
  const filter = useSelector(state =>
    state.weatherReducer.filter.toLowerCase()
  );
  const visibleTrip = weatherList.filter(trip =>
    trip.location.toLowerCase().includes(filter)
  );
  return (
    <ul>
      {visibleTrip.map((e, i) => {
        return (
          <li key={`${e.location}${i}`}>
            <h3> {e.location}</h3>
            <div>
              <p>{e.date1}</p> - <p>{e.date2}</p>
            </div>
          </li>
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

export default WeatherList;
