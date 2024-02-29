import Filter from './components/Filter/Filter';
import s from './App.module.scss';
import { addTrip, setActiveModal } from './redux-store/weather/weatherSlice';
import TripList from './components/TripList/TripList';
import { DateTime } from 'luxon';

import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/Modal/Modal';
import WeatherList from './components/WeatherLis/WeatherList';
import FirstDay from './components/FirstDay/FirstDay';

function App() {
  const activeModal = useSelector(state => state.weatherReducer.activeModal);
  const weatherList = useSelector(state => state.weatherReducer.listTrip);
  const dispatch = useDispatch();
  if (weatherList.length === 0) {
    dispatch(
      addTrip({
        city: 'Berlin',
        startDate: DateTime.now().toFormat('y-LL-dd'),
        endDate: DateTime.now().plus({ days: 2 }).toFormat('y-LL-dd'),
      })
    );
  }
  return (
    <div className={s.app}>
      <div className={s.mainContainer}>
        <div className={`${s.section}  ${s.sectionFirst}`}>
          <h1 className={s.title}>
            Weather <span>Forecast</span>
          </h1>
          <Filter />
          <TripList activeModal={activeModal} setActiveModal={setActiveModal} />
          <WeatherList />
        </div>
        {activeModal && (
          <Modal setActiveModal={setActiveModal} activeModal={activeModal} />
        )}
        <div className={`${s.section}  ${s.sectionSecond}`}>
          <FirstDay />
        </div>
      </div>
    </div>
  );
}

export default App;
