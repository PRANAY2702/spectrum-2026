"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <div style={{ position: 'fixed', width: '100%', top: '20px', zIndex: 1000, padding: '0 20px' }}>
            <nav style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: `1px solid var(--glass-border)`,
                borderRadius: '100px',
                padding: '0 40px', 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
                boxShadow: '0 10px 40px rgba(100, 100, 111, 0.05)',
                height: '70px',
                position: 'relative'
            }}>
                
                {/* The Overhanging Logo */}
                <Link href="/" style={{ textDecoration: 'none', position: 'relative' }}>
                    <div 
                        style={{ 
                            cursor: 'pointer', position: 'absolute', top: '-55px', left: '-20px',
                            transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05) rotate(-2deg)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
                    >
                        <Image src="/spectrum_white.png" alt="Spectrum Logo" width={150} height={100} style={{ objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.08))' }} priority />
                    </div>
                </Link>
                
                {/* Center Links */}
                <div style={{ display: 'flex', gap: '30px', alignItems: 'center', marginLeft: '160px' }}>
                    {['HOME', 'GALLERY', 'EVENTS', 'TEAM', 'CONTACT'].map((item, i) => {
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
                                  onMouseEnter={(e) => {
                                      e.currentTarget.style.color = 'var(--spring-blush)';
                                      e.currentTarget.style.transform = 'translateY(-2px)';
                                  }} 
                                  onMouseLeave={(e) => {
                                      e.currentTarget.style.color = 'var(--text-slate)';
                                      e.currentTarget.style.transform = 'translateY(0)';
                                  }}
                            >
                                {item}
                            </Link>
                        );
                    })}
                </div>
                
                {/* The Irresistible Register Button */}
                <button style={{
                    background: 'linear-gradient(45deg, #f4acb7, #ffb7c5)',
                    color: '#ffffff',
                    padding: '12px 28px',
                    borderRadius: '50px',
                    border: 'none',
                    fontWeight: 800,
                    fontSize: '0.8rem',
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 20px rgba(244, 172, 183, 0.4)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 12px 25px rgba(244, 172, 183, 0.6)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(244, 172, 183, 0.4)';
                }}
                >
                    JOIN SPECTRUM
                </button>
            </nav>
        </div>
    );
}