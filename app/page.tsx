'use client';
import type { Route } from "@/app/routes/+types/_index";
import { Phone, MapPin, Clock, Star, Shield, Heart, Users, CheckCircle, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Capt. Arshad Clinic - Trusted Walk-In Medical Care in Karachi" },
    { name: "description", content: "Capt. Arshad Clinic offers fast, reliable, and professional walk-in healthcare services in Karachi. Conveniently located near Civil Hospital. Call +92 331 2102592." },
  ];
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Call Button */}
      <a 
        href="tel:+923312102592"
        className="fixed bottom-6 right-6 z-50 bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-2xl shadow-teal-600/40 transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Call now"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-blue-50">
        {/* Background decorations */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              {/* Rating Badge */}
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-slate-700">5.0 Rating</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
                Trusted Walk-In Medical Care in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  Karachi
                </span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Fast, reliable, and professional healthcare services. Your health is our priority at Capt. Arshad Clinic, conveniently located near Civil Hospital.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a 
                  href="tel:+923312102592"
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-teal-600/30 hover:shadow-teal-600/40 hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-xl font-semibold border-2 border-slate-200 transition-all duration-300 hover:border-teal-300 hover:-translate-y-0.5"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-slate-600">
                  <Shield className="w-5 h-5 text-teal-600" />
                  <span>Verified Clinic</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Heart className="w-5 h-5 text-teal-600" />
                  <span>Patient-First Care</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <span>Walk-Ins Welcome</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://assets.ls-assets.com/provider/istock/2237183726.jpg?w=1200"
                  alt="Male doctor wearing a lab coat and stethoscope, sitting at a desk and explaining diagnosis with hand gestures to a female patient during a healthcare consultation"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Open Today</p>
                    <p className="text-sm text-slate-500">Walk-ins welcome</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-teal-600 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://assets.ls-assets.com/provider/istock/2208809544.jpg?w=768"
                  alt="Happy mature man communicating with a doctor in waiting room"
                  className="rounded-2xl shadow-lg h-64 object-cover w-full"
                />
                <img 
                  src="https://assets.ls-assets.com/provider/istock/2210107024.jpg?w=768"
                  alt="Smiling professional male doctor holding clipboard talking to female patient"
                  className="rounded-2xl shadow-lg h-64 object-cover w-full mt-8"
                />
              </div>
              {/* Experience Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-teal-600 to-teal-700 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm opacity-90">Years Experience</p>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-wider mb-4">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Your Trusted Healthcare Partner in Karachi
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Capt. Arshad Clinic has been serving the community of Karachi with quality healthcare services for over a decade. Located opposite Civil Hospital in the heart of KMC Work Area, we provide accessible, affordable, and compassionate medical care to all our patients.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our experienced medical team is committed to delivering personalized care that addresses your unique health needs. We believe in building lasting relationships with our patients based on trust, transparency, and excellent medical practice.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Expert Team</h4>
                    <p className="text-sm text-slate-500">Qualified and experienced medical professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Patient Care</h4>
                    <p className="text-sm text-slate-500">Compassionate and personalized approach</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Central Location</h4>
                    <p className="text-sm text-slate-500">Easy access near Civil Hospital</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Flexible Hours</h4>
                    <p className="text-sm text-slate-500">Convenient walk-in timings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-wider mb-4">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Comprehensive Healthcare Services
            </h2>
            <p className="text-lg text-slate-600">
              We offer a wide range of medical services to meet your healthcare needs. Our clinic provides quality care with a personal touch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">General Consultation</h3>
              <p className="text-slate-600 leading-relaxed">
                Comprehensive medical consultations for all your health concerns. Our experienced doctors provide accurate diagnoses and effective treatment plans.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Walk-In Care</h3>
              <p className="text-slate-600 leading-relaxed">
                No appointment needed! Simply walk in during our operating hours and receive prompt medical attention. We value your time and ensure minimal wait times.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Health Checkups</h3>
              <p className="text-slate-600 leading-relaxed">
                Regular health screenings and checkups to keep you informed about your health status. Early detection leads to better outcomes and peace of mind.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Basic Lab Tests</h3>
              <p className="text-slate-600 leading-relaxed">
                On-site basic laboratory tests for quick results. Get your blood work and other diagnostics done conveniently at our clinic.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Quick Service</h3>
              <p className="text-slate-600 leading-relaxed">
                We understand your time is valuable. Our efficient processes ensure you spend less time waiting and more time feeling better.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Follow-Up Care</h3>
              <p className="text-slate-600 leading-relaxed">
                Continued support after your visit. We believe in building long-term relationships with our patients for better health outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-wider mb-4">Patient Reviews</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              What Our Patients Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-slate-800">5.0</span>
              <span className="text-slate-500">/ 5.0</span>
            </div>
            <p className="text-lg text-slate-600">
              Our patients trust us for our professional, friendly, and reliable healthcare services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-3xl border border-teal-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed italic">
                "Excellent service and very professional staff. Capt. Arshad is very knowledgeable and takes time to explain everything clearly. Highly recommended for anyone looking for a reliable walk-in clinic."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-200 rounded-full flex items-center justify-center">
                  <span className="text-teal-700 font-semibold">AK</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Ahmed Khan</p>
                  <p className="text-sm text-slate-500">Verified Patient</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed italic">
                "Very clean clinic and the staff is extremely courteous. Got my checkup done quickly without any hassle. The doctor was thorough and very caring. Will definitely come back if needed."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-semibold">SF</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Sara Fatima</p>
                  <p className="text-sm text-slate-500">Verified Patient</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-3xl border border-emerald-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed italic">
                "The convenience of a walk-in clinic with the quality of a private hospital. Located right opposite Civil Hospital, easy to find. Quick service and the doctor really listens to your concerns."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
                  <span className="text-emerald-700 font-semibold">MR</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Muhammad Raza</p>
                  <p className="text-sm text-slate-500">Verified Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Visit Us Today for Your Healthcare Needs
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              No appointment needed. Simply walk in during our operating hours and receive quality medical care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+923312102592"
                className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Call for Quick Consultation
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-600">
              Have questions or need to schedule a visit? Contact us using the information below or fill out the form.
            </p>
          </div>

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
                      <a href="tel:+923312102592" className="text-teal-600 hover:text-teal-700 font-medium">
                        +92 331 2102592
                      </a>
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

              {/* Map */}
              <div className="bg-white p-3 rounded-3xl shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.483444954789!2d67.01!3d24.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCivil%20Hospital%20Karachi!5e0!3m2!1sen!2s!4v1699900000000"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Capt. Arshad Clinic Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-teal-600/30 hover:shadow-teal-600/40"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <img 
                src="https://assets.ls-assets.com/uploads/198cb3d4-0184-4a4b-8f8c-6a6ae48e3c1c/a8daf82f-5211-4885-b1df-453fba86e6c1.png?w=200" 
                alt="Capt. Arshad Clinic Logo" 
                className="h-14 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-slate-400 mb-6 max-w-md">
                Your trusted walk-in medical clinic in Karachi. Providing fast, reliable, and professional healthcare services near Civil Hospital since over a decade.
              </p>
              <div className="flex items-center gap-2 text-teal-400">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm">5.0 Rating from our patients</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-teal-400 transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-teal-400 transition-colors">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('reviews')} className="text-slate-400 hover:text-teal-400 transition-colors">
                    Reviews
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-teal-400 transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-400">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>1/4, Raja Mansion, Bezonji St, opp. Civil Hospital, KMC Work Area, Karachi</span>
                </li>
                <li>
                  <a href="tel:+923312102592" className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors">
                    <Phone className="w-5 h-5" />
                    +92 331 2102592
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 Capt. Arshad Clinic. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Your Health, Our Priority
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
