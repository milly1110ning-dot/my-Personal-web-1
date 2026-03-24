import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, tags, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            style={{
                background: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '2px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
            }}
        >
            <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, var(--bg-secondary), var(--border-color))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Placeholder for project image */}
                <span style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>作品預覽圖</span>
            </div>

            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1, lineHeight: '1.6' }}>{description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {tags.map((tag, i) => (
                        <span key={i} style={{
                            fontSize: '0.9rem',
                            color: 'white',
                            background: 'var(--accent-secondary)',
                            padding: '0.3rem 0.8rem',
                            borderRadius: 'var(--radius-full)'
                        }}>
                            #{tag}
                        </span>
                    ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}><Github size={18} /> 程式碼</a>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}><ExternalLink size={18} /> 線上預覽</a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
