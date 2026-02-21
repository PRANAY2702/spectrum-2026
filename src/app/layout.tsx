import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Spectrum 2026 | Art & Photography Club',
  description: 'Annual Flagship Event of APC PEC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <footer>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center', padding: '40px', position: 'relative' ,backgroundColor: '#020202', borderTop: '1px solid var(--border-dark)' }}>
                © 2026 Art and Photography Club, PEC. All rights reserved.<br/>
                <span style={{ color: 'var(--accent-red)', fontFamily: 'Oswald', marginTop: '10px', display: 'inline-block' }}>#CreateOrPerish</span>
            </p>
        </footer>
      </body>
    </html>
  );
}