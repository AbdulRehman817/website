import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Capt. Arshad Clinic',
  description: 'Comprehensive healthcare services at Capt. Arshad Clinic including general consultation, walk-in care, health checkups, and prescriptions.',
}

const services = [
  {
    title: 'General Consultation',
    description: 'Comprehensive health assessments and medical consultations for all ages. Get expert advice on your health concerns.',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
  },
  {
    title: 'Walk-In Care',
    description: 'No appointment needed! Simply walk in during our hours and receive prompt medical attention.',
    icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Health Checkups',
    description: 'Routine health screenings and preventive care to keep you healthy and informed about your wellbeing.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: 'Prescriptions',
    description: 'Expert prescription services and medication guidance for your quick recovery.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    title: 'Basic Lab Tests',
    description: 'Essential diagnostic tests to help identify health issues and monitor your condition.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    title: 'Medical Reports',
    description: 'Comprehensive medical reports and documentation for your official requirements.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
]

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-[var(--light-background-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[var(--primary-color)]/10 text-[var(--primary-color)] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-[var(--dark-text-color)] mb-6">
            Comprehensive Healthcare Services
          </h1>
          <p className="text-lg lg:text-xl text-[var(--gray-text-color)] max-w-2xl mx-auto">
            We offer a wide range of medical services to meet all your healthcare needs. No appointment necessary!
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[var(--light-background-color)] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[var(--primary-color)]"
              >
                <div className="w-16 h-16 bg-[var(--primary-color)]/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--dark-text-color)] mb-3">{service.title}</h3>
                <p className="text-[var(--gray-text-color)]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--light-background-color)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-heading text-[var(--dark-text-color)] mb-4">Need Medical Care?</h2>
          <p className="text-[var(--gray-text-color)] mb-8">Visit us today for professional healthcare services.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+923312102592" className="bg-[var(--primary-color)] hover:bg-[var(--primary-button-hover-bg-color)] text-white px-8 py-4 rounded-[var(--button-rounded-radius)] font-semibold transition-all duration-300">
              Call Now
            </a>
            <Link href="/contact" className="bg-white hover:bg-gray-50 text-[var(--dark-text-color)] border-2 border-[var(--primary-color)] px-8 py-4 rounded-[var(--button-rounded-radius)] font-semibold transition-all duration-300">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
