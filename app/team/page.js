"use client";

import styles from '../styles/team.module.css';
import { useState } from "react";



export default function Team() {

    const [openSections, setOpenSections] = useState({
        vision: true,
        founder: false,
        future: false,
    });

    const toggleSection = (section) => {
        setOpenSections({
            vision: false,
            founder: false,
            future: false,
            [section]: true
        });
    };

    const [activePillar, setActivePillar] = useState('fair');

    const pillars = {
        fair: {
            icon: "⚖️",
            label: "Free to Play",
            title: "Fair free to Play",
            descLines: [
                "A free-to-play respecting players and gameplay.",
                "No pay-to-win mechanics, monetisation is only cosmetics for city and quality of life functionalities.",
                "It is very important for us to deliver a real gaming experience without overmonetising it."
            ]
        },
        social: {
            icon: "🤝",
            label: "Social Core",
            title: "Social Core",
            descLines: [
                "Reputation matters. Build lasting relationships or survive the consequences of betrayal."
            ]
        },
        replay: {
            icon: "🔄",
            label: "Replayability",
            title: "Replayability",
            descLines: [
                "Procedural maps and dynamic events ensure that every playthrough feels like a new story."
            ]
        },
        freedom: {
            icon: "🎭",
            label: "Roleplay",
            title: "Roleplay",
            descLines: [
                "Total player freedom to shape the narrative, the economy, and the fate of the city."
            ]
        }
    };

    return (

        <div className={styles.teamPage}>
            <section className={styles.teamIntro}>
                <h1 className={styles.title}>
                    One Brain, one vision
                    <span className={styles.titleBar}></span>
                </h1>
                <p className={styles.intro}>
                    From game design to code, systems, visuals, lore and website, Brain Eaters is built entirely by a solo developer.
                    <br /><br />
                    The project is driven by a goal : <br />
                    Build a world where social interactions are the core of its gameplay,
                    offering a true survival experience where players have to work together, or die alone.<br />
                </p>
            </section>
            <div className={styles.contentWrapper}>
                <div className={styles.contentSection}>

                    <section
                        className={`${styles.sectionCard} ${styles.teamVision} ${openSections.vision ? styles.openCard : ''}`}
                        onClick={() => toggleSection('vision')}
                    >
                        <h2
                            className={styles.sectionTitle}
                        >
                            Vision
                        </h2>
                        <div className={`${styles.content} ${openSections.vision ? styles.open : ''}`} onClick={(e) => e.stopPropagation()}>
                            <section className={styles.visionContainer}>
                                <div className={styles.pillarGrid}>
                                    {Object.entries(pillars).map(([key, pillar]) => (
                                        <div
                                            key={key}
                                            className={`${styles.pillarItem} ${activePillar === key ? styles.activePillar : ''}`}
                                            onClick={() => setActivePillar(key)}
                                        >
                                            <span className={styles.pillarIcon}>{pillar.icon}</span>
                                            <span className={styles.pillarLabel}>{pillar.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.pillarDetail}>
                                    <div key={activePillar} className={styles.fadeIn}>
                                        <h4>{pillars[activePillar].title}</h4>
                                        {pillars[activePillar].descLines.map((line, index) => (
                                            <p key={index} className={styles.detailLine}>
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>

                    <section className={`${styles.sectionCard} ${styles.teamFounder} ${openSections.founder ? styles.openCard : ''}`} onClick={() => toggleSection('founder')}>

                        <h2 className={styles.sectionTitle}>
                            Founder
                        </h2>
                        <div className={`${styles.content} ${openSections.founder ? styles.open : ''}`} onClick={(e) => e.stopPropagation()}>
                            <h3 className={styles.subTitle}>Who am I ?</h3>
                            <p>
                                My name is Paul Nelaton, also known as Serobi.
                                I'm a 32-year-old French developer, and I've been playing games
                                for as long as I can remember.
                            </p>

                            <p>
                                My first game was Age of Empires II, and it shaped my whole gaming journey.<br />
                                I've always been drawn to strategy, systems, and games where choices actually matter.
                                I loved the idea that players could shape their own experience,
                                especially through community creativity and emergent gameplay.
                            </p>

                            <p>
                                Role-playing and story-driven games also played an important part in my journey,
                                highlighting the importance of story, character evolution,
                                and the impact of choices on shaping a world.
                            </p>

                            <p>
                                As a developer, I've always approached games differently.<br />
                                Beyond playing them, I naturally analyze how they work,
                                what makes them engaging or frustrating,
                                and how their systems could be improved.<br />
                                This habit of observation and iteration has shaped both
                                how I play games and how I design them.
                            </p>
                            <p>
                                Some of the games that influenced me include
                                Warcraft III, The Witcher 3, The Last of Us, Frostpunk,
                                The Forest, 7 Days to Die, Divinity: Original Sin I & II ...
                                and the list is far too long.
                            </p>
                            <h3 className={styles.subTitle}>Background</h3>
                            <p>
                                I'm a Full-Stack Engineer with a 5-year engineering degree and years of experience building robust, scalable software. <br />
                                I cover the full stack, from smooth responsive frontends to performant backends, across web, desktop, and mobile. <br />
                                I also have 5 years of experience in cybersecurity, systems, networks and devops, ensuring solid, automated and reliable foundations.
                            </p>
                            <p>
                                Moreover, I bring creative and design skills to the table : UI/UX, game systems, and interactive experiences,
                                allowing me to craft polished, engaging products with a real focus on player/user experience.
                            </p>
                            <p>
                                Thanks to this blend of technical depth and creative vision, I can handle every part of a project like Brain Eaters,
                                from architecture to mechanics, visuals and user experience.<br />
                                My core strengths are code, systems, vision, and UI/UX, so in the future I plan to recruit a designer to focus on areas where I thrive the most.<br />
                                This lets me dedicate myself fully to building and shaping the heart of the game.
                            </p>
                        </div>
                    </section>

                    <section className={`${styles.sectionCard} ${styles.teamFuture} ${openSections.future ? styles.openCard : ''}`} onClick={() => toggleSection('future')}>

                        <h2 className={styles.sectionTitle}>
                            Team Future
                        </h2>
                        <div className={`${styles.content} ${openSections.future ? styles.open : ''}`} onClick={(e) => e.stopPropagation()}>
                            <p>
                                My plan for the team's future is simple : hire key talents who complement my skills,
                                mainly in design, 3D, animation, VFX and marketing. <br />
                                This allows me to focus entirely on what I excel at, while leaving time-consuming areas to experts who can deliver higher quality work.
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </div >
    );
}