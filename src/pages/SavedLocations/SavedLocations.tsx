import { useEffect, useState } from 'react';
import style from './SavedLocations.module.css';

export const SavedLocations = () => {

    const [locations, setLocations] = useState<string[]>([]);

    useEffect(() => {
        const savedLocations = localStorage.getItem('savedLocations');
        if (savedLocations) {
            setLocations(JSON.parse(savedLocations));
        }
    }, []);

    const removeLocation = (location: string) => {

        const updatedLocations = locations.filter(
            (item) => item !== location
        );
        setLocations(updatedLocations);
        localStorage.setItem(
            'savedLocations',
            JSON.stringify(updatedLocations)
        );
    };

    return (

        <main className={style.savedLocations}>
            <div className={style.header}>
                <h1> Saved Locations </h1>
                <p> Your favourite weather locations.</p>
            </div>

            {locations.length === 0 ? (
                <div className={style.empty}>
                    <h2>No saved locations</h2>
                    <p> Search for a city and save it to see it here.</p>
                </div>
            ) : (
                <div className={style.locationGrid}>
                    {locations.map((location) => (
                        <div key={location} className={style.locationCard}>
                            <div>
                                <h2> {location}</h2>
                                <p> Saved location</p>
                            </div>

                            <button className={style.removeButton} onClick={() =>
                              removeLocation(location)}>Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
};