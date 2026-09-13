// JacLogo.tsx
const JacLogo = ({ className = '' }) => {
  return (
    <div className={`flex items-center whitespace-nowrap ${className}`}>
      <img
        src="/logo/Jac_Logo.png"
        alt="Jac Creation"
        className="h-14 md:h-24 w-auto object-contain"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  );
};

export default JacLogo;