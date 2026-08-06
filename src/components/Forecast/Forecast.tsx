import style from './Forecast.module.css'


interface ForecastProps {
  hourly: any[]
  weekly: any[]
}

export function Forecast({ hourly, weekly }: ForecastProps) {
 
  const formatHour = (timeStr: string) => {
    return timeStr.substring(0, 5)
  }

  
  const formatDay = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { weekday: 'long' })
  }

  const displayHours = hourly.filter((_, index) => index % 2 === 0)
  

  const displayDays = weekly.slice(0, 7)

  return (
    <div className="forecast-container">
    
      <section className="hourly-section">
        <h2>Hourly Forecast</h2>
        <div className="hourly-scroll">
          {displayHours.map((hour, index) => (
            <div key={index} className="hourly-card">
              <span className="hour-time">{formatHour(hour.datetime)}</span>
              <span className="hour-temp">{Math.round(hour.temp)}°</span>
              <span className="hour-cond">{hour.conditions}</span>
            </div>
          ))}
        </div>
      </section>

     
      <section className="weekly-section">
        <h2>7-Day Forecast</h2>
        <div className="weekly-list">
          {displayDays.map((day, index) => (
            <div key={index} className="weekly-row">
              <span className="day-name">{index === 0 ? 'Today' : formatDay(day.datetime)}</span>
              <span className="day-cond">{day.conditions}</span>
              <div className="day-temps">
                <span className="temp-max">{Math.round(day.tempmax)}°</span>
                <span className="temp-min">{Math.round(day.tempmin)}°</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}