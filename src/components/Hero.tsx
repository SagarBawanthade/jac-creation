import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '../assets/homebg.webp';
import { ArrowDown, Compass } from 'lucide-react';

interface HeroProps {
  onExploreWork?: () => void;
  onOpenAppointment?: () => void;
}

const Hero = ({ onExploreWork, onOpenAppointment }: HeroProps) => {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 700], [0, 120]);
  const imgScale = useTransform(scrollY, [0, 700], [1, 1.07]);
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 420], [1, 0]);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-[#070706]">
      {/* ── PARALLAX ARCHITECTURAL CANVAS ── */}
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 origin-center">
        <img
          src={heroBg}
          alt="Jac Creation — Architectural Horizon"
          fetchPriority="high"
          loading="eager"
          className="w-full h-full object-cover"
        />
        {/* Layered cinematic vignettes for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#070706] to-transparent" />
      </motion.div>

      {/* ── HERO CONTENT ── */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto w-full pt-16"
      >
        <div className="max-w-4xl">

          {/* Discipline Badges */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            {['Residential Architecture', 'Hospitality Retreatment', 'Public Space & Civic Parks'].map((cat, i) => (
              <div key={cat} className="flex items-center gap-3">
                <span className="font-sans text-[9px] sm:text-[10px] font-semibold tracking-[0.28em] uppercase text-[#F5F2EB] bg-black/40 backdrop-blur-md px-3 py-1 border border-white/15">
                  {cat}
                </span>
                {i < 2 && <span className="text-[#C5A059] text-[12px]">·</span>}
              </div>
            ))}
          </motion.div>

          {/* Headline Display */}
          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.15, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-light leading-[1.02] text-[#FFFFFF] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 6.6rem)' }}
            >
              Welcome Home.
            </motion.h1>
          </div>

          <div style={{ overflow: 'hidden' }} className="mb-6">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.28, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-light leading-[1.02] text-[#FFFFFF] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 6.6rem)' }}
            >
              To The{' '}
              <em className="italic font-normal text-[#E6C687] drop-shadow-[0_2px_15px_rgba(197,160,89,0.3)]">
                Extraordinary.
              </em>
            </motion.h1>
          </div>

          {/* Gold Hairline Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.65, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-[2px] bg-[#C5A059] mb-6 origin-left shadow-lg"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.85 }}
            className="font-sans font-light text-[15px] sm:text-[17px] md:text-[19px] text-[#F0EBE3] mb-10 tracking-[0.02em] max-w-xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
          >
            Spaces that inspire, endure, and belong. We design experiences, not just structures.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <button
              onClick={() => {
                if (onExploreWork) onExploreWork();
                else document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-magnetic inline-flex items-center gap-3 bg-[#C5A059] hover:bg-[#D9B56F] text-[#12100E] font-sans text-[11.5px] font-semibold tracking-[0.24em] uppercase px-8 py-4 transition-all duration-300 shadow-2xl cursor-pointer"
            >
              <span>Explore Selected Work</span>
              <ArrowDown size={14} />
            </button>

            <button
              onClick={() => {
                if (onOpenAppointment) onOpenAppointment();
                else document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2.5 border border-white/40 hover:border-[#C5A059] text-white hover:text-[#C5A059] bg-black/30 backdrop-blur-sm font-sans text-[11px] font-medium tracking-[0.24em] uppercase px-7 py-4 transition-all duration-300 cursor-pointer"
            >
              <span>Inquire Commission</span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* ── BOTTOM CONTROLS: Scroll Cue & Coordinates ── */}
      <div className="absolute bottom-8 left-6 sm:left-10 md:left-16 lg:left-20 right-6 sm:right-10 md:right-16 lg:right-20 z-20 flex items-center justify-between pointer-events-none">
        {/* Scroll Cue */}
        <button
          onClick={() => document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' })}
          className="pointer-events-auto inline-flex items-center gap-3.5 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full border border-white/30 group-hover:border-[#C5A059] flex items-center justify-center transition-all duration-400 bg-black/30 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <ArrowDown size={14} className="text-[#C5A059]" />
            </motion.div>
          </div>
          <span className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4CDC3] group-hover:text-white transition-colors">
            Scroll for more
          </span>
        </button>

        {/* Geographic Coordinate Stamp */}
        <div className="hidden sm:flex items-center gap-3 text-right">
          <Compass size={14} className="text-[#C5A059]" />
          <div>
            <span className="font-sans text-[9px] font-medium tracking-[0.24em] uppercase text-white/80 block">
              38°42'50"N · 9°08'22"W
            </span>
            <span className="font-sans text-[8.5px] tracking-[0.18em] uppercase text-[#A89F91] block">
              Lisbon & Porto Ateliers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;