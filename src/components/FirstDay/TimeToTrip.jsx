import css from './FirstDay.module.scss';
import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

function TimeToTrip({ date }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const getTime = () => {
      const time = DateTime.fromISO(date) - DateTime.now();
      if (0 <= Number(time)) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        setDays(-Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(-Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(-Math.floor((time / 1000 / 60) % 60));
        setSeconds(-Math.floor((time / 1000) % 60));
      }
    };
    const interval = setInterval(() => getTime(date), 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <ul className={css.list}>
      <li className={css.item}>
        <p className={css.date}>
          {days}
          <span className={css.count}>Days</span>
        </p>
      </li>
      <li className={css.item}>
        <p className={css.date}>
          {hours}
          <span className={css.count}>Hours</span>
        </p>
      </li>
      <li className={css.item}>
        <p className={css.date}>
          {minutes}
          <span className={css.count}>Minutes</span>
        </p>
      </li>
      <li className={css.item}>
        <p className={css.date}>
          {seconds}
          <span className={css.count}>Secounds</span>
        </p>
      </li>
    </ul>
  );
}

export default TimeToTrip;
