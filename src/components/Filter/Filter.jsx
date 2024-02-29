import { useDispatch, useSelector } from 'react-redux';
import { setfilterWeather } from '../../redux-store/weather/weatherSlice';
import { IoSearch } from 'react-icons/io5';

import style from './Filter.module.scss';

function Filter() {
  const filter = useSelector(state => state.weatherReducer.filter);
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      <IoSearch className={style.svg} />
      <input
        className={style.input}
        type="text"
        name="filter"
        placeholder="Search your trip"
        onChange={e => dispatch(setfilterWeather(e.currentTarget.value))}
        value={filter}
      />
    </div>
  );
}

export default Filter;
