import { Sidebar } from '../../components/Sidebar/Sidebar';
import { WeatherHero } from '../../components/WeatherHero/WeatherHero';
import type { WeatherData } from '../../components/types';
import style from './Home.module.css'
import { Forecast } from '../../components/Forecast/Forecast';


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
        <Forecast/>

      </main>
    </div>
  );
};

