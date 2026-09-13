import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';
import type { ProjectDetail } from './ui/ProjectModal';

interface FeaturedProjectsProps {
  onSelectProject?: (project: ProjectDetail) => void;
}

const featuredProjects: ProjectDetail[] = [
  {
    title: 'Casa Atlântica',
    category: 'Residential Monograph',
    location: 'Sintra Atlantic Coastline, Portugal',
    year: '2023',
    description:
      'A coastal residence carved into the cliffside, oriented to the Atlantic horizon. Raw maritime concrete and local granite form stepped terraces that absorb the oceanic breeze while sheltering interior courtyards.',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&auto=format&fit=crop&q=85',
    scale: '1:500 (Cliffside Horizon)',
    materials: ['Maritime Reinforced Concrete', 'Dry-Stacked Granite', 'Brushed Marine Bronze', 'Structural Glass'],
    concept:
      'The architecture does not sit upon the landscape; it emerges from the geologic fissure of the cliff, framing the vastness of the Atlantic ocean as a living domestic mural.',
  },
  {
    title: 'Pavilhão do Silêncio',
    category: 'Cultural & Civic Pavilion',
    location: 'Serra da Estrela Mountain Ridge',
    year: '2024',
    description:
      'A cultural pavilion suspended between forest and clearing — a threshold between nature and thought. Crafted from charred timber and honed local slate, it offers acoustic stillness for public reflection.',
    img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&auto=format&fit=crop&q=85',
    scale: '1:1,000 (Forest Clearing)',
    materials: ['Charred Douglas Fir', 'Honed Serra Slate', 'Weathering Steel (Cor-Ten)', 'Rammed Earth'],
    concept:
      'Conceived as an open instrument for wind, sound, and contemplation, the pavilion leaves the forest floor undisturbed through slender point-footings.',
  },
  {
    title: 'Maison Lumière',
    category: 'Hospitality & Retreat',
    location: 'Provence Countryside, France',
    year: '2025',
    description:
      'A hospitality retreat in the French countryside, where timber and stone meet the morning light. Restored stone barns dialogue with contemporary minimalist guest pavilions around ancient olive groves.',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&auto=format&fit=crop&q=85',
    scale: '1:2,500 (Agricultural Estate)',
    materials: ['Reclaimed Provençal Stone', 'Cast Bronze Hardware', 'Brushed French Oak', 'Limewash Plaster'],
    concept:
      'A study in quiet luxury, slowing the passage of time through shaded pergolas, fragrant lavender courtyards, and deep stone reveals that temper Mediterranean heat.',
  },
];

const FeaturedProjects = ({ onSelectProject }: FeaturedProjectsProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cards = scrollContainerRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % featuredProjects.length;
    scrollToCard(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + featuredProjects.length) % featuredProjects.length;
    scrollToCard(prevIdx);
  };

  return (
    <section id="gallery" className="bg-[#0A0908] text-white pt-28 md:pt-36 pb-24 border-b border-[#C5A059]/20 relative overflow-hidden">
      {/* Header Container */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto mb-14 md:mb-18">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <Reveal>
              <Eyebrow className="text-[#C5A059] mb-4">Featured Projects</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-serif font-light text-white leading-[1.06] tracking-tight mt-2"
                style={{ fontSize: 'clamp(2.6rem, 5vw, 4.6rem)' }}
              >
                Projects in <em className="italic font-normal text-[#C5A059]">motion.</em>
              </h2>
            </Reveal>
          </div>

          {/* Navigation Controls */}
          <Reveal delay={0.2} className="flex items-center gap-6 self-start md:self-auto">
            <div className="flex items-center gap-3">
              <span className="font-serif text-[1.4rem] font-light text-[#C5A059]">
                0{currentIndex + 1}
              </span>
              <span className="font-sans text-[12px] text-white/30">/</span>
              <span className="font-sans text-[12px] tracking-[0.2em] text-white/50">
                0{featuredProjects.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous project"
                className="w-12 h-12 rounded-full border border-white/20 hover:border-[#C5A059] flex items-center justify-center text-white hover:text-[#C5A059] transition-all duration-300 bg-[#161411]"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next project"
                className="w-12 h-12 rounded-full border border-white/20 hover:border-[#C5A059] flex items-center justify-center text-white hover:text-[#C5A059] transition-all duration-300 bg-[#161411]"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 sm:gap-8 px-6 sm:px-10 md:px-16 lg:px-20 overflow-x-auto hide-scrollbar scroll-smooth pb-6 cursor-grab active:cursor-grabbing"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {featuredProjects.map((p, i) => (
          <div
            key={p.title}
            onClick={() => {
              setCurrentIndex(i);
              onSelectProject?.(p);
            }}
            className="group cursor-pointer shrink-0 bg-[#141210] border border-[#C5A059]/25 hover:border-[#C5A059] transition-all duration-500 overflow-hidden relative shadow-2xl"
            style={{
              width: 'min(86vw, 620px)',
              scrollSnapAlign: 'start',
            }}
          >
            {/* Image Box */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-800 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-black/30 to-transparent" />

              {/* Number and Year */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <span className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-[#141210] bg-[#C5A059] px-3.5 py-1.5 shadow-md">
                  {p.category}
                </span>
                <span className="font-sans text-[11px] tracking-[0.2em] text-white/90 bg-black/60 backdrop-blur-md px-3 py-1 border border-white/10">
                  {p.year}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 sm:p-10 bg-[#141210] flex flex-col justify-between">
              <div>
                <span className="font-sans text-[10.5px] font-medium tracking-[0.26em] uppercase text-[#C5A059] block mb-2">
                  {p.location}
                </span>
                <h3 className="font-serif text-[2.2rem] sm:text-[2.6rem] font-light text-white leading-tight mb-4 group-hover:text-[#F3EFEA] transition-colors">
                  {p.title}
                </h3>
                <p className="font-sans text-[14.5px] font-light leading-[1.85] text-[#DDD6CC] mb-6">
                  {p.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <span className="font-sans text-[11px] font-medium tracking-[0.22em] uppercase text-[#D4CDC3] group-hover:text-[#C5A059] transition-colors inline-flex items-center gap-2">
                  <span>Explore Commission Monograph</span>
                  <ExternalLink size={14} className="text-[#C5A059]" />
                </span>

                <span className="font-serif italic text-[1.4rem] text-white/20 group-hover:text-[#C5A059]/50 transition-colors">
                  0{i + 1}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Spacer at end of scroll */}
        <div className="shrink-0 w-6 md:w-16" />
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center items-center gap-2.5 mt-8">
        {featuredProjects.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 transition-all duration-400 rounded-full ${
              i === currentIndex
                ? 'w-10 bg-[#C5A059]'
                : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
