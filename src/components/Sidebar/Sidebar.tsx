import style from './Sidebar.module.css';
import { Text } from '../Text/Text';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { FaHome,FaMapMarkerAlt,FaBell,FaCog} from 'react-icons/fa';
import { MdOutlineWbSunny } from 'react-icons/md';

const menuItems = [
  {title: 'Home', icon: <FaHome />, id: 1},
  {title: 'Forecast', icon: <MdOutlineWbSunny />, id: 2},
  {title: 'Saved Locations', icon: <FaMapMarkerAlt />, id: 3},
  {title: 'Alerts', icon: <FaBell />, id: 4},
  {title: 'Settings', icon: <FaCog />, id: 5}
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
            <li key={item.id} className={style.menuItem}>
              <span className={style.icon}>{item.icon}</span>
              <Text >{item.title}</Text>
            </li>
          ))}
        </ul>
      </nav>

      <div className={style.bottom}>

      <div className={style.preferenceSec}>

    <Text variant="body"> Units</Text>

    <div className={style.toggle}>
        <button> °C </button>
        <button>°F </button>
    </div>

</div>


<div className={style.preferenceSec}>

    <Text variant="body">Theme</Text>

    <div className={style.toggle}>
        <button> Dark </button>
        <button>Light </button>
    </div>
  </div>

</div>
    </aside>
  );
};