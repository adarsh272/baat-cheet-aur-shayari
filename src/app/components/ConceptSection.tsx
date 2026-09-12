'use client';
import React from 'react';

export default function ConceptSection() {
  return (
    <section>
      <div className="wrap">
        <div className="concept-flex">
          <div className="concept-text">
            <span className="eyebrow-line">What is this?</span>
            <h2 className="concept-heading">A deliberate pause, once a month.</h2>
            <p className="lede">In a world that refuses to slow down, Baat-Cheet aur Shayari is a deliberate pause.</p>
            <p>We are a monthly gathering of thinkers, writers, philosophy lovers, and quiet appreciators of art. You don&apos;t need to be a poet to belong here &mdash; you just need to feel the weight of a well-crafted line, appreciate the melancholy of a deep ghazal, and value a conversation that lingers long after the tea cups are empty.</p>
            <p>Here, there are no stages or spotlights. Just a low table, a hot kettle of chai, gol takiyas, and minds willing to look at life through the mirror of literature.</p>
          </div>

          <div className="concept-image-wrap">
            <div className="concept-image-frame">
              <img
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1fc8f9897-1784582440087.png"
                alt="Warm intimate setting with an open Urdu poetry book, a cup of cutting chai, and soft amber candlelight on a dark wooden table"
                className="concept-img" />
              
              <div className="concept-image-overlay" aria-hidden="true" />
              <figcaption className="concept-img-caption">chai, an old book of verses, a cushion on the floor</figcaption>
            </div>
          </div>
        </div>
      </div>
    </section>);

}