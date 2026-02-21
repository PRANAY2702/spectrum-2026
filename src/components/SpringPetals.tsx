"use client";
import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: string;
  opacity: number;
}

export default function SpringPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate 40 random petals only on the client side to avoid hydration errors
    const generatedPetals = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 10 + 10}s`, // Float down slowly (10-20s)
      animationDelay: `-${Math.random() * 20}s`, // Start at different times
      size: `${Math.random() * 15 + 10}px`, // Sizes between 10px and 25px
      opacity: Math.random() * 0.5 + 0.3, // Soft transparency
    }));
    setPetals(generatedPetals);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {petals.map((p) => (
        <div
          key={p.id}
          className="sakura-petal"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}