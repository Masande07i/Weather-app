import { useEffect, useState } from 'react';
import style from './Theme.module.css';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

type ThemeType = 'dark' | 'light';

export const Theme = () => {

    const [theme, setTheme] = useState<ThemeType>('dark');

    useEffect(() => {

        document.documentElement.setAttribute(
            'data-theme',
            theme
        );

        localStorage.setItem('theme', theme);

    }, [theme]);


    return (
        <section className={style.theme}>

            <p className={style.title}>
                Theme
            </p>

            <div className={style.options}>

                <button
                    className={
                        theme === 'dark'
                            ? style.active
                            : ''
                    }
                    onClick={() => setTheme('dark')}
                >
                    <MdDarkMode />
                    <span>Dark</span>
                </button>


                <button
                    className={
                        theme === 'light'
                            ? style.active
                            : ''
                    }
                    onClick={() => setTheme('light')}
                >
                    <MdLightMode />
                    <span>Light</span>
                </button>

            </div>

        </section>
    );
};