import style from './Sidebar.module.css';
import { Text } from '../Text/Text';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { FaHome, FaCog } from 'react-icons/fa';
import { Theme } from '../Theme/Theme';
import { Unit } from '../Unit/Unit';
import { useNavigate } from 'react-router-dom';
import { BsFillSaveFill } from 'react-icons/bs';

interface SidebarProps {
    unit: 'C' | 'F';
    setUnit: (unit: 'C' | 'F') => void;
}

export const Sidebar = ({ unit, setUnit }: SidebarProps) => {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    };

    const handleSettings = () => {
        navigate('/settings');
    };

    const handleLocations = () => {
        navigate('/saved-locations');
    };

    return (
        <aside className={style.sidebar}>


            <div className={style.logo}>

                <TiWeatherPartlySunny
                    className={style.logoIcon}
                />

                <Text variant="h1">
                    Weather
                </Text>

            </div>

            <div className={style.pages}>

                <FaHome onClick={handleHome} />

                <FaCog onClick={handleSettings} />

                <BsFillSaveFill onClick={handleLocations} />

            </div>


            <div className={style.bottom}>

                <div className={style.preferenceSec}>

                    <Unit
                        unit={unit}
                        setUnit={setUnit}
                    />

                    <Theme />

                </div>

            </div>

        </aside>
    );
};