import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="section" style={{ minHeight: 'calc(100vh - var(--header-height))', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                        哈囉，我是 <span className="gradient-text">你的名子</span>
                        <span style={{ fontSize: '3rem' }}> 👋</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem', background: 'rgba(255,255,255,0.5)', padding: '1rem', borderRadius: 'var(--radius-md)' }}
                >
                    我是一位熱愛創造的工程師，專注於打造可愛又好用的網站體驗。
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
                >
                    <Link to="/portfolio" className="btn btn-primary">參觀作品</Link>
                    <Link to="/contact" className="btn btn-secondary">聯絡我</Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
