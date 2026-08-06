import './App.css'
import { useState, useEffect } from 'react'
import { WeatherHero } from './components/WeatherHero/WeatherHero'
import { Forecast } from './components/Forecast/Forecast'
import { Sidebar } from './components/Sidebar/Sidebar'

const getWeather = async (city: string) => {
  const apiKey = import.meta.env.VITE_API_KEY
  if (!apiKey) throw new Error('API Key is missing')
    
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=${import.meta.env.VITE_API_KEY}`)
  if (!response.ok) {
     throw new Error('Unable to fetch weather data')
  }

  return response.json()
}

function App() {
  const [city, setCity] = useState("Pietermaritzburg")
  const [weatherData, setWeatherData] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true)
      setError("")
      try {
        const weather = await getWeather(city)
        
  
        setWeatherData({
          current: weather.currentConditions, 
          hourly: weather.days[0].hours,
          weekly: weather.days,
        })
      } catch (e) {
        setError(`${e instanceof Error ? e.message : String(e)}`)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [city])

    return (
    <div>
      {/* <Sidebar /> */}

      <main>
       
        {loading && <div className="status-message">Loading weather data...</div>}
        
        {error && <div className="status-message error">{error}</div>}
        
       
        {!loading && !error && weatherData && (
          <>
            <WeatherHero 
              weather={weatherData.current} 
              locationName={city}
              onCityChange={setCity} 
            />
            <Forecast 
              hourly={weatherData.hourly} 
              weekly={weatherData.weekly}
            />
          </>
        )}
      </main>
    </div>
  );
}
export default App