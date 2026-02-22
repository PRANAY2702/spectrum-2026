"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import SpringPetals from '@/components/SpringPetals';

// 1. Interface for our new Event Cards
interface EventCardProps {
    day: string;
    time: string;
    title: string;
    desc: string;
    color: string;
}

export default function HomePage() {
  return (
    <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
      <SpringPetals /> 
      <Navbar />

      {/* --- 1. THE HERO SECTION --- */}
      {/* --- 1. THE HERO SECTION --- */}
      <header style={{ 
          minHeight: '100vh', 
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', 
          textAlign: 'center', paddingInline: '20px',
          position: 'relative', zIndex: 10 
      }}>
          
          {/* --- NEW: THE LOGOS ROW --- */}
          <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '25px', // Space between logos and the divider
              marginBottom: '30px', // Space between logos and SPECTRUM text
              animation: 'fadeInDown 1s ease-out' // Optional: adds a nice entrance
          }}>
              {/* 1. APC Logo */}
              <div style={{
                  width: '75px', 
                  height: '75px',
                  borderRadius: '18px', // Matches the rounded app-icon look from your screenshot
                  overflow: 'hidden',
                  background: '#000', // In case the logo is transparent
                  boxShadow: '0 10px 25px rgba(0,0,0,0.08)'
              }}>
                  {/* CHANGE THIS src to your actual APC logo file name */}
                  <img src="/APC_logo.png" alt="APC Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* 2. Aesthetic Vertical Divider */}
              <div style={{ 
                  width: '3px', 
                  height: '45px', 
                  background: 'var(--spring-blush)', 
                  borderRadius: '10px',
                  opacity: 0.6 
              }} />

              {/* 3. PEC Logo */}
              <div style={{
                  width: '120px', // PEC logo is usually rectangular and wider
                  height: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.05))'
              }}>
                  {/* CHANGE THIS src to your actual PEC logo file name */}
                  <img src="/pec_logo_since_1921.png" alt="PEC Logo" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
              </div>
          </div>

          {/* MAIN TITLE */}
          <h1 style={{ 
              fontSize: 'clamp(4rem, 15vw, 11rem)', 
              fontWeight: 900, 
              color: 'var(--text-slate)', 
              lineHeight: 0.9,
              letterSpacing: '-4px',
              fontFamily: 'Playfair Display, serif',
              marginBottom: '20px',
              textShadow: '0 20px 50px rgba(74, 78, 105, 0.1)'
          }}>
              SPECTRUM
          </h1>

          <div style={{
              fontSize: '1.5rem', fontWeight: 700, color: 'var(--spring-blush)',
              letterSpacing: '8px', display: 'flex', alignItems: 'center', gap: '20px'
          }}>
              <span className="hidden md:block" style={{ height: '3px', width: '50px', background: 'var(--spring-blush)', borderRadius: '10px' }}></span>
              27TH FEB 2026
              <span className="hidden md:block" style={{ height: '3px', width: '50px', background: 'var(--spring-blush)', borderRadius: '10px' }}></span>
          </div>
      </header>

      {/* --- 2. THE INTRODUCTION SECTION --- */}
      <section style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px 100px 20px', 
          position: 'relative', 
          zIndex: 10
      }}>
          <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '60px',
              alignItems: 'center',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              border: '2px solid var(--glass-border)',
              borderRadius: '40px',
              padding: 'clamp(30px, 5vw, 60px)',
              boxShadow: '0 20px 50px rgba(100, 100, 111, 0.05)'
          }}>
              
              {/* Text Side */}
              <div>
                  <h2 style={{ 
                      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
                      color: 'var(--text-slate)', 
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: 900,
                      lineHeight: 1.1,
                      marginBottom: '25px'
                  }}>
                      Where Creativity <br/>
                      <span style={{ color: 'var(--spring-blush)' }}>Blooms.</span>
                  </h2>
                  <p style={{ color: 'var(--text-slate)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '20px', fontWeight: 500, opacity: 0.9 }}>
                      Spectrum is the flagship annual festival of the Art & Photography Club at PEC. 
                      It is a celebration of visual storytelling, where brushstrokes meet camera clicks, 
                      and imagination takes center stage.
                  </p>
                  <p style={{ color: 'var(--text-slate)', fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 500, opacity: 0.9 }}>
                      Join us this spring to witness breathtaking galleries, participate in competitive live-art battles, 
                      and explore the world through an entirely new lens.
                  </p>
              </div>

              {/* Image Side */}
              <div style={{
                  width: '100%', height: '450px', borderRadius: '24px', overflow: 'hidden', position: 'relative',
                  boxShadow: '0 20px 40px rgba(157, 206, 196, 0.25)', border: '4px solid #ffffff'
              }}>
                  {/* Replace this placeholder with a real club photo! */}
                  <img 
                      src="/drawing.jpeg" 
                      alt="Spectrum Art Experience" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                      position: 'absolute', top: '20px', right: '20px', background: 'rgba(255, 255, 255, 0.3)',
                      backdropFilter: 'blur(12px)', padding: '10px 20px', borderRadius: '50px', color: '#ffffff',
                      fontWeight: 800, fontSize: '0.8rem', letterSpacing: '2px', border: '1px solid rgba(255, 255, 255, 0.6)',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                  }}>
                      EST. 2026
                  </div>
              </div>
          </div>
      </section>

      {/* --- 3. THE EVENT DETAILS SECTION --- */}
      <section style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px 120px 20px', 
          position: 'relative', 
          zIndex: 10
      }}>
          {/* Event Header */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
                  color: 'var(--text-slate)', 
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 900,
                  marginBottom: '15px'
              }}>
                  The Lineup
              </h2>
              <p style={{ color: 'var(--spring-blush)', fontWeight: 800, letterSpacing: '4px', fontSize: '1.1rem' }}>
                  MARK YOUR CALENDARS
              </p>
          </div>

          {/* Event Cards Grid */}
          <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px'
          }}>
              {/* Event 1 */}
              <EventCard 
                  day="DAY 1" time="10:00 AM" 
                  title="Opening Ceremony & Gallery" 
                  desc="Walk through the curated hall of fame featuring the best artwork and photography from the APC community."
                  color="var(--spring-blush)" 
              />
              {/* Event 2 */}
              <EventCard 
                  day="DAY 1" time="1:00 PM" 
                  title="Live Painting Battle" 
                  desc="Watch artists go head-to-head in a timed painting competition. Colors, chaos, and pure talent."
                  color="var(--spring-sage)" 
              />
              {/* Event 3 */}
              <EventCard 
                  day="DAY 2" time="4:30 PM" 
                  title="Golden Hour Photowalk" 
                  desc="Grab your cameras. A guided walk across the PEC campus to capture the stunning spring sunset."
                  color="#f4d03f" // Sunlight yellow
              />
              {/* Event 4 */}
              <EventCard 
                  day="DAY 2" time="6:00 PM" 
                  title="Closing Awards" 
                  desc="The grand finale where we announce the winners of all competitions and celebrate the club's talent."
                  color="var(--spring-sky)" 
              />
          </div>
      </section>

    </main>
  );
}

// --- NEW COMPONENT: Aesthetic Event Card ---
const EventCard = ({ day, time, title, desc, color }: EventCardProps) => (
    <div style={{
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(16px)',
        border: '2px solid var(--glass-border)',
        borderRadius: '30px',
        padding: '40px 30px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        cursor: 'pointer',
        boxShadow: '0 10px 30px rgba(100, 100, 111, 0.05)'
    }}
    onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow = `0 20px 40px ${color}44`; 
        e.currentTarget.style.borderColor = color;
    }}
    onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(100, 100, 111, 0.05)';
        e.currentTarget.style.borderColor = 'var(--glass-border)';
    }}
    >
        {/* Subtle Side Color Bar */}
        <div style={{
            position: 'absolute', top: 0, left: 0, width: '8px', height: '100%', background: color
        }} />

        {/* Time Badge */}
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '20px' }}>
            <span style={{ 
                background: `${color}22`, color: color, padding: '6px 16px', borderRadius: '50px', 
                fontWeight: 800, fontSize: '0.75rem', letterSpacing: '1px' 
            }}>
                {day}
            </span>
            <span style={{ color: 'var(--text-light)', fontWeight: 700, fontSize: '0.9rem' }}>
                {time}
            </span>
        </div>

        {/* Details */}
        <h3 style={{ fontSize: '1.6rem', color: 'var(--text-slate)', fontFamily: 'Playfair Display, serif', fontWeight: 800, marginBottom: '10px' }}>
            {title}
        </h3>
        <p style={{ color: 'var(--text-slate)', fontSize: '0.95rem', lineHeight: 1.6, opacity: 0.8 }}>
            {desc}
        </p>
    </div>
);