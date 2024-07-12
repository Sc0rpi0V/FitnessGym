"use client";

import styles from '../styles/components/fitness.module.css';
import Image from "next/image";
import classNames from 'classnames';

export default function AboutFitness() {

    return (

        <section className={classNames(styles['about'], styles['section'])} id="about">
               <div className={styles.container}>
                    <div className={styles.row}>

                        <div className={styles.about}>
                            <h2 className={classNames(styles['text__black'], styles['mb-4'])}>Hello, we are Gymso</h2>

                            <p className={styles.info__about}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem qui possimus illum, itaque fugiat explicabo nostrum adipisci asperiores eius.
                            </p>

                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, nemo.
                                <a rel="nofollow" href="https://www.tooplate.com/view/2119-gymso-fitness" target="_parent">Lorem ipsum dolor sit.</a>, 
                                Lorem, ipsum. <a rel="nofollow" href="https://www.tooplate.com/contact" target="_parent">Lorem, ipsum.</a> 
                               Lorem, ipsum dolor.
                            </p>

                        </div>

                        <div className={styles.about__2}>
                            <div className={styles.team__thumb}>
                                <Image src="/team/team-image.jpg" className="img-fluid" alt="Trainer" width={24} height={24} />

                                <div className="team-info d-flex flex-column">

                                    <h3>Mary Yan</h3>
                                    <span>Yoga Instructor</span>

                                    <ul className="social-icon mt-3">
                                        <li><a href="#" className="fa fa-twitter"></a></li>
                                        <li><a href="#" className="fa fa-instagram"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mr-lg-auto mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12">
                            <div className="team-thumb">
                                <Image src="/team/team-image01.jpg" className="img-fluid" alt="Trainer" width={24} height={24} />

                                <div className="team-info d-flex flex-column">

                                    <h3>Catherina</h3>
                                    <span>Body trainer</span>

                                    <ul className="social-icon mt-3">
                                        <li><a href="#" className="fa fa-instagram"></a></li>
                                        <li><a href="#" className="fa fa-facebook"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
               </div>
        </section>
    )
}