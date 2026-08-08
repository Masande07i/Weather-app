import style from './WeatherHero.module.css';
import { Text } from '../Text/Text';
import { Search } from '../Search/Search';
import type { WeatherData } from '../types';
import { useState, useEffect } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { format } from 'date-fns';

interface WeatherHeroProps {
  weather: WeatherData;
  locationName: string;
  onCityChange: (newCity: string) => void; 
}

export const WeatherHero = ({ weather, locationName, onCityChange }: WeatherHeroProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
    setSearchQuery('');
  }, [locationName]);
  

  const { temp,tempmax,tempmin, conditions, feelslike, windspeed, humidity } = weather || {};

  const handleSearchSubmit = (newValue: string) => {
    setSearchQuery(newValue);
    if (newValue.trim()) {
      onCityChange(newValue); 
    }
  };
return (
  <main className={style.mainContent}>

    <Search
      searchQuery={searchQuery}
      onSearch={handleSearchSubmit}
    />

    <section className={style.hero}>

      <div className={style.heroCard}>

        <div className={style.header}>

          <div className={style.location}>
            <FaLocationDot className={style.locationIcon} />
            <span>{locationName}</span>
          </div>

          <p className={style.date}>
            {format(new Date(), 'EEEE, h:mm a')}
          </p>

          <div className={style.weatherInfo}>

            {temp !== undefined && (
              <Text
                variant="h1"
                className={style.temperature}
              >
                {Math.round(temp)}°
              </Text>
            )}

            <p className={style.highLow}>
              ↑{Math.round(tempmax)}° / ↓{Math.round(tempmin)}°
            </p>

            {conditions && (
              <h2 className={style.condition}>
                {conditions}
              </h2>
            )}

            {feelslike !== undefined && (
              <p className={style.feelsLike}>
                Feels like {Math.round(feelslike)}°
              </p>
            )}

            <div className={style.weatherCards}>

              {windspeed !== undefined && (
                <div className={style.weatherCard}>
                  <span>Wind</span>
                  <strong>{windspeed} km/h</strong>
                </div>
              )}

              {humidity !== undefined && (
                <div className={style.weatherCard}>
                  <span>Humidity</span>
                  <strong>{humidity}%</strong>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

    </section>

  </main>
);
}