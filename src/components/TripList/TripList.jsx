import React from 'react';
import TripCard from './TripCards';
import s from './TripList.module.scss';
import { IoIosAdd } from 'react-icons/io';

import { useSelector, useDispatch } from 'react-redux';

const TripList = ({ activeModal, setActiveModal }) => {
  const dispatch = useDispatch();
  const weatherList = useSelector(state => state.weatherReducer.listTrip);

  return (
    <ul className={s.container}>
      {weatherList.map((e, i) => {
        return (
          <TripCard
            key={`${e.city}${i}`}
            city={e.city}
            startDate={e.startDate}
            endDate={e.endDate}
            index={i}
          />
        );
      })}
      <li
        key={`${weatherList.length + 1}`}
        onClick={() => dispatch(setActiveModal(!activeModal))}
        className={s.addTripConatiner}
      >
        <div>
          <IoIosAdd />
          <h3>Add trip</h3>
        </div>
      </li>
    </ul>
  );
};

export default TripList;
