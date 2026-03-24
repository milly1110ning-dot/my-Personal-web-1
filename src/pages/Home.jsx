import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <>
            <Hero />
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h2 className="section-title">Featured Projects</h2>
                    <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                        <p>Coming Soon...</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
