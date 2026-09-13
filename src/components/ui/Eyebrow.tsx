const Eyebrow = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`inline-block text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-[#b8924a] mb-4 ${className}`}
  >
    — {children}
  </span>
);

export default Eyebrow;
