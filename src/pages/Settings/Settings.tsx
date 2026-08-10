import { useState } from 'react';
import style from './Settings.module.css';
import { Theme } from '../../components/Theme/Theme';

export const Settings = () => {

    const [notifications, setNotifications] = useState(false);
    const [location, setLocation] = useState(false);

    const handleNotifications = () => {
        setNotifications(!notifications);
    };

    const handleLocation = () => {
        setLocation(!location);
    };

    const clearCache = () => {
        localStorage.removeItem('weatherData');
        localStorage.removeItem('savedLocations');

        alert('Cached data has been cleared.');
    };

    return (

        <main className={style.settings}>
            <div className={style.header}>
                <h1> Settings</h1>
                <p>Manage your weather app preferences.</p>
             </div>

            <section className={style.section}>
                <div className={style.sectionHeader}>
                    <h2>Theme</h2>
                    <p> Choose how the weather app looks.</p>
                </div>
                <Theme />
            </section>

            <section className={style.section}>
                <div className={style.sectionHeader}>
                    <h2> Permissions </h2>
                    <p> Manage the permissions used by the app.</p>
                </div>
                <div className={style.permission}>
                    <div>
                        <h3>Notifications </h3>
                        <p>Receive notifications about severe weather.</p>
                    </div>

                    <button className={`${style.switch} ${notifications ? style.enabled : ''}`}
                        onClick={handleNotifications}>
                        {notifications ? 'On' : 'Off'}
                     </button>
                 </div>
                <div className={style.permission}>
                    <div>
                        <h3> Location </h3>
                        <p> Allow the app to detect your location. </p>
                    </div>

                    <button className={`${style.switch} ${location? style.enabled: '' }`}
                        onClick={handleLocation}>
                        {location ? 'On' : 'Off'}
                    </button>
                </div>
            </section>

            <section className={style.section}>
                <div className={style.sectionHeader}>
                    <h2> Cached Data </h2>
                    <p>Manage weather data stored on your device.</p>
                 </div>

                <div className={style.cache}>
                    <div>
                        <h3>Weather Data</h3>
                        <p>Cached weather data can help the app load information faster.</p>
                     </div>

                    <button className={style.clearButton} onClick={clearCache}>
                        Clear Cache
                    </button>
                 </div>
              </section>
        </main>
    );
};