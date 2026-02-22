"use client";
import React from 'react';
import Navbar from '@/components/Navbar';

// 1. The Team JSON Data
const teamData = [
  {
    "section": "Website",
    "members": [
      { "name": "Arjun Kathail", "coverImage": "/x", "socials": { "instagram": "#", "linkedin": "#" } },
      { "name": "Aman Gupta", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } },
      { "name": "Priyanshu Kaushal", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } },
      { "name": "Bhavesh Kumar", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } }
    ]
  },
  {
    "section": "Registrations",
    "members": [
      { "name": "Sarthak Chauhan", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } },
      { "name": "Ashlesha", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } },
      { "name": "Muskan Singh", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } }
    ]
  },
  {
    "section": "Discipline",
    "members": [
      { "name": "Anmol Kansal", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } },
      { "name": "Shubham Mehra", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } }
    ]
  },
  {
    "section": "Event Coord",
    "members": [
      { "name": "Hardik Baweja", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } },
      { "name": "Ujjwal Bansal", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } }
    ]
  },
  {
    "section": "Infra & Logistics",
    "members": [
      { "name": "Lavish Singhal", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } },
      { "name": "Aman Sachdeva", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } }
    ]
  },
  {
    "section": "Content & Media",
    "members": [
      { "name": "Ananya Gupta", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } },
      { "name": "Saachi Talwar", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } },
      { "name": "Shushant Gambhir", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } }
    ]
  },
  {
    "section": "Stage Coord",
    "members": [
      { "name": "Umyank Aggarwal", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } },
      { "name": "Satvik Dev", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } }
    ]
  },
  {
    "section": "Printing & Stationary",
    "members": [
      { "name": "Akshay Garg", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } },
      { "name": "Aseem Mangla", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } }
    ]
  },
  {
    "section": "Photography & Videography",
    "members": [
      { "name": "Yash Samat Karmur", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } },
      { "name": "Jatin Gupta", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } }
    ]
  },
  {
    "section": "Creative",
    "members": [
      { "name": "Abhikaran Singh Sethi", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } },
      { "name": "Rajbir Singh", "coverImage": "/placeholders/cover-bg.jpg", "socials": { "instagram": "#", "linkedin": "#" } }
    ]
  }
];

// 2. TypeScript Interface for the Card
interface TeamMemberCardProps {
    name: string;
    role: string;
    coverImage: string;
    socials?: { instagram?: string; linkedin?: string; };
}

// 3. The Avatar-Free Leaf Card Component
const TeamMemberCard = ({ name, role, coverImage, socials }: TeamMemberCardProps) => (
    <div 
        style={{
            position: 'relative',
            width: '100%',
            maxWidth: '320px', 
            height: '320px', 
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '24px 80px 24px 80px', 
            border: `2px solid var(--glass-border)`, 
            boxShadow: '0 10px 40px rgba(100, 100, 111, 0.05)',
            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            margin: '0 auto'
        }}
        onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 50px rgba(244, 172, 183, 0.2)'; 
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(100, 100, 111, 0.05)';
        }}
    >
        {/* Cover Image */}
        <div style={{ width: '100%', height: '70%', position: 'relative', backgroundColor: '#f0eae6' }}>
            <img src={coverImage} alt={`${name} cover`} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
        </div>

        {/* Info Section */}
        <div style={{ width: '100%', height: '30%', padding: '15px 25px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-slate)', marginBottom: '4px', fontWeight: 800, fontFamily: 'Playfair Display, serif' }}>
                {name}
            </h3>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ color: 'var(--spring-sage)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '1.5px', textTransform: 'uppercase', margin: 0 }}>
                    {role}
                </p>

                <div style={{ display: 'flex', gap: '12px' }}>
                    {socials?.instagram && (
                        <a href={socials.instagram} target="_blank" rel="noreferrer" style={{ transition: 'opacity 0.2s', color: 'var(--spring-blush)' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.6'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                    )}
                    {socials?.linkedin && (
                        <a href={socials.linkedin} target="_blank" rel="noreferrer" style={{ transition: 'opacity 0.2s', color: 'var(--spring-blush)' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.6'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                    )}
                </div>
            </div>

        </div>
    </div>
);

// 4. Main Team Page Component
export default function TeamPage() {
  return (
    <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh', paddingBottom: '100px' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ padding: '180px 20px 80px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{ 
              fontSize: 'clamp(4rem, 10vw, 7rem)', 
              fontWeight: 900, 
              color: 'var(--text-slate)', 
              letterSpacing: '-2px', 
              lineHeight: 0.9, 
              marginBottom: '15px',
              fontFamily: 'Playfair Display, serif' 
          }}>
              THE CREW
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--spring-blush)', letterSpacing: '8px', fontWeight: 700 }}>
              ROOTS OF SPECTRUM
          </p>
          <div style={{ width: '120px', height: '4px', backgroundColor: 'var(--spring-blush)', borderRadius: '50px', marginTop: '40px', boxShadow: '0 4px 15px rgba(244, 172, 183, 0.4)' }} />
      </section>

      {/* Dynamic Team Grids */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
          {teamData.map((category, index) => (
              <div key={index} style={{ marginBottom: '100px' }}>
                  
                  {/* Category Title */}
                  <h2 style={{ 
                      fontSize: '2rem', 
                      color: 'var(--text-slate)', 
                      textAlign: 'center', 
                      marginBottom: '50px', 
                      fontWeight: 700,
                      letterSpacing: '2px',
                      fontFamily: 'Playfair Display, serif' 
                  }}>
                      {category.section}
                  </h2>

                  {/* Dynamic Grid */}
                  <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '40px',
                      justifyContent: 'center'
                  }}>
                      {category.members.map((member, memberIndex) => (
                          <TeamMemberCard 
                              key={memberIndex}
                              name={member.name}
                              role={category.section}
                              coverImage={member.coverImage}
                              socials={member.socials}
                          />
                      ))}
                  </div>
                  
              </div>
          ))}
      </section>
    </main>
  );
}