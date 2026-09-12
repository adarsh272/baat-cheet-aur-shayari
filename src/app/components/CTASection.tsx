import React from 'react';

export default function CTASection() {
  return (
    <section className="cta">
      <div className="wrap cta-inner">
        <span className="eyebrow-line" style={{ justifyContent: 'center' }}>What&apos;s next?</span>
        <h2>A new chapter is being written.</h2>
        <p>Our circle gathers once a month, behind closed doors, to decode a new legend, a specific emotion, or a profound movement in literature.</p>
        <p>The kettle is always warming up. The next chapter is currently being written.</p>
        <p className="closing">
          If these verses speak to you, if you find solace in conversation and depth in sound &mdash; stay tuned, or reach out.<br />
          Let&apos;s bring back the art of listening.
        </p>
        <a href="#" className="btn">I&apos;m interested</a>
      </div>

      <footer>
        <div className="wrap footer-bar">
          <span>📍 Thane, Maharashtra</span>
          <span>☕ Chai, conversation, and poetry</span>
        </div>
      </footer>
    </section>
  );
}