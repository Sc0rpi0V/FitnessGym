"use client";

import styles from '../styles/components/feature.module.css';
import classNames from 'classnames';

export default function Feature() {

    return (
        <section className={classNames(styles['features'])}>
            <div className={styles.container}>
                <div className={styles.row}>

                    <div className={classNames(styles['news'],styles['ml-lg-auto'],styles['mr-lg-5'],styles['col-lg-5'],styles['col-md-6'],styles['col-12'])}>
                        <h2 className={classNames(styles['text__white'], styles['mb-3'])}>News chez Fitness Gym?</h2>

                        <h6 className={styles.text__white__h6}>
                            Votre abonnement est jusqu'à 2 mois GRATUITS (62,50 $ par mois)
                        </h6>

                        <p className={styles.para__feature}>Gymso is free HTML template by 
                            <a rel="nofollow" href="https://www.tooplate.com" target="_parent">Tooplate</a> 
                            for your commercial website. Bootstrap v4.2.1 Layout. Feel free to use it.
                        </p>

                        <a href="#" className={classNames(styles['btn'], styles['custom__btn'], styles['bg__color'], styles['mt-3'])}>Become a member today</a>
                    </div>
                    <div className={styles.separator}></div>
                    <div className={classNames(styles['news__2'],styles['mt-3'],styles['col-lg-4'],styles['col-md-6'],styles['col-12'])}>
                        <div className={styles.about__working__hours}>
                            <div>

                                <h2 className={classNames(styles['text__white__h2'], styles['mb-4'])}>Horaires Ouvertures</h2>

                                <strong className={styles.d__block}>Dimanche : Fermé</strong>

                                <strong className={classNames(styles['d__block'], styles['mt-3'])}>Lundi - Vendredi</strong>

                                <p className={styles.info}>7h00 - 22h00 </p>

                                <strong className={classNames(styles['d__block'], styles['mt-3'])}>Samedi</strong>

                                <p className={styles.info}>6h00 - 16h00 </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </section>
    )
}