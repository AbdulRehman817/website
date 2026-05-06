'use client';
import type { Route } from "@/app/routes/+types/contact";
import { Phone, MapPin, Clock, Star, Send } from "lucide-react";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us - Capt. Arshad Clinic" },
    { name: "description", content: "Contact Capt. Arshad Clinic in Karachi. Visit us at Raja Mansion opposite Civil Hospital or call +92 331 2102592. Walk-ins welcome." },
  ];
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would send to a backend
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-600">
              Have questions or need to schedule a visit? We're here to help. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="bg-white p-8 rounded-3xl shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Address</h4>
                      <p className="text-slate-600">1/4, Raja Mansion, Bezonji St, opp. Civil Hospital, KMC Work Area, Karachi, Pakistan</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Phone</h4>
                      <a href="tel:+923312102592" className="text-teal-600 hover:text-teal-700 font-medium text-lg">
                        +92 331 2102592
                      </a>
                      <p className="text-sm text-slate-500 mt-1">Tap to call directly</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Hours</h4>
                      <p className="text-slate-600">Monday - Saturday: 9:00 AM - 9:00 PM</p>
                      <p className="text-slate-600">Sunday: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-8 rounded-3xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-white">5.0</span>
                  <div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-teal-100 mt-1">Patient Rating</p>
                  </div>
                </div>
                <p className="text-teal-100">
                  Our patients consistently rate us 5 stars for our excellent service and compassionate care.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h3>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">Thank You!</h4>
                  <p className="text-slate-600">Your message has been sent. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                      placeholder="+92 3XX XXXXXXX"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email (Optional)</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-teal-600/30 hover:shadow-teal-600/40 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-white p-4 rounded-3xl shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.483444954789!2d67.01!3d24.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCivil%20Hospital%20Karachi!5e0!3m2!1sen!2s!4v1699900000000"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '1.5rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Capt. Arshad Clinic Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prefer to Call?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            For immediate assistance, give us a call. We're ready to help you.
          </p>
          <a href="tel:+923312102592" className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-xl font-semibold text-xl transition-all duration-300 hover:-translate-y-0.5">
            <Phone className="w-6 h-6" />
            +92 331 2102592
          </a>
        </div>
      </section>
    </div>
  );
}
