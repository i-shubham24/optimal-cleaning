import React from 'react';
import { motion } from 'motion/react';

/**
 * Wiping hand sticker component strictly replicating the Dribbble reference media_1790397107219.png
 * Features:
 * - Stylized hand holding an angled wiping cloth
 * - 3 diagonal motion wipe streaks
 * - 4-pointed sparkle stars
 * - Crisp brand blue line work with smooth rounded caps
 */
export default function CleaningHandSticker({ 
  className = "w-28 h-28", 
  color = "#0077C8", 
  accentColor = "#C90C12",
  animated = true 
}) {
  const content = (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-sm select-none pointer-events-none"
    >
      {/* 4-Pointed Sparkle Star (Top Right) */}
      <g stroke={color} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 152 42 Q 152 50 160 50 Q 152 50 152 58 Q 152 50 144 50 Q 152 50 152 42 Z" fill="#E0F2FE" />
        <line x1="152" y1="36" x2="152" y2="40" />
        <line x1="152" y1="60" x2="152" y2="64" />
        <line x1="140" y1="50" x2="144" y2="50" />
        <line x1="160" y1="50" x2="164" y2="50" />
      </g>

      {/* 4-Pointed Sparkle Star (Bottom Right) */}
      <g stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 158 132 Q 158 138 164 138 Q 158 138 158 144 Q 158 138 152 138 Q 158 138 158 132 Z" fill="#E0F2FE" />
        <line x1="158" y1="127" x2="158" y2="130" />
        <line x1="158" y1="146" x2="158" y2="149" />
        <line x1="149" y1="138" x2="152" y2="138" />
        <line x1="164" y1="138" x2="167" y2="138" />
      </g>

      {/* 3 Wipe Motion Streaks Trailing Down Diagonally */}
      <g stroke={color} strokeWidth="5.5" strokeLinecap="round">
        <line x1="116" y1="126" x2="142" y2="158" />
        <line x1="102" y1="138" x2="128" y2="170" />
        <line x1="88" y1="150" x2="114" y2="182" />
      </g>

      {/* Angled Cleaning Cloth (Tilted Rounded Polygon) */}
      <path
        d="M 68 28 
           L 132 80 
           C 136 83 138 88 136 93 
           L 108 128 
           C 106 131 102 132 98 130 
           L 42 84 
           C 38 81 37 75 40 71 
           L 61 31 
           C 63 28 66 27 68 28 Z"
        fill="#FFFFFF"
        stroke={color}
        strokeWidth="6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* The Hand Gripping the Cloth */}
      {/* Wrist / Palm extending from bottom left */}
      <path
        d="M 42 120 
           L 56 102 
           C 57 100 59 99 61 100 
           L 76 112 
           C 78 114 78 117 76 119 
           L 62 135 
           C 54 145 42 143 36 135 
           L 30 126"
        fill="#FFFFFF"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Thumb grasping the top edge */}
      <path
        d="M 52 82 
           C 50 74 54 64 62 58 
           C 67 54 74 57 77 62 
           L 84 76"
        fill="#FFFFFF"
        stroke={color}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Four Fingers (Index, Middle, Ring, Pinky) */}
      {/* Finger 1 (Index) */}
      <path
        d="M 75 67 
           L 100 48 
           C 104 45 110 47 112 52 
           C 114 56 112 62 107 65 
           L 84 83"
        fill="#FFFFFF"
        stroke={color}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Finger 2 (Middle) */}
      <path
        d="M 83 75 
           L 112 53 
           C 116 50 122 52 124 57 
           C 126 61 124 67 119 70 
           L 91 92"
        fill="#FFFFFF"
        stroke={color}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Finger 3 (Ring) */}
      <path
        d="M 89 85 
           L 118 63 
           C 122 60 128 62 130 67 
           C 132 71 130 77 125 80 
           L 98 102"
        fill="#FFFFFF"
        stroke={color}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Finger 4 (Pinky) */}
      <path
        d="M 95 97 
           L 114 82 
           C 118 79 123 81 125 85 
           C 127 89 125 94 121 97 
           L 103 111"
        fill="#FFFFFF"
        stroke={color}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Subtle brand touch: mini Swiss red plus near top */}
      <g stroke={accentColor} strokeWidth="2.5" strokeLinecap="round">
        <line x1="42" y1="36" x2="42" y2="44" />
        <line x1="38" y1="40" x2="46" y2="40" />
      </g>
    </svg>
  );

  if (!animated) {
    return <div className={className}>{content}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -6, 0],
        rotate: [0, 2, 0, -2, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {content}
    </motion.div>
  );
}
