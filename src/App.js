import Filter from './components/Filter/Filter';
import s from './App.module.scss';
import { useGetWeatherQuery } from './redux-store/weather/weatherApi';
import { addTrip, setActiveModal } from './redux-store/weather/weatherSlice';
import WeatherList from './components/weatherList/WeatherList';

import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/Modal/Modal';

function App() {
  const listTrips = useSelector(state => state.weatherReducer.listTrip);
  const activeModal = useSelector(state => state.weatherReducer.activeModal);
  const dispatch = useDispatch();
  if (listTrips.length === 0) {
    dispatch(addTrip({ city: 'Berlin', startDate: '1', endDate: '2' }));
  }
  return (
    <div className={s.app}>
      <div className={s.mainContainer}>
        <div className={`${s.section}  ${s.sectionFirst}`}>
          <h1>
            Weather <span>Forecast</span>
          </h1>
          <Filter />
          <WeatherList
            weatherList={listTrips}
            activeModal={activeModal}
            setActiveModal={setActiveModal}
          />
        </div>
        <div className={`${s.section}  ${s.sectionSecond}`}>section 2</div>
        {activeModal && (
          <Modal setActiveModal={setActiveModal} activeModal={activeModal} />
        )}
      </div>
    </div>
  );
}

export default App;
