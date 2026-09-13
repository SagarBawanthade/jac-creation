import { ExternalLink } from 'lucide-react';
import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';

const projects = [
  {
    name: 'Casa Atlântica',
    description: 'A coastal residence carved into the cliffside, oriented to the Atlantic horizon.',
    location: 'Portugal Coast',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&auto=format&fit=crop&q=80',
  },
  {
    name: 'Pavilhão do Silêncio',
    description: 'A cultural pavilion suspended between forest and clearing — a threshold between nature and thought.',
    location: 'Serra da Estrela',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&auto=format&fit=crop&q=80',
  },
  {
    name: 'Maison Lumière',
    description: 'A hospitality retreat in the French countryside, where timber and stone meet the morning light.',
    location: 'Provence, France',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&auto=format&fit=crop&q=80',
  },
];

const FeaturedProjects = () => (
  <section id="gallery" className="bg-[#080808] py-28 md:py-40">
    <div className="px-8 md:px-20 mb-14">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <Reveal><Eyebrow>Featured Projects</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-serif font-light leading-[1.09] text-white"
              style={{ fontSize: 'clamp(1.9rem,3.5vw,3.2rem)' }}
            >
              Projects in <em className="italic text-[#b8924a]">motion.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <p className="text-[14px] font-sans text-white/25 max-w-[220px] leading-relaxed">
            Drag to explore — or let the work come to you.
          </p>
        </Reveal>
      </div>
    </div>

    <div
      className="flex gap-4 px-8 md:px-20 overflow-x-auto hide-scrollbar pb-2 cursor-grab active:cursor-grabbing"
      style={{ scrollSnapType: 'x mandatory' }}
    >
      {projects.map((p, i) => (
        <Reveal
          key={p.name}
          delay={i * 0.1}
          className="shrink-0"
          style={{ scrollSnapAlign: 'start' }}
        >
          <div
            className="img-zoom group relative overflow-hidden bg-[#111]"
            style={{ width: 'min(80vw, 500px)', aspectRatio: '3/4' }}
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/18 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-4 h-px bg-[#b8924a]" />
                <span className="text-[11px] font-sans tracking-[0.26em] uppercase text-[#b8924a]/65">
                  {p.location} · {p.year}
                </span>
              </div>
              <h3 className="font-serif font-light text-[1.65rem] text-white mb-2 leading-tight">{p.name}</h3>
              <p className="font-sans font-light text-[14.5px] text-white/45 leading-relaxed">{p.description}</p>
              <div className="mt-6 flex items-center gap-2 text-[12px] font-sans tracking-[0.22em] uppercase text-white/25 group-hover:text-[#b8924a] transition-colors duration-300">
                <span>View Project</span>
                <ExternalLink size={9} />
              </div>
            </div>
            <div className="absolute top-6 right-6 text-[10.5px] font-sans text-white/18 tracking-widest">
              0{i + 1}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default FeaturedProjects;
