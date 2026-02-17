"use client"; // Obligatoire pour utiliser useRef et le bouton d'impression
import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import styles from '../styles/cv.module.css';

export const CVData = {
    fr: {
        security: {
            identity: {
                name: "Paul NELATON",
                role: "Ingénieur Sécurité Systèmes et Réseaux",
                mobility: "Mobilité Toulouse / France / Suisse / Europe",
                summary: "Ingénieur cybersécurité spécialisé dans la sécurisation d'infrastructures critiques, avec plus de six ans d'expérience en environnements à fortes contraintes de disponibilité.",
                contact: {
                    email: "paul.nelaton@gmail.com",
                    phone: "+55 48 988117655",
                    linkedin: "linkedin.com/in/paul-nelaton"
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
                        "Développement d'une interface web full stack (React / Next.js) intégrée à l'écosystème du projet."
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
                    period: "2018 - 2019",
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
                { year: "2016", title: "Ingénieur Systèmes, réseaux et sécurité", school: "AFTI (Orsay)" },
                { year: "2015", title: "Licence Informatique", school: "Univ. Franche-Comté" },
                { year: "2014", title: "DUT Informatique", school: "IUT de Belfort" },
                { year: "", title: "Certifications", school: "Zscaler ZCCA/ZCCP" }
            ],
            languages: [
                { name: "Français", level: "Langue maternelle" },
                { name: "Anglais", level: "Courant professionnel" },
                { name: "Portugais", level: "Courant" }
            ],
            labels: {
                domains: "Domaines d'intervention",
                technicalSkills: "Compétences Techniques",
                skillCategories: {
                    security: "Sécurité & Infra",
                    systems: "Systèmes & Virtualisation",
                    dev_automation: "Dev & Automatisation"
                },
                education: "Formation & Certifications",
                languages: "Langues",
                experience: "Expérience Professionnelle",
                additional: "Informations complémentaires",
                downloadNote: "CV professionnel (version design, Français/Anglais – Développement/Cybersécurité) disponible sur :"
            },
        },
        dev: {
            identity: {
                name: "Paul NELATON",
                role: "Ingénieur Logiciel & Web Full Stack",
                mobility: "Mobilité France / Suisse / Europe",
                summary: "Spécialisé en développement backend C#/.NET, automatisation et conception d'architectures modulaires orientées performance, scalabilité et maintenabilité.",
                contact: {
                    email: "paul.nelaton@gmail.com",
                    phone: "+55 48 988117655",
                    linkedin: "linkedin.com/in/paul-nelaton"
                }
            },
            stats: [
                { label: "Ingénierie Logicielle", value: 90, color: "#1e40af" },
                { label: "Full Stack Web", value: 80, color: "#3b82f6" },
                { label: "Automatisation & DevOps", value: 85, color: "#2563eb" },
                { label: "Sécurité & Infrastructure", value: 90, color: "#1e40af" }
            ],
            skillTrees: {
                software: ["C#", ".NET / .NET Core", "ASP.NET", "APIs", "SQL", "Algorithmique", "SOLID"],
                frontend: ["React", "Next.js", "HTML/CSS", "TypeScript", "Tailwind CSS"],
                devops: ["PowerShell", "Python", "Ansible", "REST API", "Git", "CI/CD", "Automatisation"],
            },

            experience: [
                {
                    period: "2024 - Présent",
                    company: "Projet Indépendant",
                    role: "Ingénieur Logiciel C#",
                    desc: [
                        "Conception et développement d'une architecture backend modulaire en C# (.NET / .NET Core).",
                        "Développement d'un moteur de génération procédurale paramétrable (gestion de règles, contraintes et priorités).",
                        "Implémentation d'algorithmes de distribution, logique événementielle et gestion d'états complexes.",
                        "Optimisation des performances mémoire et CPU.",
                        "Structuration de l'architecture projet (séparation des responsabilités, modularité, maintenabilité).",
                        "Développement d'une interface web full stack (React / Next.js).",
                        "Portfolio : https://braineatersgame.com/",
                    ]
                },
                {
                    period: "2019 - 2024",
                    company: "ESCOTA (Vinci Autoroutes)",
                    role: "Ingénieur Automatisation et Sécurité",
                    desc: [
                        "Automatisation des contrôles de sécurité et reporting via scripts PowerShell.",
                        "Industrialisation du patch management et du durcissement système.",
                        "Développement d'outils internes pour remédiation et suivi de conformité.",
                        "Collection et exploitation de données via ELK.",
                        "MCO sur périmètre critique à haute disponibilité."
                    ]
                },
                {
                    period: "2018 - 2019",
                    company: "BT (British Telecom)",
                    role: "Ingénieur DevOps & Automatisation",
                    desc: [
                        "Automatisation des flux de détection et d'escalade via intégration d'API REST.",
                        "Interconnexion et intégration SIEM (RTIR, TheHive, ELK).",
                        "Automatisation de la compliance réseau avec Ansible.",
                        "Développement de scripts d'orchestration et outils internes.",
                        "Rédaction technique en environnement international."
                    ]
                },
            ],
            formations: [
                { year: "2016", title: "Ingénieur Systèmes, réseaux et sécurité", school: "AFTI (Orsay)" },
                { year: "2015", title: "Licence Informatique", school: "Univ. Franche-Comté" },
                { year: "2014", title: "DUT Informatique", school: "IUT de Belfort" },
                { year: "", title: "Certifications", school: "Zscaler ZCCA/ZCCP" }
            ],
            languages: [
                { name: "Français", level: "Langue maternelle" },
                { name: "Anglais", level: "Courant professionnel" },
                { name: "Portugais", level: "Courant" }
            ],
            labels: {
                domains: "Domaines d'intervention",
                technicalSkills: "Compétences Techniques",
                skillCategories: {
                    software: "Software & Backend",
                    frontend: "Front End",
                    devops: "DevOps",
                },
                education: "Formation & Certifications",
                languages: "Langues",
                experience: "Expérience Professionnelle",
                additional: "Informations complémentaires",
                downloadNote: "CV professionnel (version design, Français/Anglais - Développement/Cybersécurité) disponible sur :"
            },
        }

    },
    en: {
        security: {
            identity: {
                name: "Paul NELATON",
                role: "Systems & Network Security Engineer",
                mobility: "Mobility Toulouse / France / Switzerland / Europe",
                summary:
                    "Cybersecurity engineer with over six years of experience securing critical infrastructures. Strong background in automation, software engineering, and high-availability environments.",
                contact: {
                    email: "paul.nelaton@gmail.com",
                    phone: "+55 48 988117655",
                    linkedin: "linkedin.com/in/paul-nelaton"
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
                    period: "2018 - 2019",
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
                { year: "2016", title: "Networks, systems and security engineer", school: "AFTI (Orsay)" },
                { year: "2015", title: "Bachelor's Degree in Computer Science", school: "University of Franche-Comté" },
                { year: "2014", title: "DUT Computer Science", school: "IUT of Belfort" },
                { year: "", title: "Certifications", school: "Zscaler ZCCA / ZCCP" }
            ],

            languages: [
                { name: "French", level: "Native" },
                { name: "English", level: "Professional proficiency" },
                { name: "Portuguese", level: "Fluent" }
            ],
            labels: {
                domains: "Core Competencies",
                technicalSkills: "Technical Skills",
                skillCategories: {
                    security: "Security & Infrastructure",
                    systems: "Systems & Virtualization",
                    dev_automation: "Development & Automation"
                },
                education: "Education & Certifications",
                languages: "Languages",
                experience: "Professional Experience",
                additional: "Additional Information",
                downloadNote: "Professional CV (design version, English/French - Software/Cybersecurity) available at:"
            },
        },
        dev: {
            identity: {
                name: "Paul NELATON",
                role: "Software Engineer & Full Stack Web Developer",
                mobility: "Mobility France / Switzerland / Europe",
                summary: "Specialized in C#/.NET backend development, automation, and modular architecture design focused on performance, scalability, and maintainability.",
                contact: {
                    email: "paul.nelaton@gmail.com",
                    phone: "+55 48 988117655",
                    linkedin: "linkedin.com/in/paul-nelaton"
                }
            },

            stats: [
                { label: "Software Engineering", value: 90, color: "#1e40af" },
                { label: "Full Stack Web Development", value: 80, color: "#3b82f6" },
                { label: "Automation & DevOps", value: 85, color: "#2563eb" },
                { label: "Security & Infrastructure", value: 90, color: "#1e40af" }
            ],

            skillTrees: {
                software: ["C#", ".NET / .NET Core", "ASP.NET", "APIs", "SQL", "Algorithms", "SOLID Principles"],
                frontend: ["React", "Next.js", "HTML/CSS", "TypeScript", "Tailwind CSS"],
                devops: ["PowerShell", "Python", "Ansible", "REST APIs", "Git", "CI/CD", "Automation"]
            },

            experience: [
                {
                    period: "2024 - Present",
                    company: "Independent Project",
                    role: "C# Software Engineer",
                    desc: [
                        "Designed and developed a modular backend architecture using C# (.NET / .NET Core).",
                        "Developed a configurable procedural generation engine (rules, constraints, priorities).",
                        "Implemented distribution algorithms, event-driven logic, and complex state management.",
                        "Optimized memory usage and CPU performance.",
                        "Structured the overall project architecture (separation of concerns, modularity, maintainability).",
                        "Developed a full-stack web interface using React / Next.js.",
                        "Portfolio: https://braineatersgame.com/"
                    ]
                },
                {
                    period: "2019 - 2024",
                    company: "ESCOTA (Vinci Autoroutes)",
                    role: "Automation & Security Engineer",
                    desc: [
                        "Automated security controls and reporting using PowerShell scripts.",
                        "Industrialized patch management and system hardening processes.",
                        "Developed internal tools for remediation and compliance tracking.",
                        "Collected and analyzed data using ELK stack.",
                        "Maintained critical high-availability environments."
                    ]
                },
                {
                    period: "2018 - 2019",
                    company: "BT (British Telecom)",
                    role: "DevOps & Automation Engineer",
                    desc: [
                        "Automated detection and escalation workflows via REST API integrations.",
                        "Integrated and interconnected SIEM platforms (RTIR, TheHive, ELK).",
                        "Automated network compliance using Ansible.",
                        "Developed orchestration scripts and internal tooling.",
                        "Produced technical documentation in an international environment."
                    ]
                }
            ],

            formations: [
                { year: "2016", title: "Networks, systems and security engineer", school: "AFTI (Orsay)" },
                { year: "2015", title: "Bachelor's Degree in Computer Science", school: "University of Franche-Comté" },
                { year: "2014", title: "DUT Computer Science", school: "IUT of Belfort" },
                { year: "", title: "Certifications", school: "Zscaler ZCCA/ZCCP" }
            ],

            languages: [
                { name: "French", level: "Native" },
                { name: "English", level: "Professional proficiency" },
                { name: "Portuguese", level: "Fluent" }
            ],

            labels: {
                domains: "Core Competencies",
                technicalSkills: "Technical Skills",
                skillCategories: {
                    software: "Software & Backend",
                    frontend: "Front End",
                    devops: "DevOps"
                },
                education: "Education & Certifications",
                languages: "Languages",
                experience: "Professional Experience",
                additional: "Additional Information",
                downloadNote: "Professional CV (design version, English/French - Software/Cybersecurity) available at:"
            }
        }
    }
};

const CvATS = React.forwardRef(({ data }, ref) => {
    return (
        <div ref={ref} className={`${styles.cvContainer} ${styles.cvATS}`}>

            {/* HEADER SIMPLIFIÉ */}
            <header className={styles.header}>
                <div className={styles.identityBlock}>
                    <h1 className={styles.name}>{data.identity.name}</h1>
                    <h2 className={styles.role}>{data.identity.role}</h2>
                    <p className={styles.target}>{data.identity.mobility}</p>
                    <p className={styles.summary}>{data.identity.summary}</p>
                </div>

                <div className={styles.rightHeader}>
                    <div className={styles.contactInfo}>
                        <img src="/images/cv/profile2.png" alt="profile" className={styles.profilePic} />
                        <span>{data.identity.contact.email}</span>
                        <span>{data.identity.contact.phone}</span>
                        <span>{data.identity.contact.linkedin}</span>
                    </div>
                </div>
            </header>


            {/* CONTENU MONO COLONNE */}
            <div className={styles.atsContent}>

                {/* FORMATION */}
                <section className={styles.section}>
                    <h3>{data.labels.education}</h3>

                    {data.formations.map((f, i) => (
                        <div key={i} className={styles.eduItem}>
                            <span className={styles.year}>{f.year}</span>
                            <div className={styles.eduDetail}>
                                <strong>{f.title}</strong>
                                <span>{f.school}</span>
                            </div>
                        </div>
                    ))}
                </section>
                {/* EXPERIENCE EN PREMIER */}
                <main className={styles.content}>
                    <h3 className={styles.mainTitle}>{data.labels.experience}</h3>

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


                {/* COMPÉTENCES */}
                <section className={styles.section}>
                    <h3>{data.labels.technicalSkills}</h3>

                    {Object.entries(data.skillTrees).map(([key, skills]) => (
                        <div key={key} className={styles.skillGroup}>
                            <h4 className={styles.skillCategory}>
                                {data.labels.skillCategories[key]}
                            </h4>

                            <div className={styles.tags}>
                                {skills.map(skill => (
                                    <span key={skill} className={styles.tag}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>


                {/* LANGUES */}
                <section className={styles.section}>
                    <h3>{data.labels.languages}</h3>

                    <ul className={styles.langList}>
                        {data.languages.map(lang => (
                            <li key={lang.name}>
                                <strong>{lang.name} :</strong> {lang.level}
                            </li>
                        ))}
                    </ul>
                </section>

            </div>
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
                        <img src="/images/cv/profile2.png" alt="profile" className={styles.profilePic} />
                        <span>{data.identity.contact.email}</span>
                        <span>{data.identity.contact.phone}</span>
                        <span>
                            <a
                                href="https://www.linkedin.com/in/paul-nelaton-791721aa/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {data.identity.contact.linkedin}
                            </a>
                        </span>
                    </div>
                </div>
            </header>

            <div className={styles.mainGrid}>
                {/* --- LEFT: SKILLS & TECHNICAL --- */}
                <aside className={styles.sidebar}>

                    {/* Stats */}
                    <section className={styles.section}>
                        <h3>{data.labels.domains}</h3>
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
                        <h3>{data.labels.technicalSkills}</h3>
                        {Object.entries(data.skillTrees).map(([key, skills]) => (
                            <div key={key} className={styles.skillGroup}>
                                <h4 className={styles.skillCategory}>
                                    {data.labels.skillCategories[key]}
                                </h4>

                                <div className={styles.tags}>
                                    {skills.map(s => <span key={s} className={styles.tag}>{s}</span>)}
                                </div>
                            </div>
                        ))}
                    </section>
                    {/* Formations */}
                    <section className={styles.section}>
                        <h3>{data.labels.education}</h3>
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
                        <h3>{data.labels.languages}</h3>
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
                    <h3 className={styles.mainTitle}>{data.labels.experience}</h3>

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
    const [mode, setMode] = useState("security");

    const data = CVData[lang][mode];

    const designRef = useRef(null);
    const atsRef = useRef(null);

    const handlePrintDesign = useReactToPrint({
        contentRef: designRef,
        documentTitle: `CV_Paul_NELATON_${mode}_${lang}_${new Date().getFullYear()}`
    });

    const handlePrintATS = useReactToPrint({
        contentRef: atsRef,
        documentTitle: `CV_Paul_NELATON_ATS_${mode}_${lang}_${new Date().getFullYear()}`
    });

    return (
        <div className={styles.cvPageWrapper}>

            {/* Barre d’actions */}
            <div className={styles.cvActions}>
                <div className={styles.langWrapper}>
                    <span className={styles.langLabel}>
                        {lang === "fr" ? "Langue :" : "Language:"}
                    </span>

                    <div className={styles.langSwitch}>
                        <button
                            onClick={() => setLang("fr")}
                            className={`${styles.langButton} ${lang === "fr" ? styles.active : ""}`}
                            aria-label="Français"
                        >
                            FR
                        </button>

                        <button
                            onClick={() => setLang("en")}
                            className={`${styles.langButton} ${lang === "en" ? styles.active : ""}`}
                            aria-label="English"
                        >
                            EN
                        </button>
                    </div>
                </div>

                <div className={styles.modeWrapper}>
                    <span className={styles.modeLabel}>
                        {lang === "fr" ? "Profil :" : "Profile:"}
                    </span>

                    <div className={styles.modeSwitch}>
                        <button
                            onClick={() => setMode("dev")}
                            className={`${styles.modeButton} ${mode === "dev" ? styles.active : ""}`}
                        >
                            💻 {lang === "fr" ? "Dev" : "Dev"}
                        </button>

                        <button
                            onClick={() => setMode("security")}
                            className={`${styles.modeButton} ${mode === "security" ? styles.active : ""}`}
                        >
                            🔐 {lang === "fr" ? "Sec" : "Sec"}
                        </button>
                    </div>
                </div>

                <button onClick={handlePrintDesign} className={styles.cvButton}>
                    {lang === "fr" ? "Générer PDF Design" : "Generate Design PDF"}
                </button>

                <button onClick={handlePrintATS} className={styles.cvButton}>
                    {lang === "fr" ? "Générer PDF ATS" : "Generate ATS PDF"}
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