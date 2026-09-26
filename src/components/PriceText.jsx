import React from 'react';

export default function PriceText({ price, className = "" }) {
  if (!price) return null;

  // Check if price contains / hrs, / hour, or / Std.
  const match = price.match(/^(.*?)\s*\/\s*(hrs|Std\.|hour|hours)$/i);
  if (match) {
    const base = match[1];
    return (
      <span className={className}>
        {base} / <span className="font-italic-accent text-[#C90C12] font-serif">hrs</span>
      </span>
    );
  }

  return <span className={className}>{price}</span>;
}
