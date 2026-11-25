import React from 'react';
import { useEffect, useState } from 'react';
import { clubs } from '../config/clubs.config';
import { branding } from '../config/branding.config';

/**
 * Simple logo slot component. Looks up the requested logo path in the config; if missing, falls back to a colored monogram.
 */
export const LogoSlot: React.FC<{slot:string; className?:string}> = ({slot, className}) => {
  const [src, setSrc] = useState<string>('');

  useEffect(() => {
    // Resolve logo based on slot name
    const resolve = () => {
      // club logos
      const club = clubs.find(c => c.shortName.toLowerCase() === slot.toLowerCase() || c.id === slot);
      if (club && club.logo) return club.logo;
      // branding logos
      if (branding && (branding.collegeLogo && slot === 'college')) return branding.collegeLogo;
      // fallback monogram (simple colored square)
      return `/assets/logos/monogram-${slot}.svg`;
    };
    setSrc(resolve());
  }, [slot]);

  return <img src={src} alt={`${slot} logo`} className={className} loading="lazy" />;
};
