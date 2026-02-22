"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import SpringPetals from '@/components/SpringPetals';

// --- TypeScript Interfaces ---
interface CompetitionProps {
    day: string;
    title: string;
    description: string;
    highlight: string;
    color: string;
    isFinale?: boolean;
}

interface EventTrackProps {
    categoryName: string;
    icon: React.ReactNode;
    color: string;
    competitions: Omit<CompetitionProps, 'color'>[];
}

export default function EventsPage() {
  return (
    <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh', paddingBottom: '120px' }}>
      <SpringPetals />
      <Navbar />

      {/* --- HERO SECTION --- */}
      <header style={{ 
          paddingTop: '180px', paddingBottom: '80px', paddingInline: '20px',
          textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center',
          position: 'relative', zIndex: 10 
      }}>
          <h1 style={{ 
              fontSize: 'clamp(3.5rem, 10vw, 6rem)', 
              fontWeight: 900, 
              color: 'var(--text-slate)', 
              lineHeight: 0.9,
              letterSpacing: '-2px',
              fontFamily: 'var(--font-playfair), serif',
              marginBottom: '15px'
          }}>
              THE BATTLES
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--spring-blush)', letterSpacing: '6px', fontWeight: 800, textTransform: 'uppercase' }}>
              Two Tracks. Two Days. One Champion.
          </p>
          <div style={{ width: '100px', height: '4px', backgroundColor: 'var(--spring-sage)', borderRadius: '50px', marginTop: '30px' }} />
      </header>

      {/* --- EVENTS TRACKS GRID --- */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 10 }}>
          
          {/* Responsive Grid for the Two Tracks */}
          <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '60px'
          }}>
              
              {/* 1. THE ART TRACK */}
              <EventTrack 
                  categoryName="Fine Arts Event" 
                  color="var(--spring-blush)" // Pink Theme
                  icon={<svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>}
                  competitions={[
                      {
                          day: "DAY 1 • PRELIMS",
                          title: "Live Sketching Battle",
                          description: "Bring your pencils and raw talent. Participants will compete in a timed, live sketching competition to prove their foundational skills.",
                          highlight: "Open to all registered artists."
                      },
                      {
                          day: "DAY 2 • FINALE",
                          title: "Themed Sunboard Art",
                          description: "A secret theme will be revealed on the spot. Candidates must create a masterpiece on a provided sunboard using their medium of choice.",
                          highlight: "Only for Day 1 Qualifiers. Sunboards provided by APC.",
                          isFinale: true
                      }
                  ]}
              />

              {/* 2. THE PHOTOGRAPHY TRACK */}
              <EventTrack 
                  categoryName="Photography Event" 
                  color="var(--spring-sage)" // Green Theme
                  icon={<svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="12" rx="2" ry="2"></rect><path d="M16 8v-2a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2"></path><circle cx="12" cy="14" r="3"></circle></svg>}
                  competitions={[
                      {
                          day: "DAY 1 • PRELIMS",
                          title: "Product Photography",
                          description: "Test your lighting and composition skills. We provide the product, you provide the vision. Make everyday objects look editorial.",
                          highlight: "Products will be provided on the spot."
                      },
                      {
                          day: "DAY 2 • FINALE",
                          title: "The Photo Story",
                          description: "A true test of visual storytelling. Capture a cohesive series of images around the campus that narrate a compelling story without words.",
                          highlight: "Only for Day 1 Qualifiers. Gear not restricted.",
                          isFinale: true
                      }
                  ]}
              />

          </div>
      </section>
    </main>
  );
}

// --- SUB-COMPONENTS ---

// 1. The Column Track (Holds Day 1 and Day 2 for a specific category)
const EventTrack = ({ categoryName, icon, color, competitions }: EventTrackProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        {/* Track Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
            <div style={{ 
                width: '60px', height: '60px', borderRadius: '20px', 
                background: `${color}22`, color: color, 
                display: 'flex', justifyContent: 'center', alignItems: 'center' 
            }}>
                {icon}
            </div>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-slate)', fontFamily: 'var(--font-playfair), serif', fontWeight: 900 }}>
                {categoryName}
            </h2>
        </div>

        {/* The Competitions */}
        {competitions.map((comp, index) => (
            <React.Fragment key={index}>
                <CompetitionCard 
                    day={comp.day} title={comp.title} description={comp.description} 
                    highlight={comp.highlight} color={color} isFinale={comp.isFinale} 
                />
                
                {/* Visual Connector between Day 1 and Day 2 */}
                {index === 0 && (
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '-15px 0' }}>
                        <div style={{ 
                            background: 'var(--glass-bg)', backdropFilter: 'blur(10px)',
                            border: `2px dashed ${color}66`, padding: '8px 20px', borderRadius: '50px',
                            color: color, fontSize: '0.75rem', fontWeight: 800, letterSpacing: '2px',
                            zIndex: 2, display: 'flex', alignItems: 'center', gap: '10px'
                        }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
                            QUALIFIERS ADVANCE
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
                        </div>
                    </div>
                )}
            </React.Fragment>
        ))}
    </div>
);

// 2. The Individual Competition Card
const CompetitionCard = ({ day, title, description, highlight, color, isFinale }: CompetitionProps) => (
    <div style={{
        background: isFinale ? `${color}08` : 'var(--glass-bg)', // Slight tint for the finale card
        backdropFilter: 'blur(20px)',
        border: isFinale ? `2px solid ${color}55` : '1px solid var(--glass-border)',
        borderRadius: '30px',
        padding: '40px 30px',
        position: 'relative',
        transition: 'all 0.4s ease',
        cursor: 'default',
        boxShadow: isFinale ? `0 10px 40px ${color}15` : '0 10px 30px rgba(100, 100, 111, 0.05)'
    }}
    onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = `0 15px 40px ${color}33`; 
    }}
    onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = isFinale ? `0 10px 40px ${color}15` : '0 10px 30px rgba(100, 100, 111, 0.05)';
    }}
    >
        {/* Top Badge */}
        <div style={{ display: 'inline-block', background: `${color}22`, color: color, padding: '6px 16px', borderRadius: '50px', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '2px', marginBottom: '20px' }}>
            {day}
        </div>

        {/* Title & Desc */}
        <h3 style={{ fontSize: '1.8rem', color: 'var(--text-slate)', fontFamily: 'var(--font-playfair), serif', fontWeight: 800, marginBottom: '15px', lineHeight: 1.1 }}>
            {title}
        </h3>
        <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 500, marginBottom: '25px' }}>
            {description}
        </p>

        {/* Highlight Note (e.g., "Sunboards Provided") */}
        <div style={{ 
            background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', 
            padding: '12px 20px', borderRadius: '15px', display: 'flex', alignItems: 'flex-start', gap: '12px' 
        }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            <span style={{ color: 'var(--text-slate)', fontSize: '0.85rem', fontWeight: 700, lineHeight: 1.4 }}>
                {highlight}
            </span>
        </div>
    </div>
);