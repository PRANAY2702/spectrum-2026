"use client";
import Image from 'next/image';
import SpringPetals from '../components/SpringPetals';

export default function Home() {
  return (
    <main className='vibrant-bg'  style={{ minHeight: '100vh', scrollBehavior: 'smooth', position: 'relative' }}>
      
      <SpringPetals />
      
      {/* 1. HERO SECTION - Minimalist Orchid vibe */}
      <section style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          textAlign: 'center', 
          padding: '100px 20px',
          background: '#fffff' /* Soft Orchid to White */
      }}>
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center', marginBottom: '30px' }}>
              <Image src="/APC_logo.png" alt="APC" width={80} height={80} style={{ borderRadius: '12px' }} />
              <div style={{ width: '2px', height: '40px', backgroundColor: '#ff8fa3' }}></div>
              <Image src="/pec_logo_since_1921.png" alt="PEC" width={80} height={80} style={{ objectFit: 'contain' }} />
          </div>

          {/* Replace the SPECTRUM H1 in app/page.tsx */}
<h1 style={{ 
    fontSize: 'clamp(4rem, 18vw, 12rem)', 
    fontWeight: 900, 
    background: 'linear-gradient(90deg, #ff4d6d, #4dabf7, #40c057, #fab005)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-4px',
    lineHeight: 0.8,
    filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))',
    marginBottom: '20px'
}}>
    SPECTRUM
</h1>
          <p style={{ fontSize: '1.8rem', color: '#ff758f', letterSpacing: '8px', fontWeight: 600 }}>
              27.02.2026
          </p>

          <div style={sectionDivider('#ffb7c5')} /> {/* ORCHID LINE */}
      </section>

      {/* 2. EVENTS SECTION - Meadow vibe */}
      <section id="events" style={{ 
          padding: '120px 20px', 
          background: 'linear-gradient(to bottom, #f8fff9, #f0fff4)', /* Light Meadow Green */
          position : 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h2 style={{ fontSize: '3.5rem', color: '#2b3a2f', fontFamily: 'Playfair Display, serif' }}>
                    Spring <span style={{color: '#40c057'}}>Competitions</span>
                </h2>
                <div style={{width: '60px', height: '4px', backgroundColor: '#40c057', margin: '20px auto'}}></div>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                {/* Event items remain with your previous glass style but with stronger colored borders */}
                {eventCard('#ff8fa3', 'Brushstrokes in the Breeze', '27 Feb • 10:00 AM')}
                {eventCard('#4dabf7', 'The Golden Hour Walk', '27 Feb • 04:30 PM')}
                {eventCard('#fab005', 'Masterpiece Expo', '28 Feb • All Day')}
            </div>
        </div>

        <div style={sectionDivider('#b2f2bb')} /> {/* MEADOW LINE */}
      </section>

    </main>
  );
}

// --- Dynamic Styling Helpers ---

const sectionDivider = (color: string) => ({
    width: '300px',
    height: '8px',
    backgroundColor: color,
    borderRadius: '50px',
    margin: '100px auto 0 auto',
    boxShadow: `0 0 20px ${color}, 0 0 40px ${color}66`, /* The Glow effect */
    border: '2px solid #ffffff'
});

const infoCard = {
    padding: '50px 30px',
    borderRadius: '30px',
    textAlign: 'center' as const,
    border: '2px solid',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
};

/* Update the eventCard helper in app/page.tsx */
const eventCard = (color: string, title: string, time: string) => (
    <div 
        className="vibrant-card"
        style={{
            background: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(15px)',
            padding: '40px',
            borderRadius: '30px',
            border: `2px solid transparent`,
            transition: 'all 0.4s ease',
            cursor: 'pointer',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = color;
            e.currentTarget.style.boxShadow = `0 20px 40px ${color}33`;
            e.currentTarget.style.transform = 'scale(1.02) translateY(-10px)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
            e.currentTarget.style.transform = 'scale(1) translateY(0)';
        }}
    >
        <div style={{ backgroundColor: color, width: '40px', height: '4px', borderRadius: '2px', marginBottom: '20px' }} />
        <p style={{ color: color, fontWeight: 900, fontSize: '0.9rem', letterSpacing: '2px' }}>{time}</p>
        <h3 style={{ fontSize: '2rem', marginTop: '10px', color: '#1a2e1e', fontFamily: 'Playfair Display' }}>{title}</h3>
        <button style={{ marginTop: '25px', background: 'none', border: `2px solid ${color}`, color: color, padding: '8px 20px', borderRadius: '50px', fontWeight: 700 }}>
            Join Event
        </button>
    </div>
);