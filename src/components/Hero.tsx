import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '../assets/homebg.png';

const Hero = () => {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 700], [0, 130]);
  const imgScale = useTransform(scrollY, [0, 700], [1, 1.08]);
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 380], [1, 0]);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-[#080808]">
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 origin-center">
        <img
          src={heroBg}
          alt="Jac Creation — architectural photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/15 to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 h-full flex flex-col justify-center"
      >
        <div className="px-5 sm:px-6 md:px-16">
          {/* Categories row */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-5"
          >
            {['Architecture', 'Hospitality', 'Public Spaces'].map((cat, i) => (
              <div key={cat} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <span className="font-sans text-[7px] sm:text-[8.5px] md:text-[10.5px] font-medium tracking-[0.2em] sm:tracking-[0.28em] uppercase text-white whitespace-nowrap">
                  {cat}
                </span>
                {i < 2 && <span className="text-white  text-[9px]">|</span>}
              </div>
            ))}
          </motion.div>

          {/* Hero headings — scaled to actually fit narrow phones */}
          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-medium leading-[1.08] text-[#1b2027]"
              style={{ fontSize: 'clamp(1.55rem, 7.2vw, 4.25rem)' }}
            >
              Welcome Home.
            </motion.h1>
          </div>
          <div style={{ overflow: 'hidden' }} className="mb-3 sm:mb-4 md:mb-5">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.37, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-medium leading-[1.08] text-[#1b2027]"
              style={{ fontSize: 'clamp(1.55rem, 7.2vw, 4.25rem)' }}
            >
              To The Extraordinary.
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="font-sans font-semibold text-[10px] sm:text-[12px] md:text-[18px] text-[#1b2027]/75 mb-7 sm:mb-9 md:mb-11 tracking-[0.02em] max-w-[85%] sm:max-w-xs md:max-w-none"
          >
            Spaces that inspire, endure, and belong.
          </motion.p>

          {/* Scroll for more */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex items-center gap-3 sm:gap-4 md:gap-5 cursor-pointer group w-fit"
            onClick={() => document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-white/60 flex items-center justify-center group-hover:border-[#c9a24b] transition-all duration-500 shrink-0 group-hover:scale-105"
            >
              <span className="absolute inset-0 rounded-full bg-[#c9a24b]/0 group-hover:bg-[#c9a24b]/10 transition-all duration-500 blur-md" />
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative text-white/80 group-hover:text-[#c9a24b] transition-colors duration-500 sm:w-4 sm:h-4"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </motion.div>
            <span className="font-sans text-[9px] sm:text-[10.5px] md:text-[11px] font-medium tracking-[0.24em] sm:tracking-[0.32em] uppercase text-white/80 group-hover:text-white transition-colors duration-300">
              Scroll for more
            </span>
          </motion.button>
        </div>
      </motion.div>

      {/* Bottom-right: PLACES / PEOPLE / STORIES */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.9 }}
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10 hidden sm:flex flex-col items-end gap-0.5"
      >
        <div className="w-8 h-px bg-white/35 mb-1.5" />
        {['Places', 'People', 'Stories'].map((word) => (
          <span
            key={word}
            className="font-sans text-[8.5px] md:text-[9.5px] font-medium tracking-[0.3em] uppercase text-white/60 text-right"
          >
            {word}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;