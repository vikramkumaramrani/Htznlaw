import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-bold text-navy mb-4">Thank You!</h3>
        <p className="text-navy/60 mb-8">
          Your consultation request has been sent successfully. We will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-gold font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-navy/5">
      <h3 className="text-3xl font-serif font-bold text-navy mb-2">Book a Consultation</h3>
      <p className="text-navy/60 mb-8">Fill out the form below and we'll contact you shortly.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">Full Name</label>
          <input
            required
            type="text"
            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">Phone Number</label>
          <input
            required
            type="tel"
            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-navy mb-2">Email Address</label>
        <input
          required
          type="email"
          className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
          placeholder="john@example.com"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-navy mb-2">Legal Issue</label>
        <select className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-white">
          <option>Family Law</option>
          <option>Real Estate Law</option>
          <option>Immigration Law</option>
          <option>Business Law</option>
          <option>Other</option>
        </select>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-semibold text-navy mb-2">Message</label>
        <textarea
          rows={4}
          className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none"
          placeholder="Briefly describe your situation..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full btn-gold py-4 flex items-center justify-center space-x-2 disabled:opacity-70"
      >
        {status === 'submitting' ? (
          <span>Sending...</span>
        ) : (
          <>
            <span>Schedule Consultation</span>
            <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}
