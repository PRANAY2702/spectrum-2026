"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  return (
    <main style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative'
    }}>

        {/* The Central Light Glass Modal */}
        <div className="glass-modal" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '400px', textAlign: 'center' }}>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center', marginBottom: '30px' }}>
                <Image src="/Screenshot (146).jpg" alt="APC Logo" width={45} height={45} style={{ borderRadius: '6px' }} />
                <div style={{ width: '1px', height: '30px', backgroundColor: '#e2e8f0' }}></div>
                <Image src="/Screenshot 2026-02-15 170218.jpg" alt="Spectrum Logo" width={110} height={35} style={{ objectFit: 'contain' }} />
            </div>

            {/* Google Login Button */}
            <button style={{
                width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0',
                backgroundColor: '#ffffff', color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                cursor: 'pointer', marginBottom: '20px', transition: 'background 0.2s',
                boxShadow: '0 2px 5px rgba(0,0,0,0.02)'
            }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
               onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}>
                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Continue with Google
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }}></div>
                OR
                <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }}></div>
            </div>

            {/* Email Input */}
            <input type="email" placeholder="✉️ name@example.com" style={{
                width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0',
                backgroundColor: '#f8fafc', color: 'var(--text-primary)', outline: 'none',
                marginBottom: '20px', transition: 'border-color 0.2s'
            }} 
            onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent-blue)'}
            onBlur={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
            />

            {/* Action Button */}
            <button className="btn-primary" style={{ width: '100%', borderRadius: '12px', padding: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                Send Verification Code <span>→</span>
            </button>

            <Link href="/" style={{ display: 'inline-block', marginTop: '20px', color: 'var(--text-secondary)', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 500 }}>
                ← Back to Home
            </Link>
        </div>
    </main>
  );

}
