import { useEffect, useState } from "react";
import style from "./Theme.module.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const Theme = () => {

    const [theme, setTheme] = useState<"dark" | "light">(() => {
        return (
            (localStorage.getItem("theme") as "dark" | "light") || "dark"
        );
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);

        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <section className={style.theme}>

            <p className={style.title}>
                Theme
            </p>

            <div className={style.options}>

                <button
                    className={`${style.option} ${
                        theme === "dark" ? style.active : ""
                    }`}
                    onClick={() => setTheme("dark")}
                >
                    <MdDarkMode />

                    <span>Dark</span>
                </button>

                <button
                    className={`${style.option} ${
                        theme === "light" ? style.active : ""
                    }`}
                    onClick={() => setTheme("light")}
                >
                    <MdLightMode />

                    <span>Light</span>
                </button>

            </div>

        </section>
    );
};