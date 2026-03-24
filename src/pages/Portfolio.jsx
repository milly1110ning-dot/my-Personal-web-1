import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
    const projects = [
        {
            title: "電商數據儀表板",
            description: "為線上零售商打造的綜合數據分析儀表板，具備即時數據視覺化與庫存管理功能。",
            tags: ["React", "Chart.js", "Tailwind"]
        },
        {
            title: "社群媒體應用",
            description: "功能完整的社群平台，包含即時訊息、動態更新與使用者個人檔案管理。",
            tags: ["React", "Firebase", "Redux"]
        },
        {
            title: "任務管理工具",
            description: "提升生產力的專案管理工具，協助團隊透過看板與進度追蹤進行有效協作。",
            tags: ["React", "Node.js", "MongoDB"]
        }
    ];

    return (
        <section className="section" style={{ paddingTop: 'calc(var(--header-height) + 4rem)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="section-title"
                >
                    我的作品
                </motion.h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            index={index}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
