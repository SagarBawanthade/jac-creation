import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';

const Philosophy = () => (
  <section id="about-us" className="bg-[#0a0a0a] py-28 md:py-40 px-8 md:px-20">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
      <div>
        <Reveal><Eyebrow>Philosophy</Eyebrow></Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-serif font-light leading-[1.07] text-white mb-8"
            style={{ fontSize: 'clamp(2.1rem,4.5vw,4.2rem)' }}
          >
            We Design Experiences,
            <br />
            <em className="text-[#b8924a] not-italic italic">Not Just Structures.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-sans font-light text-[16px] leading-[1.85] text-white/48 max-w-md">
            Jac Creation works across residential, hospitality, and public-space design — always with an emphasis on how a place <em>feels</em> to inhabit, not just how it photographs. Every project begins with a question about life as it is lived.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex items-center gap-4">
            <span className="w-10 h-px bg-[#b8924a]" />
            <span className="text-[12px] font-sans tracking-[0.22em] uppercase text-[#b8924a]/60">
              Residential · Hospitality · Public Space
            </span>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="relative">
        <div className="img-zoom relative" style={{ aspectRatio: '4/5' }}>
          <img
            src="https://images.unsplash.com/photo-1618221118493-bacab5a3c8c3?w=800&auto=format&fit=crop&q=80"
            alt="Interior space — Jac Creation philosophy"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute -bottom-4 -right-4 border border-[#b8924a]/18 pointer-events-none"
            style={{ width: '66%', height: '66%' }}
          />
        </div>
      </Reveal>
    </div>
  </section>
);

export default Philosophy;
