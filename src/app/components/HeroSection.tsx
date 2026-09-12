import React from 'react';

export default function HeroSection() {
  return (
    <header className="hero">
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="wrap" style={{ maxWidth: '760px' }}>
        <svg
          className="lantern"
          viewBox="0 0 46 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="23" cy="8" rx="6" ry="3" stroke="#D6A24C" strokeWidth="1.2" />
          <path d="M23 11V16" stroke="#D6A24C" strokeWidth="1.2" />
          <path d="M9 16H37L33 44H13L9 16Z" stroke="#D6A24C" strokeWidth="1.2" fill="rgba(214,162,76,0.08)" />
          <path d="M13 44H33L29 58H17L13 44Z" stroke="#D6A24C" strokeWidth="1.2" fill="rgba(214,162,76,0.05)" />
          <line x1="9" y1="24" x2="37" y2="24" stroke="#D6A24C" strokeWidth="0.8" opacity="0.6" />
          <line x1="9" y1="34" x2="37" y2="34" stroke="#D6A24C" strokeWidth="0.8" opacity="0.6" />
          <circle cx="23" cy="28" r="4" fill="#EFCE93" opacity="0.55" />
        </svg>

        <h1 className="hero-title">Baat-Cheet aur Shayari</h1>
        <p className="hero-subtitle">A living room ritual of words, melody, and quiet magic.</p>

        <div className="divider" aria-hidden="true">
          <span className="line"></span>
          <span className="mark"></span>
          <span className="line"></span>
        </div>

        <div className="hero-quote">
          <blockquote>
            &ldquo;Hazaaron khwahishein aisi ke har khwahish pe dam nikle,<br />
            bahut nikle mere armaan, lekin phir bhi kam nikle.&rdquo;
          </blockquote>
          <cite>Mirza Ghalib</cite>
        </div>
      </div>
    </header>
  );
}