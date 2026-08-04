import { useEffect, useState } from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Search } from './components/Search/Search'
import { WeatherHero } from './components/WeatherHero/WeatherHero'
// import { Route } from 'react-router-dom'

function App() {
  
  const [searchQuery, setSearchQuery] = useState<string>('')
  
  const onSearch=(newValue: string)=>{
   setSearchQuery(newValue)
 }
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
    <Sidebar />
     <Search searchQuery={searchQuery} onSearch={onSearch}/>
     <WeatherHero />
     
    
    
    
    </>
  )
}

export default App
