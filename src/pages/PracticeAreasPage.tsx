import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PRACTICE_AREAS } from '../constants';
import * as Icons from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function PracticeAreasPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <main className="pt-32 pb-24">
      {/* Header */}
      <section className="bg-navy py-20 text-white mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Practice Areas</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Expert legal support across a wide range of specialties. We are here to help you navigate your legal challenges.
          </p>
        </div>
      </section>

      {/* Detailed Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="space-y-24">
          {PRACTICE_AREAS.map((area, index) => {
            const IconComponent = (Icons as any)[area.icon];
            const isEven = index % 2 === 0;

            return (
              <div
                key={area.id}
                id={area.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center mb-8 text-gold">
                    <IconComponent size={32} />
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-navy mb-6">{area.title}</h2>
                  <p className="text-navy/70 text-lg mb-8 leading-relaxed">
                    {area.description} Our firm provides comprehensive legal support in this area, ensuring that your rights are protected and your goals are achieved. We handle everything from initial consultation to final resolution.
                  </p>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-center space-x-3">
                      <Icons.CheckCircle2 className="text-gold" size={20} />
                      <span className="text-navy/80">Expert legal advice and strategy</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Icons.CheckCircle2 className="text-gold" size={20} />
                      <span className="text-navy/80">Document preparation and review</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Icons.CheckCircle2 className="text-gold" size={20} />
                      <span className="text-navy/80">Representation in negotiations and court</span>
                    </li>
                  </ul>
                  <a href="/contact" className="btn-gold inline-block">
                    Book a Consultation
                  </a>
                </div>
                <div className={`relative ${isEven ? '' : 'lg:order-1'}`}>
                  <img
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1589829545856-d10d557cf95f' : index === 1 ? '1560518883-ce09059eeffa' : index === 2 ? '1521791136064-7986c2923216' : '1450101499163-c8848c66ca85'}?auto=format&fit=crop&q=80&w=1000`}
                    alt={area.title}
                    className="rounded-2xl shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-off-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-serif font-bold text-navy mb-8">Not sure which service you need?</h3>
          <p className="text-navy/60 text-lg mb-12">
            Every legal situation is unique. Contact us for a preliminary consultation where we can discuss your specific needs and determine the best path forward.
          </p>
          <div id="contact-form">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
