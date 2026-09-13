import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import JacLogo from './ui/JacLogo';
import { LinkedinIcon, InstagramIcon } from './ui/icons';

interface ContactFooterProps {
  onOpenAppointment?: () => void;
}

const footerNav = [
  { label: 'Work', href: '#projects' },
  { label: 'Philosophy', href: '#about-us' },
  { label: 'The Framework', href: '#framework' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const ContactFooter = ({ onOpenAppointment }: ContactFooterProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <footer id="contact" className="bg-[#FAF6F0] text-[#141210] border-t border-[#C5A059]/30">

      {/* ── CTA MAIN BLOCK ── */}
      <div
        ref={ref}
        className="py-28 md:py-44 px-6 sm:px-10 md:px-16 lg:px-20 text-center border-b border-[#141210]/10 relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-[#A68037]" />
          <span className="text-[11px] font-sans font-semibold tracking-[0.32em] uppercase text-[#A68037]">
            New Commissions & Partnerships
          </span>
          <span className="w-8 h-px bg-[#A68037]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-light leading-[1.04] text-[#141210] mb-6 tracking-tight"
          style={{ fontSize: 'clamp(3rem, 7.5vw, 6.2rem)' }}
        >
          Let's Work{' '}
          <em className="italic font-normal text-[#A68037]">Together.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.22 }}
          className="font-sans font-normal text-[15px] sm:text-[16px] text-[#4A423B] max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Currently receiving architectural inquiries for residential residences, hospitality developments, and public pavilions for the coming seasons.
        </motion.p>

        {/* Gold Hairline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-20 h-px bg-[#A68037] mx-auto mb-12 origin-center"
        />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <button
            onClick={() => onOpenAppointment?.()}
            className="w-full sm:w-auto btn-magnetic inline-flex items-center justify-center gap-3 bg-[#141210] hover:bg-[#A68037] text-[#FAF6F0] text-[11.5px] font-sans font-semibold tracking-[0.28em] uppercase px-10 py-5 transition-all duration-300 shadow-xl group cursor-pointer"
          >
            <span>Book an Appointment</span>
            <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>

          <a
            href="mailto:hello@jaccreation.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-[#141210]/25 hover:border-[#141210] text-[#141210] text-[11.5px] font-sans font-medium tracking-[0.24em] uppercase px-8 py-5 transition-colors duration-300"
          >
            <Mail size={14} className="text-[#A68037]" />
            <span>hello@jaccreation.com</span>
          </a>
        </motion.div>
      </div>


      {/* ── FOOTER BOTTOM BAR ── */}
      <div className="py-10 px-6 sm:px-10 md:px-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-8 text-[#141210]">
        <JacLogo className="w-28 h-11" dark />

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-7 sm:gap-9">
          {footerNav.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[11px] font-sans font-medium tracking-[0.24em] uppercase text-[#4A423B] hover:text-[#A68037] transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Social Icons (LinkedIn / Instagram per brief) */}
        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com/company/jaccreation"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full border border-[#141210]/20 hover:border-[#A68037] flex items-center justify-center text-[#141210] hover:text-[#A68037] transition-all duration-300"
          >
            <LinkedinIcon size={14} />
          </a>
          <a
            href="https://instagram.com/jaccreation"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full border border-[#141210]/20 hover:border-[#A68037] flex items-center justify-center text-[#141210] hover:text-[#A68037] transition-all duration-300"
          >
            <InstagramIcon size={14} />
          </a>
        </div>

        <p className="text-[11px] font-sans tracking-[0.16em] text-[#7A6F64]">
          © {new Date().getFullYear()} Jac Creation Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default ContactFooter;
