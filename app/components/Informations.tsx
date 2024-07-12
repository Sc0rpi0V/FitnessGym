"use client";

import Image from "next/image";
import styles from '../styles/components/information.module.css';
import classNames from 'classnames';
import Link from 'next/link';

export default function Informations() {


    return (
        <section className={styles.hero}>
            <div className={styles.bg__overlay}></div>

            <div className={styles.container}>
                <div className={styles.row}>
                    <div className="col-lg-8 col-md-10 mx-auto col-12">
                        <div className="hero-text mt-5 text-center">
                            <h6 className={styles.subtitle}>Une nouvelle façon de construire un mode de vie sain !</h6>
                            <h1 className={styles.text__white}>AMÉLIOREZ VOTRE CORPS CHEZ FITNESS GYM</h1>
                            <Link href="#feature" className={classNames(styles['btn'], styles['custom__btn'], styles['mt-3'])}>Let's Go</Link>
                            <Link href="/about" className={classNames(styles['btn'], styles['custom__btn'], styles['bordered'], styles['mt-3'])}>Learn more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}