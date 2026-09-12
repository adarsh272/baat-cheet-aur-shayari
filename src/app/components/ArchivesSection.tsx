'use client';
import React, { useState, useRef } from 'react';

interface Episode {
  num: string;
  title: string;
  vibe: string;
  description: string;
  quote?: string;
  quoteAuthor?: string;
  variant?: 'fire';
}

const episodes: Episode[] = [
  {
    num: 'Episode I',
    title: 'The Golden Trio of Ghazal',
    vibe: 'Melancholic warmth, late-evening nostalgia, and warm chai with toast and khaari.',
    description:
      'We sat cross-legged and traced the timeless mastery of Jagjit Singh, drifted into the soulful depths of Mehdi Hassan, and concluded with the transcendent voice of Ghulam Ali. We didn\'t just listen — we unpacked multiple layers of meaning from every single couplet, learning how poetry holds space for our deepest human griefs and joys.',
  },
  {
    num: 'Episode II',
    title: 'Sahir Ke Sur',
    vibe: 'Revolutionary fire, unrequited longing, and raw honesty.',
    description:
      'Our second gathering celebrated the legendary Sahir Ludhianvi. We walked through his rebellious beginnings, his fierce socio-economic commentary, his unwavering feminism, and the haunting, timeless tragedy of his love story with Amrita Pritam. We closed the night by reflecting on how true art never compromises with power.',
    quote:
      '\u201cTum mujhe kho bhi sako toh yeh aasaani na hogi, hum vo shakhs hain jo duniya mein dubara na milenge.\u201d',
    quoteAuthor: 'Sahir Ludhianvi',
    variant: 'fire',
  },
];

export default function ArchivesSection() {
  const [current, setCurrent] = useState(0);
  const startX = useRef<number | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + episodes.length) % episodes.length);
  const next = () => setCurrent((c) => (c + 1) % episodes.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    startX.current = null;
  };

  const ep = episodes[current];

  return (
    <section className="section-tight">
      <div className="wrap">
        <div className="archives-head">
          <span className="eyebrow-line">The Journey So Far</span>
          <h2>Our Archives</h2>
          <p>Every month, we open a new door into the lives and minds of the masters who shaped our linguistic soul.</p>
        </div>

        <div className="carousel-wrap">
          <button className="carousel-btn carousel-btn-prev" onClick={prev} aria-label="Previous episode">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M13 4L7 10L13 16" stroke="#D6A24C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            className="carousel-track"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <article className={`ep-card${ep.variant === 'fire' ? ' ep-fire' : ''} carousel-card`}>
              <span className="ep-num">{ep.num}</span>
              <h3>{ep.title}</h3>
              <p className="ep-vibe">{ep.vibe}</p>
              <p>{ep.description}</p>
              {ep.quote && (
                <div className="ep-quote">
                  <blockquote>{ep.quote}</blockquote>
                  {ep.quoteAuthor && <cite>{ep.quoteAuthor}</cite>}
                </div>
              )}
            </article>
          </div>

          <button className="carousel-btn carousel-btn-next" onClick={next} aria-label="Next episode">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M7 4L13 10L7 16" stroke="#D6A24C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="carousel-dots">
          {episodes.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === current ? ' carousel-dot-active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to episode ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}