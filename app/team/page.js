"use client";

import styles from '../styles/team.module.css';
import { useState } from "react";
import { useIsMobile } from "@/app/hooks/useIsMobile";


export default function Team() {

    const isMobile = useIsMobile();

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
            label: isMobile ? "F2P" : "Free to Play",
            title: "Fair free to Play",
            descLines: [
                "A free-to-play respecting players and gameplay.",
                "No pay-to-win mechanics. Monetization is limited to cosmetics, city customization, and quality-of-life features.",
                "It is very important for us to deliver a real gaming experience without overmonetising it."
            ]
        },
        social: {
            icon: "🤝",
            label: "Community",
            title: "Community",
            descLines: [
                "In most games, cooperation means sharing a world while playing mostly side by side.",
                "In Brain Eaters, cooperation is the core gameplay, not an option.",
                "The game is designed around collective organization, leadership, and decision-making at the scale of a city.",
                "Survival depends on coordination, shared responsibilities, and collective choices.",
                "The long term vision will feature deeper social systems such as governance, politic, specializations and diplomacy, making the world entirely shaped by players."
            ]
        },
        replay: {
            icon: "🔄",
            label: "Replayability",
            title: "Replayability",
            descLines: [
                "Replayability is a key feature that ensures Brain Eaters is built to last.",
                "Dynamic events, Procedural map, Players decisions, characters to unlock.",
                "These different parameters ensure every game offers infinite combinations and limitless possibilities to explore and experience."
            ]
        },
        freedom: {
            icon: "🎭",
            label: "Roleplay",
            title: "Roleplay",
            descLines: [
                "The world of Brain Eaters is entirely designed to offer players a complete freedom.",
                "What would be cooperation without the freedom to betray his allies ?",
                "What would happen if someone decided to open the city gates right before zombies attacked ?",
                "These are questions you'll probably find an answer to, maybe sooner than you think."
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
                            <div className={styles.founderGrid} onClick={(e) => e.stopPropagation()}>

                                <div className={styles.founderSidebar}>
                                    <div className={styles.profileBadge}>
                                        <div className={styles.avatarPlaceholder}>SN</div>
                                        <h3>Paul Nelaton</h3>
                                        <span className={styles.alias}>"Serobi"</span>
                                        <p className={styles.mainTitle}>Lead Engineer & Founder</p>
                                    </div>

                                    <div className={styles.statBox}>
                                        <div className={styles.statItem}><strong>5+</strong> <span>Software</span></div>
                                        <div className={styles.statItem}><strong>5+</strong> <span>CyberSecurity</span></div>
                                    </div>

                                    <div className={styles.techStack}>
                                        <h4>Core Mastery</h4>
                                        <div className={styles.tagCloud}>
                                            <span>Full-Stack</span> <span>DevOps</span> <span>Architecture</span> <span>UI/UX</span> <span>C# Unity</span> <span>Cybersecurity</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.founderBio}>
                                    <section className={styles.bioSection}>
                                        <h4>Background</h4>
                                        <p>Full-Stack Engineer with a 5-year degree from Thales University (French national defense).<br />
                                            I specialize in building robust, scalable software across web, desktop, and mobile.<br />
                                            My background in <strong>Cybersecurity and DevOps</strong> ensures that Brain Eaters is built on a solid, automated, modular and secure foundation.</p>
                                    </section>

                                    <section className={styles.bioSection}>
                                        <h4>Execution Strategy</h4>
                                        <p>I bridge the gap between technical depth and creative vision. <br />
                                            By managing architecture, mechanics, and UI/UX myself,
                                            I ensure a cohesive product and rapid iteration, faithfully translating my creative vision into reality.</p>
                                    </section>

                                    <section className={styles.influenceBox}>
                                        <h4>DNA</h4>
                                        <p>Influenced by the strategy of <em>AoE II</em>, the story and universe of <em>The Last of Us</em>, and the complex social survival of <em>Frostpunk</em>.</p>
                                    </section>
                                </div>
                            </div>
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