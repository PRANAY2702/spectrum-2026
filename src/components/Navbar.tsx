"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scrolling when mobile menu is open
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
            {/* --- BULLETPROOF RESPONSIVE CSS --- */}
            <style>{`
                /* Desktop Layout Rules */
                .desktop-links { display: flex; flex: 2; justify-content: center; gap: 30px; align-items: center; }
                .desktop-button { display: flex; flex: 1.5; justify-content: flex-end; align-items: center; gap: 15px; }
                .mobile-hamburger { display: none; flex: 1; justify-content: flex-end; align-items: center; cursor: pointer; }
                
                /* Mobile Layout Rules (Screens under 1000px) */
                @media (max-width: 1000px) {
                    .desktop-links { display: none !important; }
                    .desktop-button { display: none !important; }
                    .mobile-hamburger { display: flex !important; }
                    .glass-pill { padding: 0 20px !important; }
                }
            `}</style>

            {/* --- MAIN NAVBAR --- */}
            <div style={{ position: 'fixed', width: '100%', top: '20px', zIndex: 1000, padding: '0 20px' }}>
                <nav className="glass-pill" style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '100px',
                    padding: '0 30px', 
                    display: 'flex',
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    boxShadow: '0 10px 40px rgba(100, 100, 111, 0.05)',
                    height: '75px'
                }}>
                    
                    {/* 1. LEFT: LOGO */}
                    <div style={{ flex: 1.5, display: 'flex', justifyContent: 'flex-start' }}>
                        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                            <div style={{ 
                                height: '40px', 
                                cursor: 'pointer',
                                transition: 'transform 0.4s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <img 
                                    src="/Screenshot 2026-02-15 170218.jpg" 
                                    alt="Spectrum Logo" 
                                    style={{ height: '100%', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.05))' }} 
                                />
                            </div>
                        </Link>
                    </div>
                    
                    {/* 2. CENTER: NAVIGATION LINKS */}
                    <div className="desktop-links">
                        {navItems.map((item, i) => {
                            let linkHref = `/${item.toLowerCase()}`;
                            if (item === 'HOME') linkHref = '/';

                            return (
                                <Link key={i} href={linkHref} 
                                      style={{ 
                                          color: 'var(--text-slate)', 
                                          textDecoration: 'none', 
                                          fontSize: '0.85rem', 
                                          fontWeight: 800, 
                                          letterSpacing: '1.5px', 
                                          transition: 'all 0.3s ease' 
                                      }}
                                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--spring-blush)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} 
                                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-slate)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                >
                                    {item}
                                </Link>
                            );
                        })}
                    </div>

                    {/* 3. RIGHT: BUTTONS (Desktop Only) */}
                    <div className="desktop-button">
                        
                        {/* SECONDARY: Download Brochure Button */}
                        <a href="/brochure.pdf" download style={{ textDecoration: 'none' }}>
                            <button style={{
                                background: 'transparent', 
                                color: 'var(--text-slate)',
                                padding: '10px 20px', borderRadius: '50px', 
                                border: '2px solid rgba(43, 45, 66, 0.2)', 
                                fontWeight: 800, fontSize: '0.75rem',
                                letterSpacing: '1px', cursor: 'pointer', transition: 'all 0.3s ease',
                                display: 'flex', alignItems: 'center', gap: '8px'
                            }}
                            onMouseEnter={(e) => { 
                                e.currentTarget.style.borderColor = 'var(--text-slate)'; 
                                e.currentTarget.style.background = 'rgba(43, 45, 66, 0.05)'; 
                            }}
                            onMouseLeave={(e) => { 
                                e.currentTarget.style.borderColor = 'rgba(43, 45, 66, 0.2)'; 
                                e.currentTarget.style.background = 'transparent'; 
                            }}>
                                {/* Tiny Download Icon */}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                BROCHURE
                            </button>
                        </a>

                        {/* PRIMARY: Register Button */}
                        <Link href="/register" style={{ textDecoration: 'none' }}>
                            <button style={{
                                background: '#2b2d42',
                                color: '#ffffff',
                                padding: '12px 28px', borderRadius: '50px', border: 'none', fontWeight: 800, fontSize: '0.8rem',
                                letterSpacing: '1px', cursor: 'pointer', transition: 'all 0.3s ease',
                                boxShadow: '0 8px 20px rgba(43, 45, 66, 0.25)'
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 25px rgba(43, 45, 66, 0.4)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(43, 45, 66, 0.25)'; }}>
                                REGISTER
                            </button>
                        </Link>
                    </div>

                    {/* 4. RIGHT: 3-LINE HAMBURGER ICON (Mobile Only) */}
                    <div className="mobile-hamburger" onClick={() => setIsOpen(true)}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2b2d42" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                transform: isOpen ? 'translateX(0)' : 'translateX(100%)', 
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex', flexDirection: 'column', padding: '30px',
                boxShadow: '-10px 0 40px rgba(0,0,0,0.1)'
            }}>
                
                {/* Close 'X' Button */}
                <div style={{ alignSelf: 'flex-end', cursor: 'pointer', marginBottom: '40px', padding: '10px' }} onClick={() => setIsOpen(false)}>
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#2b2d42" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>

                {/* Mobile Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {navItems.map((item, i) => {
                        let linkHref = `/${item.toLowerCase()}`;
                        if (item === 'HOME') linkHref = '/';

                        return (
                            <Link key={i} href={linkHref} 
                                  onClick={() => setIsOpen(false)} 
                                  style={{ 
                                      color: 'var(--text-slate)', textDecoration: 'none', 
                                      fontSize: '2rem', fontWeight: 900, letterSpacing: '1px',
                                      fontFamily: 'var(--font-playfair), serif',
                                      borderBottom: '1px solid rgba(0,0,0,0.05)',
                                      paddingBottom: '15px'
                                  }}
                            >
                                {item}
                            </Link>
                        );
                    })}

                    <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        
                        {/* Mobile Download Brochure Button */}
                        <a href="/brochure.pdf" download style={{ textDecoration: 'none', width: '100%' }}>
                            <button style={{
                                background: 'transparent',
                                color: 'var(--text-slate)',
                                padding: '14px 0', borderRadius: '50px', 
                                border: '2px solid var(--text-slate)', 
                                fontWeight: 800, fontSize: '1rem',
                                letterSpacing: '2px', width: '100%', cursor: 'pointer',
                                display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'
                            }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                BROCHURE
                            </button>
                        </a>

                        {/* Mobile Register Button */}
                        <Link href="/register" style={{ textDecoration: 'none', width: '100%' }} onClick={() => setIsOpen(false)}>
                            <button style={{
                                background: '#2b2d42',
                                color: '#ffffff',
                                padding: '16px 0', borderRadius: '50px', border: 'none', fontWeight: 800, fontSize: '1.1rem',
                                letterSpacing: '2px', width: '100%', boxShadow: '0 10px 30px rgba(43, 45, 66, 0.2)',
                                cursor: 'pointer'
                            }}>
                                REGISTER
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
}