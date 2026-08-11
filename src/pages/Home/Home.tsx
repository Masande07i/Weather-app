import { WeatherHero } from '../../components/WeatherHero/WeatherHero';
import { Forecast } from '../../components/Forecast/Forecast';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface HomeProps {
    unit: 'C' | 'F';
}

const getWeather = async (city: string) => {
    const apiKey = import.meta.env.VITE_API_KEY;

    if (!apiKey) {
        throw new Error('API Key is missing');
    }

    const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=metric&key=${apiKey}`
    );

    if (!response.ok) {
        throw new Error('Unable to fetch weather data');
    }

    return response.json();
};

export const Home = ({ unit }: HomeProps) => {
    const location = useLocation();

    const [city, setCity] = useState(location.state?.city || 'Pietermaritzburg');
    const [weatherData, setWeatherData] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            setError('');

            try {
                const weather = await getWeather(city);

                const data = {
                    current: {
                        ...weather.currentConditions,
                        tempmax: weather.days[0].tempmax,
                        tempmin: weather.days[0].tempmin,
                    },
                    hourly: weather.days[0].hours,
                    weekly: weather.days,
                };
                setWeatherData(data);
                localStorage.setItem(`weather-${city}`,JSON.stringify(data));
            } catch (e) {
                const savedWeather = localStorage.getItem(
                    `weather-${city}`
                );

                if (savedWeather) {
                    setWeatherData(JSON.parse(savedWeather));
                    setError('');
                } else {
                    setError(e instanceof Error? e.message: String(e));
                }
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [city]);

    return (
        <main>
            {loading && (
                <div className="status-message">
                    Loading weather data...
                </div>
            )}

            {error && (
                <div className="status-message error">
                    {error}
                </div>
            )}

            {!loading && !error && weatherData && (
                <>
                    <WeatherHero
                        weather={weatherData.current}
                        locationName={city}
                        onCityChange={setCity}
                        unit={unit}
                    />

                    <Forecast
                        hourly={weatherData.hourly}
                        weekly={weatherData.weekly}
                        unit={unit}
                    />
                </>
            )}
        </main>
    );
};