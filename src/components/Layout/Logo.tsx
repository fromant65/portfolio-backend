"use client";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`logo-symbol ${className}`}>
      <svg
        /* Elimina width/height fijos para que el CSS controle el tamaño */
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 10 L15 50 M15 10 L35 10 M15 28 L30 28"
          stroke="url(#gradient1)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 15 L45 15 M35 15 L35 45"
          stroke="url(#gradient2)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="45" cy="25" r="2" fill="url(#gradient1)" opacity="0.7" />
        <circle cx="20" cy="35" r="1.5" fill="url(#gradient2)" opacity="0.5" />
        <path
          d="M10 45 L12 47 L10 49"
          stroke="url(#gradient1)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#06b6d4", stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#06b6d4", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
