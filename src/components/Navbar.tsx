"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    // 1. State to control the mobile slide menu
    const [isOpen, setIsOpen] = useState(false);

    // 2. Prevent the background from scrolling when the mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navItems = ['HOME', 'GALLERY', 'EVENTS', 'TEAM', 'CONTACT'];

    return (
        <>
            {/* 3. CSS for Responsive Breakpoints (Hides desktop menu on phones) */}
            <style>{`
                .desktop-menu { display: flex; }
                .mobile-toggle { display: none; }
                
                @media (max-width: 900px) {
                    .desktop-menu { display: none !important; }
                    .mobile-toggle { display: block !important; }
                    .navbar-container { padding: 0 20px !important; justify-content: flex-end !important; }
                    .logo-container { left: 20px !important; top: -45px !important; transform: scale(0.85); }
                }
            `}</style>

            {/* --- MAIN NAVBAR BAR --- */}
            <div style={{ position: 'fixed', width: '100%', top: '20px', zIndex: 1000, padding: '0 20px' }}>
                <nav className="navbar-container" style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '100px',
                    padding: '0 40px', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    boxShadow: '0 10px 40px rgba(100, 100, 111, 0.05)',
                    height: '70px',
                    position: 'relative'
                }}>
                    
                    {/* OVERHANGING LOGO */}
                    <Link href="/" style={{ textDecoration: 'none', position: 'absolute', left: '40px' }}>
                        <div className="logo-container" style={{ 
                            cursor: 'pointer', position: 'absolute', top: '-55px', left: '-20px',
                            transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}>
                            <Image src="/spectrum_white.png" alt="Spectrum Logo" width={120} height={120} style={{ objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.08))' }} priority />
                        </div>
                    </Link>
                    
                    {/* DESKTOP LINKS */}
                    <div className="desktop-menu" style={{ gap: '30px', alignItems: 'center', marginLeft: '120px' }}>
                        {navItems.map((item, i) => {
                            let linkHref = `/${item.toLowerCase()}`;
                            if (item === 'HOME') linkHref = '/';

                            return (
                                <Link key={i} href={linkHref} 
                                      style={{ color: 'var(--text-slate)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1.5px', transition: 'all 0.3s ease' }}
                                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--spring-blush)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} 
                                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-slate)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                >
                                    {item}
                                </Link>
                            );
                        })}
                        
                        {/* Desktop Register Button */}
                        <button style={{
                            background: 'linear-gradient(45deg, var(--spring-blush), #ffb7c5)', color: '#ffffff',
                            padding: '12px 28px', borderRadius: '50px', border: 'none', fontWeight: 800, fontSize: '0.8rem',
                            letterSpacing: '1px', cursor: 'pointer', transition: 'all 0.3s ease', marginLeft: '10px',
                            boxShadow: '0 8px 20px rgba(244, 172, 183, 0.4)'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 12px 25px rgba(244, 172, 183, 0.6)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(244, 172, 183, 0.4)'; }}>
                            JOIN SPECTRUM
                        </button>
                    </div>

                    {/* MOBILE HAMBURGER ICON */}
                    <div className="mobile-toggle" style={{ cursor: 'pointer', zIndex: 1100 }} onClick={() => setIsOpen(true)}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--text-slate)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </div>
                </nav>
            </div>

            {/* --- MOBILE SLIDING DRAWER --- */}
            <div style={{
                position: 'fixed', top: 0, right: 0, width: '100%', height: '100vh',
                background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(25px)', WebkitBackdropFilter: 'blur(25px)',
                zIndex: 2000,
                transform: isOpen ? 'translateX(0)' : 'translateX(100%)', // This makes it slide in and out!
                transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)',
                display: 'flex', flexDirection: 'column', padding: '40px'
            }}>
                {/* Close 'X' Button */}
                <div style={{ alignSelf: 'flex-end', cursor: 'pointer', marginBottom: '60px' }} onClick={() => setIsOpen(false)}>
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="var(--text-slate)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>

                {/* Massive Mobile Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
                    {navItems.map((item, i) => {
                        let linkHref = `/${item.toLowerCase()}`;
                        if (item === 'HOME') linkHref = '/';

                        return (
                            <Link key={i} href={linkHref} 
                                  onClick={() => setIsOpen(false)} // Closes menu when a link is clicked
                                  style={{ 
                                      color: 'var(--text-slate)', textDecoration: 'none', 
                                      fontSize: '2.5rem', fontWeight: 900, letterSpacing: '2px',
                                      fontFamily: 'Playfair Display, serif' // Elegant font for mobile menu
                                  }}
                            >
                                {item}
                            </Link>
                        );
                    })}

                    {/* Aesthetic Divider */}
                    <div style={{ width: '80px', height: '4px', background: 'var(--spring-blush)', margin: '20px 0', borderRadius: '5px' }} />

                    {/* Mobile Register Button */}
                    <button style={{
                        background: 'linear-gradient(45deg, var(--spring-blush), #ffb7c5)', color: '#ffffff',
                        padding: '18px 40px', borderRadius: '50px', border: 'none', fontWeight: 800, fontSize: '1.1rem',
                        letterSpacing: '2px', width: '100%', boxShadow: '0 10px 30px rgba(244, 172, 183, 0.4)'
                    }}>
                        JOIN SPECTRUM
                    </button>
                </div>
            </div>
        </>
    );
}

