import React from 'react';
import { BUSINESS_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">
              HTNZ <span className="text-gold">LAW</span> Corporation
            </h3>
            <p className="text-gray-400 max-w-md mb-6">
              Providing professional legal services in Surrey, BC. We are committed to protecting your rights and achieving the best outcomes for our clients.
            </p>
            <div className="flex space-x-4">
              {/* Social icons could go here */}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/practice-areas" className="hover:text-white transition-colors">Practice Areas</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-gold">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li>{BUSINESS_INFO.address}</li>
              <li>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li>{BUSINESS_INFO.hours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} HTNZ Law Corporation. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
