import Filter from './components/Filter/Filter';
import s from './App.module.scss';
import {
  addTrip,
  setActiveModal,
  setActiveTrip,
} from './redux-store/weather/weatherSlice';
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
        city: 'Barcelona',
        startDate: DateTime.now().plus({ day: 1 }).toFormat('y-LL-dd'),
        endDate: DateTime.now().plus({ days: 3 }).toFormat('y-LL-dd'),
      })
    );
  }
 dispatch(setActiveTrip(weatherList[0]));

 function findPath(mountain) {
   const n = mountain.length;
   const dp = new Array(n).fill().map(() => []);

   // Copy the last row of the mountain to the new array
   dp[n - 1] = [...mountain[n - 1]];

   for (let i = n - 2; i >= 0; i--) {
     for (let j = 0; j < mountain[i].length; j++) {
       dp[i][j] =
         mountain[i][j] +
         Math.max(dp[i + 1][j], dp[i + 1][j + 1] || 0, dp[i + 1][j - 1] || 0);
     }
   }

   return Math.max(...dp[0]);
 }

 // Example usage
 const mountain = [
   [6],
   [7, 10],
   [12, 11, 9],
   [90, 25, 13, 1],
   [90, 25, 13, 1, 10, 96],
 ];
 console.log(findPath(mountain));

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
