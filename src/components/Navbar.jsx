import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: '首頁', path: '/' },
        { name: '關於我', path: '/about' },
        { name: '作品集', path: '/portfolio' },
        { name: '聯絡方式', path: '/contact' },
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <nav className="navbar" style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            height: 'var(--header-height)',
            backgroundColor: 'rgba(254, 249, 231, 0.85)', // cream with opacity
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            borderBottom: '2px solid var(--border-color)'
        }}>
            <div className="container" style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Link to="/" className="logo" style={{
                    fontSize: '1.8rem',
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--text-primary)'
                }}>
                    我的作品集<span style={{ color: 'var(--accent-secondary)' }}>。</span>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'none', gap: '2rem' }}>
                    {/* Styles will be moved to CSS properly later, inline for quick scaffold */}
                </div>
                <style>{`
          @media (min-width: 768px) {
            .desktop-menu { display: flex !important; }
            .mobile-toggle { display: none !important; }
          }
        `}</style>

                <ul className="desktop-menu">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                style={{
                                    color: isActive(link.path) ? 'var(--text-accent)' : 'var(--text-primary)',
                                    fontWeight: isActive(link.path) ? 'bold' : 'normal',
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '1.2rem'
                                }}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <button className="mobile-toggle btn-secondary" onClick={toggleMenu} style={{ border: 'none', background: 'transparent', padding: '0.5rem', color: 'var(--text-primary)' }}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div style={{
                        position: 'absolute',
                        top: 'var(--header-height)',
                        left: 0,
                        width: '100%',
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '2rem',
                        borderBottom: '2px solid var(--border-color)',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                    }}>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        style={{
                                            fontSize: '1.5rem',
                                            fontFamily: 'var(--font-heading)',
                                            color: isActive(link.path) ? 'var(--accent-secondary)' : 'var(--text-primary)',
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
