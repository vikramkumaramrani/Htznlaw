import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000"
          alt="Law Office"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest rounded mb-6">
              Trusted Legal Guidance in Surrey, BC
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-navy leading-tight mb-6">
              Protecting Your Rights, <br />
              <span className="text-gold italic">Securing Your Future.</span>
            </h1>
            <p className="text-lg text-navy/70 mb-10 leading-relaxed">
              HTNZ Law Corporation provides professional legal services focused on achieving the best outcomes for families, businesses, and individuals in Surrey and surrounding areas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-navy flex items-center justify-center space-x-2 bg-navy text-white px-8 py-4 rounded-md font-semibold hover:bg-navy/90 transition-all">
                <span>Book Consultation</span>
                <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="btn-outline flex items-center justify-center space-x-2 px-8 py-4 rounded-md border-2 border-navy text-navy font-semibold hover:bg-navy hover:text-white transition-all"
              >
                <Phone size={18} />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-6">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-navy/60">
                5.0 Google Rating from our clients
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gold/5 -skew-x-12 translate-x-1/2 z-0 hidden lg:block"></div>
    </section>
  );
}
