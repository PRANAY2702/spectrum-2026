"use client";
import React from 'react';
import Image from 'next/image';
import SpringPetals from '../../components/SpringPetals'; // The animated cherry blossoms

// Event Data - You can move this to a JSON file later!
const eventsData = [
  {
    id: 1,
    category: "Live Art",
    categoryColor: "#ff8fa3", // Sakura Pink
    title: "Brushstrokes in the Breeze",
    date: "Feb 27, 2026 • 10:00 AM",
    description: "A timed live-painting competition under the open sky. Watch artists race against the clock to bring blank canvases to life.",
    image: "/WhatsApp Image 2026-02-19 at 13.47.13.jpeg" // Using your uploaded image
  },
  {
    id: 2,
    category: "Photography",
    categoryColor: "#b5c9a7", // Sage Green
    title: "The Golden Hour Photowalk",
    date: "Feb 27, 2026 • 4:30 PM",
    description: "Join us for a guided photowalk across the PEC campus during the golden hour to capture the perfect spring light.",
    image: "/WhatsApp Image 2026-02-19 at 13.47.13 (1).jpeg" // Using your uploaded image
  },
  {
    id: 3,
    category: "Exhibition",
    categoryColor: "#f4a261", // Warm Sun
    title: "A Series of Masterpieces",
    date: "Feb 28, 2026 • All Day",
    description: "The grand finale. Walk through our curated glasshouse gallery featuring the best submissions from across the nation.",
    image: "/WhatsApp Image 2026-02-19 at 13.47.13 (2).jpeg" // Using your uploaded image
  }
];

export default function EventsPage() {
  return (
    <main style={{ minHeight: '100vh', paddingBottom: '120px', position: 'relative' }}>
      
      {/* Background Petal Animation */}
      <SpringPetals />

      {/* Page Header */}
      <header style={{ 
          maxWidth: '1200px', margin: '0 auto', 
          padding: '180px 20px 80px 20px', textAlign: 'center', position: 'relative', zIndex: 1 
      }}>
          <h2 style={{ fontSize: '1.2rem', color: '#ff8fa3', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '15px' }}>
              The Spring Lineup
          </h2>
          <h1 style={{ fontSize: '4.5rem', color: 'var(--text-forest)', lineHeight: 1.1, fontFamily: 'Playfair Display, serif' }}>
              Competitions & <br />
              <span style={{ fontStyle: 'italic', color: 'var(--accent-leaf)' }}>Exhibitions.</span>
          </h1>
      </header>

      {/* Events Grid */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '50px' 
        }}>
          {eventsData.map((event) => (
            <div key={event.id} className="event-canvas" style={{
                background: 'var(--glass-dew)',
                backdropFilter: 'blur(24px)',
                borderRadius: '24px',
                padding: '24px',
                border: '1px solid var(--border-dew)',
                boxShadow: '0 15px 35px rgba(181, 201, 167, 0.15)',
                transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
            }}>
                
                {/* The "Framed Canvas" Image Area */}
                <div style={{ 
                    width: '100%', 
                    height: '250px', 
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    position: 'relative',
                    marginBottom: '24px'
                }}>
                    <Image 
                        src={event.image} 
                        alt={event.title} 
                        fill 
                        className="event-image"
                        style={{ objectFit: 'cover', transition: 'transform 0.7s ease' }} 
                    />
                    
                    {/* Floating Category Tag */}
                    <div style={{
                        position: 'absolute',
                        top: '16px', left: '16px',
                        background: 'rgba(255,255,255,0.9)',
                        color: event.categoryColor,
                        padding: '6px 16px',
                        borderRadius: '50px',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}>
                        {event.category}
                    </div>
                </div>

                {/* Event Details */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-moss)', fontWeight: 600, marginBottom: '8px' }}>
                        {event.date}
                    </div>
                    <h3 style={{ fontSize: '2rem', color: 'var(--text-forest)', marginBottom: '16px', fontFamily: 'Playfair Display, serif', lineHeight: 1.2 }}>
                        {event.title}
                    </h3>
                    <p style={{ color: 'var(--text-moss)', lineHeight: 1.7, fontSize: '1rem', marginBottom: '24px', flex: 1 }}>
                        {event.description}
                    </p>
                    
                    {/* Action Link */}
                    <div style={{ 
                        marginTop: 'auto', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '8px', 
                        color: event.categoryColor, 
                        fontWeight: 700,
                        fontSize: '0.95rem'
                    }}>
                        View Details <span className="arrow" style={{ transition: 'transform 0.3s' }}>→</span>
                    </div>
                </div>

            </div>
          ))}
        </div>
      </section>

      {/* We inject the CSS for the hover effects directly into the page to keep it self-contained */}
      <style dangerouslySetInnerHTML={{__html: `
        .event-canvas:hover {
            transform: translateY(-12px);
            box-shadow: 0 30px 60px rgba(181, 201, 167, 0.3);
            border-color: #ffffff;
        }
        
        /* Slow zoom on the image when hovering the card */
        .event-canvas:hover .event-image {
            transform: scale(1.08);
        }

        /* Nudge the arrow forward on hover */
        .event-canvas:hover .arrow {
            transform: translateX(5px);
        }
      `}} />
    </main>
  );
}