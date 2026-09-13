import { ArrowRight, Eye } from 'lucide-react';
import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';
import type { ProjectDetail } from './ui/ProjectModal';

interface SelectedWorkProps {
  onSelectProject?: (project: ProjectDetail) => void;
}

const portfolioProjects: ProjectDetail[] = [
  {
    category: 'Residential',
    title: 'Modern Residential Project',
    location: 'Cascais & Sintra Foothills',
    year: '2024',
    description:
      'Private residences shaped by geological site condition, Atlantic breezes, and quiet domestic ceremony. Floor-to-ceiling glass invites maritime pine canopies into warm stone living volumes.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=85',
    scale: '1:500 (Domestic Grain)',
    materials: ['Honed Travertine', 'Cast In-Situ Concrete', 'Charred Cedar (Shou Sugi Ban)', 'Brushed Brass'],
    concept:
      'The residence blurs interior and exterior boundaries, organizing daily life around private internal courtyards and open horizons.',
  },
  {
    category: 'Interior Space',
    title: 'Minimalist Interior Architecture',
    location: 'Chiado, Historic Lisbon',
    year: '2023',
    description:
      'A serene residential interior where raw limestone, textured plaster, and filtered daylight create an acoustic and tactile sanctuary above the vibrant capital streets.',
    img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&auto=format&fit=crop&q=85',
    scale: '1:50 (Tactile Detail)',
    materials: ['Portuguese Lioz Marble', 'Natural Lime Plaster', 'Smoked European Oak', 'Unlacquered Bronze'],
    concept:
      'Every junction is reduced to essential architectural geometries, allowing shadow, warmth, and curated art to shape the spatial rhythm.',
  },
  {
    category: 'Commercial & Cultural',
    title: 'Civic Architecture & Pavilion',
    location: 'Matosinhos & Porto Waterfront',
    year: '2025',
    description:
      'A public-facing architectural anchor that merges exhibition halls, public amphitheatre steps, and creative studios along the coastal maritime promenade.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&auto=format&fit=crop&q=85',
    scale: '1:2,500 (Civic Fabric)',
    materials: ['Acid-Etched Architectural Concrete', 'Perforated Copper Screen', 'Acoustic White Glass', 'Basalt Pavers'],
    concept:
      'A transparent threshold between city and ocean, fostering public gathering and cultural discourse with zero physical barriers to the public.',
  },
];

const SelectedWork = ({ onSelectProject }: SelectedWorkProps) => {
  return (
    <section id="projects" className="bg-[#0C0B0A] text-white py-28 md:py-36 px-6 sm:px-10 md:px-16 lg:px-20 border-b border-[#C5A059]/20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(197,160,89,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div>
            <Reveal>
              <Eyebrow className="text-[#C5A059] mb-4">Selected Work</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-serif font-light text-white leading-[1.05] tracking-tight mt-2"
                style={{ fontSize: 'clamp(2.6rem, 5vw, 4.6rem)' }}
              >
                A portfolio shaped by<br />
                <em className="italic font-normal text-[#C5A059]">material, climate, and craft.</em>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="flex flex-col items-start md:items-end gap-2">
              <span className="font-sans text-[11px] font-medium tracking-[0.24em] uppercase text-[#D4CDC3]">
                Categorical Overview
              </span>
              <span className="font-sans text-[12px] font-light text-[#A89F91]">
                Click any commission to inspect full monograph
              </span>
            </div>
          </Reveal>
        </div>

        {/* 3-Card Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {portfolioProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <div
                onClick={() => onSelectProject?.(p)}
                className="group cursor-pointer bg-[#161411] border border-[#C5A059]/25 hover:border-[#C5A059] transition-all duration-500 overflow-hidden flex flex-col shadow-xl"
              >
                {/* Image Box */}
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-800 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161411] via-[#161411]/20 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                    <span className="font-sans text-[10px] font-semibold tracking-[0.28em] uppercase text-[#141210] bg-[#C5A059] px-3 py-1 shadow-md">
                      {p.category}
                    </span>
                    <span className="font-sans text-[11px] tracking-[0.2em] font-medium text-white/90 bg-black/50 backdrop-blur-sm px-2.5 py-1 border border-white/10">
                      {p.year}
                    </span>
                  </div>

                  {/* Hover Inspect Cue */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 bg-[#C5A059] text-[#12100E] font-sans text-[11px] font-semibold tracking-[0.2em] uppercase px-5 py-2.5 shadow-xl">
                      <Eye size={14} />
                      <span>Inspect Project</span>
                    </span>
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-7 flex flex-col justify-between flex-1 bg-[#161411]">
                  <div>
                    <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-[#B8924A] block mb-2">
                      {p.location}
                    </span>
                    <h3 className="font-serif text-[1.65rem] font-light text-white leading-tight mb-3 group-hover:text-[#F3EFEA] transition-colors">
                      {p.title}
                    </h3>
                    <p className="font-sans text-[13.5px] font-light leading-[1.8] text-[#CFC8BC] line-clamp-3">
                      {p.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10">
                    <span className="font-sans text-[10.5px] tracking-[0.22em] uppercase text-[#D4CDC3] group-hover:text-[#C5A059] transition-colors">
                      View Monograph
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-[#C5A059] group-hover:translate-x-1.5 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
