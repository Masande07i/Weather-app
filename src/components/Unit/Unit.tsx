import style from './Unit.module.css';

type TempUnit = 'C' | 'F';

interface UnitProps {
    unit: TempUnit;
    setUnit: (unit: TempUnit) => void;
}

export const Unit = ({ unit, setUnit }: UnitProps) => {

    return (
        <div className={style.unit}>

            <p className={style.title}>
                Units
            </p>

            <div className={style.toggle}>

                <button
                    className={unit === 'C' ? style.active : ''}
                    onClick={() => setUnit('C')}>
                    °C
                </button>

                <button
                    className={unit === 'F' ? style.active : ''}
                    onClick={() => setUnit('F')}>
                    °F
                </button>
            </div>
        </div>
    );
};