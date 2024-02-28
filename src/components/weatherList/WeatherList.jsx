import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const WeatherList = ({ weatherList = [], activeModal, setActiveModal }) => {
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
          <li key={`${e.name}${i}`}>
            <h3> {e.city}</h3>
            <div>
              <p>{e.startDate}</p> - <p>{e.endDate}</p>
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
