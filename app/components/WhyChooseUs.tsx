import Link from 'next/link'
import Image from 'next/image'

const WhyChooseUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-[var(--light-background-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://assets.ls-assets.com/provider/istock/2210107024.jpg?w=1200"
                alt="Doctor with patient"
                width={1200}
                height={800}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-8 bg-white p-6 rounded-xl shadow-xl border border-[var(--light-border-color)]">
              <div className="text-center">
                <p className="text-4xl font-bold text-[var(--primary-color)] mb-1">5.0</p>
                <div className="flex justify-center text-[var(--accent-color)] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[var(--gray-text-color)]">Patient Rating</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block bg-[var(--accent2-color)]/10 text-[var(--accent2-color)] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[var(--dark-text-color)] mb-6 leading-tight">
              Your Health Deserves Professional Care
            </h2>
            <p className="text-lg text-[var(--gray-text-color)] mb-8 leading-relaxed">
              At Capt. Arshad Clinic, we believe in providing healthcare that is accessible, reliable, and centered around you. Our experienced team is committed to delivering quality medical services with compassion and expertise.
            </p>

            {/* Features List */}
            <div className="space-y-5 mb-8">
              {[
                { title: 'Experienced Medical Professionals', desc: 'Our team brings years of expertise in providing quality healthcare services', color: 'accent' },
                { title: 'Convenient Location', desc: 'Located near Civil Hospital, easily accessible from all parts of Karachi', color: 'primary' },
                { title: 'No Appointment Needed', desc: 'Simply walk in during our hours and receive the care you need', color: 'teal' },
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    feature.color === 'accent' ? 'bg-[var(--accent-color)]' :
                    feature.color === 'primary' ? 'bg-[var(--primary-color)]' :
                    'bg-[var(--accent2-color)]'
                  }`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--dark-text-color)] mb-1">{feature.title}</h4>
                    <p className="text-[var(--gray-text-color)]">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[var(--primary-color)] hover:bg-[var(--primary-button-hover-bg-color)] text-white px-8 py-4 rounded-[var(--button-rounded-radius)] font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More About Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
