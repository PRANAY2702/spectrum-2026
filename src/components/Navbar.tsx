"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <div style={{ position: 'fixed', width: '100%', top: '20px', zIndex: 1000, padding: '0 20px' }}>
            <nav style={{
                background: 'var(--glass-dew)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid var(--border-dew)',
                borderRadius: '50px',
                padding: '12px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                maxWidth: '1100px',
                margin: '0 auto',
                boxShadow: '0 15px 35px rgba(181, 201, 167, 0.15)' 
            }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <Image src="/spectrum_white.png" alt="Spectrum Logo" width={100} height={30} style={{ objectFit: 'contain' }} />
                </div>
                
                <div style={{ display: 'flex', gap: '30px' }}>
                    {['HOME', 'GALLERY', 'EVENTS', 'TEAM', 'SPONSORS', 'CONTACT'].map((item, i) => {
                        // Routing Logic: Handle the hash link for Events
                        let linkHref = `/${item.toLowerCase()}`;
                        if (item === 'HOME') linkHref = '/';
                        if (item === 'EVENTS') linkHref = '/#events'; // Maps exactly to the section ID

                        return (
                            <Link key={i} href={linkHref} 
                                  style={{ 
                                      color: 'var(--text-moss)', 
                                      textDecoration: 'none', 
                                      fontSize: '0.8rem',
                                      fontWeight: 600,
                                      letterSpacing: '1px',
                                      transition: 'color 0.3s ease'
                                  }}
                                  onMouseEnter={(e) => e.currentTarget.style.color = '#ff8fa3'} 
                                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-moss)'}
                            >
                                {item}
                            </Link>
                        );
                    })}
                </div>
                
                <button className="btn-bloom" >
                    Register
                </button>
            </nav>
        </div>
    );
}
