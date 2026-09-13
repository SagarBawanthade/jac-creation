import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const words = ['"Architecture', 'as', 'a', 'quiet', 'act."'];

const BrandStatement = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative overflow-hidden bg-[#070706] border-b border-[#C5A059]/20">
      {/* Ambient background glow & atmospheric imagery */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1800&auto=format&fit=crop&q=75"
          alt=""
          aria-hidden
          className="w-full h-full object-cover opacity-[0.09]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070706] via-transparent to-[#070706]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.12),transparent_70%)]" />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className="relative flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-20 py-36 md:py-52"
      >
        {/* Top Gold Axis */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-24 h-[1.5px] bg-[#C5A059] origin-center mb-16"
        />

        {/* Headline — Staggered Words */}
        <div className="flex flex-wrap justify-center items-baseline gap-x-[0.28em] gap-y-1 max-w-5xl">
          {words.map((word, i) => {
            const isGold = word === 'quiet' || word === 'act."';
            return (
              <div key={i} style={{ overflow: 'hidden' }}>
                <motion.span
                  initial={{ y: '115%' }}
                  animate={inView ? { y: 0 } : {}}
                  transition={{
                    delay: 0.12 + i * 0.12,
                    duration: 1.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`inline-block font-serif font-light italic ${
                    isGold
                      ? 'text-[#C5A059] drop-shadow-[0_2px_15px_rgba(197,160,89,0.25)]'
                      : 'text-[#FFFFFF]'
                  }`}
                  style={{ fontSize: 'clamp(2.8rem, 7.5vw, 7.5rem)' }}
                >
                  {word}
                </motion.span>
              </div>
            );
          })}
        </div>

        {/* Attribution Subline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="mt-14 flex items-center gap-5"
        >
          <span className="w-12 h-px bg-[#C5A059]/40" />
          <span className="font-sans text-[11px] font-medium tracking-[0.34em] uppercase text-[#D4CDC3]">
            Brand Philosophy · Jac Creation
          </span>
          <span className="w-12 h-px bg-[#C5A059]/40" />
        </motion.div>

        {/* Bottom Gold Axis */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-24 h-[1.5px] bg-[#C5A059] origin-center mt-16"
        />
      </div>
    </section>
  );
};

export default BrandStatement;
