"use client";

import styles from '../styles/team.module.css';


export default function team() {

    return (

        <div className={styles.teamPage}>
            <section className={styles.teamIntro}>
                <h1 className={styles.title}>
                    Built by One<br /> Designed to Last
                    <span className={styles.titleBar}></span>
                </h1>
                <p className={styles.intro}>
                    From game design to code, systems, visuals, lore and website, Brain Eaters is built entirely by a solo developer.
                    <br />
                    The project is driven by a long-term vision : <br />
                    To build a living world that grows over time, evolves through player actions, and creates meaningful connections.
                </p>
            </section>
            <div className={styles.contentWrapper}>
                <div className={styles.contentSection}>

                    <section className={`${styles.sectionCard} ${styles.teamVision}`}>
                        <h2 className={styles.sectionTitle}>Vision</h2>
                        <p>Short paragraph about the vision of the game/studio...</p>
                    </section>

                    <section className={`${styles.sectionCard} ${styles.teamFounder}`}>
                        <h2 className={styles.sectionTitle}>Founder</h2>
                        <p>About me, my background, and why I’m building Brain Eaters solo...</p>
                    </section>

                    <section className={`${styles.sectionCard} ${styles.teamFuture}`}>
                        <h2 className={styles.sectionTitle}>The Road Ahead</h2>
                        <p>Plans for updates, future features, and growth...</p>
                    </section>

                </div>
            </div>

        </div>
    );
}