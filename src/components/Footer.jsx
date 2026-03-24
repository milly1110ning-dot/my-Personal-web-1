import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '2rem 0',
            textAlign: 'center',
            borderTop: '2px solid var(--border-color)',
            color: 'var(--text-secondary)',
            marginTop: 'auto',
            background: 'var(--bg-secondary)'
        }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} 個人形象網站. Design with ❤️ by Milly.</p>
            </div>
        </footer>
    );
};

export default Footer;
