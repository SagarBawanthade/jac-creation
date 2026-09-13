interface JacLogoProps {
  className?: string;
  /** Pass true when the logo sits on a light/cream background */
  dark?: boolean;
  /** Whether to show the "JAC CREATION" wordmark alongside the logo mark */
  showText?: boolean;
}

const JacLogo = ({ className = '', dark = false, showText = true }: JacLogoProps) => {
  return (
    <div className={`flex items-center gap-3 sm:gap-3.5 group cursor-pointer select-none ${className}`}>
      {/* Official Peak Mark */}
      <img
        src="/logo/Jac_Logo.png"
        alt="Jac Creation"
        className="h-10 sm:h-12 w-auto object-contain transition-transform duration-400 group-hover:scale-105"
        style={dark ? { mixBlendMode: 'multiply' } : { mixBlendMode: 'screen' }}
      />

      {/* Typographic Brand Lockup */}
      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-serif text-[15px] sm:text-[17px] font-normal tracking-[0.18em] uppercase leading-none transition-colors duration-300 ${
              dark
                ? 'text-[#141210] group-hover:text-[#A68037]'
                : 'text-white group-hover:text-[#C5A059]'
            }`}
          >
            Jac Creation
          </span>
          <span
            className={`font-sans text-[7.5px] sm:text-[8px] font-semibold tracking-[0.32em] uppercase mt-1 ${
              dark ? 'text-[#7A6F64]' : 'text-white/45'
            }`}
          >
            Architecture
          </span>
        </div>
      )}
    </div>
  );
};

export default JacLogo;