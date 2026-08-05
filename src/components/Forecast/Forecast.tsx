import { useState } from "react";
import style from "./Forecast.module.css";
import { ForecastCard } from "./ForecastCard";
import {WiDaySunny,WiRain,WiCloudy,WiDayCloudy,} from "react-icons/wi";

export const Forecast = () => {
  const [forecastType, setForecastType] = useState<"hourly" | "daily">(
    "hourly"
  );

  const hourlyForecast = [
    { time: "09:00", icon: WiDaySunny, temperature: "22°C" },
    { time: "12:00", icon: WiDaySunny, temperature: "25°C" },
    { time: "15:00", icon: WiDayCloudy, temperature: "27°C" },
    { time: "18:00", icon: WiCloudy, temperature: "24°C" },
    { time: "21:00", icon: WiRain, temperature: "20°C" },
  ]

  const dailyForecast = [
    { time: "Tue", icon: WiDaySunny, temperature: "18° / 26°" },
    { time: "Wed", icon: WiRain, temperature: "16° / 22°" },
    { time: "Thu", icon: WiCloudy, temperature: "15° / 21°" },
    { time: "Fri", icon: WiDayCloudy, temperature: "17° / 24°" },
    { time: "Sat", icon: WiDaySunny, temperature: "19° / 27°" },
  ];

  const forecast =
    forecastType === "hourly" ? hourlyForecast : dailyForecast;

  return (
    <section className={style.forecast}>

      <div className={style.tabs}>

        <button
          className={`${style.tab} ${forecastType === "hourly" ? style.active : ""}`}
          onClick={() => setForecastType("hourly")}>Hourly
        </button>

        <button
          className={`${style.tab} ${forecastType === "daily" ? style.active : ""}`}
          onClick={() => setForecastType("daily")}>Daily
        </button>

      </div>

      <div className={style.forecastCards}>

        {forecast.map((item) => (
          <ForecastCard
           
            time={item.time}
            icon={item.icon}
            temperature={item.temperature}
          />
        ))}

      </div>

    </section>
  );
};
