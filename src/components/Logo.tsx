import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  showSubtitle = true,
  className = '',
  onClick
}) => {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-white' : variant === 'dark' ? 'text-[#080808]' : 'text-[#D9A514]';
  const subtextColor = isLight ? 'text-[#D9A514]' : variant === 'dark' ? 'text-[#C58A00]' : 'text-[#F4CA46]';
  
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 52 : 40;

  return (
    <div 
      className={`inline-flex items-center gap-3 cursor-pointer select-none group transition-transform duration-300 hover:scale-[1.02] ${className}`}
      onClick={onClick}
    >
      {/* Architectural Alpha Monogram SVG */}
      <svg 
        width={iconSize} 
        height={iconSize} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm transition-transform duration-500 group-hover:rotate-3"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4CA46" />
            <stop offset="50%" stopColor="#D9A514" />
            <stop offset="100%" stopColor="#C58A00" />
          </linearGradient>
          <linearGradient id="goldGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FAF9F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D9A514" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Outer Architectural Precision Diamond / Square Frame */}
        <rect 
          x="6" 
          y="6" 
          width="88" 
          height="88" 
          rx="1" 
          stroke="url(#goldGrad)" 
          strokeWidth="1.5" 
          fill="none" 
          opacity="0.9"
        />
        
        {/* Subtle Inner Corner Accents */}
        <path d="M14 22V14H22" stroke="url(#goldGrad)" strokeWidth="1.5" />
        <path d="M86 22V14H78" stroke="url(#goldGrad)" strokeWidth="1.5" />
        <path d="M14 78V86H22" stroke="url(#goldGrad)" strokeWidth="1.5" />
        <path d="M86 78V86H78" stroke="url(#goldGrad)" strokeWidth="1.5" />

        {/* Stylized Interlocking J + S + Alpha (α) Emblem */}
        {/* Letter J Stem and Hook */}
        <path 
          d="M34 26H42V62C42 69 37 74 30 74C25 74 21 71 19 67" 
          stroke="url(#goldGrad)" 
          strokeWidth="3.2" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Letter S & Alpha loop arch */}
        <path 
          d="M68 33C64 28 56 28 50 32C44 36 44 43 51 47L58 51C66 55 67 63 61 68C55 73 45 72 40 66" 
          stroke="url(#goldGrad)" 
          strokeWidth="3.2" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Alpha Arch Apex / Keystone Accent */}
        <path 
          d="M50 18L53 23H47L50 18Z" 
          fill="url(#goldGrad)" 
        />
      </svg>

      {/* Brand Wordmark */}
      <div className="flex flex-col tracking-wider">
        <div className={`font-serif tracking-[0.2em] font-semibold uppercase leading-none ${
          size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-2xl' : 'text-lg'
        } ${textColor}`}>
          JS ALPHA
        </div>
        <div className={`tracking-[0.32em] uppercase font-sans font-medium text-[9px] mt-1 ${subtextColor}`}>
          INTERIORS {showSubtitle && <span className="text-[#A7A7A7] font-normal tracking-[0.2em]">· CANADA</span>}
        </div>
      </div>
    </div>
  );
};
