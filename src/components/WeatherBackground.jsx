import React from 'react';

import sky from '../assets/gifs/sky.webp';
import clearDay from '../assets/gifs/clearDay.webp';
import clearNight from '../assets/gifs/clearNight.jpeg';
import cloudyDay from '../assets/gifs/cloudyDay.webp';
import cloudyNight from '../assets/gifs/cloudyNight.webp';
import haze from '../assets/gifs/haze.jpeg';
import rain from '../assets/gifs/rain.webp';
import snow from '../assets/gifs/snow.webp';
import thunderStorm from '../assets/gifs/thunderStorm.webp';
import wind from '../assets/gifs/wind.webp';


const WeatherBackground = ({ condition }) => {
  const weatherImageMap = {
    Clear: { day: clearDay, night: clearNight },
    Clouds: { day: cloudyDay, night: cloudyNight },
    Rain: rain,
    Drizzle: rain,
    Thunderstorm: thunderStorm,
    Snow: snow,
    Mist: haze,
    Haze: haze,
    Fog: haze,
    Dust: wind,
    Sand: wind,
    Tornado: thunderStorm,
    default: sky,
  };

  const getBackground = () => {
    if (!condition) return weatherImageMap.default;

    const weatherType = condition.main;
    const asset = weatherImageMap[weatherType];

    if (!asset) return weatherImageMap.default;

    return typeof asset === 'object'
      ? condition.isDay
        ? asset.day
        : asset.night
      : asset;
  };

  const background = getBackground();

  return (
    <div className="absolute inset-0 -z-10">
      <img
        src={background}
        alt="weather-background"
        className="w-full h-full object-cover opacity-40 pointer-events-none animate-fade-in"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};

export default WeatherBackground;
