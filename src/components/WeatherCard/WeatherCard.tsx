import React from 'react'
import style from './WeatherCard.module.css';

const WeatherItems = [
  {title: 'Temperature', value: '25°C',id: 1},
  {title: 'Condition', value: 'Sunny',id: 2},
  {title: 'Humidity', value: '60%',id: 3},
  {title: 'Wind Speed', value: '15 km/h',id: 4}
];

export const WeatherCard = () => {
  return (
    <div className={style.weatherCard}>
     {
   (WeatherItems.map((item) => (
      <div  className={style.weatherItem} key={item.id}>
        <div className={style.cards}>
        <h3>{item.title}</h3>
        <p>{item.value}</p>
        </div>
      </div>
  
    )))
  }
    </div>
  )
}
