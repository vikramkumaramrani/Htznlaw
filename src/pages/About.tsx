import React from 'react';
import { CheckCircle2, Award, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="pt-32 pb-24">
      {/* Header */}
      <section className="bg-navy py-20 text-white mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">About Our Firm</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building trust through excellence, integrity, and personalized legal representation in Surrey, BC.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Our Story</h2>
            <h3 className="text-4xl font-serif font-bold text-navy mb-8">A Commitment to Justice and Excellence</h3>
            <div className="space-y-6 text-navy/70 text-lg leading-relaxed">
              <p>
                HTNZ Law Corporation was founded with a clear mission: to provide high-quality legal services that are accessible, professional, and client-focused. We understand that legal issues can be stressful and complex, which is why we prioritize clear communication and personalized support.
              </p>
              <p>
                Based in the heart of Surrey, BC, we have built a reputation for being a firm that truly cares about its clients. Whether you are navigating a family dispute, buying a home, or growing a business, we are here to guide you every step of the way.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000"
              alt="Legal Documents"
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/20 rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-off-white py-24 mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Our Values</h2>
            <h3 className="text-4xl font-serif font-bold text-navy">What Defines Us</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-8">
                <Shield size={32} />
              </div>
              <h4 className="text-2xl font-serif font-bold mb-4">Integrity</h4>
              <p className="text-navy/60">We uphold the highest ethical standards in every case we handle, ensuring transparency and honesty.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-8">
                <Users size={32} />
              </div>
              <h4 className="text-2xl font-serif font-bold mb-4">Client-Focused</h4>
              <p className="text-navy/60">Your goals are our priority. We listen, understand, and develop strategies tailored to your unique needs.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-8">
                <Award size={32} />
              </div>
              <h4 className="text-2xl font-serif font-bold mb-4">Excellence</h4>
              <p className="text-navy/60">We strive for excellence in everything we do, from legal research to courtroom representation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lawyer Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-3xl overflow-hidden text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-20">
              <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Meet Our Founder</h2>
              <h3 className="text-4xl font-serif font-bold mb-8">Nazneen — Principal Lawyer</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Nazneen is known for her personable approach and exceptional communication skills. With years of experience serving the Surrey community, she has helped countless clients navigate complex legal waters with confidence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span>Member of the Law Society of British Columbia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span>Expert in Family and Real Estate Law</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span>Dedicated to Community Service in Surrey</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000"
                alt="Professional Lawyer"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
