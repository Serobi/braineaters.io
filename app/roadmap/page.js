"use client";

import styles from '../styles/roadmap.module.css';
import React, { useState } from 'react';

export default function RoadmapPage() {

    const CURRENT_STEP_ID = "present";
    const [activeStep, setActiveStep] = useState(CURRENT_STEP_ID);
    const [activeCategory, setActiveCategory] = useState("city");
    const [clickedStep, setClickedStep] = useState(null);


    const steps = [
        { id: "past", title: "Prototype", sub: "2025" },
        { id: "present", title: "Current", sub: "Actual" },
        { id: "demo", title: "Demo", sub: "mid 2026" },
        { id: "v1", title: "Launch V1", sub: "Late 2026" },
        { id: "v2", title: "Expansion", sub: "TBA" },
    ];

    const roadmapContent = {
        past: {
            city: "...",
            map: "..."
        },
        present: {
            city: "...",
            map: "..."
        },
        // later
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
                    The Roadmap is still work in progress, everything will improve upcoming days, this is just to give you a little taste of what is coming.
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
                        {steps.map((step, index) => {
                            const isCurrent = index === currentStepIndex;
                            const isPast = index < currentStepIndex;
                            const isFuture = index > currentStepIndex;
                            const isSelected = activeStep === step.id;
                            const isClicked = clickedStep === step.id;

                            return (
                                <div
                                    key={step.id}
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


        </div>
    );
}