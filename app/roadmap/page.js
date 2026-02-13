"use client";

import styles from '../styles/roadmap.module.css';
import { useRef, useEffect, useState } from "react";

export default function RoadmapPage() {

    const CURRENT_STEP_ID = "present";
    const [activeStep, setActiveStep] = useState(CURRENT_STEP_ID);
    const [activeCategory, setActiveCategory] = useState("city");
    const [clickedStep, setClickedStep] = useState(null);
    const stepRefs = useRef({});


    const steps = [
        { id: "past", title: "Prototype", sub: "2025" },
        { id: "present", title: "Current", sub: "Now" },
        { id: "demo", title: "Demo", sub: "mid 2026" },
        { id: "v1", title: "Launch V1", sub: "Late 2026" },
        { id: "v2", title: "Expansion", sub: "TBA" },
    ];

    const roadmapContent = {
        past: {
            title: "The Foundation",
            city: {
                label: "Urban Infrastructure",
                items: ["Modular building system", "Traffic & pathfinding logic", "Day/Night cycle"]
            },
            map: {
                label: "World Tech",
                items: ["Procedural terrain gen", "Biome system v0.1", "Initial fog of war"]
            }
        },
        present: {
            title: "The Awakening",
            city: {
                label: "Survival Mechanics",
                items: ["Dynamic infection spread", "Resource management UI", "First survivor NPCs"]
            },
            map: {
                label: "Exploration",
                items: ["Looting system", "Combat prototype", "Weather impact on gameplay"]
            }
        },
        // Ajoute les autres étapes sur le même modèle...
    };

    const currentStepIndex = steps.findIndex(
        step => step.id === CURRENT_STEP_ID
    );

    const handleStepClick = (stepId) => {
        setActiveStep(stepId);
        setClickedStep(stepId);

        setTimeout(() => {
            setClickedStep(null);
        }, 400); // matches your pulse timing
    };

    useEffect(() => {
        const el = stepRefs.current[activeStep];
        if (!el) return;

        el.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        });
    }, [activeStep]);


    return (
        <div className={styles.roadmapPage}>
            <section className={styles.roadmapIntro}>
                <h1 className={styles.title}>
                    Roadmap
                    <span className={styles.titleBar}></span>
                </h1>
                {/*
                <p className={styles.intro}>
                    Brain Eaters is built with long-term vision in mind : <br />
                    A deep, replayable social survival game that evolves with its community.<br />
                    This roadmap outlines the major milestones from prototype to full launch and beyond, grounded in realistic solo-dev pacing. <br />
                </p>
                */}
                <p className={styles.intro}>
                    The roadmap is still a work in progress. This is just a first look at what’s coming.
                </p>
            </section>

            <section className={styles.timelineSection}>
                <div className={styles.timelineContainer}>

                    {/* Timeline steps */}
                    <div className={styles.stepsWrapper}>
                        <div className={styles.mainLineZombie}
                            style={{
                                '--progress': `${(currentStepIndex / (steps.length - 1)) * 100}%`,
                            }}
                        >
                            <div
                                className={styles.progressFillGold}
                                style={{
                                    width: `${(currentStepIndex / (steps.length - 1)) * 100}%`,
                                }}
                            />

                        </div>
                        <div
                            className={styles.progressFillGoldEffect}
                            style={{
                                width: `${(currentStepIndex / (steps.length - 1)) * 100}%`,
                            }}
                        />
                        {steps.map((step, index) => {
                            const isCurrent = index === currentStepIndex;
                            const isPast = index < currentStepIndex;
                            const isFuture = index > currentStepIndex;
                            const isSelected = activeStep === step.id;
                            const isClicked = clickedStep === step.id;

                            return (
                                <div
                                    key={step.id}
                                    ref={(el) => (stepRefs.current[step.id] = el)}
                                    className={[
                                        styles.stepNode,
                                        isPast && styles.past,
                                        isFuture && styles.future,
                                        isCurrent && styles.current,
                                        isSelected && styles.selected,
                                        isClicked && styles.clicked,
                                    ]
                                        .filter(Boolean)
                                        .join(' ')}
                                    onClick={() => handleStepClick(step.id)}
                                >
                                    <div className={styles.nodeCircle}>
                                        {isCurrent && <span className={styles.pulseRing} />}
                                        <span className={styles.nodeNumber}>{index + 1}</span>
                                    </div>

                                    <div className={styles.stepInfo}>
                                        <span className={styles.stepTitle}>{step.title}</span>
                                        <span className={styles.stepDate}>{step.sub}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/*
            <section className={styles.contentSection} key={activeStep}>
                <div className={styles.contentHeader}>
                    <h2 className={styles.contentTitle}>{roadmapContent[activeStep]?.title || "Upcoming Milestone"}</h2>
                    <div className={styles.categoryTabs}>
                        <button
                            className={`${styles.tab} ${activeCategory === 'city' ? styles.activeTab : ''}`}
                            onClick={() => setActiveCategory('city')}
                        >
                            Development
                        </button>
                        <button
                            className={`${styles.tab} ${activeCategory === 'map' ? styles.activeTab : ''}`}
                            onClick={() => setActiveCategory('map')}
                        >
                            Gameplay
                        </button>
                    </div>
                </div>

                <div className={styles.detailsGrid}>
                    <div className={styles.detailsCard}>
                        <h3>{roadmapContent[activeStep]?.[activeCategory]?.label}</h3>
                        <ul>
                            {roadmapContent[activeStep]?.[activeCategory]?.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>*/}
        </div>
    );
}