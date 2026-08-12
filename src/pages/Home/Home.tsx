import { WeatherHero } from '../../components/WeatherHero/WeatherHero';
import { Forecast } from '../../components/Forecast/Forecast';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface HomeProps {
    unit: 'C' | 'F';
}

const getWeatherByCoordinates = async (
    latitude: number,
    longitude: number
) => {
    const apiKey = import.meta.env.VITE_API_KEY;

    if (!apiKey) {
        throw new Error('API Key is missing');
    }

    const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?unitGroup=metric&key=${apiKey}`
    );

    if (!response.ok) {
        throw new Error('Unable to fetch weather data');
    }

    return response.json();
};

const getWeatherByCity = async (city: string) => {
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

const getCityFromCoordinates = async (
    latitude: number,
    longitude: number
) => {
    const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    );

    if (!response.ok) {
        throw new Error('Unable to find your location');
    }

    const data = await response.json();

    return (
        data.address.city ||
        data.address.town ||
        data.address.municipality ||
        data.address.village ||
        'Unknown location'
    );
};

export const Home = ({ unit }: HomeProps) => {
    const location = useLocation();

    const selectedCity = location.state?.city;

    const [city, setCity] = useState(
        selectedCity ||
        localStorage.getItem('currentLocation') ||
        ''
    );

    const [weatherData, setWeatherData] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [locationChecked, setLocationChecked] = useState(false);

    const updateWeatherData = (weather: any) => {
        setWeatherData({
            current: {
                ...weather.currentConditions,
                tempmax: weather.days[0].tempmax,
                tempmin: weather.days[0].tempmin,
                icon: weather.currentConditions.icon
            },
            hourly: [
                ...weather.days[0].hours,
                ...weather.days[1].hours
            ],
            weekly: weather.days
        });
    };

    useEffect(() => {
        if (selectedCity) {
            setCity(selectedCity);
            setWeatherData(null);
            setError('');
            setLocationChecked(true);

            localStorage.setItem(
                'currentLocation',
                selectedCity
            );

            return;
        }

        const savedLocation = localStorage.getItem('currentLocation');

        if (savedLocation) {
            setCity(savedLocation);
            setLocationChecked(true);
            return;
        }

        if (!navigator.geolocation) {
            setError(
                'Location services are not supported by your browser.'
            );
            setLoading(false);
            setLocationChecked(true);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    const weather = await getWeatherByCoordinates(
                        latitude,
                        longitude
                    );

                    const location = await getCityFromCoordinates(
                        latitude,
                        longitude
                    );

                    setCity(location);

                    localStorage.setItem(
                        'currentLocation',
                        location
                    );

                    updateWeatherData(weather);
                } catch (e) {
                    setError(
                        e instanceof Error
                            ? e.message
                            : String(e)
                    );
                } finally {
                    setLoading(false);
                    setLocationChecked(true);
                }
            },
            () => {
                setError(
                    'Location access is required to show your current weather.'
                );
                setLoading(false);
                setLocationChecked(true);
            }
        );
    }, [selectedCity]);

    useEffect(() => {
        if (!locationChecked || !city || weatherData) {
            return;
        }

        const fetchWeather = async () => {
            setLoading(true);
            setError('');

            try {
                const weather = await getWeatherByCity(city);

                updateWeatherData(weather);

                const location = weather.resolvedAddress || city;

                setCity(location);

                localStorage.setItem(
                    'currentLocation',
                    location
                );
            } catch (e) {
                setError(
                    e instanceof Error
                        ? e.message
                        : String(e)
                );
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [city, locationChecked, weatherData]);

    const handleCityChange = (newCity: string) => {
        setWeatherData(null);
        setCity(newCity);
        setError('');

        localStorage.setItem(
            'currentLocation',
            newCity
        );
    };

    return (
        <main>
            {loading && (
                <div className="status-message">
                    Getting your weather...
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
                        onCityChange={handleCityChange}
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