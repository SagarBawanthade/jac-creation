import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import JacLogo from './ui/JacLogo';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Contact Us', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ transform: 'translateZ(0)' }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 md:px-14 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#0a0a0a]/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.06)]'
            : 'py-4 md:py-5'
        }`}
      >
        {/* Logo */}
        <a href="#home" aria-label="Jac Creation home" className="shrink-0">
          <JacLogo />
        </a>

        {/* Desktop Nav links */}
        <ul className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="relative font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-white/60 hover:text-white/90 transition-colors duration-300 group"
              >
                {label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#b8924a] group-hover:w-full transition-all duration-500 ease-in-out" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right tagline */}
        <div className="hidden md:flex flex-col items-end gap-1 shrink-0">
          <p className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-white/60 text-right leading-[1.75]">
            Spaces For<br />A More Human<br />Tomorrow.
          </p>
          <div className="w-8 h-px bg-[#b8924a]/50 mt-1" />
        </div>

        {/* Mobile hamburger */}
        <motion.button
          whileTap={{ scale: 0.88 }}
          className="md:hidden flex items-center justify-center w-9 h-9 text-white/80 hover:text-[#b8924a] transition-colors duration-300"
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
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Mobile Full-screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-[#0a0a0a]"
          >
            {/* Subtle grain texture feel via border lines */}
            <div className="absolute inset-0 flex flex-col">

              {/* Top bar — same height as navbar to leave logo visible */}
              <div className="h-[72px] shrink-0" />

              {/* Menu content */}
              <div className="flex-1 flex flex-col justify-between px-7 py-10 overflow-y-auto">

                {/* Nav links */}
                <nav className="flex flex-col gap-0">
                  {navLinks.map(({ label, href }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="border-b border-white/[0.07]"
                    >
                      <a
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center justify-between py-5 w-full"
                      >
                        <span className="font-serif text-[1.75rem] font-light tracking-[0.04em] text-white/80 group-hover:text-white transition-colors duration-300">
                          {label}
                        </span>
                        <motion.span
                          className="text-[#b8924a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ x: -6 }}
                          whileHover={{ x: 0 }}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </motion.span>
                      </a>
                    </motion.div>
                  ))}
                </nav>

                {/* Bottom section — tagline + gold accent */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.38, duration: 0.5 }}
                  className="mt-10 flex flex-col gap-4"
                >
                  {/* Gold divider */}
                  <div className="w-10 h-px bg-[#b8924a]/60" />

                  <p className="font-sans text-[10px] font-medium tracking-[0.28em] uppercase text-white/35 leading-[2]">
                    Spaces For<br />A More Human<br />Tomorrow.
                  </p>

                  {/* Social / contact chips */}
                  <div className="flex gap-4 mt-2">
                    {['Instagram', 'Behance'].map((s) => (
                      <span
                        key={s}
                        className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#b8924a]/70 border border-[#b8924a]/25 px-3 py-1.5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;