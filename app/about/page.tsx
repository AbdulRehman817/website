import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Capt. Arshad Clinic',
  description: 'Learn about Capt. Arshad Clinic - your trusted healthcare partner in Karachi with experienced medical professionals.',
}

const About = () => {
  return (
    <>
      {/* About Hero */}
      <section className="py-16 lg:py-24 bg-[var(--light-background-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[var(--primary-color)]/10 text-[var(--primary-color)] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-[var(--dark-text-color)] mb-6">
            Your Trusted Healthcare Partner in Karachi
          </h1>
          <p className="text-lg lg:text-xl text-[var(--gray-text-color)] max-w-3xl mx-auto leading-relaxed">
            Capt. Arshad Clinic has been serving the community with compassionate, professional medical care. We believe every patient deserves personalized attention and quality healthcare.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[var(--dark-text-color)] mb-6">
                Committed to Your Health & Wellbeing
              </h2>
              <p className="text-[var(--gray-text-color)] mb-4 leading-relaxed">
                At Capt. Arshad Clinic, we understand that your health is your most valuable asset. That's why we've built our practice around providing accessible, reliable, and compassionate healthcare for families in Karachi.
              </p>
              <p className="text-[var(--gray-text-color)] mb-6 leading-relaxed">
                Our conveniently located clinic near Civil Hospital serves patients from all walks of life. Whether you need a routine check-up or have urgent health concerns, our experienced team is here to help.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-[var(--light-background-color)] p-6 rounded-xl">
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">Experienced</div>
                  <p className="text-[var(--gray-text-color)] text-sm">Medical professionals dedicated to quality care</p>
                </div>
                <div className="bg-[var(--light-background-color)] p-6 rounded-xl">
                  <div className="text-3xl font-bold text-[var(--accent-color)] mb-2">5.0 Rating</div>
                  <p className="text-[var(--gray-text-color)] text-sm">Trusted by hundreds of patients</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://assets.ls-assets.com/provider/istock/2208809544.jpg?w=1200"
                alt="Happy mature man communicating with a doctor"
                width={1200}
                height={800}
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-24 bg-[var(--dark-background-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary-color)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
              <p className="text-white/70">To provide accessible, affordable, and quality healthcare to every patient who walks through our doors.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--accent-color)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
              <p className="text-white/70">To be the most trusted walk-in clinic in Karachi, known for excellence in patient care.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--accent2-color)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Our Values</h3>
              <p className="text-white/70">Compassion, integrity, professionalism, and a patient-first approach in everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--light-background-color)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-heading text-[var(--dark-text-color)] mb-4">Ready to Visit Us?</h2>
          <p className="text-[var(--gray-text-color)] mb-8">Experience quality healthcare at Capt. Arshad Clinic today.</p>
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

export default About