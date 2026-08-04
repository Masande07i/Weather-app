import { Sidebar } from '../Sidebar/Sidebar';
import { WeatherHero } from '../WeatherHero/WeatherHero';
import { WeatherCard } from '../WeatherCard/WeatherCard';
import type { WeatherData } from '../types';

import { WiHumidity, WiBarometer } from 'react-icons/wi';
import { FaWind } from 'react-icons/fa';
import { MdVisibility } from 'react-icons/md';

import style from './Home.module.css';

export const Home = () => {
  const weather: WeatherData = {
    city: 'Pietermaritzburg',
    temperature: 24,
    feelsLike: 26,
    condition: 'Sunny',
    date: 'Tuesday, 4 August 2026',
    icon: '01d',
  };

  return (
    <div className={style.container}>
      <Sidebar />

      <main className={style.mainContent}>

        <WeatherHero weather={weather} />

        <div className={style.weatherCards}>

          <WeatherCard
            icon={WiHumidity}
            title="Humidity"
            value="68%"
          />

          <WeatherCard
            icon={FaWind}
            title="Wind Speed"
            value="12 km/h"
          />

          <WeatherCard
            icon={MdVisibility}
            title="Visibility"
            value="10 km"
          />

          <WeatherCard
            icon={WiBarometer}
            title="Pressure"
            value="1015 hPa"
          />

        </div>

      </main>
    </div>
  );
};