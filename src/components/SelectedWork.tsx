import { ArrowRight } from 'lucide-react';
import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';

const projects = [
  {
    category: 'Residential',
    title: 'Modern Residential',
    description: 'Private homes shaped by material and site.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&auto=format&fit=crop&q=80',
  },
  {
    category: 'Interior',
    title: 'Interior Space',
    description: 'Interiors that breathe with the architecture.',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&auto=format&fit=crop&q=80',
  },
  {
    category: 'Commercial',
    title: 'Commercial Building',
    description: 'Public-facing architecture of civic ambition.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&auto=format&fit=crop&q=80',
  },
];

const SelectedWork = () => (
  <section id="projects" className="bg-[#0a0a0a] py-28 md:py-40 px-8 md:px-20">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <Reveal><Eyebrow>Selected Work</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-serif font-light leading-[1.09] text-white"
              style={{ fontSize: 'clamp(1.9rem,3.5vw,3.2rem)' }}
            >
              A portfolio shaped by<br />
              <em className="italic text-[#b8924a]">material, climate, and craft.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <a href="#" className="flex items-center gap-2 text-[13px] font-sans tracking-[0.18em] uppercase text-white/35 hover:text-[#b8924a] transition-colors group">
            View all projects
            <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.11}>
            <div className="img-zoom group cursor-pointer">
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/12 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[11px] font-sans tracking-[0.28em] uppercase text-[#b8924a] block mb-1.5">{p.category}</span>
                  <h3 className="font-serif font-light text-[1.2rem] text-white mb-1.5">{p.title}</h3>
                  <p className="text-[14.5px] font-sans text-white/45">{p.description}</p>
                </div>
                <div className="absolute inset-0 border border-[#b8924a]/0 group-hover:border-[#b8924a]/25 transition-all duration-500" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default SelectedWork;
