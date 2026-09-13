interface JacLogoProps {
  className?: string;
  /** Pass true when the logo sits on a light/cream background */
  dark?: boolean;
}

const JacLogo = ({ className = '', dark = false }: JacLogoProps) => {
  return (
    <div className={`flex items-center whitespace-nowrap ${className}`}>
      <img
        src="/logo/Jac_Logo.png"
        alt="Jac Creation"
        className="h-14 md:h-24 w-auto object-contain"
        style={dark ? { mixBlendMode: 'multiply' } : { mixBlendMode: 'screen' }}
      />
    </div>
  );
};

export default JacLogo;