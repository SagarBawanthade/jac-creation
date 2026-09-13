import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import JacLogo from './ui/JacLogo';
import { LinkedinIcon, InstagramIcon } from './ui/icons';

const ContactFooter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <footer id="contact" className="bg-[#f5f0eb] text-[#1a1612]">
      <div ref={ref} className="py-28 md:py-44 px-8 md:px-20 text-center border-b border-[#1a1612]/8">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="inline-block text-[12px] font-sans tracking-[0.3em] uppercase text-[#b8924a] mb-5"
        >
          — New Commissions
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-light leading-tight text-[#1a1612] mb-14"
          style={{ fontSize: 'clamp(2.8rem,6.5vw,5.5rem)' }}
        >
          Let's Work<br />
          <em className="italic">Together.</em>
        </motion.h2>
        <motion.a
          href="mailto:hello@jaccreation.com"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.27 }}
          className="btn-magnetic inline-flex items-center gap-3 bg-[#1a1612] text-[#f5f0eb] text-[13px] font-sans tracking-[0.26em] uppercase px-10 py-4 hover:bg-[#b8924a] transition-colors duration-350 group"
        >
          Book an Appointment
          <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>

      <div className="py-10 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-7 text-[#1a1612]/40">
        <JacLogo className="w-28 h-11" dark />

        <div className="flex gap-9">
          {['Work', 'About', 'Contact'].map((l) => (
            <a key={l} href="#" className="text-[12px] font-sans tracking-[0.22em] uppercase hover:text-[#b8924a] transition-colors">
              {l}
            </a>
          ))}
        </div>

        <div className="flex gap-5">
          <a href="#" aria-label="LinkedIn" className="text-[#1a1612]/35 hover:text-[#b8924a] transition-colors">
            <LinkedinIcon size={14} />
          </a>
          <a href="#" aria-label="Instagram" className="text-[#1a1612]/35 hover:text-[#b8924a] transition-colors">
            <InstagramIcon size={14} />
          </a>
        </div>

        <p className="text-[12px] font-sans tracking-[0.14em] text-[#1a1612]/28">
          © {new Date().getFullYear()} Jac Creation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default ContactFooter;
