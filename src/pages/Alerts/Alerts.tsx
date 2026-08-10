import style from './Alerts.module.css';

export const Alerts = () => {

    return (
        <main className={style.alerts}>

            <div className={style.header}>

                <h1>
                    Weather Alerts
                </h1>

                <p>
                    Stay informed about severe weather conditions.
                </p>

            </div>


            <section className={style.alertList}>

                <div className={style.alertCard}>

                    <div className={style.alertIcon}>
                        ⚠
                    </div>

                    <div className={style.alertContent}>

                        <h2>
                            Heavy Rain
                        </h2>

                        <p>
                            Heavy rainfall is expected in your area.
                        </p>

                        <span>
                            Today
                        </span>

                    </div>

                </div>


                <div className={style.alertCard}>

                    <div className={style.alertIcon}>
                        ⚠
                    </div>

                    <div className={style.alertContent}>

                        <h2>
                            Strong Winds
                        </h2>

                        <p>
                            Strong winds are expected later today.
                        </p>

                        <span>
                            Today
                        </span>

                    </div>

                </div>

            </section>

        </main>
    );
};