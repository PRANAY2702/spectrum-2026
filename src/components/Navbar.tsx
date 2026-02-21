"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Locks the background from scrolling when the mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [isOpen]);

    const navItems = ['HOME', 'GALLERY', 'EVENTS', 'TEAM', 'CONTACT'];

    return (
        <>
            {/* --- FOOLPROOF CSS RESPONSIVE RULES --- */}
            <style>{`
                .desktop-menu {
                    display: flex;
                }
                .mobile-btn {
                    display: none;
                }
                
                /* WHEN ON MOBILE SCREENS (Under 900px) */
                @media (max-width: 900px) {
                    .desktop-menu {
                        display: none !important; /* Hides the squished links */
                    }
                    .mobile-btn {
                        display: flex !important; /* Shows the hamburger icon */
                    }
                    .navbar-box {
                        padding: 0 20px !important;
                    }
                    .logo-box {
                        margin-top: -20px !important; /* Adjusts logo height for mobile */
                        width: 130px !important; /* Makes logo fit the phone screen */
                    }
                }
            `}</style>

            {/* --- MAIN NAVBAR --- */}
            <div style={{ position: 'fixed', width: '100%', top: '15px', zIndex: 1000, padding: '0 15px' }}>
                <nav className="navbar-box" style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '100px',
                    padding: '0 30px', 
                    display: 'flex',
                    justifyContent: 'space-between', /* Pushes Logo left, Menu right */
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    boxShadow: '0 10px 40px rgba(100, 100, 111, 0.05)',
                    height: '70px'
                }}>
                    
                    {/* 1. LOGO */}
                    <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
                        <div className="logo-box" style={{ 
                            cursor: 'pointer', 
                            marginTop: '-40px', 
                            width: '160px',
                            transition: 'transform 0.4s ease'
                        }}>
                            <img src="/spectrum_white.png" alt="Spectrum Logo" style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.05))' }} />
                        </div>
                    </Link>
                    
                    {/* 2. DESKTOP LINKS (Hidden on Mobile automatically by the CSS above) */}
                    <div className="desktop-menu" style={{ gap: '25px', alignItems: 'center' }}>
                        {navItems.map((item, i) => {
                            let linkHref = `/${item.toLowerCase()}`;
                            if (item === 'HOME') linkHref = '/';

                            return (
                                <Link key={i} href={linkHref} 
                                      style={{ color: 'var(--text-slate)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', transition: 'all 0.3s ease' }}
                                >
                                    {item}
                                </Link>
                            );
                        })}
                        
                        <button style={{
                            background: 'linear-gradient(45deg, var(--spring-blush), #ffb7c5)', color: '#ffffff',
                            padding: '10px 24px', borderRadius: '50px', border: 'none', fontWeight: 800, fontSize: '0.8rem',
                            letterSpacing: '1px', cursor: 'pointer',
                            boxShadow: '0 8px 20px rgba(244, 172, 183, 0.4)'
                        }}>
                            JOIN SPECTRUM
                        </button>
                    </div>

                    {/* 3. MOBILE HAMBURGER ICON (Visible ONLY on Mobile) */}
                    <div className="mobile-btn" style={{ cursor: 'pointer', padding: '10px' }} onClick={() => setIsOpen(true)}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-slate)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </div>
                </nav>
            </div>

            {/* --- MOBILE SLIDING DRAWER --- */}
            {isOpen && (
                <div 
                    style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', background: 'rgba(0,0,0,0.3)', zIndex: 1999 }} 
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div style={{
                position: 'fixed', top: 0, right: 0, width: '80%', maxWidth: '350px', height: '100vh',
                background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)',
                borderLeft: '1px solid var(--glass-border)', zIndex: 2000,
                transform: isOpen ? 'translateX(0)' : 'translateX(100%)', // Slide animation
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex', flexDirection: 'column', padding: '30px',
                boxShadow: '-10px 0 40px rgba(0,0,0,0.1)'
            }}>
                
                {/* Close 'X' Button */}
                <div style={{ alignSelf: 'flex-end', cursor: 'pointer', marginBottom: '40px', padding: '10px' }} onClick={() => setIsOpen(false)}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--text-slate)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>

                {/* Mobile Navigation Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {navItems.map((item, i) => {
                        let linkHref = `/${item.toLowerCase()}`;
                        if (item === 'HOME') linkHref = '/';

                        return (
                            <Link key={i} href={linkHref} 
                                  onClick={() => setIsOpen(false)} // Closes menu when a link is clicked
                                  style={{ 
                                      color: 'var(--text-slate)', textDecoration: 'none', 
                                      fontSize: '2rem', fontWeight: 900, letterSpacing: '1px',
                                      fontFamily: 'Playfair Display, serif',
                                      borderBottom: '1px solid rgba(0,0,0,0.05)',
                                      paddingBottom: '15px'
                                  }}
                            >
                                {item}
                            </Link>
                        );
                    })}

                    <button style={{
                        background: 'linear-gradient(45deg, var(--spring-blush), #ffb7c5)', color: '#ffffff',
                        padding: '16px 0', borderRadius: '50px', border: 'none', fontWeight: 800, fontSize: '1.1rem',
                        letterSpacing: '2px', width: '100%', boxShadow: '0 10px 30px rgba(244, 172, 183, 0.4)',
                        marginTop: '20px'
                    }}>
                        JOIN SPECTRUM
                    </button>
                </div>
            </div>
        </>
    );
}
