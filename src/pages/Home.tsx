import React from 'react';
import Hero from '../components/Hero';
import PracticeAreas from '../components/PracticeAreas';
import ContactForm from '../components/ContactForm';
import { BUSINESS_INFO } from '../constants';
import { CheckCircle2, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main>
      <Hero />

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1000"
                alt="Lawyer Consultation"
                className="rounded-2xl shadow-2xl z-10 relative"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold/10 rounded-2xl -z-0 hidden md:block"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-navy/5 rounded-full -z-0 pointer-events-none"></div>
            </div>

            <div>
              <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">About Our Firm</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-8 leading-tight">
                Dedicated to Excellence in Legal Representation
              </h3>
              <p className="text-navy/70 text-lg mb-8 leading-relaxed">
                HTNZ Law Corporation is a premier law firm based in Surrey, BC. We specialize in providing personalized, high-quality legal services across multiple practice areas. Our approach is built on trust, clear communication, and a relentless commitment to our clients' success.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Personalized legal support tailored to your needs",
                  "Clear and transparent communication",
                  "Professional expertise with a client-focused approach",
                  "Proven track record of success in Surrey, BC"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={20} />
                    <span className="text-navy/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <a href="/about" className="btn-outline inline-block">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <PracticeAreas />

      {/* Testimonials */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="text-gold fill-current" size={24} />
              ))}
            </div>
            <h3 className="text-4xl font-serif font-bold mb-4">What Our Clients Say</h3>
            <p className="text-gray-400">Trusted by hundreds of families and businesses in Surrey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10"
            >
              <Quote className="text-gold mb-6 opacity-50" size={40} />
              <p className="text-xl italic mb-8 leading-relaxed text-gray-200">
                "Hands down the best lawyer my wife and I have worked with. Nazneen is exceptionally personable and communicative. She made a complex process feel simple and stress-free."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center font-bold text-gold">
                  JD
                </div>
                <div>
                  <h4 className="font-bold">John D.</h4>
                  <p className="text-sm text-gray-500">Real Estate Client</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10"
            >
              <Quote className="text-gold mb-6 opacity-50" size={40} />
              <p className="text-xl italic mb-8 leading-relaxed text-gray-200">
                "Professional, knowledgeable, and truly cares about her clients. I highly recommend HTNZ Law for anyone needing immigration assistance in Surrey."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center font-bold text-gold">
                  AS
                </div>
                <div>
                  <h4 className="font-bold">Amrit S.</h4>
                  <p className="text-sm text-gray-500">Immigration Client</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">
            Ready to Discuss Your Case?
          </h3>
          <p className="text-navy/80 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today for a professional legal consultation. We are here to help you navigate your legal journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-navy text-white px-10 py-4 rounded-md font-bold hover:bg-navy/90 transition-all">
              Call {BUSINESS_INFO.phone}
            </a>
            <a href="/contact" className="bg-white text-navy px-10 py-4 rounded-md font-bold hover:bg-gray-50 transition-all">
              Book Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
              <h3 className="text-4xl font-serif font-bold text-navy mb-8">Visit Our Office</h3>

              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center text-navy flex-shrink-0">
                    <Icons.MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Location</h4>
                    <p className="text-navy/60">{BUSINESS_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center text-navy flex-shrink-0">
                    <Icons.Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                    <p className="text-navy/60">{BUSINESS_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center text-navy flex-shrink-0">
                    <Icons.Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Office Hours</h4>
                    <p className="text-navy/60">{BUSINESS_INFO.hours}</p>
                  </div>
                </div>
              </div>

              <div className="h-80 rounded-2xl overflow-hidden border border-navy/10 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.378939765275!2d-122.8735!3d49.148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d97777777777%3A0x7777777777777777!2s12677+80+Ave+%23201%2C+Surrey%2C+BC+V3W+7J9%2C+Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div id="consultation-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import * as Icons from 'lucide-react';
