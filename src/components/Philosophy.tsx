import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import philosophyImg from '../assets/philosophy.webp';

/** Warm travertine/stone section — editorial contrast in the page structure */
const Philosophy = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about-us" data-section="philosophy" className="bg-[#FAF7F2] overflow-hidden border-b border-[#C5A059]/15">
      <div className="grid md:grid-cols-2 min-h-[90vh]">

        {/* ── LEFT: Editorial Typography ── */}
        <div ref={ref} className="flex flex-col justify-center py-20 md:py-24 px-8 sm:px-14 md:px-20 xl:px-28">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-10 h-px bg-[#A68037]" />
            <span className="font-sans text-[10.5px] font-semibold tracking-[0.38em] uppercase text-[#A68037]">
              Philosophy
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mb-6">
            {['We Design', 'Experiences,', 'Not Just Structures.'].map((line, i) => (
              <div key={i} style={{ overflow: 'hidden' }}>
                <motion.h2
                  initial={{ y: '110%' }}
                  animate={inView ? { y: 0 } : {}}
                  transition={{ delay: 0.12 + i * 0.12, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                  className={`font-serif font-light leading-[1.05] block ${i === 2
                    ? 'italic font-normal text-[#A68037]'
                    : 'text-[#141210]'
                    }`}
                  style={{ fontSize: 'clamp(2.8rem, 5.2vw, 5.2rem)' }}
                >
                  {line}
                </motion.h2>
              </div>
            ))}
          </div>

          {/* Gold Hairline Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.55, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-px bg-[#A68037] origin-left my-8"
          />

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.65, duration: 0.9 }}
            className="font-sans font-normal text-[15.5px] leading-[1.95] text-[#2C2621] max-w-[460px] mb-10"
          >
            Jac Creation works across residential, hospitality, and public-space design ,
            always with an emphasis on how a place <strong className="font-medium text-[#141210]">feels to inhabit</strong>,
            not just how it photographs. Every project begins with an inquiry into life as it is lived.
          </motion.p>

          {/* Studio Disciplines */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.78, duration: 0.8 }}
            className="flex flex-col gap-3.5 pt-2"
          >
            {[
              { label: 'Bespoke Residential Architecture', scale: 'Single Residence & Estate' },
              { label: 'Hospitality & Experiential Venues', scale: 'Resorts & Guest Retreats' },
              { label: 'Public Space & Cultural Pavilions', scale: 'Civic Parks & Master Plans' },
            ].map((d) => (
              <div key={d.label} className="flex items-center justify-between max-w-[460px] group cursor-default py-2 border-b border-[#141210]/10">
                <div className="flex items-center gap-4">
                  <span className="w-6 h-px bg-[#A68037] group-hover:w-10 group-hover:bg-[#8A6724] transition-all duration-400" />
                  <span className="font-sans text-[11.5px] font-medium tracking-[0.24em] uppercase text-[#141210] group-hover:text-[#A68037] transition-colors duration-300">
                    {d.label}
                  </span>
                </div>
                <span className="hidden sm:inline font-sans text-[10px] tracking-[0.16em] uppercase text-[#73685E]">
                  {d.scale}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Luminous Architectural Photography ── */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[50vh] md:min-h-full overflow-hidden group"
        >
          <img
            src={philosophyImg}
            alt="Architectural interior — Jac Creation"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Gentle warm vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:to-black/20 pointer-events-none" />

          {/* Architectural Badge */}
          <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 bg-[#FAF7F2]/95 backdrop-blur-md px-6 py-4 border border-[#C5A059]/30 shadow-xl">
            <span className="font-serif italic text-[2.2rem] text-[#A68037] leading-none block">2006</span>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
