"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import SpringPetals from '@/components/SpringPetals';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your authentication logic here later!
        console.log("Logging in with:", email, password);
    };

    return (
        <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <SpringPetals />
            <Navbar />

            {/* Centered Login Container */}
            <section style={{ 
                flex: 1, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: '120px 20px 60px 20px',
                position: 'relative', 
                zIndex: 10 
            }}>
                
                {/* The Glassmorphism Login Card */}
                <div style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '2px solid var(--glass-border)',
                    borderRadius: '40px',
                    padding: '50px 40px',
                    width: '100%',
                    maxWidth: '450px',
                    boxShadow: '0 20px 50px rgba(100, 100, 111, 0.08)',
                    textAlign: 'center',
                    animation: 'fadeInUp 0.6s ease-out'
                }}>
                    
                    {/* Tiny Aesthetic Badge */}
                    <div style={{
                        display: 'inline-block',
                        background: 'rgba(244, 172, 183, 0.15)',
                        color: 'var(--spring-blush)',
                        padding: '6px 16px',
                        borderRadius: '50px',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        letterSpacing: '2px',
                        marginBottom: '20px'
                    }}>
                        WELCOME BACK
                    </div>

                    <h1 style={{ 
                        fontSize: '2.5rem', 
                        color: 'var(--text-slate)', 
                        fontFamily: 'Playfair Display, serif', 
                        fontWeight: 900, 
                        marginBottom: '10px' 
                    }}>
                        Login
                    </h1>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '40px', fontWeight: 500 }}>
                        Enter your details to access your dashboard.
                    </p>

                    {/* The Form */}
                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        
                        {/* Email Input */}
                        <div style={{ textAlign: 'left' }}>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-slate)', marginBottom: '8px', marginLeft: '10px' }}>
                                EMAIL ADDRESS
                            </label>
                            <input 
                                type="email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="hello@spectrum.com"
                                style={{
                                    width: '100%',
                                    padding: '16px 20px',
                                    borderRadius: '20px',
                                    border: '2px solid rgba(255, 255, 255, 0.6)',
                                    background: 'rgba(255, 255, 255, 0.4)',
                                    color: 'var(--text-slate)',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'all 0.3s ease',
                                    boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.02)'
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--spring-blush)';
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)';
                                }}
                            />
                        </div>

                        {/* Password Input */}
                        <div style={{ textAlign: 'left' }}>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-slate)', marginBottom: '8px', marginLeft: '10px' }}>
                                PASSWORD
                            </label>
                            <input 
                                type="password" 
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                style={{
                                    width: '100%',
                                    padding: '16px 20px',
                                    borderRadius: '20px',
                                    border: '2px solid rgba(255, 255, 255, 0.6)',
                                    background: 'rgba(255, 255, 255, 0.4)',
                                    color: 'var(--text-slate)',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'all 0.3s ease',
                                    boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.02)'
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--spring-blush)';
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)';
                                }}
                            />
                        </div>

                        {/* Forgot Password Link */}
                        <div style={{ textAlign: 'right', marginTop: '-10px' }}>
                            <a href="#" style={{ color: 'var(--spring-sage)', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none' }}>
                                Forgot Password?
                            </a>
                        </div>

                        {/* Login Submit Button */}
                        <button 
                            type="submit"
                            style={{
                                background: 'linear-gradient(45deg, var(--spring-blush), #ffb7c5)',
                                color: '#ffffff',
                                padding: '16px',
                                borderRadius: '20px',
                                border: 'none',
                                fontWeight: 800,
                                fontSize: '1rem',
                                letterSpacing: '2px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 8px 25px rgba(244, 172, 183, 0.4)',
                                marginTop: '10px'
                            }}
                            onMouseEnter={(e) => { 
                                e.currentTarget.style.transform = 'translateY(-3px)'; 
                                e.currentTarget.style.boxShadow = '0 12px 30px rgba(244, 172, 183, 0.6)'; 
                            }}
                            onMouseLeave={(e) => { 
                                e.currentTarget.style.transform = 'translateY(0)'; 
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(244, 172, 183, 0.4)'; 
                            }}
                        >
                            LOGIN
                        </button>
                    </form>

                    {/* Bottom Links */}
                    <div style={{ marginTop: '30px', fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 500 }}>
                        Don't have an account?{' '}
                        <Link href="/register" style={{ color: 'var(--spring-blush)', fontWeight: 800, textDecoration: 'none' }}>
                            Register here.
                        </Link>
                    </div>

                </div>
            </section>
        </main>
    );
}