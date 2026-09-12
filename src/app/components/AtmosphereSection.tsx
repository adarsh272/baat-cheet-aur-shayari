import React from 'react';
import AppImage from '@/components/ui/AppImage';

/*
BENTO GRID AUDIT
Cards: [FloorCushions, ChaiBook, GhazalVoices, SilentListening] — 4 cards

Row 1: [col-1+2: FloorCushions cs-2] [col-3: ChaiBook cs-1]
Row 2: [col-1: GhazalVoices cs-1] [col-2+3: SilentListening cs-2]

Placed 4/4 cards ✓
*/

interface BentoCard {
  id: string;
  colSpan: string;
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  body: string;
}

const bentoCards: BentoCard[] = [
{
  id: 'FloorCushions',
  colSpan: 'md:col-span-2',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_4b074028f-1789244666613.png",
  alt: 'Cozy floor cushions gadda in warm amber fairy light glow, dark wooden floor, intimate Indian poetry evening setting, deep shadows, low candlelit atmosphere',
  eyebrow: 'The Seating',
  title: 'Gadde aur gol takiye',
  body: 'No chairs, no tables. Just floor cushions, each one holding a person and their thoughts. The low posture changes everything — conversations become more honest when you\'re eye-level with each other.'
},
{
  id: 'ChaiBook',
  colSpan: 'md:col-span-1',
  image: "https://images.unsplash.com/photo-1592057001456-c849166991c4",
  alt: 'Worn Urdu poetry book open beside a cup of cutting chai on dark textured surface, brass lantern nearby, warm amber candlelight, dim moody lighting',
  eyebrow: 'The Ritual',
  title: 'Chai aur kitaab',
  body: 'Cutting chai is poured twice. The second cup is when the conversation deepens.'
},
{
  id: 'GhazalVoices',
  colSpan: 'md:col-span-1',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_47c9bed2a-1789244666231.png",
  alt: 'Close-up of hands holding vinyl record or cassette of ghazal music in dim warm light, intimate music listening session, amber glow, dark moody background',
  eyebrow: 'The Sound',
  title: 'Awaazein jo thehrti hain',
  body: 'We don\'t just play music — we pause it, rewind it, argue about a single word in a couplet for twenty minutes.'
},
{
  id: 'SilentListening',
  colSpan: 'md:col-span-2',
  image: "https://images.unsplash.com/photo-1732334485697-0cab6279f848",
  alt: 'Open poetry book with handwritten Urdu script under warm fairy lights on dark surface, soft bokeh amber light background, cozy intimate literary atmosphere, rich dark textures',
  eyebrow: 'The Silence',
  title: 'Woh khamoshi jo bolti hai',
  body: 'Some of the most profound moments here are the silences after a particularly heavy sher. Nobody rushes to fill them. We\'ve learned to sit with meaning.'
}];


export default function AtmosphereSection() {
  return (
    <section id="atmosphere" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 60%, rgba(214,162,76,0.05), transparent 60%)'
        }}
        aria-hidden="true" />
      

      <div className="max-w-[1180px] mx-auto px-6 md:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-14 md:mb-16">
          <span className="eyebrow-line justify-center mb-4 block">Mahol</span>
          <h2
            className="font-display font-medium text-foreground mb-4"
            style={{ fontSize: 'clamp(2rem, 3.4vw, 2.7rem)' }}>
            
            Woh kamra kuch aisa hota hai.
          </h2>
          <p className="font-body text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            You walk in and the city noise falls away. What remains is amber light, old words, and people who actually listen.
          </p>
        </div>

        {/* Bento grid — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[340px]">

          {/* Card: FloorCushions — col-span-2 */}
          <article className="bento-card md:col-span-2 relative overflow-hidden rounded-sm group cursor-default">
            <AppImage
              src={bentoCards[0].image}
              alt={bentoCards[0].alt}
              fill
              className="bento-img object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 66vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
              <span className="font-body text-xs tracking-widest uppercase text-primary block mb-1">
                {bentoCards[0].eyebrow}
              </span>
              <h3 className="font-display text-xl text-foreground mb-2 leading-tight">
                {bentoCards[0].title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-sm">
                {bentoCards[0].body}
              </p>
            </div>
          </article>

          {/* Card: ChaiBook — col-span-1 */}
          <article className="bento-card md:col-span-1 relative overflow-hidden rounded-sm group cursor-default">
            <AppImage
              src={bentoCards[1].image}
              alt={bentoCards[1].alt}
              fill
              className="bento-img object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 33vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
              <span className="font-body text-xs tracking-widest uppercase text-primary block mb-1">
                {bentoCards[1].eyebrow}
              </span>
              <h3 className="font-display text-lg text-foreground mb-1 leading-tight">
                {bentoCards[1].title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {bentoCards[1].body}
              </p>
            </div>
          </article>

          {/* Card: GhazalVoices — col-span-1 */}
          <article className="bento-card md:col-span-1 relative overflow-hidden rounded-sm group cursor-default">
            <AppImage
              src={bentoCards[2].image}
              alt={bentoCards[2].alt}
              fill
              className="bento-img object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 33vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
              <span className="font-body text-xs tracking-widest uppercase text-primary block mb-1">
                {bentoCards[2].eyebrow}
              </span>
              <h3 className="font-display text-lg text-foreground mb-1 leading-tight">
                {bentoCards[2].title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {bentoCards[2].body}
              </p>
            </div>
          </article>

          {/* Card: SilentListening — col-span-2 */}
          <article className="bento-card md:col-span-2 relative overflow-hidden rounded-sm group cursor-default">
            <AppImage
              src={bentoCards[3].image}
              alt={bentoCards[3].alt}
              fill
              className="bento-img object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 66vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
              <span className="font-body text-xs tracking-widest uppercase text-primary block mb-1">
                {bentoCards[3].eyebrow}
              </span>
              <h3 className="font-display text-xl text-foreground mb-2 leading-tight">
                {bentoCards[3].title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-sm">
                {bentoCards[3].body}
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>);

}