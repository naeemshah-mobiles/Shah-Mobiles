export function ShahMobileLogo({ size = 40 }: { size?: number }) {
  const id = "gold_" + size;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#F0D060" />
        </linearGradient>
      </defs>

      {/* Dark rounded square background */}
      <rect width="40" height="40" rx="9" fill="#0A0A0A" />
      <rect width="40" height="40" rx="9" fill={`url(#${id})`} fillOpacity="0.08" />
      <rect x="0.5" y="0.5" width="39" height="39" rx="8.5" stroke={`url(#${id})`} strokeOpacity="0.6" />

      {/* Phone shape */}
      <rect x="14" y="8" width="12" height="20" rx="2.5" fill={`url(#${id})`} fillOpacity="0.12" stroke={`url(#${id})`} strokeWidth="1.2" />
      {/* Phone screen */}
      <rect x="16" y="11" width="8" height="12" rx="1" fill={`url(#${id})`} fillOpacity="0.25" />
      {/* Phone home button dot */}
      <circle cx="20" cy="25.5" r="1" fill={`url(#${id})`} />

      {/* Circuit lines */}
      {/* Top left branch */}
      <line x1="14" y1="13" x2="9" y2="13" stroke={`url(#${id})`} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="9" cy="13" r="1.2" fill={`url(#${id})`} />
      <line x1="9" y1="13" x2="9" y2="10" stroke={`url(#${id})`} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="9" cy="10" r="1.2" fill={`url(#${id})`} />

      {/* Bottom right branch */}
      <line x1="26" y1="22" x2="31" y2="22" stroke={`url(#${id})`} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="31" cy="22" r="1.2" fill={`url(#${id})`} />
      <line x1="31" y1="22" x2="31" y2="25" stroke={`url(#${id})`} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="31" cy="25" r="1.2" fill={`url(#${id})`} />

      {/* "S" letter overlay */}
      <text
        x="20"
        y="36"
        textAnchor="middle"
        fontSize="7"
        fontWeight="900"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="1"
        fill={`url(#${id})`}
        fillOpacity="0.9"
      >
        SM
      </text>
    </svg>
  );
}
