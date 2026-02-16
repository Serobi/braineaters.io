"use client"; // Obligatoire pour utiliser useRef et le bouton d'impression
import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import styles from '../styles/cv.module.css';

export const CVData = {
    fr: {
        identity: {
            name: "Paul NELATON",
            role: "Ingénieur Sécurité Systèmes et Réseaux",
            mobility: "Mobilité Toulouse / France / Suisse / Europe",
            summary: "Ingénieur cybersécurité spécialisé dans la sécurisation d'infrastructures critiques, avec plus de six ans d'expérience en environnements à fortes contraintes de disponibilité.",
            contact: {
                email: "paul.nelaton@gmail.com",
                phone: "+55 48 988117655",
            }
        },
        stats: [
            { label: "Sécurité Systèmes & Réseaux", value: 90, color: "#00005c" },
            { label: "Automatisation & DevOps", value: 88, color: "#21219b" },
            { label: "Architecture & Industrialisation", value: 85, color: "#3b82f6" },
            { label: "Ingénierie Logicielle", value: 80, color: "#60a5fa" }
        ],
        skillTrees: {
            security: ["CyberArk", "Qualys", "Firewall", "AD", "SOC / ELK", "McAfee EDR", "Proxy", "DNS"],
            systems: ["Windows Server", "Linux", "Windows", "VMware ESXi", "SCCM"],
            dev_automation: ["C# / .NET", "PowerShell", "Python", "Ansible", "REST API", "Git", "React / NextJs"]
        },
        experience: [
            {
                period: "2024 - Présent",
                company: "Projet Indépendant",
                role: "Architecte Logiciel & Développeur",
                desc: [
                    "Conception et développement d'une architecture logicielle modulaire en C# (.NET / Unity).",
                    "Développement d'un moteur de génération procédurale multi-couches paramétrable (règles, contraintes, priorités).",
                    "Implémentation d'algorithmes de distribution et de logique événementielle complexe.",
                    "Optimisation des performances et gestion des dépendances systèmes.",
                    "Structuration complète de l'architecture.",
                    "Développement d'une interface web full stack(React / Next.js) intégrée à l'écosystème du projet."
                ]
            },
            {
                period: "2019 - 2024",
                company: "ESCOTA (Vinci Autoroutes)",
                role: "Ingénieur Sécurité Opérationnelle",
                desc: [
                    "MCO d'infrastructures critiques (OIV).",
                    "Rémédiation et investigation des vulnérabilités (Qualys).",
                    "Durcissement Windows Server, Windows 10 et ESXi.",
                    "Remédiation AD (ALSID) et gestion du patching via SCCM.",
                    "Déploiement et administration PAM (CyberArk).",
                    "Centralisation et exploitation des logs via ELK (SOC).",
                    "Automatisation des contrôles de sécurité et reporting MCO."
                ]

            },
            {
                period: "2018",
                company: "BT (British Telecom)",
                role: "Ingénieur Cybersécurité & DevOps",
                desc: [
                    "Automatisation des flux de détection et d'escalade via intégration API.",
                    "Intégration SIEM et interconnexion entre RTIR, TheHive et ELK pour réponse à incidents et ticketing.",
                    "Automatisation de compliance des équipements sécurité et réseau avec Ansible.",
                    "Étude et intégration de solution PAM.",
                    "Réalisation de maquettes techniques et rédaction de documentation en anglais."
                ]
            },
            {
                period: "2017 - 2018",
                company: "Orange Cyberdefense",
                role: "Ingénieur Sécurité Réseau",
                desc: [
                    "MCO sur le périmètre mondial de Air Liquide incluant :",
                    "Administration firewalls (Checkpoint, Cisco ASA, Fortinet, Palo Alto).",
                    "Gestion proxy (Zscaler) et solutions DNS / sécurité F5.",
                    "Gestion d'incidents N1/N2 en environnement multi-sites mondial."
                ]
            }
        ],
        formations: [
            { year: "2016", title: "Admin Systèmes & Sécurité", school: "AFTI (Orsay)" },
            { year: "2015", title: "Licence Informatique", school: "Univ. Franche-Comté" },
            { year: "2014", title: "DUT Informatique", school: "IUT de Belfort" },
            { year: "", title: "Certifications", school: "Zscaler ZCCA/ZCCP" }
        ],
        languages: [
            { name: "Français", level: "Langue maternelle" },
            { name: "Anglais", level: "Courant professionnel" },
            { name: "Portugais", level: "Courant" }
        ]
    },
    en: {
        identity: {
            name: "Paul NELATON",
            role: "Systems & Network Security Engineer",
            mobility: "Mobility Toulouse / France / Switzerland / Europe",
            summary:
                "Cybersecurity engineer with over six years of experience securing critical infrastructures. Strong background in automation, software engineering, and high-availability environments.",
            contact: {
                email: "paul.nelaton@gmail.com",
                phone: "+55 48 988117655",
            }
        },

        stats: [
            { label: "Systems & Network Security", value: 90, color: "#00005c" },
            { label: "Automation & DevOps", value: 88, color: "#21219b" },
            { label: "Architecture & Industrialization", value: 85, color: "#3b82f6" },
            { label: "Software Engineering", value: 80, color: "#60a5fa" }
        ],

        skillTrees: {
            security: ["CyberArk", "Qualys", "Firewall", "Active Directory", "SOC / ELK", "McAfee EDR", "Proxy", "DNS"],
            systems: ["Windows Server", "Linux", "Windows", "VMware ESXi", "SCCM"],
            dev_automation: ["C# / .NET", "PowerShell", "Python", "Ansible", "REST APIs", "Git", "React / Next.js"]
        },

        experience: [
            {
                period: "2024 - Present",
                company: "Independent Project",
                role: "Software Architect & Developer",
                desc: [
                    "Designed and developed a modular software architecture using C# (.NET / Unity).",
                    "Built a multi-layer procedural generation engine with configurable rules and constraints.",
                    "Implemented complex distribution algorithms and event-driven logic.",
                    "Optimized performance and managed system dependencies.",
                    "Structured the full project architecture.",
                    "Developed a full-stack web interface (React / Next.js) integrated into the ecosystem."
                ]
            },
            {
                period: "2019 - 2024",
                company: "ESCOTA (Vinci Autoroutes)",
                role: "Operational Security Engineer",
                desc: [
                    "Maintained and secured critical infrastructure environments.",
                    "Vulnerability remediation and investigation using Qualys.",
                    "Hardening of Windows Server, Windows 10 and VMware ESXi.",
                    "Active Directory remediation and patch management via SCCM.",
                    "Deployment and administration of PAM solution (CyberArk).",
                    "Centralized logging and SOC monitoring via ELK.",
                    "Security automation and operational reporting."
                ]
            },
            {
                period: "2018",
                company: "BT (British Telecom)",
                role: "Cybersecurity & DevOps Engineer",
                desc: [
                    "Automated detection and escalation workflows via API integrations.",
                    "Integrated SIEM ecosystem (RTIR, TheHive, ELK) for incident response.",
                    "Security and network compliance automation using Ansible.",
                    "PAM solution evaluation and integration.",
                    "Delivered technical documentation in English."
                ]
            },
            {
                period: "2017 - 2018",
                company: "Orange Cyberdefense",
                role: "Network Security Engineer",
                desc: [
                    "Operational support for Air Liquide's global perimeter.",
                    "Firewall administration (Checkpoint, Cisco ASA, Fortinet, Palo Alto).",
                    "Proxy (Zscaler) and DNS security management.",
                    "Incident handling in multi-site international environments."
                ]
            }
        ],

        formations: [
            { year: "2016", title: "Systems & Security Administration", school: "AFTI (Orsay)" },
            { year: "2015", title: "Bachelor's Degree in Computer Science", school: "University of Franche-Comté" },
            { year: "2014", title: "DUT Computer Science", school: "IUT of Belfort" },
            { year: "", title: "Certifications", school: "Zscaler ZCCA / ZCCP" }
        ],

        languages: [
            { name: "French", level: "Native" },
            { name: "English", level: "Professional proficiency" },
            { name: "Portuguese", level: "Fluent" }
        ]
    }
};

const CvATS = React.forwardRef(({ data }, ref) => {
    return (
        <div ref={ref} className={styles.cvATS}>
            <h1>{data.identity.name}</h1>
            <h2>{data.identity.role}</h2>

            <p>{data.identity.summary}</p>

            <h3>Compétences techniques</h3>
            {Object.values(data.skillTrees).flat().join(" • ")}

            <h3>Expérience professionnelle</h3>
            {data.experience.map((exp, i) => (
                <div key={i}>
                    <strong>{exp.role}</strong> – {exp.company} ({exp.period})
                    <ul>
                        {exp.desc.map((d, j) => <li key={j}>{d}</li>)}
                    </ul>
                </div>
            ))}

            <h3>Formation</h3>
            {data.formations.map((f, i) => (
                <p key={i}>
                    {f.year} – {f.title} – {f.school}
                </p>
            ))}

            <h3>Langues</h3>
            {data.languages.map(l => (
                <p key={l.name}>
                    {l.name} : {l.level}
                </p>
            ))}
        </div>
    );
});
CvATS.displayName = "CvATS";

const CvDesign = React.forwardRef(({ data }, ref) => {
    return (
        <div ref={ref} className={styles.cvContainer}>
            <header className={styles.header}>
                <div className={styles.identityBlock}>
                    <h1 className={styles.name}>{data.identity.name}</h1>
                    <h2 className={styles.role}>{data.identity.role}</h2>
                    <p className={styles.target}>{data.identity.mobility}</p>
                    <p className={styles.summary}>{data.identity.summary}</p>
                </div>

                <div className={styles.rightHeader}>
                    <div className={styles.contactInfo}>
                        <span>{data.identity.contact.email}</span>
                        <span>{data.identity.contact.phone}</span>
                        <span>{data.identity.contact.linkedin}</span>
                    </div>
                </div>
            </header>

            <div className={styles.mainGrid}>
                {/* --- LEFT: SKILLS & TECHNICAL --- */}
                <aside className={styles.sidebar}>

                    {/* Stats */}
                    <section className={styles.section}>
                        <h3>Domaines d'intervention</h3>
                        <div className={styles.statsContainer}>
                            {data.stats.map((stat, i) => (
                                <div key={i} className={styles.statItem}>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                    <div className={styles.statBarBg}>
                                        <div
                                            className={styles.statBarFill}
                                            style={{ width: `${stat.value}%`, backgroundColor: stat.color }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Hard Skills */}
                    <section className={styles.section}>
                        <h3>Compétences Techniques</h3>
                        {Object.entries(data.skillTrees).map(([key, skills]) => (
                            <div key={key} className={styles.skillGroup}>
                                <h4 className={styles.skillCategory}>
                                    {key === 'security' ? 'Sécurité & Infra' :
                                        key === 'systems' ? 'Systèmes & Virtu' : 'Dev & Automatisation'}
                                </h4>
                                <div className={styles.tags}>
                                    {skills.map(s => <span key={s} className={styles.tag}>{s}</span>)}
                                </div>
                            </div>
                        ))}
                    </section>
                    {/* Formations */}
                    <section className={styles.section}>
                        <h3>Formation & Certifications</h3>
                        <div className={styles.eduList}>
                            {data.formations.map((f, i) => (
                                <div key={i} className={styles.eduItem}>
                                    <span className={styles.year}>{f.year}</span>
                                    <div className={styles.eduDetail}>
                                        <strong>{f.title}</strong>
                                        <span>{f.school}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Langues */}
                    <section className={styles.section}>
                        <h3>Langues</h3>
                        <ul className={styles.langList}>
                            {data.languages.map(l => (
                                <li key={l.name}>
                                    <strong>{l.name} :</strong> {l.level}
                                </li>
                            ))}
                        </ul>
                    </section>
                </aside>

                {/* --- RIGHT: EXPERIENCE --- */}
                <main className={styles.content}>
                    <h3 className={styles.mainTitle}>Expérience Professionnelle</h3>

                    <div className={styles.timeline}>
                        {data.experience.map((exp, i) => (
                            <div key={i} className={styles.expCard}>
                                <div className={styles.expHeader}>
                                    <div className={styles.expTitleGroup}>
                                        <h4>{exp.role}</h4>
                                        <span className={styles.company}>{exp.company}</span>
                                    </div>
                                    <span className={styles.period}>{exp.period}</span>
                                </div>

                                <ul className={styles.expList}>
                                    {exp.desc.map((line, index) => (
                                        <li key={index}>{line}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
});

CvDesign.displayName = "CvDesign";

export default function Cv() {

    const [lang, setLang] = useState("fr");
    const data = CVData[lang];

    const designRef = useRef(null);
    const atsRef = useRef(null);

    const handlePrintDesign = useReactToPrint({
        contentRef: designRef,
        documentTitle: `CV_Paul_NELATON_Design_${new Date().getFullYear()}`
    });

    const handlePrintATS = useReactToPrint({
        contentRef: atsRef,
        documentTitle: `CV_Paul_NELATON_ATS_${new Date().getFullYear()}`
    });

    return (
        <div className={styles.cvPageWrapper}>

            {/* Barre d’actions */}
            <div className={styles.cvActions}>
                <button
                    onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                    className={styles.cvButton}
                >
                    {lang === "fr" ? "Switch to English" : "Passer en Français"}
                </button>
                <button
                    onClick={handlePrintDesign}
                    className={styles.cvButton}
                >
                    Générer PDF Design
                </button>
                <button
                    onClick={handlePrintATS}
                    className={styles.cvButton}
                >
                    Générer PDF ATS
                </button>
            </div>

            {/* Le CV */}
            <CvDesign ref={designRef} data={data} />

            {/* Caché mais présent dans le DOM */}
            <div style={{ display: "none" }}>
                <CvATS ref={atsRef} data={data} />
            </div>
        </div>
    );

}