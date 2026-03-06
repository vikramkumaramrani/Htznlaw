import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { PRACTICE_AREAS } from '../constants';
import { Link } from 'react-router-dom';

export default function PracticeAreas() {
  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">Comprehensive Legal Services</h3>
          <p className="text-navy/60 max-w-2xl mx-auto text-lg leading-relaxed">
            We offer a wide range of legal services tailored to meet the unique needs of our clients in Surrey and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS.map((area, index) => {
            const IconComponent = (Icons as any)[area.icon];
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-all group border border-navy/5"
              >
                <div className="w-14 h-14 bg-navy/5 rounded-lg flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors">
                  <IconComponent className="text-navy group-hover:text-gold transition-colors" size={28} />
                </div>
                <h4 className="text-2xl font-serif font-bold mb-4 text-navy">{area.title}</h4>
                <p className="text-navy/60 mb-8 leading-relaxed">
                  {area.description}
                </p>
                <Link
                  to={`/practice-areas#${area.id}`}
                  className="inline-flex items-center text-gold font-semibold hover:text-navy transition-colors"
                >
                  <span>Learn More</span>
                  <Icons.ChevronRight size={18} className="ml-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
