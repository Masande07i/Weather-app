import React from 'react'
import { Text } from '../Text/Text'
import style from './Navbar.module.css'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <aside>
        <div className={style.logo}>
            <TiWeatherPartlySunny className={style.icon}/>
            <Text variant='h1' >Weather </Text>
        </div>
       <div className={style.links}>
                    <NavLink to ={'/'}className={style.link}>Home</NavLink>
                    <NavLink to ={'/saved-location'}className={style.link}>Saved Locations</NavLink>
                    <NavLink to ={'/settings'}className={style.link}>Settings</NavLink>


        </div>


    </aside>
  )
}


