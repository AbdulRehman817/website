import type { Route } from "@/app/routes/+types/reviews";
import { Star, Phone, MapPin, Quote } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Patient Reviews - Capt. Arshad Clinic" },
    { name: "description", content: "Read what our patients say about Capt. Arshad Clinic. 5.0 star rating with verified patient reviews praising our professional and compassionate healthcare services." },
  ];
}

export default function Reviews() {
  const reviews = [
    {
      name: "Ahmed Khan",
      initials: "AK",
      rating: 5,
      date: "2 weeks ago",
      text: "Excellent service and very professional staff. Capt. Arshad is very knowledgeable and takes time to explain everything clearly. Highly recommended for anyone looking for a reliable walk-in clinic.",
      color: "teal"
    },
    {
      name: "Sara Fatima",
      initials: "SF",
      rating: 5,
      date: "1 month ago",
      text: "Very clean clinic and the staff is extremely courteous. Got my checkup done quickly without any hassle. The doctor was thorough and very caring. Will definitely come back if needed.",
      color: "blue"
    },
    {
      name: "Muhammad Raza",
      initials: "MR",
      rating: 5,
      date: "3 weeks ago",
      text: "The convenience of a walk-in clinic with the quality of a private hospital. Located right opposite Civil Hospital, easy to find. Quick service and the doctor really listens to your concerns.",
      color: "emerald"
    },
    {
      name: "Fatima Bibi",
      initials: "FB",
      rating: 5,
      date: "1 week ago",
      text: "I've been bringing my family here for years. Capt. Arshad always takes good care of us. The clinic is well-maintained and the staff is friendly. Best clinic in this area.",
      color: "purple"
    },
    {
      name: "Imran Ali",
      initials: "IA",
      rating: 5,
      date: "2 months ago",
      text: "Outstanding medical care! The doctor properly diagnoses the issue and provides effective treatment. Very reasonable fees compared to other clinics. Highly recommend!",
      color: "amber"
    },
    {
      name: "Ayesha Siddiqui",
      initials: "AS",
      rating: 5,
      date: "3 weeks ago",
      text: "Great experience every time I visit. The clinic is always clean and the process is efficient. They treat patients with respect and dignity. A trustworthy clinic!",
      color: "rose"
    },
    {
      name: "Hassan Mahmood",
      initials: "HM",
      rating: 5,
      date: "1 month ago",
      text: "Perfect walk-in clinic. No long waiting times, professional service, and genuine advice. Capt. Arshad genuinely cares about his patients' well-being. Five stars!",
      color: "teal"
    },
    {
      name: "Zainab Malik",
      initials: "ZM",
      rating: 5,
      date: "2 weeks ago",
      text: "Very impressed with the level of care here. The doctor is experienced and explains everything in simple terms. The clinic is conveniently located and easy to access.",
      color: "blue"
    },
    {
      name: "Bilal Ahmed",
      initials: "BA",
      rating: 5,
      date: "1 week ago",
      text: "Best decision to come here! The staff was helpful and the doctor was excellent. Got my health checkup done and received valuable guidance for maintaining good health.",
      color: "emerald"
    }
  ];

  const stats = [
    { number: "5.0", label: "Average Rating" },
    { number: "100%", label: "Would Recommend" },
    { number: "500+", label: "Happy Patients" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-wider mb-4">Patient Reviews</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              What Our Patients Say
            </h1>
            
            {/* Rating Display */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-6xl font-bold text-slate-800">5.0</span>
              <div className="flex flex-col items-start">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-slate-500 text-sm mt-1">out of 5</span>
              </div>
            </div>
            <p className="text-xl text-slate-600">
              Our patients trust us for our professional, friendly, and reliable healthcare services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-teal-600">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-teal-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className={`bg-gradient-to-br from-${review.color}-50 to-white p-8 rounded-3xl border border-${review.color}-100 hover:shadow-lg transition-all duration-300`}>
                <Quote className={`w-10 h-10 text-${review.color}-300 mb-4`} />
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed italic">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-${review.color}-200 rounded-full flex items-center justify-center`}>
                      <span className={`text-${review.color}-700 font-semibold`}>{review.initials}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{review.name}</p>
                      <p className="text-sm text-slate-500">{review.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Share Your Experience</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Have you visited Capt. Arshad Clinic? We'd love to hear about your experience. Your feedback helps us serve you better.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+923312102592" className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5">
              <Phone className="w-5 h-5" />
              Call to Share Feedback
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-teal-600 hover:text-teal-600 transition-colors">
              <MapPin className="w-5 h-5" />
              Visit Our Clinic
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
