import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "glass-nav py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <span className={cn(
              "text-2xl font-serif font-bold tracking-tight",
              !scrolled && location.pathname === '/' ? "text-navy" : "text-navy"
            )}>
              HTNZ <span className="text-gold">LAW</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-80">
              Corporation
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gold",
                  location.pathname === link.path ? "text-gold" : "text-navy"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center space-x-2 text-navy font-semibold hover:text-gold transition-colors"
            >
              <Phone size={18} className="text-gold" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <Link to="/contact" className="btn-gold text-sm py-2 px-5">
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-navy">
              <Phone size={20} />
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-navy">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-navy border-b border-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-gold w-full block text-center"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
