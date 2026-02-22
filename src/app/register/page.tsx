"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import SpringPetals from '@/components/SpringPetals';

// Define reusable styles at the top
const inputStyle: React.CSSProperties = {
    width: '100%', padding: '14px 20px', borderRadius: '20px', border: '2px solid rgba(255, 255, 255, 0.6)',
    background: 'rgba(255, 255, 255, 0.4)', color: 'var(--text-slate)', fontSize: '0.95rem',
    outline: 'none', transition: 'all 0.3s ease', boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.02)'
};

// Strongly typed event handlers
const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = 'var(--spring-blush)';
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
};

const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)';
};

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        password: ''
    });

    // Typed Change Event
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Typed Form Event
    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Registering user:", formData);
    };

    return (
        <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <SpringPetals />
            <Navbar />

            <section style={{ 
                flex: 1, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: '120px 20px 80px 20px',
                position: 'relative', 
                zIndex: 10 
            }}>
                <div style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '2px solid var(--glass-border)',
                    borderRadius: '40px',
                    padding: '50px 40px',
                    width: '100%',
                    maxWidth: '550px', 
                    boxShadow: '0 20px 50px rgba(100, 100, 111, 0.08)',
                    textAlign: 'center',
                }}>
                    
                    <div style={{
                        display: 'inline-block',
                        background: 'rgba(244, 172, 183, 0.15)',
                        color: 'var(--spring-blush)',
                        padding: '6px 16px',
                        borderRadius: '50px',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        letterSpacing: '2px',
                        marginBottom: '15px'
                    }}>
                        JOIN THE CREW
                    </div>

                    <h1 style={{ 
                        fontSize: '2.5rem', 
                        color: 'var(--text-slate)', 
                        fontFamily: 'var(--font-playfair), serif', 
                        fontWeight: 900, 
                        marginBottom: '10px' 
                    }}>
                        Register
                    </h1>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '35px', fontWeight: 500 }}>
                        Create an account to register for competitions and events.
                    </p>

                    <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '18px' }}>
                            <div style={{ textAlign: 'left' }}>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-slate)', marginBottom: '8px', marginLeft: '10px' }}>
                                    FULL NAME
                                </label>
                                <input 
                                    type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Pranay Mehta"
                                    style={inputStyle} onFocus={handleFocus} onBlur={handleBlur}
                                />
                            </div>

                            <div style={{ textAlign: 'left' }}>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-slate)', marginBottom: '8px', marginLeft: '10px' }}>
                                    PHONE NUMBER
                                </label>
                                <input 
                                    type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000"
                                    style={inputStyle} onFocus={handleFocus} onBlur={handleBlur}
                                />
                            </div>
                        </div>

                        <div style={{ textAlign: 'left' }}>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-slate)', marginBottom: '8px', marginLeft: '10px' }}>
                                COLLEGE / UNIVERSITY
                            </label>
                            <input 
                                type="text" name="college" required value={formData.college} onChange={handleChange} placeholder="Punjab Engineering College"
                                style={inputStyle} onFocus={handleFocus} onBlur={handleBlur}
                            />
                        </div>

                        <div style={{ textAlign: 'left' }}>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-slate)', marginBottom: '8px', marginLeft: '10px' }}>
                                EMAIL ADDRESS
                            </label>
                            <input 
                                type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="hello@spectrum.com"
                                style={inputStyle} onFocus={handleFocus} onBlur={handleBlur}
                            />
                        </div>

                        <div style={{ textAlign: 'left' }}>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-slate)', marginBottom: '8px', marginLeft: '10px' }}>
                                CREATE PASSWORD
                            </label>
                            <input 
                                type="password" name="password" required value={formData.password} onChange={handleChange} placeholder="••••••••"
                                style={inputStyle} onFocus={handleFocus} onBlur={handleBlur}
                            />
                        </div>

                        <button 
                            type="submit"
                            style={{
                                background: 'linear-gradient(45deg, var(--spring-blush), #ffb7c5)', color: '#ffffff',
                                padding: '16px', borderRadius: '20px', border: 'none', fontWeight: 800, fontSize: '1rem',
                                letterSpacing: '2px', cursor: 'pointer', transition: 'all 0.3s ease',
                                boxShadow: '0 8px 25px rgba(244, 172, 183, 0.4)', marginTop: '15px'
                            }}
                            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(244, 172, 183, 0.6)'; }}
                            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(244, 172, 183, 0.4)'; }}
                        >
                            CREATE ACCOUNT
                        </button>
                    </form>

                    <div style={{ marginTop: '25px', fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 500 }}>
                        Already have an account?{' '}
                        <Link href="/login" style={{ color: 'var(--spring-blush)', fontWeight: 800, textDecoration: 'none' }}>
                            Log in here.
                        </Link>
                    </div>

                </div>
            </section>
        </main>
    );
}