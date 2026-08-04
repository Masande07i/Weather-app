import React from 'react'

const WeatherItems = [
  {title: 'Temperature', value: '25°C',id: 1},
  {title: 'Condition', value: 'Sunny',id: 2},
  {title: 'Humidity', value: '60%',id: 3},
  {title: 'Wind Speed', value: '15 km/h',id: 4}
];

export const WeatherCard = () => {
  return (
    
   (WeatherItems.map((item) => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.value}</p>
      </div>
  
    )))
  )
}
