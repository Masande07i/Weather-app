import style from './WeatherHero.module.css';
import { Text } from '../Text/Text';
import { WeatherCard } from '../WeatherCard/WeatherCard';


export const WeatherHero = () => {
  return (
    <section className={style.hero}>
      <div className={style.heroCard}>
    
        <div className={style.topSection}>
          <div className={style.location}>
            <Text variant="h2" className={style.locationText}>
              Pietermaritzburg
            </Text>
          </div>
        </div>

        <Text variant="body" className={style.date}>
          Tuesday  4 August 2026
        </Text>

        <div className={style.temperatureContainer}>
          <Text variant="h1" className={style.temperature}>
            24°C
          </Text>
        </div>

        <Text variant="h3" className={style.condition}>
          Sunny
        </Text>

        <Text variant="body" className={style.feelsLike}>
          Feels like 26°C
        </Text>
        <WeatherCard />
      </div>

      
    </section>
  );
};