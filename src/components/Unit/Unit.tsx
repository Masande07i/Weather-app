import { useState } from 'react';
import style from './Unit.module.css';

type TempUnit = 'C' | 'F';

export const Unit = () => {

    const [unit, setUnit] = useState<TempUnit>('C');

    const toggleUnit = () => {
        setUnit((prevUnit) =>
            prevUnit === 'C' ? 'F' : 'C'
        );
    };

    return (
        <div className={style.unit}>

            <p className={style.title}>
                Units
            </p>

            <div className={style.toggle}>

                <button
                    className={unit === 'C' ? style.active : ''}
                    onClick={() => setUnit('C')}
                >
                    °C
                </button>

                <button
                    className={unit === 'F' ? style.active : ''}
                    onClick={() => setUnit('F')}
                >
                    °F
                </button>

            </div>

        </div>
    );
};