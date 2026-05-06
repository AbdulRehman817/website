import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--light-background-color)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--primary-color)] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--accent2-color)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md mb-6">
              <div className="flex text-[var(--accent-color)]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-bold text-[var(--dark-text-color)]">5.0</span>
              <span className="text-[var(--gray-text-color)]">Rating</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-[var(--dark-text-color)] leading-tight mb-6">
              Trusted Walk-In Medical Care in{' '}
              <span className="text-[var(--primary-color)]">Karachi</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-[var(--gray-text-color)] mb-8 max-w-xl mx-auto lg:mx-0">
              Fast, reliable, and professional healthcare services when you need them most. No appointments needed — just walk in and receive quality care.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:+923312102592"
                className="inline-flex items-center justify-center gap-3 bg-[var(--primary-color)] hover:bg-[var(--primary-button-hover-bg-color)] text-white px-8 py-4 rounded-[var(--button-rounded-radius)] font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-[var(--light-background-color)] text-[var(--dark-text-color)] border-2 border-[var(--primary-color)] px-8 py-4 rounded-[var(--button-rounded-radius)] font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                Get Directions
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10 pt-8 border-t border-[var(--light-border-color)]">
              {[
                { icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', label: 'Experienced Staff', color: 'accent' },
                { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Walk-ins Welcome', color: 'teal' },
                { icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', label: 'Patient First', color: 'blue' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    item.color === 'accent' ? 'bg-[var(--accent-color)]/10' :
                    item.color === 'teal' ? 'bg-[var(--accent2-color)]/10' :
                    'bg-[var(--accent3-color)]/10'
                  }`}>
                    <svg className={`w-5 h-5 ${
                      item.color === 'accent' ? 'text-[var(--accent-color)]' :
                      item.color === 'teal' ? 'text-[var(--accent2-color)]' :
                      'text-[var(--accent3-color)]'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <span className="text-[var(--dark-text-color)] font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://assets.ls-assets.com/provider/istock/2237183726.jpg?w=1200"
                alt="Doctor consultation"
                width={1200}
                height={800}
                className="w-full h-[400px] lg:h-[500px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 lg:left-6 bg-white p-5 rounded-xl shadow-xl border border-[var(--light-border-color)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--accent-color)] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[var(--dark-text-color)]">Open Today</p>
                  <p className="text-sm text-[var(--gray-text-color)]">Walk-in available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

export default Hero