import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';

const approachParagraphs = [
  {
    num: '01',
    text: "Our approach, driven by creative ideas and grounded in evidence-based research, unveils opportunities often unseen at a project's inception. This methodology ensures we reach positive, transformative outcomes.",
  },
  {
    num: '02',
    text: "Our portfolio of city-shaping master plans and extensive urban projects showcases our ability to harness opportunities within the context. We unlock each site's full potential, crafting public spaces and respectful buildings that enhance the unique character of the neighbourhoods we engage with.",
  },
  {
    num: '03',
    text: "Looking widely, we are able to discern opportunities, patterns, and connections. This results in improved project quality and amenity, without compromising on cost-effectiveness.",
  },
  {
    num: '04',
    text: "The value we infuse through design benefits not only our clients but also those who live, learn, work, and play in the places we shape.",
  },
];

const scales = [
  { label: 'Neighbourhood', size: 10, ratio: '1:500' },
  { label: 'City', size: 18, ratio: '1:2,500' },
  { label: 'Region', size: 28, ratio: '1:10,000' },
];

const Framework = () => {
  return (
    <section
      id="framework"
      className="bg-[#12100E] text-[#F5F2EB] py-28 md:py-40 px-6 sm:px-10 md:px-16 lg:px-20 border-b border-[#C5A059]/15 relative"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── HEADER & SCALE INDICATOR ROW ── */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-end pb-16 md:pb-20 border-b border-white/10">
          <div>
            <Reveal>
              <Eyebrow className="text-[#C5A059] mb-4">The Framework</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-serif font-light text-white leading-[1.08] tracking-tight mt-2"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.4rem)' }}
              >
                Methodology behind<br />
                <em className="italic font-normal text-[#C5A059]">every project.</em>
              </h2>
            </Reveal>
          </div>

          {/* Minimalist Scale Indicator (Neighbourhood → City → Region) */}
          <Reveal delay={0.2} className="flex flex-col items-start lg:items-end gap-3">
            <span className="font-sans text-[9.5px] font-medium tracking-[0.28em] uppercase text-[#A89F91]">
              Scale Continuum
            </span>

            <div className="flex items-center gap-4 sm:gap-6 py-2">
              {scales.map((s, i) => (
                <div key={s.label} className="flex items-center gap-4 sm:gap-6">
                  <div className="flex flex-col items-center gap-2.5 group">
                    <div
                      className="rounded-full border border-[#C5A059] flex items-center justify-center transition-all duration-300"
                      style={{
                        width: `${s.size}px`,
                        height: `${s.size}px`,
                        backgroundColor: `rgba(197, 160, 89, ${0.15 + i * 0.15})`,
                      }}
                    />
                    <div className="text-center">
                      <span className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-white/90 block whitespace-nowrap">
                        {s.label}
                      </span>
                      <span className="font-sans text-[8.5px] tracking-[0.14em] text-[#A89F91] block mt-0.5">
                        {s.ratio}
                      </span>
                    </div>
                  </div>

                  {i < scales.length - 1 && (
                    <div className="w-8 sm:w-12 h-px bg-[#C5A059]/30 mb-5" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── 4 APPROACH PARAGRAPHS (Minimalist Editorial Layout) ── */}
        <div className="grid md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-14 md:gap-y-16 pt-16 md:pt-20">
          {approachParagraphs.map((para, i) => (
            <Reveal key={para.num} delay={i * 0.1}>
              <div className="flex gap-6 sm:gap-8 group">
                <span className="font-serif italic text-[1.8rem] sm:text-[2.2rem] text-[#C5A059] font-light leading-none shrink-0 select-none">
                  {para.num}
                </span>

                <div className="space-y-4">
                  <div className="w-8 h-px bg-[#C5A059]/40 group-hover:w-14 group-hover:bg-[#C5A059] transition-all duration-400" />
                  <p className="font-sans font-light text-[15px] sm:text-[15.5px] leading-[1.9] text-[#DDD6CC] group-hover:text-white transition-colors duration-300">
                    {para.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Framework;
