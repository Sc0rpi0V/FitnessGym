"use client";

import styles from '../styles/components/navigation.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import classNames from 'classnames';

export default function Navigation() {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={classNames(styles['navbar'], styles['navbar__expand__lg'], styles['fixed__top'])}>
            <div className={styles.container}>
                <Link href="/" className={styles.navbar__brand}>Fitness Gym</Link>

                {isMobile && (
                    <button
                        className={classNames(styles.navbar__toggler, { [styles.active]: isMenuOpen })}
                        type="button"
                        aria-label="Toggle navigation"
                        onClick={toggleMenu}
                    >
                        <span className={styles.navbar__toggler__icon}></span>
                    </button>
                )}

                <div className={classNames(styles['collapse'], styles['navbar__collapse'], { 'show': isMenuOpen })} id="navbarNav">
                    <ul className={classNames(styles['navbar__nav'], styles['ml-lg-auto'])}>
                        <li className={styles.nav__item}>
                            <a href="#home" className={styles.nav__link}>Home</a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="#about" className={styles.nav__link}>About Us</a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="#class" className={styles.nav__link}>Classes</a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="#schedule" className={styles.nav__link}>Schedules</a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="#contact" className={styles.nav__link}>Contact</a>
                        </li>
                    </ul>

                    <ul className={classNames(styles['social__icon'], styles['ml-lg-3'])}>
                        <li><a href="https://fb.com/tooplate" className="fa fa-facebook"></a></li>
                        <li><a href="#" className="fa fa-twitter"></a></li>
                        <li><a href="#" className="fa fa-instagram"></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
