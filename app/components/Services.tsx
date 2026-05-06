import Link from 'next/link'

const services = [
  {
    title: 'General Consultation',
    description: 'Comprehensive health assessments and medical consultations for all your healthcare needs',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    color: 'primary',
  },
  {
    title: 'Walk-In Care',
    description: 'No appointment needed — visit us anytime and receive prompt medical attention',
    icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'accent',
  },
  {
    title: 'Health Checkups',
    description: 'Routine health screenings and preventive care to keep you healthy and informed',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    color: 'teal',
  },
  {
    title: 'Prescriptions',
    description: 'Expert prescription services and medication guidance for your recovery',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    color: 'blue',
  },
]

const Services = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[var(--primary-color)]/10 text-[var(--primary-color)] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[var(--dark-text-color)] mb-4">
            Quality Healthcare Services
          </h2>
          <p className="text-lg text-[var(--gray-text-color)] max-w-2xl mx-auto">
            We provide comprehensive medical care with a focus on patient comfort and quick recovery
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[var(--light-background-color)] hover:bg-white p-8 rounded-2xl transition-all duration-300 hover:shadow-xl border border-transparent hover:border-[var(--light-border-color)]"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                service.color === 'primary' ? 'bg-[var(--primary-color)]/10 group-hover:bg-[var(--primary-color)]' :
                service.color === 'accent' ? 'bg-[var(--accent-color)]/10 group-hover:bg-[var(--accent-color)]' :
                service.color === 'teal' ? 'bg-[var(--accent2-color)]/10 group-hover:bg-[var(--accent2-color)]' :
                'bg-[var(--accent3-color)]/10 group-hover:bg-[var(--accent3-color)]'
              }`}>
                <svg
                  className={`w-6 h-6 transition-colors ${
                    service.color === 'primary' ? 'text-[var(--primary-color)] group-hover:text-white' :
                    service.color === 'accent' ? 'text-[var(--accent-color)] group-hover:text-white' :
                    service.color === 'teal' ? 'text-[var(--accent2-color)] group-hover:text-white' :
                    'text-[var(--accent3-color)] group-hover:text-white'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-text-color)] mb-3">{service.title}</h3>
              <p className="text-[var(--gray-text-color)] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[var(--primary-color)] hover:text-[var(--primary-button-hover-bg-color)] font-semibold transition-colors"
          >
            View All Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services