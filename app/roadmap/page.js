"use client";

import styles from '../styles/roadmap.module.css';
import { useRef, useEffect, useState } from "react";

export default function RoadmapPage() {

    const CURRENT_STEP_ID = "present";
    const [activeStep, setActiveStep] = useState(CURRENT_STEP_ID);
    const [clickedStep, setClickedStep] = useState(null);
    const stepRefs = useRef({});
    const milestoneListRef = useRef(null);
    const isDraggingList = useRef(false);
    const dragStartY = useRef(0);
    const startScrollTop = useRef(0);

    const steps = [
        { id: "past", title: "Prototype", sub: "2025" },
        { id: "present", title: "Current", sub: "Now" },
        { id: "demo", title: "Demo", sub: "mid 2026" },
        { id: "v1", title: "Launch V1", sub: "Late 2026" },
        { id: "v2", title: "Expansion", sub: "TBA" },
    ];

    const roadmapContent = {
        past: {
            status: "completed",
            title: "The Foundation",
            summary: "The first pillars of Brain Eaters were established, shaping the project's direction and core gameplay vision.",
            items: [
                { label: "Core gameplay structure defined" },
                { label: "First city systems implemented" },
                { label: "Exploration foundations created" },
                { label: "Inventory and crafting systems introduced" }
            ]
        },
        present: {
            status: "inProgress",
            title: "The Awakening",
            summary: "The project is evolving into a more playable and immersive survival experience.",
            items: [
                { label: "Map generation expanded", status: "completed" },
                { label: "Fog of war implementation" },
                { label: "World visuals improvement" },
                { label: "Exploration systems refinement", status: "planned" }
            ]
        },
        demo: {
            status: "planned",
            title: "Playable Demo",
            summary: "The next milestone is a first playable version showcasing the core survival loop.",
            items: [
                { label: "Deliver a stable gameplay slice" },
                { label: "Show exploration and looting systems" },
                { label: "Introduce early survival tension" },
                { label: "Prepare a first public-facing demo" }
            ]
        },
        v1: {
            status: "planned",
            title: "Launch V1",
            summary: "The goal is to deliver the first full version of Brain Eaters with a solid and replayable survival experience.",
            items: [
                { label: "Release the first complete game version" },
                { label: "Expand progression and replayability" },
                { label: "Polish the main gameplay loop" },
                { label: "Improve overall content depth" }
            ]
        },
        v2: {
            status: "planned",
            title: "Expansion",
            summary: "After launch, Brain Eaters will continue to grow with new systems, content and long-term improvements.",
            items: [
                { label: "Add major new features" },
                { label: "Expand the world and possibilities" },
                { label: "Deepen strategy and survival systems" },
                { label: "Continue long-term post-launch evolution" }
            ]
        }
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

    const handleListMouseDown = (e) => {
        const list = milestoneListRef.current;
        if (!list) return;

        isDraggingList.current = true;
        dragStartY.current = e.clientY;
        startScrollTop.current = list.scrollTop;

        list.classList.add(styles.dragging);
    };

    const handleListMouseMove = (e) => {
        const list = milestoneListRef.current;
        if (!list || !isDraggingList.current) return;

        const deltaY = e.clientY - dragStartY.current;
        list.scrollTop = startScrollTop.current - deltaY;
    };

    const handleListMouseUp = () => {
        const list = milestoneListRef.current;
        isDraggingList.current = false;
        if (list) list.classList.remove(styles.dragging);
    };

    const handleListMouseLeave = () => {
        const list = milestoneListRef.current;
        isDraggingList.current = false;
        if (list) list.classList.remove(styles.dragging);
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
            <section
                className={`${styles.contentSection} ${styles[roadmapContent[activeStep]?.status || "planned"]}`}
                key={activeStep}
            >
                <div className={styles.contentGlow}></div>

                <div className={styles.contentHeader}>
                    <span
                        className={`${styles.statusBadge} ${styles[`status_${roadmapContent[activeStep]?.status || "planned"}`]}`}
                    >
                        {roadmapContent[activeStep]?.status === "completed" && "Completed"}
                        {roadmapContent[activeStep]?.status === "inProgress" && "In Progress"}
                        {roadmapContent[activeStep]?.status === "planned" && "Planned"}
                    </span>

                    <h2 className={styles.contentTitle}>
                        {roadmapContent[activeStep]?.title || "Upcoming Milestone"}
                    </h2>

                    <p className={styles.contentSummary}>
                        {roadmapContent[activeStep]?.summary || "More details about this milestone will be revealed soon."}
                    </p>
                </div>

                <div
                    ref={milestoneListRef}
                    className={styles.milestoneList}
                    onMouseDown={handleListMouseDown}
                    onMouseMove={handleListMouseMove}
                    onMouseUp={handleListMouseUp}
                    onMouseLeave={handleListMouseLeave}
                >
                    {roadmapContent[activeStep]?.items?.map((item, i) => {
                        const itemStatus = item.status || roadmapContent[activeStep]?.status || "planned";

                        return (
                            <div
                                key={i}
                                className={`${styles.milestoneItem} ${styles[`item_${itemStatus}`]}`}
                                style={{ animationDelay: `${i * 90}ms` }}
                            >
                                <span className={`${styles.itemDot} ${styles[`dot_${itemStatus}`]}`}></span>
                                <span className={styles.itemText}>{item.label}</span>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}