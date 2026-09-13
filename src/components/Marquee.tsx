/** Scrolling discipline ticker — refined luxury architectural ribbon */
const items = [
  'Residential Architecture',
  'Hospitality & Retreats',
  'Public Spaces & Parks',
  'City-Shaping Master Plans',
  'Cultural Pavilions',
  'Interior Architecture',
  'Landscape & Climate Craft',
  'Territorial Urbanism',
];

const Marquee = () => {
  const repeated = [...items, ...items];
  return (
    <div className="bg-[#11100E] py-4 md:py-4.5 overflow-hidden border-y border-[#C5A059]/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="font-sans text-[10.5px] font-medium tracking-[0.34em] uppercase text-[#EAD8B5] hover:text-[#FFFFFF] transition-colors duration-300 px-7 sm:px-9 whitespace-nowrap">
              {item}
            </span>
            <span className="text-[#C5A059] text-[8px] opacity-80">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
