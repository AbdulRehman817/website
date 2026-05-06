import type { Route } from "./+types/services";
import { Phone, MapPin, CheckCircle } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Services - Capt. Arshad Clinic" },
    { name: "description", content: "Explore our comprehensive healthcare services at Capt. Arshad Clinic including general consultation, walk-in care, health checkups, and basic lab tests in Karachi." },
  ];
}

export default function Services() {
  const services = [
    {
      title: "General Consultation",
      description: "Comprehensive medical consultations for all your health concerns. Our experienced doctors provide accurate diagnoses and effective treatment plans tailored to your needs.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      color: "from-teal-500 to-teal-600",
      features: ["Diagnosis & treatment", "Health assessments", "Medical advice", "Prescription management"]
    },
    {
      title: "Walk-In Care",
      description: "No appointment needed! Simply walk in during our operating hours and receive prompt medical attention. We value your time and ensure minimal wait times.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-600",
      features: ["No appointments", "Quick service", "Flexible hours", "Immediate care"]
    },
    {
      title: "Health Checkups",
      description: "Regular health screenings and checkups to keep you informed about your health status. Early detection leads to better outcomes and peace of mind.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-emerald-500 to-emerald-600",
      features: ["Routine screenings", "Preventive care", "Early detection", "Health reports"]
    },
    {
      title: "Basic Lab Tests",
      description: "On-site basic laboratory tests for quick results. Get your blood work and other diagnostics done conveniently at our clinic without the hassle of visiting separate labs.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "from-purple-500 to-purple-600",
      features: ["Blood tests", "Quick results", "Convenient location", "Affordable rates"]
    },
    {
      title: "Quick Service",
      description: "We understand your time is valuable. Our efficient processes ensure you spend less time waiting and more time feeling better.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-amber-500 to-amber-600",
      features: ["Minimal wait time", "Efficient process", "On-time service", "Patient-focused"]
    },
    {
      title: "Follow-Up Care",
      description: "Continued support after your visit. We believe in building long-term relationships with our patients for better health outcomes.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "from-rose-500 to-rose-600",
      features: ["Continued monitoring", "Treatment adjustments", "Health tracking", "Personalized care"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-wider mb-4">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Comprehensive Healthcare Services
            </h1>
            <p className="text-xl text-slate-600">
              Quality medical care with a personal touch. We offer a wide range of services to meet all your healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-500">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Quality Care You Can Trust
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Capt. Arshad Clinic, we combine modern medical expertise with compassionate care. Our clinic is equipped to handle a variety of health concerns, from common illnesses to preventive health screenings.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We believe in treating the whole person, not just the symptoms. Our approach focuses on understanding your unique health situation and providing personalized care that addresses your specific needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+923312102592" className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-teal-600 hover:text-teal-600 transition-colors">
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </div>
            <div>
              <img 
                src="https://assets.ls-assets.com/provider/istock/2237183726.jpg?w=1200"
                alt="Doctor explaining diagnosis to patient"
                className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Medical Attention?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Walk in today or give us a call. No appointment necessary.
          </p>
          <a href="tel:+923312102592" className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5">
            <Phone className="w-5 h-5" />
            Call +92 331 2102592
          </a>
        </div>
      </section>
    </div>
  );
}
