import { useState } from 'react';
import style from './Forecast.module.css';

interface ForecastProps {
    hourly: any[];
    weekly: any[];
    unit: 'C' | 'F';
}

export function Forecast({hourly,weekly,unit}: ForecastProps) {

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


    // Convert Celsius to Fahrenheit
    const convertTemperature = (temperature: number) => {

        if (unit === 'C') {
            return temperature;
        }

        return (temperature * 9) / 5 + 32;

    };


    const displayDays = weekly.slice(0, 7);


    return (

        <section className={style.forecast}>

            {/* Header */}

            <div className={style.header}>

                <h2>
                    Forecast
                </h2>

                <p>
                    Weather forecast
                </p>

            </div>


            {/* Tabs */}

            <div className={style.toggleTabs}>

                <button
                    className={`${style.tabButton} ${
                        activeTab === 'hourly'
                            ? style.activeTab
                            : ''
                    }`}
                    onClick={() => setActiveTab('hourly')}
                >
                    Hourly
                </button>


                <button
                    className={`${style.tabButton} ${
                        activeTab === 'weekly'
                            ? style.activeTab
                            : ''
                    }`}
                    onClick={() => setActiveTab('weekly')}
                >
                    7-Day
                </button>

            </div>


            {/* Content */}

            <div className={style.tabContent}>

                {activeTab === 'hourly' ? (

                    /* HOURLY FORECAST */

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

                                        {Math.round(
                                            convertTemperature(hour.temp)
                                        )}

                                        °{unit}

                                    </span>


                                    <span className={style.hourCond}>
                                        {hour.conditions}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </section>

                ) : (

                    /* 7-DAY FORECAST */

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
                                            : formatDay(day.datetime)
                                        }

                                    </span>


                                    <span className={style.dayCond}>
                                        {day.conditions}
                                    </span>


                                    <div className={style.dayTemps}>

                                        <span className={style.tempMax}>

                                            {Math.round(
                                                convertTemperature(
                                                    day.tempmax
                                                )
                                            )}

                                            °{unit}

                                        </span>


                                        <span className={style.tempMin}>

                                            {Math.round(
                                                convertTemperature(
                                                    day.tempmin
                                                )
                                            )}

                                            °{unit}

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