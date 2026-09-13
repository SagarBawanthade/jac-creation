import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  {
    value: '18',
    suffix: '+',
    label: 'Years of Practice',
    detail: 'Continuous architectural inquiry & built execution across Europe & beyond.',
  },
  {
    value: '120',
    suffix: '+',
    label: 'Completed Projects',
    detail: 'Bespoke residences, luxury hospitality venues, and civic master plans.',
  },
  {
    value: '3',
    suffix: '',
    label: 'Continents',
    detail: 'Territorial engagement across Southern Europe, Americas, and the Atlantic basin.',
  },
  {
    value: '14',
    suffix: '',
    label: 'Design Distinctions',
    detail: 'International architectural honors for spatial innovation & material integrity.',
  },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="bg-[#0E0D0B] py-20 md:py-28 px-6 sm:px-10 md:px-16 lg:px-20 border-b border-[#C5A059]/20 relative overflow-hidden">
      {/* Subtle ambient architectural glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(197,160,89,0.08),transparent_65%)] pointer-events-none" />

      <div
        ref={ref}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col justify-between py-6 lg:py-8 lg:px-8 group transition-all duration-400 ${
              i !== 0 ? 'lg:border-l lg:border-[#C5A059]/15' : ''
            }`}
          >
            <div>
              {/* Metric Number */}
              <div className="flex items-baseline leading-none mb-4">
                <span
                  className="font-serif font-light text-[#FFFFFF] tracking-tight"
                  style={{ fontSize: 'clamp(3.8rem, 6vw, 5.5rem)' }}
                >
                  {s.value}
                </span>
                {s.suffix && (
                  <span
                    className="font-serif font-light text-[#C5A059] ml-1"
                    style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)' }}
                  >
                    {s.suffix}
                  </span>
                )}
              </div>

              {/* Gold Hairline */}
              <div className="w-10 h-[1.5px] bg-[#C5A059] mb-4 group-hover:w-16 group-hover:bg-[#E2C288] transition-all duration-400" />

              {/* Title */}
              <h3 className="font-sans text-[12px] font-semibold tracking-[0.24em] uppercase text-[#F3EFEA] mb-2.5">
                {s.label}
              </h3>
            </div>

            {/* Architectural Subtext */}
            <p className="font-sans text-[13px] font-light leading-relaxed text-[#B3ABA0] max-w-[280px]">
              {s.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
