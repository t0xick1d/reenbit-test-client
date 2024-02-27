import { useDispatch, useSelector } from 'react-redux';
import { setfilterWeather } from '../../redux-store/weather/weatherSlice';

import style from './Filter.module.scss';

function Filter() {
  const filter = useSelector(state => state.weatherReducer.filter);
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="text"
        name="filter"
        onChange={e => dispatch(setfilterWeather(e.currentTarget.value))}
        value={filter}
      />
    </div>
  );
}

export default Filter;
