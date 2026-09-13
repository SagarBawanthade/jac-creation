import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Layers, ArrowUpRight } from 'lucide-react';

export interface ProjectDetail {
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  img: string;
  materials?: string[];
  scale?: string;
  concept?: string;
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
  onBookConsultation?: () => void;
}

const ProjectModal = ({ project, onClose, onBookConsultation }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl bg-[#141210] border border-[#C5A059]/40 shadow-[0_30px_90px_rgba(0,0,0,0.9)] z-10 text-white overflow-hidden my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
            aria-label="Close project details"
          >
            <X size={18} />
          </button>

          {/* Image Banner */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/30 to-transparent" />

            <div className="absolute bottom-6 left-6 sm:left-10">
              <span className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-[#C5A059] border border-[#C5A059]/40 bg-black/50 backdrop-blur-md px-3.5 py-1.5 inline-block mb-3">
                {project.category}
              </span>
              <h3 className="font-serif text-[2.4rem] sm:text-[3.2rem] font-light text-white leading-none">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Details Content */}
          <div className="p-6 sm:p-10 md:p-12">
            {/* Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pb-8 border-b border-white/10 mb-8">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-[#C5A059] shrink-0" />
                <div>
                  <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8E8578] block">
                    Location
                  </span>
                  <span className="font-sans text-[12.5px] font-medium text-[#F0EBE3]">
                    {project.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-[#C5A059] shrink-0" />
                <div>
                  <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8E8578] block">
                    Year of Completion
                  </span>
                  <span className="font-sans text-[12.5px] font-medium text-[#F0EBE3]">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <Layers size={16} className="text-[#C5A059] shrink-0" />
                <div>
                  <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8E8578] block">
                    Architectural Scale
                  </span>
                  <span className="font-sans text-[12.5px] font-medium text-[#F0EBE3]">
                    {project.scale || 'Bespoke Inhabitation'}
                  </span>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-10">
              <div>
                <h4 className="font-sans text-[10.5px] font-semibold tracking-[0.28em] uppercase text-[#C5A059] mb-3">
                  Architectural Narrative
                </h4>
                <p className="font-sans text-[15px] font-light leading-[1.9] text-[#DDD6CC] mb-6">
                  {project.description}
                </p>
                <p className="font-sans text-[14px] font-light leading-[1.85] text-[#A89F91]">
                  {project.concept ||
                    'Designed to dialogue directly with changing diurnal light and geological textures, ensuring the structure deepens in character as it weathers with time.'}
                </p>
              </div>

              {/* Materiality Palette */}
              <div className="bg-[#1C1A17] p-6 border border-white/10 flex flex-col justify-between">
                <div>
                  <h5 className="font-sans text-[10px] font-semibold tracking-[0.24em] uppercase text-[#C5A059] mb-4">
                    Material Specification
                  </h5>
                  <ul className="flex flex-col gap-2.5 font-sans text-[12px] text-[#D4CDC3]">
                    {(
                      project.materials || [
                        'Honed Portuguese Lioz Limestone',
                        'Brushed Bronze Joinery & Details',
                        'Low-Iron Structural Acoustic Glass',
                        'Reclaimed European White Oak',
                      ]
                    ).map((mat) => (
                      <li key={mat} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full shrink-0" />
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onBookConsultation?.();
                  }}
                  className="mt-6 inline-flex items-center justify-center gap-2 w-full py-3.5 bg-[#C5A059] text-[#12100E] font-sans text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#D9B56F] transition-colors"
                >
                  <span>Inquire for Similar Project</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
