"use client";

import styles from '../styles/team.module.css';


export default function team() {

    return (

        <div className={styles.teamPage}>
            <section className={styles.teamIntro}>
                <h1 className={styles.title}>Team
                    <span className={styles.titleBar}></span>
                </h1>
                <p>
                    {/* Brain Eaters is currently developed by a solo developer.
        Clear, honest statement about the current state of the project. */}
                </p>
            </section>

            <section className={`${styles.teamVision} ${styles.section}`}>
                <h2>Vision</h2>

                <p>
                    {/* What kind of game Brain Eaters aims to be */}
                </p>

                <p>
                    {/* Core values: depth, systems, cooperation, long-term design */}
                </p>
            </section>

            <section className={`${styles.teamFounder} ${styles.section}`}>
                <h2>Founder</h2>

                <p>
                    {/* Who you are */}
                </p>

                <p>
                    {/* Technical background:
        - software engineering foundations
        - frontend / backend / game dev
        - long-term autonomy */}
                </p>

                <p>
                    {/* Why you are able to take this project from 0 to release */}
                </p>
            </section>

            <section className={`${styles.teamFuture} ${styles.section}`}>
                <h2>The Road Ahead</h2>

                <p>
                    {/* Short-term focus */}
                </p>

                <p>
                    {/* Long-term vision:
        possible collaborators, growth, community involvement */}
                </p>
            </section>

        </div>
    );
}