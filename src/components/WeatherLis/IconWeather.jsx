import React from 'react';
import {
  WiRain,
  WiSnow,
  WiFog,
  WiCloudyWindy,
  WiCloudy,
  WiDayCloudy,
  WiNightAltCloudy,
  WiDaySunny,
  WiNightClear,
} from 'weather-icons-react';

const IconWeather = ({ icon, size }) => {
  if (icon === 'rain') {
    return <WiRain size={size} color="#66a1f5" />;
  }
  if (icon === 'snow') {
    return <WiSnow size={size} color="#66a1f5" />;
  }
  if (icon === 'fog') {
    return <WiFog size={size} color="#66a1f5" />;
  }
  if (icon === 'wind') {
    return <WiCloudyWindy size={size} color="#66a1f5" />;
  }
  if (icon === 'cloudy') {
    return <WiCloudy size={size} color="#66a1f5" />;
  }
  if (icon === 'partly-cloudy-day') {
    return <WiDayCloudy size={size} color="#66a1f5" />;
  }
  if (icon === 'partly-cloudy-night') {
    return <WiNightAltCloudy size={size} color="#66a1f5" />;
  }
  if (icon === 'clear-day') {
    return <WiDaySunny size={size} color="#66a1f5" />;
  }
  if (icon === 'clear-night') {
    return <WiNightClear size={size} color="#66a1f5" />;
  }
};

export default IconWeather;
