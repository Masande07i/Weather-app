import style from './WeatherHero.module.css';
import { Text } from '../Text/Text';
import { Search } from '../Search/Search';
import type { WeatherData } from '../types';
import { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { WiDaySunny } from 'react-icons/wi';
import { WiHumidity} from 'react-icons/wi';
import { FaWind } from 'react-icons/fa'
import { WeatherCard } from '../WeatherCard/WeatherCard';


interface WeatherHeroProps {
  weather: WeatherData;
 
}

export const WeatherHero = ({weather,}: WeatherHeroProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const onSearch=(newValue: string)=>{
  setSearchQuery(newValue)
 }
  return (
    <main className={style.mainContent}>
      <Search searchQuery={searchQuery} onSearch={onSearch}
      />

      <section className={style.hero}>
        <div className={style.heroCard}>

          <div className={style.header}>
            <div className={style.location}>
              <FaLocationDot className={style.locationIcon} />

              <Text variant="h2">
                {weather.city}
              </Text>
            </div>

            <WiDaySunny className={style.weatherIcon} />
          </div>

          <Text
            variant="body"
            className={style.date}
          >
            {weather.date}
          </Text>

          <div className={style.weatherInfo}>
            <Text
              variant="h1"
              className={style.temperature}
            >
              {weather.temperature}°C
            </Text>

            <Text
              variant="h3"
              className={style.condition}
            >
              {weather.condition}
            </Text>

            <Text
              variant="body"
              className={style.feelsLike}
            >
              Feels like {weather.feelsLike}°
            </Text>
          </div>
          
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

        </div>


        </div>
      </section>
    </main>
  );
};