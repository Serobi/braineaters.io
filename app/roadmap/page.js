"use client";

import styles from '../styles/roadmap.module.css';
import { useRef, useEffect, useState } from "react";

export default function RoadmapPage() {

    const CURRENT_STEP_ID = "demo";
    const [activeStep, setActiveStep] = useState(CURRENT_STEP_ID);
    const [clickedStep, setClickedStep] = useState(null);
    const stepRefs = useRef({});
    const milestoneListRef = useRef(null);
    const isDraggingList = useRef(false);
    const dragStartY = useRef(0);
    const startScrollTop = useRef(0);

    const steps = [
        { id: "prototype", title: "Prototype", sub: "2025" },
        { id: "demo", title: "Demo", sub: "Q4 2026" },
        { id: "beta", title: "Closed Beta", sub: "2027" },
        { id: "launch", title: "Launch", sub: "TBA" },
        { id: "future", title: "Future", sub: "TBA" },
    ];

    const roadmapContent = {
        prototype: {
            status: "completed",
            title: "The Foundation",
            summary: "The core systems of Brain Eaters have been implemented, establishing a playable survival foundation.",
            items: [
                { label: "Inventory and item management systems" },
                { label: "Crafting system and recipes" },
                { label: "Building mechanics and upgrades" },
                { label: "City building, placement and customization" },
                { label: "Procedural map generation with multiple biomes" },
                { label: "Looting and resource gathering" },
                { label: "Basic combat system" },
                { label: "Character management and equipment system" },
                { label: "Game UI and user experience" },
            ]
        },
        demo: {
            status: "inProgress",
            title: "Playable Demo",
            summary: "Brain Eaters is evolving into a playable and immersive survival experience, bringing the world to life.",
            items: [
                { label: "Expanded item system with new resources and items", status: "completed" },
                { label: "Building systems refined with modular structures", status: "completed" },
                { label: "Main building visuals for levels 1-2", status: "completed" },
                { label: "City building with ground, textures and decoration customization", status: "completed" },
                { label: "Improved procedural world generation", status: "completed" },
                { label: "Fog of war and vision systems", status: "completed" },
                { label: "World visuals for wastelands and forests", status: "completed" },
                { label: "Zombies roaming and hunting survivors on the map", status: "inProgress" },
                { label: "UI and user experience improvements", status: "planned" },
                { label: "Core gameplay experience refinement", status: "planned" },
                { label: "Zombie attacks on the city", status: "planned" },
                { label: "Living and animated world with characters and visual effects", status: "planned" },
            ]
        },
        beta: {
            status: "planned",
            title: "Closed Beta",
            summary: "Brain Eaters will open to early players, focusing on stability, balance and core gameplay experience.",
            items: [
                { label: "Stable game with all core mechanics" },
                { label: "Multiplayer gameplay experience" },
                { label: "Polished visuals and improved immersion" },
                { label: "Character system, skills and progression" },
                { label: "Expanded world with new biomes and locations" },
                { label: "Cosmetic customization (decorations, building skins, survivor heroes)" },
                { label: "Early supporter rewards and exclusive content" }
            ]
        },
        launch: {
            status: "planned",
            title: "Launch V1",
            summary: "The time has come to explore the wastelands. Brain Eaters reaches its first full and stable release.",
            items: [
                { label: "Complete and fully playable survival experience" },
                { label: "Stabilized gameplay systems and overall balance" },
                { label: "Optimized performance and smooth experience" },
                { label: "Ready to support a growing player base" }
            ]
        },
        future: {
            status: "planned",
            title: "What's Next",
            summary: "After launch, Brain Eaters will continue to grow with new systems, content and long-term improvements.",
            items: [
                { label: "Details coming soon" },
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