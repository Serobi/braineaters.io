import styles from '../styles/cv.module.css';
import React from 'react';


export const paulCV = {
    identity: {
        name: "Paul NELATON",
        role: "Ingénieur Sécurité Systèmes et Réseaux",
        target: "Mobilité Toulouse / France",
        summary: "Ingénieur spécialisé en sécurité des infrastructures critiques (OIV) avec 6+ ans d'expérience. Expertise en MCO, durcissement système et environnements à fortes contraintes (Vinci, Orange, BT).",
        contact: {
            email: "paul.nelaton@gmail.com",
            phone: "+55 48 988117655",
        }
    },
    // On remplace les "Stats RPG" par une répartition macro des compétences
    stats: [
        { label: "Sécurité & Réseaux", value: 90, color: "#1e3a8a" }, // Bleu Thales
        { label: "Système & Infras", value: 85, color: "#3b82f6" },
        { label: "Ingénierie Logicielle", value: 80, color: "#60a5fa" },
        { label: "Automatisation", value: 75, color: "#93c5fd" }
    ],
    skillTrees: {
        security: ["CyberArk (PAM)", "Qualys", "Checkpoint / Fortinet", "Secu AD / ALSID", "SOC / ELK"],
        systems: ["Windows Server", "Linux (Debian/RHEL)", "VMware ESXi", "SCCM"],
        dev_automation: ["C# / .NET", "PowerShell", "Python", "Ansible", "Git"]
    },
    // "Quests" devient "Experience"
    experience: [
        {
            period: "2024 – Présent",
            company: "Projet Indépendant",
            role: "Architecte Logiciel & Développeur",
            // Ici on "corporate-ise" le projet Unity : on parle d'algo et d'architecture
            desc: "Conception d'un système modulaire complexe en C# (.NET). Développement de moteurs procéduraux, gestion de la mémoire et optimisation de performance. Architecture événementielle et pattern de conception."
        },
        {
            period: "2019 – 2024",
            company: "ESCOTA (Vinci Autoroutes)",
            role: "Chargé de Sécurité Opérationnelle",
            desc: "Maintien en conditions opérationnelles (MCO) d'infrastructures critiques. Gestion des vulnérabilités (Qualys), durcissement OS, et déploiement PAM (CyberArk). Automatisation du reporting sécurité."
        },
        {
            period: "2018",
            company: "BT (British Telecom)",
            role: "Ingénieur Cybersécurité & DevOps",
            desc: "Mise en place d'un CySOC. Intégration SIEM et interconnexion API pour le ticketing. Rédaction de documentation technique (Anglais)."
        },
        {
            period: "2017 – 2018",
            company: "Orange Cyberdefense",
            role: "Ingénieur Sécurité Réseau",
            desc: "Administration Firewalls (Checkpoint), gestion d'incidents N2/N3 et support sur périmètre international."
        }
    ],
    environments: [
        "Environnements OIV",
        "Production 24/7",
        "Contraintes de sécurité élevées",
        "Documentation en anglais",
    ],
    formations: [
        { year: "2016", title: "Admin Systèmes & Sécurité", school: "AFTI (Orsay)" },
        { year: "2015", title: "Licence Informatique", school: "Univ. Franche-Comté" },
        { year: "Certifs", title: "Zscaler ZCCA/ZCCP, F5 LTM/ASM", school: "Certifications Pro" }
    ],
    languages: [
        { name: "Français", level: "Langue maternelle" },
        { name: "Anglais", level: "Courant professionnel" },
        { name: "Portugais", level: "Courant" }
    ]
};

export default function Cv({ data = paulCV }) {
    return (
        <div className={styles.cvContainer}>
            <header className={styles.header}>
                <div className={styles.identityBlock}>
                    <h1 className={styles.name}>{data.identity.name}</h1>
                    <h2 className={styles.role}>{data.identity.role}</h2>
                    <p className={styles.target}>{data.identity.target}</p>
                    <p className={styles.summary}>{data.identity.summary}</p>
                </div>

                <div className={styles.contactInfo}>
                    <span>{data.identity.contact.email}</span>
                    <span>{data.identity.contact.phone}</span>
                    <span>{data.identity.contact.linkedin}</span>
                </div>
            </header>

            <div className={styles.mainGrid}>
                {/* --- LEFT: SKILLS & TECHNICAL --- */}
                <aside className={styles.sidebar}>

                    {/* Visual Stats (Barres de compétence style "Jauge") */}
                    <section className={styles.section}>
                        <h3>Domaines d'intervention</h3>
                        <div className={styles.statsContainer}>
                            {data.stats.map((stat, i) => (
                                <div key={i} className={styles.statItem}>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                    {/* On garde la barre visuelle, ça rend bien même en pro */}
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
                                {/* On met des titres plus jolis via CSS capitalize ou mapping */}
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

                    {/* Formations & Certifs */}
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
                                <p className={styles.description}>{exp.desc}</p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}