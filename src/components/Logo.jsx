export default function Logo({ size = 'default' }) {
  const isSmall = size === 'small';
  const boxSize = isSmall ? 32 : 36;

  return (
    <a href="#home" className="flex items-center gap-2.5">
      <svg width={boxSize} height={boxSize} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill="url(#logo-grad)" />
        <path d="M12 28V12h2.8l8.4 11.2V12H26v16h-2.8L14.8 16.8V28z" fill="white" />
      </svg>
      <span className="font-display font-semibold tracking-tight" style={{ fontSize: isSmall ? 15 : 17 }}>
        <span className="text-white">Nexon</span>
        <span className="text-primary-400 ml-1 font-medium" style={{ fontSize: isSmall ? 12 : 13 }}>Software Solutions</span>
      </span>
    </a>
  );
}
