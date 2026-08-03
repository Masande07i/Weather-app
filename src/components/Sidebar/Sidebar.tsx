import style from './Sidebar.module.css';
import { Text } from '../Text/Text';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { FaHome,FaMapMarkerAlt,FaBell,FaCog} from 'react-icons/fa';
import { MdOutlineWbSunny } from 'react-icons/md';

const menuItems = [
  {title: 'Home', icon: <FaHome />},
  {title: 'Forecast', icon: <MdOutlineWbSunny />},
  {title: 'Saved Locations', icon: <FaMapMarkerAlt /> },
  {title: 'Alerts', icon: <FaBell />},
  {title: 'Settings', icon: <FaCog />}
];

export const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
     
      <div className={style.logo}>
        <TiWeatherPartlySunny className={style.logoIcon} />
        <Text variant="h1">Weather</Text>
      </div>

      <nav className={style.navigation}>
        <ul className={style.menu}>
          {menuItems.map((item) => (
            <li key={item.title} className={style.menuItem}>
              <span className={style.icon}>{item.icon}</span>
              <Text >{item.title}</Text>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};