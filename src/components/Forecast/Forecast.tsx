import { useState } from 'react';
import style from './Forecast.module.css';

interface ForecastProps {
  hourly: any[];
  weekly: any[];
}

export function Forecast({ hourly, weekly }: ForecastProps) {
  const [activeTab, setActiveTab] = useState<'hourly' | 'weekly'>('hourly');

  const formatHour = (timeStr: string) => {
    return timeStr.substring(0, 5);
  };

  const formatDay = (dateStr: string) => {
    const date = new Date(dateStr);

    return date.toLocaleDateString('en-US', {
      weekday: 'long',
    });
  };

  const displayDays = weekly.slice(0, 7);

  return (
    <section className={style.forecast}>

      <div className={style.header}>
        <h2>Forecast</h2>
        <p>Weather forecast</p>
      </div>

      <div className={style.toggleTabs}>

        <button
          className={`${style.tabButton} ${
            activeTab === 'hourly' ? style.activeTab : ''
          }`}
          onClick={() => setActiveTab('hourly')}
        >
          Hourly
        </button>

        <button
          className={`${style.tabButton} ${
            activeTab === 'weekly' ? style.activeTab : ''
          }`}
          onClick={() => setActiveTab('weekly')}
        >
          7-Day
        </button>

      </div>

      <div className={style.tabContent}>

        {activeTab === 'hourly' ? (

          <section className={style.hourlySection}>

            <div className={style.hourlyScroll}>

              {hourly.map((hour, index) => (
                <div
                  key={index}
                  className={style.hourlyCard}
                >

                  <span className={style.hourTime}>
                    {formatHour(hour.datetime)}
                  </span>

                  <span className={style.hourTemp}>
                    {Math.round(hour.temp)}°C
                  </span>

                  <span className={style.hourCond}>
                    {hour.conditions}
                  </span>

                </div>
              ))}

            </div>

          </section>

        ) : (

          <section className={style.weeklySection}>

            <div className={style.weeklyList}>

              {displayDays.map((day, index) => (
                <div
                  key={index}
                  className={style.weeklyRow}
                >

                  <span className={style.dayName}>
                    {index === 0
                      ? 'Today'
                      : formatDay(day.datetime)}
                  </span>

                  <span className={style.dayCond}>
                    {day.conditions}
                  </span>

                  <div className={style.dayTemps}>

                    <span className={style.tempMax}>
                      {Math.round(day.tempmax)}°C
                    </span>

                    <span className={style.tempMin}>
                      {Math.round(day.tempmin)}°C
                    </span>

                  </div>

                </div>
              ))}

            </div>

          </section>

        )}

      </div>

    </section>
  );
}