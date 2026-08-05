import style from "./Forecast.module.css";
import { Text } from "../Text/Text";
import type { IconType } from "react-icons";


interface ForecastCardProps {
  time: string;
  icon: IconType;
  temperature: string;
}

export const ForecastCard = ({time,icon: Icon,temperature,}: ForecastCardProps) => {
  return (
    <div className={style.card}>

      <Text variant="body" className={style.time}>{time}</Text>
      <Icon className={style.icon} />
      <Text variant="h3" className={style.temperature}>{temperature}</Text>

    </div>
  );
};