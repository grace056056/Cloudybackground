import catImage from "figma:asset/10068317099de25a870959684ea22b37d5f60ba2.png";

// SVG-based cloud-cat logo mark
export function CloudyCatMark({ size = 200 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.88}
      viewBox="0 0 240 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse cx="120" cy="205" rx="72" ry="7" fill="#9DCDD6" opacity="0.4" />

      {/* Left cat ear */}
      <path
        d="M58 95 L42 42 L88 72 Z"
        fill="#E8B86A"
        stroke="#2B2B2B"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Left ear inner highlight */}
      <ellipse cx="66" cy="70" rx="8" ry="13" fill="#fff" opacity="0.5" transform="rotate(-15 66 70)" />

      {/* Right cat ear (black patch) */}
      <path
        d="M182 95 L198 42 L152 72 Z"
        fill="#2B2B2B"
        stroke="#2B2B2B"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Right ear inner highlight */}
      <ellipse cx="176" cy="70" rx="8" ry="13" fill="#fff" opacity="0.25" transform="rotate(15 176 70)" />

      {/* Cloud bumps - back layer */}
      <circle cx="54" cy="118" r="34" fill="#E8B86A" />
      <circle cx="186" cy="118" r="34" fill="#E8B86A" />
      <circle cx="90" cy="100" r="40" fill="#E8B86A" />
      <circle cx="150" cy="100" r="40" fill="#E8B86A" />

      {/* Main cloud body */}
      <rect x="42" y="112" width="156" height="80" rx="38" fill="#E8B86A" />

      {/* Black calico patch - upper right */}
      <path
        d="M148 88 Q178 85 196 108 Q198 130 185 148 Q165 155 148 148 Q130 140 128 118 Q126 96 148 88Z"
        fill="#2B2B2B"
      />

      {/* Outline */}
      <circle cx="54" cy="118" r="34" stroke="#2B2B2B" strokeWidth="3.5" fill="none" />
      <circle cx="186" cy="118" r="34" stroke="#2B2B2B" strokeWidth="3.5" fill="none" />
      <circle cx="90" cy="100" r="40" stroke="#2B2B2B" strokeWidth="3.5" fill="none" />
      <circle cx="150" cy="100" r="40" stroke="#2B2B2B" strokeWidth="3.5" fill="none" />
      <rect x="42" y="112" width="156" height="80" rx="38" stroke="#2B2B2B" strokeWidth="3.5" fill="none" />

      {/* White muzzle */}
      <ellipse cx="120" cy="162" rx="32" ry="22" fill="#FFFFFF" />

      {/* Left closed eye */}
      <path
        d="M90 128 Q94 140 98 128"
        stroke="#2B2B2B"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right closed eye */}
      <path
        d="M142 128 Q146 140 150 128"
        stroke="#2B2B2B"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Nose - small w shape */}
      <path
        d="M114 158 Q117 162 120 158 Q123 162 126 158"
        stroke="#2B2B2B"
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Left whiskers */}
      <line x1="68" y1="160" x2="88" y2="163" stroke="#2B2B2B" strokeWidth="2" strokeLinecap="round" />
      <line x1="66" y1="167" x2="87" y2="167" stroke="#2B2B2B" strokeWidth="2" strokeLinecap="round" />
      <line x1="68" y1="174" x2="88" y2="171" stroke="#2B2B2B" strokeWidth="2" strokeLinecap="round" />

      {/* Right whiskers */}
      <line x1="172" y1="160" x2="152" y2="163" stroke="#2B2B2B" strokeWidth="2" strokeLinecap="round" />
      <line x1="174" y1="167" x2="153" y2="167" stroke="#2B2B2B" strokeWidth="2" strokeLinecap="round" />
      <line x1="172" y1="174" x2="152" y2="171" stroke="#2B2B2B" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Horizontal logo (mark + wordmark)
export function CloudyLogoHorizontal({ size = 1 }: { size?: number }) {
  const w = 380 * size;
  const h = 100 * size;
  return (
    <svg width={w} height={h} viewBox="0 0 380 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cat-cloud icon simplified for small use */}
      <g transform="scale(0.45) translate(0, 5)">
        {/* Left ear */}
        <path d="M58 95 L42 42 L88 72 Z" fill="#E8B86A" stroke="#2B2B2B" strokeWidth="3.5" strokeLinejoin="round" />
        {/* Right ear */}
        <path d="M182 95 L198 42 L152 72 Z" fill="#2B2B2B" stroke="#2B2B2B" strokeWidth="3.5" strokeLinejoin="round" />
        {/* Cloud bumps */}
        <circle cx="54" cy="118" r="34" fill="#E8B86A" />
        <circle cx="186" cy="118" r="34" fill="#E8B86A" />
        <circle cx="90" cy="100" r="40" fill="#E8B86A" />
        <circle cx="150" cy="100" r="40" fill="#E8B86A" />
        <rect x="42" y="112" width="156" height="80" rx="38" fill="#E8B86A" />
        {/* Patch */}
        <path d="M148 88 Q178 85 196 108 Q198 130 185 148 Q165 155 148 148 Q130 140 128 118 Q126 96 148 88Z" fill="#2B2B2B" />
        {/* Outlines */}
        <circle cx="54" cy="118" r="34" stroke="#2B2B2B" strokeWidth="3.5" fill="none" />
        <circle cx="186" cy="118" r="34" stroke="#2B2B2B" strokeWidth="3.5" fill="none" />
        <circle cx="90" cy="100" r="40" stroke="#2B2B2B" strokeWidth="3.5" fill="none" />
        <circle cx="150" cy="100" r="40" stroke="#2B2B2B" strokeWidth="3.5" fill="none" />
        <rect x="42" y="112" width="156" height="80" rx="38" stroke="#2B2B2B" strokeWidth="3.5" fill="none" />
        {/* Muzzle */}
        <ellipse cx="120" cy="162" rx="32" ry="22" fill="#FFFFFF" />
        {/* Eyes */}
        <path d="M90 128 Q94 140 98 128" stroke="#2B2B2B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M142 128 Q146 140 150 128" stroke="#2B2B2B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        {/* Nose */}
        <path d="M114 158 Q117 162 120 158 Q123 162 126 158" stroke="#2B2B2B" strokeWidth="2.8" strokeLinecap="round" fill="none" />
        {/* Whiskers */}
        <line x1="68" y1="160" x2="88" y2="163" stroke="#2B2B2B" strokeWidth="2" strokeLinecap="round" />
        <line x1="66" y1="167" x2="87" y2="167" stroke="#2B2B2B" strokeWidth="2" strokeLinecap="round" />
        <line x1="172" y1="160" x2="152" y2="163" stroke="#2B2B2B" strokeWidth="2" strokeLinecap="round" />
        <line x1="174" y1="167" x2="153" y2="167" stroke="#2B2B2B" strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* Wordmark */}
      <text
        x="112"
        y="68"
        fontFamily="'Fredoka One', cursive"
        fontSize="58"
        fill="#2B2B2B"
        letterSpacing="-1"
      >
        Cloudy
      </text>
    </svg>
  );
}

export { catImage };
