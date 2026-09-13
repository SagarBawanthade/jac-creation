import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const BrandStatement = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-[#0a0a0a] py-36 md:py-48 px-8 md:px-20 text-center">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-[#b8924a]/25 w-20 mx-auto mb-16 origin-left"
        />
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-light italic text-white leading-tight"
          style={{ fontSize: 'clamp(2.6rem,6vw,5.5rem)' }}
        >
          "Architecture as<br />
          <span className="text-[#b8924a]">a quiet act."</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-[#b8924a]/25 w-20 mx-auto mt-16 origin-right"
        />
      </div>
    </section>
  );
};

export default BrandStatement;
