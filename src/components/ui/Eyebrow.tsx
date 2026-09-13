const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-[12.5px] font-sans font-medium tracking-[0.28em] uppercase text-[#b8924a] mb-5">
    — {children}
  </span>
);

export default Eyebrow;
