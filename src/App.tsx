import './App.css'

import { Home } from './components/Home/Home'
// import { Route } from 'react-router-dom'


function App() {
  

//  useEffect(()=>{
//   const fetchWeatherData = async () => {
//     try {
//       const response = await fetch(`https://api.openweathermap.org/data/4.0/onecall/current?lat=52.2297&lon=21.0122&units=metric&lang=en&appid={API key} `);
//       if (!response.ok) {
//         throw new Error('Failed to fetch weather data');
//       }
//       const data = await response.json();
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }
//  })

  return (
    <>
    <Home/>
    </>
    
  )
}

export default App
