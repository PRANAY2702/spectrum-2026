"use client";
import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            {/* --- FOOLPROOF RESPONSIVE CSS --- */}
            <style>{`
                .footer-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    flex-wrap: wrap;
                    gap: 40px;
                }
                .footer-brand {
                    flex: 1;
                    min-width: 250px;
                }
                .footer-links {
                    display: flex;
                    gap: 80px;
                    flex-wrap: wrap;
                }
                .footer-col {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                
                /* MOBILE VIEW STACKING */
                @media (max-width: 768px) {
                    .footer-container {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }
                    .footer-links {
                        justify-content: center;
                        gap: 40px;
                        width: 100%;
                    }
                    .footer-col {
                        align-items: center;
                    }
                    .footer-bottom {
                        flex-direction: column;
                        text-align: center;
                    }
                }
            `}</style>

            <footer style={{
                /* Soft aesthetic gradient fading into the page */
                  background: '#fcf9f2', /* Changed to a solid warm beige */
                  borderTop: '1px solid var(--glass-border)',
                  padding: '80px 20px 30px 20px',
                  position: 'relative',
                  zIndex: 10
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    
                    <div className="footer-container">
                        
                        {/* LEFT: Brand Section */}
                        <div className="footer-brand">
                            <h2 style={{ 
                                fontFamily: 'Playfair Display, serif', 
                                fontSize: '2.5rem', 
                                fontWeight: 900, 
                                color: 'var(--text-slate)',
                                lineHeight: 1,
                                marginBottom: '15px'
                            }}>
                                SPECTRUM
                            </h2>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '300px' }}>
                                The flagship annual festival of the Art & Photography Club at Punjab Engineering College. Where creativity blooms.
                            </p>
                        </div>

                        {/* RIGHT: Quick Links & Socials */}
                        <div className="footer-links">
                            
                            {/* Navigation Column */}
                            <div className="footer-col">
                                <h4 style={{ color: 'var(--text-slate)', fontWeight: 800, letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '10px' }}>
                                    EXPLORE
                                </h4>
                                {['Home', 'Gallery', 'Events', 'Team', 'Contact'].map((item) => (
                                    <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                                          style={{ color: 'var(--text-light)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600, transition: 'color 0.3s ease' }}
                                          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--spring-blush)'}
                                          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-light)'}
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>

                            {/* Social Column */}
                            <div className="footer-col">
                                <h4 style={{ color: 'var(--text-slate)', fontWeight: 800, letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '10px' }}>
                                    CONNECT
                                </h4>
                                <a href="https://www.instagram.com/spectrum_apc/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-light)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600, transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--spring-blush)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-light)'}>
                                    Festival Instagram
                                </a>
                                <a href="https://www.instagram.com/artandphotographyclub/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-light)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600, transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--spring-blush)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-light)'}>
                                    APC Official
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* BOTTOM: Copyright Bar */}
                    <div className="footer-bottom" style={{
                        marginTop: '60px',
                        paddingTop: '30px',
                        borderTop: '1px solid rgba(74, 78, 105, 0.1)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '20px'
                    }}>
                        <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', fontWeight: 500 }}>
                            &copy; {new Date().getFullYear()} Art & Photography Club, PEC. All rights reserved.
                        </p>
                        
                        {/* A nice flex for the developer/designer credit */}
                        <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', fontWeight: 500 }}>
                            Designed & Developed with <span style={{ color: 'var(--spring-blush)' }}>🤍</span> for Spectrum.
                        </p>
                    </div>

                </div>
            </footer>
        </>
    );
}