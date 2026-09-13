import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './ui/Reveal';
import Eyebrow from './ui/Eyebrow';

interface ScaleData {
  id: 'neighbourhood' | 'city' | 'region';
  label: string;
  ratio: string;
  scope: string;
  focus: string;
  description: string;
  diagramRadius: number;
  projects: string[];
}

const scaleData: ScaleData[] = [
  {
    id: 'neighbourhood',
    label: 'Neighbourhood',
    ratio: '1 : 500',
    scope: 'Domestic Grain & Streetscape',
    focus: 'Micro-climate, tactile materiality, internal courtyards, and immediate social context.',
    description: 'At the neighbourhood scale, architecture is an intimate conversation with topography, morning light, and the daily rituals of community life.',
    diagramRadius: 28,
    projects: ['Casa Atlântica (Cliffside)', 'Rua das Flores Courtyard', 'Alentejo Private Pavilions'],
  },
  {
    id: 'city',
    label: 'City',
    ratio: '1 : 2,500',
    scope: 'Civic Realm & Public Realm',
    focus: 'Urban connectivity, pedestrian flow, cultural landmarks, and civic gathering plazas.',
    description: 'At the civic scale, we shape respectful structures and open plazas that heal fragmented urban fabrics and celebrate collective civic pride.',
    diagramRadius: 48,
    projects: ['Pavilhão do Silêncio', 'Lisbon Riverfront Master Plan', 'Porto Contemporary Atelier'],
  },
  {
    id: 'region',
    label: 'Region',
    ratio: '1 : 10,000',
    scope: 'Territorial Master Plans & Ecology',
    focus: 'Ecological corridors, watershed resilience, climate responsiveness, and territorial infrastructure.',
    description: 'At the regional scale, our vision harmonizes extensive landscapes, heritage conservation, and future-proof municipal stewardship.',
    diagramRadius: 72,
    projects: ['Serra da Estrela Territorial Study', 'Douro Valley Ecological Retreat', 'Algarve Coastal Preservation'],
  },
];

const pillars = [
  {
    num: '01',
    tag: 'Evidence-Based Inception',
    title: 'Research & Opportunity',
    text: "Our approach, driven by creative ideas and grounded in evidence-based research, unveils opportunities often unseen at a project's inception. This methodology ensures we reach positive, transformative outcomes.",
  },
  {
    num: '02',
    tag: 'Civic Character & Site',
    title: 'Contextual Urban Potential',
    text: "Our portfolio of city-shaping master plans and extensive urban projects showcases our ability to harness opportunities within the context. We unlock each site's full potential, crafting public spaces and respectful buildings that enhance the unique character of the neighbourhoods we engage with.",
  },
  {
    num: '03',
    tag: 'Amenity Without Compromise',
    title: 'Patterns & Connections',
    text: "Looking widely, we are able to discern opportunities, patterns, and connections. This results in improved project quality and amenity, without compromising on cost-effectiveness.",
  },
  {
    num: '04',
    tag: 'Generational Impact',
    title: 'Human-Centred Value',
    text: "The value we infuse through design benefits not only our clients but also those who live, learn, work, and play in the places we shape.",
  },
];

const Framework = () => {
  const [activeScaleIndex, setActiveScaleIndex] = useState(0);
  const currentScale = scaleData[activeScaleIndex];

  return (
    <section
      id="framework"
      className="relative bg-[#161411] text-[#F5F2EB] py-28 md:py-36 px-6 sm:px-10 md:px-16 lg:px-20 border-b border-[#C5A059]/20 overflow-hidden"
    >
      {/* Warm ambient radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.12),transparent_70%)] pointer-events-none" />

      {/* Subtle architectural grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 md:mb-24 pb-12 border-b border-[#C5A059]/20">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow className="text-[#C5A059] mb-4">The Framework</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-serif font-light text-[#FFFFFF] leading-[1.06] tracking-tight mt-2"
                style={{ fontSize: 'clamp(2.6rem, 5vw, 4.8rem)' }}
              >
                Architecture across scale.{' '}
                <em className="italic font-normal text-[#C5A059]">From room to territory.</em>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="max-w-md">
            <p className="font-sans font-light text-[15px] leading-[1.85] text-[#D4CDC3]">
              Jac Creation designs with equal rigor across every horizon. Our methodology connects
              intimate human experience with expansive urban and regional strategy.
            </p>
          </Reveal>
        </div>

        {/* ── INTERACTIVE SCALE CONTROLLER (Neighbourhood → City → Region) ── */}
        <div className="bg-[#1C1915] border border-[#C5A059]/30 p-8 sm:p-10 md:p-12 mb-20 md:mb-28 shadow-2xl relative">
          {/* Header row of scale selector */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="font-sans text-[10.5px] font-semibold tracking-[0.32em] uppercase text-[#C5A059] block mb-1">
                Scale Continuum
              </span>
              <h3 className="font-serif text-[1.8rem] sm:text-[2.2rem] font-light text-white leading-none">
                Neighbourhood ──→ City ──→ Region
              </h3>
            </div>

            {/* Scale Tabs */}
            <div className="flex items-center gap-2 bg-[#12100E] p-1.5 border border-[#C5A059]/30 self-start md:self-auto">
              {scaleData.map((s, idx) => {
                const isActive = idx === activeScaleIndex;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveScaleIndex(idx)}
                    className={`relative px-4 sm:px-6 py-2.5 font-sans text-[11px] font-medium tracking-[0.22em] uppercase transition-all duration-300 ${
                      isActive
                        ? 'text-[#141210] bg-[#C5A059] shadow-md font-semibold'
                        : 'text-[#D4CDC3] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Scale Showcase Box */}
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center pt-8 md:pt-10">
            {/* Left: Detail Information */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentScale.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-sans text-[11px] font-semibold tracking-[0.3em] uppercase text-[#C5A059] border border-[#C5A059]/40 px-3 py-1">
                    Scale {currentScale.ratio}
                  </span>
                  <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#A89F91]">
                    {currentScale.scope}
                  </span>
                </div>

                <h4 className="font-serif text-[2.2rem] sm:text-[2.8rem] font-light text-white leading-tight mb-4">
                  {currentScale.label} Scale
                </h4>

                <p className="font-sans text-[15.5px] font-light leading-[1.85] text-[#E5DFD4] mb-6">
                  {currentScale.description}
                </p>

                <div className="bg-[#12100E]/70 border-l-2 border-[#C5A059] p-4 mb-6">
                  <span className="font-sans text-[10px] font-semibold tracking-[0.24em] uppercase text-[#C5A059] block mb-1">
                    Methodological Focus
                  </span>
                  <p className="font-sans text-[13.5px] text-[#C2B9AC] leading-relaxed">
                    {currentScale.focus}
                  </p>
                </div>

                {/* Sample Projects at this Scale */}
                <div>
                  <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-[#8C8375] block mb-2.5">
                    Select Projects at this Horizon:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentScale.projects.map((p) => (
                      <span
                        key={p}
                        className="font-sans text-[11px] tracking-[0.14em] text-[#E0D8CC] bg-[#221F1B] px-3.5 py-1.5 border border-white/10"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right: Architectural Geometric Scale Diagram */}
            <div className="relative flex flex-col items-center justify-center p-8 bg-[#12100E] border border-[#C5A059]/20 min-h-[300px] overflow-hidden">
              <div className="absolute top-4 left-4 font-sans text-[9px] tracking-[0.28em] uppercase text-[#8C8375]">
                FIG. {activeScaleIndex + 1} // SPATIAL MATRIX
              </div>

              {/* Concentric Architectural Scale Rings */}
              <div className="relative flex items-center justify-center w-56 h-56 my-4">
                {/* Outer Ring */}
                <div
                  className={`absolute rounded-full border transition-all duration-700 ${
                    activeScaleIndex >= 2
                      ? 'border-[#C5A059] scale-100 shadow-[0_0_25px_rgba(197,160,89,0.25)]'
                      : 'border-white/10 scale-95'
                  }`}
                  style={{ width: '210px', height: '210px' }}
                />

                {/* Middle Ring */}
                <div
                  className={`absolute rounded-full border transition-all duration-700 ${
                    activeScaleIndex >= 1
                      ? 'border-[#C5A059] scale-100 shadow-[0_0_20px_rgba(197,160,89,0.2)]'
                      : 'border-white/10 scale-95'
                  }`}
                  style={{ width: '140px', height: '140px' }}
                />

                {/* Inner Core Ring */}
                <div
                  className="absolute rounded-full border border-[#C5A059] bg-[#C5A059]/20 transition-all duration-500 shadow-[0_0_15px_rgba(197,160,89,0.3)] flex items-center justify-center"
                  style={{ width: '70px', height: '70px' }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C5A059] animate-pulse" />
                </div>

                {/* Crosshairs */}
                <div className="absolute inset-x-0 h-px bg-white/10" />
                <div className="absolute inset-y-0 w-px bg-white/10" />
              </div>

              {/* Scale Indicator Axis */}
              <div className="w-full flex items-center justify-between text-[10px] font-sans tracking-[0.24em] text-[#A89F91] border-t border-white/10 pt-4 mt-2">
                <span>1:500 (GRAIN)</span>
                <span className="text-[#C5A059] font-medium">● ACTIVE: {currentScale.ratio}</span>
                <span>1:10,000 (TERRITORY)</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── THE 4 METHODOLOGY PILLARS (Official Brief Copy) ── */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="w-10 h-px bg-[#C5A059]" />
            <h3 className="font-sans text-[11px] font-semibold tracking-[0.34em] uppercase text-[#C5A059]">
              Four Tenets of the Jac Creation Practice
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.num} delay={i * 0.1}>
                <div className="bg-[#1C1915] border border-[#C5A059]/25 hover:border-[#C5A059]/60 p-8 sm:p-10 transition-all duration-400 group relative flex flex-col justify-between min-h-[300px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]">
                  <div>
                    {/* Number + Tag */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                      <span className="font-serif italic text-[2.6rem] font-light text-[#C5A059] leading-none select-none">
                        {pillar.num}
                      </span>
                      <span className="font-sans text-[10px] font-semibold tracking-[0.24em] uppercase text-[#A89F91] group-hover:text-white transition-colors duration-300">
                        {pillar.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-serif text-[1.6rem] sm:text-[1.85rem] font-light text-white leading-tight mb-4 group-hover:text-[#F5F2EB] transition-colors">
                      {pillar.title}
                    </h4>

                    {/* Full Brief Copy */}
                    <p className="font-sans text-[14.5px] font-light leading-[1.9] text-[#DDD6CC] group-hover:text-[#F0EBE3] transition-colors duration-300">
                      "{pillar.text}"
                    </p>
                  </div>

                  {/* Expanding Gold Accent Baseline */}
                  <div className="w-8 h-[2px] bg-[#C5A059]/40 group-hover:w-full group-hover:bg-[#C5A059] transition-all duration-500 mt-6" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Framework;
