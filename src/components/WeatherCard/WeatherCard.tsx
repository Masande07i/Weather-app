import style from "./WeatherCard.module.css";
import { Text } from "../Text/Text";
import type { IconType } from "react-icons";

interface WeatherCardProps {
    icon: IconType;
    title: string;
    value: string;
}

export const WeatherCard = ({icon: Icon,title,value,}: WeatherCardProps) => {
    return (
        <div className={style.card}>

            <Icon className={style.icon} />

            <Text variant="body" className={style.title}>
                {title}
            </Text>

            <Text variant="h2" className={style.value}>
                {value}
            </Text>

        </div>
    );
};