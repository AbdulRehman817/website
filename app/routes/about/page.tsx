import type { Route } from "@/app/routes/+types/about";
import { Phone, MapPin, Clock, Star, Shield, Heart, Users, CheckCircle } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us - Capt. Arshad Clinic" },
    { name: "description", content: "Learn about Capt. Arshad Clinic, your trusted walk-in medical clinic in Karachi. Over 10 years of experience providing quality healthcare near Civil Hospital." },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-wider mb-4">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Your Trusted Healthcare Partner in Karachi
            </h1>
            <p className="text-xl text-slate-600">
              Providing compassionate, professional medical care to the Karachi community for over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Capt. Arshad Clinic was founded with a simple mission: to provide accessible, affordable, and high-quality healthcare to the people of Karachi. Located opposite Civil Hospital in the heart of KMC Work Area, our clinic has become a trusted name in the community.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Led by Capt. Arshad, a seasoned medical professional with years of experience, our team is committed to delivering personalized care that addresses your unique health needs. We believe in building lasting relationships with our patients based on trust, transparency, and excellent medical practice.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you need a routine checkup, treatment for an illness, or simply professional medical advice, we're here for you. No appointments needed – just walk in during our operating hours.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://assets.ls-assets.com/provider/istock/2210107024.jpg?w=1200"
                alt="Smiling professional male doctor holding clipboard talking to female patient"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-teal-600 to-teal-700 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm opacity-90">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Our Core Values</h2>
            <p className="text-lg text-slate-600">
              These principles guide everything we do at Capt. Arshad Clinic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Compassion</h3>
              <p className="text-slate-600">We treat every patient with kindness, empathy, and respect.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Excellence</h3>
              <p className="text-slate-600">We maintain the highest standards of medical care and professionalism.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Accessibility</h3>
              <p className="text-slate-600">Quality healthcare should be available to everyone, when they need it.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Efficiency</h3>
              <p className="text-slate-600">We value your time and ensure minimal wait times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://assets.ls-assets.com/provider/istock/2208809544.jpg?w=768"
                alt="Happy mature man communicating with a doctor in waiting room"
                className="rounded-2xl shadow-lg h-48 object-cover w-full"
              />
              <img 
                src="https://assets.ls-assets.com/provider/istock/2229538647.jpg?w=768"
                alt="Woman with doctor reviewing medical records"
                className="rounded-2xl shadow-lg h-48 object-cover w-full mt-8"
              />
              <img 
                src="https://assets.ls-assets.com/provider/istock/2256552868.jpg?w=768"
                alt="Female patient listening to a doctor"
                className="rounded-2xl shadow-lg h-48 object-cover w-full -mt-4"
              />
              <img 
                src="https://assets.ls-assets.com/provider/istock/2215511952.jpg?w=768"
                alt="Healthy lifestyle and medical concept"
                className="rounded-2xl shadow-lg h-48 object-cover w-full mt-4"
              />
            </div>

            <div>
              <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-wider mb-4">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                The Capt. Arshad Clinic Difference
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                When you choose Capt. Arshad Clinic, you're choosing a healthcare partner who truly cares about your well-being. Here's what sets us apart:
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Experienced Medical Team</h4>
                    <p className="text-slate-500">Our doctors and staff bring years of medical expertise to serve your health needs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Central Location</h4>
                    <p className="text-slate-500">Easy to find, opposite Civil Hospital in KMC Work Area, Karachi.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Walk-In Friendly</h4>
                    <p className="text-slate-500">No appointments necessary. Visit us during our operating hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">5-Star Rating</h4>
                    <p className="text-slate-500">Our patients consistently rate us 5 stars for our service and care.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience Quality Healthcare?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Visit us today or give us a call to schedule your visit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+923312102592" className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5">
              <Phone className="w-5 h-5" />
              Call +92 331 2102592
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
