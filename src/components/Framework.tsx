import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';

const paragraphs = [
  "Our approach, driven by creative ideas and grounded in evidence-based research, unveils opportunities often unseen at a project's inception. This methodology ensures we reach positive, transformative outcomes.",
  "Our portfolio of city-shaping master plans and extensive urban projects showcases our ability to harness opportunities within the context. We unlock each site's full potential, crafting public spaces and respectful buildings that enhance the unique character of the neighbourhoods we engage with.",
  "Looking widely, we are able to discern opportunities, patterns, and connections. This results in improved project quality and amenity, without compromising on cost-effectiveness.",
  "The value we infuse through design benefits not only our clients but also those who live, learn, work, and play in the places we shape.",
];

const scales = ['Neighbourhood', 'City', 'Region'];

const Framework = () => (
  <section
    className="py-28 md:py-40 px-8 md:px-20 border-t border-b border-[#b8924a]/10"
    style={{ background: 'linear-gradient(135deg, #0f0d0a 0%, #13100b 50%, #0a0908 100%)' }}
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 mb-20 items-end">
        <div>
          <Reveal><Eyebrow>The Framework</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-serif font-light leading-[1.09] text-white"
              style={{ fontSize: 'clamp(2rem,4vw,3.6rem)' }}
            >
              Methodology behind<br />
              <em className="italic text-[#b8924a]">every project.</em>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="flex items-end justify-start md:justify-end">
          <div className="flex items-end gap-1.5">
            {scales.map((scale, i) => (
              <div key={scale} className="flex items-end gap-1.5">
                <div className="flex flex-col items-center gap-2.5">
                  <div
                    className="rounded-full bg-[#b8924a]"
                    style={{
                      width: `${16 + i * 14}px`,
                      height: `${16 + i * 14}px`,
                      opacity: 0.28 + i * 0.26,
                    }}
                  />
                  <span className="text-[11px] font-sans tracking-[0.18em] uppercase text-white/35 whitespace-nowrap">
                    {scale}
                  </span>
                </div>
                {i < 2 && <div className="w-6 h-px bg-[#b8924a]/18 mb-5 mx-0.5" />}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
        {paragraphs.map((para, i) => (
          <Reveal key={i} delay={i * 0.09}>
            <div className="flex gap-5 group">
              <span className="mt-0.5 text-[12px] font-sans text-[#b8924a]/45 shrink-0 font-medium tracking-widest">0{i + 1}</span>
              <p className="font-sans font-light text-[15.5px] leading-[1.9] text-white/50">{para}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Framework;
