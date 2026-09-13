import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import JacLogo from './ui/JacLogo';

interface NavbarProps {
  onOpenAppointment?: () => void;
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Contact Us', href: '#contact' },
];

const Navbar = ({ onOpenAppointment }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ transform: 'translateZ(0)' }}
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 transition-all duration-400 ${
          scrolled
            ? 'py-3.5 bg-[#0C0B0A]/90 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
            : 'py-5 md:py-6 bg-gradient-to-b from-black/60 to-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#home" aria-label="Jac Creation home" className="shrink-0 group">
          <JacLogo />
        </a>

        {/* Desktop Nav links */}
        <ul className="hidden lg:flex items-center justify-center gap-7 xl:gap-9">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="relative font-sans text-[11px] font-medium tracking-[0.24em] uppercase text-[#DDD6CC] hover:text-white transition-colors duration-300 py-1 group"
              >
                {label}
                <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-[#C5A059] group-hover:w-full transition-all duration-400 ease-out" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Right CTA & Tagline */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <button
            onClick={() => onOpenAppointment?.()}
            className="inline-flex items-center gap-2 border border-[#C5A059]/60 hover:border-[#C5A059] hover:bg-[#C5A059] text-[#F0EBE3] hover:text-[#12100E] px-4 py-2 font-sans text-[10.5px] font-semibold tracking-[0.22em] uppercase transition-all duration-300 cursor-pointer shadow-md"
          >
            <span>Consultation</span>
            <ArrowUpRight size={13} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          className="lg:hidden flex items-center justify-center w-10 h-10 text-white/90 hover:text-[#C5A059] transition-colors duration-300 bg-black/40 backdrop-blur-md border border-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 lg:hidden bg-[#0C0B0A]"
          >
            <div className="flex flex-col h-full pt-28 pb-10 px-8 sm:px-12 overflow-y-auto justify-between">
              {/* Nav links */}
              <nav className="flex flex-col divide-y divide-white/10">
                {navLinks.map(({ label, href }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between py-5 w-full"
                    >
                      <span className="font-serif text-[1.85rem] font-light tracking-[0.02em] text-white/90 group-hover:text-[#C5A059] transition-colors duration-300">
                        {label}
                      </span>
                      <span className="text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
                      </span>
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Consultation CTA & Socials */}
              <div className="pt-8 border-t border-white/10 flex flex-col gap-5">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenAppointment?.();
                  }}
                  className="w-full py-4 bg-[#C5A059] text-[#12100E] font-sans text-[11px] font-semibold tracking-[0.24em] uppercase text-center"
                >
                  Book an Appointment
                </button>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40">
                    Lisbon · Porto
                  </span>

                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/company/jaccreation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#C5A059] border border-[#C5A059]/30 px-3 py-1.5"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://instagram.com/jaccreation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#C5A059] border border-[#C5A059]/30 px-3 py-1.5"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;