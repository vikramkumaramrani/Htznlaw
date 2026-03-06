import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24">
      {/* Header */}
      <section className="bg-navy py-20 text-white mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are here to help. Reach out to us via phone, email, or visit our office in Surrey.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-navy mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center text-gold flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Office</h4>
                    <p className="text-navy/60">{BUSINESS_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center text-gold flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-navy/60">{BUSINESS_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center text-gold flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-navy/60">{BUSINESS_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center text-gold flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Office Hours</h4>
                    <p className="text-navy/60">{BUSINESS_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-off-white p-8 rounded-2xl border border-navy/5">
              <h3 className="font-serif font-bold text-xl mb-4">Urgent Legal Matter?</h3>
              <p className="text-navy/60 mb-6">
                If you have an urgent legal issue that requires immediate attention, please call us directly for the fastest response.
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center space-x-2 text-gold font-bold hover:underline"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="mt-24">
        <div className="h-[500px] w-full grayscale hover:grayscale-0 transition-all duration-700">
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
      </section>
    </main>
  );
}
