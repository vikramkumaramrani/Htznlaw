import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="flex items-center justify-center w-14 h-14 bg-gold text-white rounded-full shadow-2xl animate-bounce hover:scale-110 transition-transform"
        aria-label="Call Now"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
