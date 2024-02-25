import s from './App.module.scss';
import { useGetWeatherQuery } from './redux-store/weather/weatherApi';

function App() {
  const { data, isLoading } = useGetWeatherQuery();
  console.log(data);
  return <div className={s.App}></div>;
}

export default App;
