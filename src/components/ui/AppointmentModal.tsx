import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Calendar, ArrowRight } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const projectTypes = [
  'Bespoke Residential Architecture',
  'Hospitality, Hotel or Resort',
  'Public Space, Park or Cultural Pavilion',
  'City-Shaping Master Plan',
];

const budgets = [
  '€500K – €1.5M',
  '€1.5M – €5M',
  '€5M – €15M',
  '€15M+ / Institutional',
];

const AppointmentModal = ({ isOpen, onClose }: AppointmentModalProps) => {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedBudget, setSelectedBudget] = useState(budgets[1]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl bg-[#141210] border border-[#C5A059]/40 p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-10 text-white my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-px bg-[#C5A059]" />
                    <span className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-[#C5A059]">
                      Direct Commission Inquiries
                    </span>
                  </div>
                  <h3 className="font-serif text-[2.2rem] sm:text-[2.6rem] font-light leading-tight text-white">
                    Book an Architectural Consultation
                  </h3>
                  <p className="font-sans text-[13px] font-light text-[#BDB5A9] mt-2 leading-relaxed">
                    Jac Creation accepts a curated number of residential, hospitality, and civic commissions annually. Share your site and program vision below.
                  </p>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block font-sans text-[10.5px] font-medium tracking-[0.2em] uppercase text-[#D4CDC3] mb-2.5">
                    Commission Typology
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`text-left p-3 font-sans text-[11px] tracking-[0.1em] border transition-all ${
                          selectedType === type
                            ? 'border-[#C5A059] bg-[#C5A059]/15 text-[#FFFFFF] font-medium'
                            : 'border-white/10 text-[#A89F91] hover:border-white/25 hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-[10.5px] font-medium tracking-[0.2em] uppercase text-[#D4CDC3] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Elena Vasconcelos"
                      className="w-full bg-[#1C1A17] border border-white/15 px-4 py-3 font-sans text-[13px] text-white focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[10.5px] font-medium tracking-[0.2em] uppercase text-[#D4CDC3] mb-2">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="elena@studio.com"
                      className="w-full bg-[#1C1A17] border border-white/15 px-4 py-3 font-sans text-[13px] text-white focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>
                </div>

                {/* Location & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-[10.5px] font-medium tracking-[0.2em] uppercase text-[#D4CDC3] mb-2">
                      Project Location / Site
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Cascais, Portugal or Biarritz"
                      className="w-full bg-[#1C1A17] border border-white/15 px-4 py-3 font-sans text-[13px] text-white focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[10.5px] font-medium tracking-[0.2em] uppercase text-[#D4CDC3] mb-2">
                      Anticipated Scope / Budget
                    </label>
                    <select
                      value={selectedBudget}
                      onChange={(e) => setSelectedBudget(e.target.value)}
                      className="w-full bg-[#1C1A17] border border-white/15 px-4 py-3 font-sans text-[13px] text-white focus:outline-none focus:border-[#C5A059] transition-colors cursor-pointer"
                    >
                      {budgets.map((b) => (
                        <option key={b} value={b} className="bg-[#141210]">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Brief Notes */}
                <div>
                  <label className="block font-sans text-[10.5px] font-medium tracking-[0.2em] uppercase text-[#D4CDC3] mb-2">
                    Project Vision & Context
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Describe your site topography, functional program, and preferred timeframe..."
                    className="w-full bg-[#1C1A17] border border-white/15 px-4 py-3 font-sans text-[13px] text-white focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-white/50 text-[11px] font-sans">
                    <Calendar size={14} className="text-[#C5A059]" />
                    <span>In-person atelier meetings held in Lisbon & Porto</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C5A059] hover:bg-[#D9B56F] text-[#12100E] font-sans text-[11.5px] font-semibold tracking-[0.24em] uppercase px-8 py-4 transition-all duration-300 shadow-lg"
                  >
                    <span>Request Appointment</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            ) : (
              /* Success State */
              <div className="text-center py-12 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center mb-6">
                  <Check size={28} className="text-[#C5A059]" />
                </div>
                <h4 className="font-serif text-[2.4rem] font-light text-white mb-3">
                  Appointment Request Received
                </h4>
                <p className="font-sans text-[14px] text-[#C2B9AC] max-w-md leading-relaxed mb-8">
                  Thank you, {name || 'esteemed client'}. The Jac Creation partnership reviews new inquiries every Tuesday. Our managing architect will contact you directly at <strong className="text-white">{email || 'your email'}</strong>.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="bg-[#C5A059] text-[#141210] font-sans text-[11px] font-semibold tracking-[0.24em] uppercase px-8 py-3.5 hover:bg-[#D9B56F] transition-colors"
                  >
                    Return to Atelier
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;
