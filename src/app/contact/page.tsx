"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import SpringPetals from '@/components/SpringPetals';

// 1. Define the blueprint for our Contact Cards
interface ContactCardProps {
    title: string;
    subtitle: string;
    detail: string;
    link: string;
    color: string;
    type: 'phone' | 'instagram';
}

export default function ContactPage() {
  return (
    <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh', paddingBottom: '100px' }}>
      {/* Keep the dreamy spring vibe consistent! */}
      <SpringPetals /> 
      <Navbar />

      {/* 1. HERO SECTION */}
      <header style={{ 
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', 
          textAlign: 'center', paddingTop: '180px', paddingBottom: '60px', paddingInline: '20px',
          position: 'relative', zIndex: 10 
      }}>
          <h1 style={{ 
              fontSize: 'clamp(4rem, 12vw, 8rem)', 
              fontWeight: 900, 
              color: 'var(--text-slate)', 
              lineHeight: 0.9,
              letterSpacing: '-2px',
              fontFamily: 'Playfair Display, serif',
              marginBottom: '15px'
          }}>
              SAY HELLO
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--spring-blush)', letterSpacing: '6px', fontWeight: 700 }}>
              WE WOULD LOVE TO HEAR FROM YOU
          </p>
          <div style={{ width: '120px', height: '4px', backgroundColor: 'var(--spring-blush)', borderRadius: '50px', marginTop: '40px', boxShadow: '0 4px 15px rgba(244, 172, 183, 0.4)' }} />
      </header>

      {/* 2. BENTO CONTACT GRID */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 10 }}>
          
          <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
          }}>
              {/* Phone Contacts */}
              <ContactCard 
                  title="Sartaj Singh" 
                  subtitle="Joint Secretary" 
                  detail="+91 86995 58869" // <-- UPDATE THIS NUMBER
                  link="tel:+918699558869" 
                  color="var(--spring-sage)" 
                  type="phone" 
              />
              <ContactCard 
                  title="Akshay Sharma" 
                  subtitle="Secretary" 
                  detail="+91 78809-95074" // <-- UPDATE THIS NUMBER
                  link="tel:+917880995074" 
                  color="var(--spring-sky)" 
                  type="phone" 
              />

              {/* Instagram Contacts */}
              <ContactCard 
                  title="APC Official" 
                  subtitle="Main Club Page" 
                  detail="@artandphotographyclub" 
                  link="https://www.instagram.com/artandphotographyclub/" 
                  color="var(--spring-blush)" 
                  type="instagram" 
              />
              <ContactCard 
                  title="Spectrum 2026" 
                  subtitle="Spectrum Page" 
                  detail="@spectrum_apc" 
                  link="https://www.instagram.com/spectrum_apc/" 
                  color="#f4d03f" // Sun yellow 
                  type="instagram" 
              />
          </div>

      </section>
    </main>
  );
}

// 3. The Aesthetic Contact Card Component
const ContactCard = ({ title, subtitle, detail, link, color, type }: ContactCardProps) => {
    
    // SVG Icons for the cards
    const PhoneIcon = <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
    const InstaIcon = <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;

    return (
        <a href={link} target={type === 'instagram' ? '_blank' : '_self'} rel="noreferrer" style={{ textDecoration: 'none' }}>
            <div style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(16px)',
                border: '2px solid var(--glass-border)',
                borderRadius: '30px',
                padding: '35px 30px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(100, 100, 111, 0.05)'
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = `0 20px 40px ${color}33`; 
                e.currentTarget.style.borderColor = color;
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(100, 100, 111, 0.05)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
            }}
            >
                {/* Colored Icon Circle */}
                <div style={{
                    width: '60px', height: '60px',
                    borderRadius: '50%',
                    backgroundColor: `${color}22`, // Adds 20% opacity to the background
                    color: color,
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    flexShrink: 0
                }}>
                    {type === 'phone' ? PhoneIcon : InstaIcon}
                </div>

                {/* Text Content */}
                <div>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--text-slate)', fontFamily: 'Playfair Display, serif', marginBottom: '4px', fontWeight: 800 }}>
                        {title}
                    </h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 700, marginBottom: '6px' }}>
                        {subtitle}
                    </p>
                    <p style={{ color: color, fontWeight: 700, fontSize: '0.95rem' }}>
                        {detail}
                    </p>
                </div>
            </div>
        </a>
    );
};