import React from 'react';

export default function NextEventSection() {
  return (
    <section className="section-tight">
      <div className="wrap">
        <div className="next-event-head">
          <span className="eyebrow-line">Coming Up</span>
          <h2>The Next Gathering</h2>
        </div>

        <div className="next-event-card">
          <div className="next-event-glow" aria-hidden="true" />

          <div className="next-event-body">
            <div className="next-event-main">
              <h3 className="next-event-title">Faiz Aur Unki Duniya</h3>
              <p className="next-event-desc">
                This month we turn to the revolutionary tenderness of Faiz Ahmed Faiz — a poet who wrote love letters to both his beloved and to the oppressed. We will trace his journey from the drawing rooms of Lahore to the prisons of Pakistan, and explore how his verses became the language of resistance across generations.
              </p>
            </div>

            <div className="next-event-meta">
              <div className="next-event-meta-item">
                <span className="next-event-meta-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="3" width="14" height="13" rx="1" stroke="#D6A24C" strokeWidth="1.1" />
                    <path d="M2 7H16" stroke="#D6A24C" strokeWidth="1.1" />
                    <path d="M6 1V4M12 1V4" stroke="#D6A24C" strokeWidth="1.1" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <span className="next-event-meta-label">Date</span>
                  <span className="next-event-meta-value">Saturday, 10th October 2025</span>
                </div>
              </div>

              <div className="next-event-meta-item">
                <span className="next-event-meta-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="#D6A24C" strokeWidth="1.1" />
                    <path d="M9 5V9.5L12 11.5" stroke="#D6A24C" strokeWidth="1.1" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <span className="next-event-meta-label">Time</span>
                  <span className="next-event-meta-value">6:30 PM onwards</span>
                </div>
              </div>

              <div className="next-event-meta-item">
                <span className="next-event-meta-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2C6.24 2 4 4.24 4 7C4 11 9 16 9 16C9 16 14 11 14 7C14 4.24 11.76 2 9 2Z" stroke="#D6A24C" strokeWidth="1.1" />
                    <circle cx="9" cy="7" r="2" stroke="#D6A24C" strokeWidth="1.1" />
                  </svg>
                </span>
                <div>
                  <span className="next-event-meta-label">Venue</span>
                  <span className="next-event-meta-value">A living room in Thane, Maharashtra<br /><span style={{ fontSize: '0.85rem', opacity: 0.7 }}>(exact address shared with confirmed guests)</span></span>
                </div>
              </div>
            </div>
          </div>

          <div className="next-event-footer">
            <p className="next-event-note">Seats are limited. This is an intimate gathering.</p>
            <a href="#" className="btn">Reserve My Spot</a>
          </div>
        </div>
      </div>
    </section>
  );
}
