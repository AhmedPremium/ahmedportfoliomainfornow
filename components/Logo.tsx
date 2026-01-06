import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M50 5L95 82.5H75L50 39.5L25 82.5H5L50 5Z"
          fill="currentColor"
          className="opacity-90"
        />
        <path
          d="M50 39.5L72.5 78L85 57L50 5L15 65.5L27.5 86.5L50 39.5Z"
          fill="currentColor"
          className="opacity-70"
        />
        <path
          d="M25 82.5L50 39.5L75 82.5H25Z"
          fill="currentColor"
          className="opacity-50"
        />
      </svg>
    </div>
  );
};

export default Logo;