import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillsData = [
        { category: "前端開發", items: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"] },
        { category: "開發工具", items: ["Git", "Vite", "VS Code", "Figma", "npm/yarn"] },
        { category: "設計相關", items: ["UI/UX Principles", "Responsive Design", "Accessibility", "Color Theory"] }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div style={{ marginTop: '4rem' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>專業技能</h3>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}
            >
                {skillsData.map((skillGroup, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        style={{
                            background: 'var(--bg-tertiary)',
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            border: '2px solid var(--border-color)',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
                        }}
                    >
                        <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--accent-primary)', textAlign: 'center' }}>{skillGroup.category}</h4>
                        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
                            {skillGroup.items.map((skill, idx) => (
                                <li key={idx} style={{
                                    background: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: 'var(--radius-sm)',
                                    fontSize: '0.95rem',
                                    color: 'var(--text-secondary)',
                                    border: '1px solid var(--border-color)'
                                }}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
