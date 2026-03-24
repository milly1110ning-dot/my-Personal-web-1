import React from 'react';
import { motion } from 'framer-motion';
import Skills from '../components/Skills';

const About = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="section"
            style={{ paddingTop: 'calc(var(--header-height) + 4rem)' }}
        >
            <div className="container">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="section-title">關於我</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '2' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            我是一位充滿熱情的開發者，致力於製作乾淨、高效且對使用者友善的網頁應用程式。
                            我對網頁運作的好奇心開啟了我的開發旅程，並迅速轉變為職業熱情。
                        </p>
                        <p>
                            憑藉在 <span style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>React</span> 和現代 CSS 方面的紮實基礎，我專注於提供高品質的數位體驗。
                            我相信一個很棒的網站不僅要好看，更要運作順暢，提供直覺的使用者體驗。
                        </p>
                    </div>
                </motion.div>

                <Skills />
            </div>
        </motion.section>
    );
};

export default About;
